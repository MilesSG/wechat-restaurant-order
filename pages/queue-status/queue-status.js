// pages/queue-status/queue-status.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hasQueueNumber: false,
    queueNumber: '',
    waitingCount: 0,
    estimatedWaitTime: 0,
    queueMessage: '请耐心等候，即将为您安排座位',
    
    totalWaiting: 0,
    averageWaitTime: 0,
    
    smallTableCount: 0,
    mediumTableCount: 0,
    largeTableCount: 0,
    
    currentTab: 'small',
    
    callingNumbers: [],
    
    showModal: false,
    peopleCount: 2,
    phoneNumber: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadQueueInfo();
    this.checkUserQueueStatus();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.loadQueueInfo();
    this.checkUserQueueStatus();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.loadQueueInfo();
    this.checkUserQueueStatus();
    wx.stopPullDownRefresh();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 加载排队信息
  loadQueueInfo() {
    // 模拟获取排队数据
    const queueData = {
      totalWaiting: 15,
      averageWaitTime: 25,
      smallTableCount: 6,
      mediumTableCount: 8,
      largeTableCount: 1,
      callingNumbers: ['A12', 'A13', 'A14']
    };
    
    this.setData({
      totalWaiting: queueData.totalWaiting,
      averageWaitTime: queueData.averageWaitTime,
      smallTableCount: queueData.smallTableCount,
      mediumTableCount: queueData.mediumTableCount,
      largeTableCount: queueData.largeTableCount,
      callingNumbers: queueData.callingNumbers
    });
  },

  // 检查用户排队状态
  checkUserQueueStatus() {
    const queueInfo = wx.getStorageSync('queueInfo');
    if (queueInfo) {
      this.setData({
        hasQueueNumber: true,
        queueNumber: queueInfo.number,
        waitingCount: queueInfo.waitingCount,
        estimatedWaitTime: queueInfo.estimatedTime,
        queueMessage: queueInfo.message || '请耐心等候，即将为您安排座位'
      });
    } else {
      this.setData({
        hasQueueNumber: false
      });
    }
  },

  // 切换桌型标签
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      currentTab: tab
    });
  },

  // 取号排队
  takeQueueNumber() {
    this.setData({
      showModal: true,
      peopleCount: 2,
      phoneNumber: ''
    });
  },

  // 关闭弹窗
  closeModal() {
    this.setData({
      showModal: false
    });
  },

  // 选择人数
  selectPeopleCount(e) {
    const count = parseInt(e.currentTarget.dataset.count);
    this.setData({
      peopleCount: count
    });
  },

  // 输入手机号
  inputPhoneNumber(e) {
    this.setData({
      phoneNumber: e.detail.value
    });
  },

  // 确认取号
  confirmTakeNumber() {
    const { peopleCount, phoneNumber } = this.data;
    
    if (!phoneNumber || phoneNumber.length !== 11) {
      wx.showToast({
        title: '请输入有效的手机号',
        icon: 'none'
      });
      return;
    }
    
    // 根据人数确定桌型
    let tableType = 'small';
    if (peopleCount > 4) {
      tableType = 'large';
    } else if (peopleCount > 2) {
      tableType = 'medium';
    }
    
    // 模拟生成排队号码
    const prefix = { small: 'A', medium: 'B', large: 'C' }[tableType];
    const number = prefix + Math.floor(Math.random() * 90 + 10);
    
    // 计算前面等待人数和预计时间
    let waitingCount;
    switch (tableType) {
      case 'small':
        waitingCount = this.data.smallTableCount;
        break;
      case 'medium':
        waitingCount = this.data.mediumTableCount;
        break;
      case 'large':
        waitingCount = this.data.largeTableCount;
        break;
    }
    
    const estimatedTime = waitingCount * 10; // 简单估算每桌10分钟
    
    // 保存取号信息
    const queueInfo = {
      number,
      peopleCount,
      phoneNumber,
      tableType,
      waitingCount,
      estimatedTime,
      timestamp: Date.now(),
      message: '请留意短信通知，前面5桌时会提醒您'
    };
    
    wx.setStorageSync('queueInfo', queueInfo);
    
    this.setData({
      hasQueueNumber: true,
      queueNumber: number,
      waitingCount,
      estimatedWaitTime: estimatedTime,
      queueMessage: queueInfo.message,
      showModal: false
    });
    
    wx.showToast({
      title: '取号成功',
      icon: 'success'
    });
  },
  
  // 取消排队
  cancelQueue() {
    wx.showModal({
      title: '取消排队',
      content: '确定要取消当前排队吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('queueInfo');
          this.setData({
            hasQueueNumber: false
          });
          
          wx.showToast({
            title: '已取消排队',
            icon: 'success'
          });
        }
      }
    });
  }
})