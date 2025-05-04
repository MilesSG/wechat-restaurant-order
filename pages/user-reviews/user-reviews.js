// pages/user-reviews/user-reviews.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 总体评分数据
    overallRating: 4.5,
    ratings: {
      taste: 4.6,
      service: 4.4,
      environment: 4.5
    },
    
    // 标签计数
    total: 0,
    tagCounts: {
      praise: 0,
      taste: 0,
      service: 0,
      environment: 0,
      critical: 0
    },
    
    // 评价列表
    activeTag: 'all',
    reviews: [],
    filteredReviews: [],
    
    // 评价表单
    showModal: false,
    userRating: 5,
    userRatings: {
      taste: 5,
      service: 5,
      environment: 5
    },
    reviewContent: '',
    reviewImages: [],
    selectedTags: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.loadReviews();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.loadReviews();
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
  onPullDownRefresh: function() {
    this.loadReviews();
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

  // 加载评价数据
  loadReviews: function() {
    // 模拟获取评价数据
    const reviewsData = [
      {
        id: 1,
        username: '用户123456',
        avatar: 'https://picsum.photos/id/1005/100/100',
        rating: 5,
        content: '非常满意的用餐体验，菜品味道鲜美，服务态度热情，环境也很舒适。下次还会再来！',
        images: ['https://picsum.photos/id/1080/400/300', 'https://picsum.photos/id/292/400/300'],
        tags: ['菜品好吃', '服务周到', '环境舒适'],
        date: '2023-05-01',
        reply: '感谢您的评价，期待您的再次光临！'
      },
      {
        id: 2,
        username: '美食家',
        avatar: 'https://picsum.photos/id/1012/100/100',
        rating: 4,
        content: '菜品味道不错，但是等待时间有点长，希望能够改进。',
        images: [],
        tags: ['菜品好吃', '有待改进'],
        date: '2023-04-28',
        reply: ''
      },
      {
        id: 3,
        username: '点评达人',
        avatar: 'https://picsum.photos/id/1025/100/100',
        rating: 5,
        content: '这家店的糖醋排骨特别好吃，酸甜可口，肉质鲜嫩。服务员也很贴心，会推荐店内的特色菜品。',
        images: ['https://picsum.photos/id/488/400/300'],
        tags: ['菜品好吃', '服务周到'],
        date: '2023-04-25',
        reply: '谢谢您对我们糖醋排骨的喜爱，我们将继续保持品质！'
      },
      {
        id: 4,
        username: '路人甲',
        avatar: '',
        rating: 3,
        content: '一般般吧，价格有点贵，性价比不是很高。',
        images: [],
        tags: ['有待改进'],
        date: '2023-04-20',
        reply: '感谢您的反馈，我们会考虑优化菜品价格。'
      },
      {
        id: 5,
        username: '吃货小王',
        avatar: 'https://picsum.photos/id/1074/100/100',
        rating: 5,
        content: '环境很好，适合聚餐和约会。宫保鸡丁是招牌菜，味道确实名不虚传！',
        images: ['https://picsum.photos/id/292/400/300'],
        tags: ['菜品好吃', '环境舒适'],
        date: '2023-04-15',
        reply: ''
      }
    ];

    // 计算标签计数
    const tagCounts = {
      praise: 0,
      taste: 0,
      service: 0,
      environment: 0,
      critical: 0
    };

    reviewsData.forEach(review => {
      if (review.rating >= 4) {
        tagCounts.praise++;
      }

      review.tags.forEach(tag => {
        if (tag === '菜品好吃') tagCounts.taste++;
        if (tag === '服务周到') tagCounts.service++;
        if (tag === '环境舒适') tagCounts.environment++;
        if (tag === '有待改进') tagCounts.critical++;
      });
    });

    this.setData({
      reviews: reviewsData,
      filteredReviews: reviewsData,
      total: reviewsData.length,
      tagCounts: tagCounts
    });
  },

  // 筛选评价
  filterByTag: function(e) {
    const tag = e.currentTarget.dataset.tag;
    let filtered = [];

    if (tag === 'all') {
      filtered = this.data.reviews;
    } else if (tag === 'praise') {
      filtered = this.data.reviews.filter(review => review.rating >= 4);
    } else if (tag === 'taste') {
      filtered = this.data.reviews.filter(review => review.tags.includes('菜品好吃'));
    } else if (tag === 'service') {
      filtered = this.data.reviews.filter(review => review.tags.includes('服务周到'));
    } else if (tag === 'environment') {
      filtered = this.data.reviews.filter(review => review.tags.includes('环境舒适'));
    } else if (tag === 'critical') {
      filtered = this.data.reviews.filter(review => review.tags.includes('有待改进'));
    }

    this.setData({
      activeTag: tag,
      filteredReviews: filtered
    });
  },

  // 预览图片
  previewImage: function(e) {
    const url = e.currentTarget.dataset.url;
    const review = this.data.reviews.find(r => r.images.includes(url));
    if (review) {
      wx.previewImage({
        current: url,
        urls: review.images
      });
    }
  },

  // 预览评分（只是展示效果，不实际修改总体评分）
  previewScore: function(e) {
    const score = e.currentTarget.dataset.score;
    this.setData({
      previewRating: score
    });
    setTimeout(() => {
      this.setData({
        previewRating: null
      });
    }, 500);
  },

  // 显示评价表单
  showReviewForm: function() {
    // 检查用户是否登录
    const app = getApp();
    if (!app.globalData.userInfo) {
      wx.showModal({
        title: '提示',
        content: '请先登录后再发表评价',
        success: (res) => {
          if (res.confirm) {
            wx.navigateTo({
              url: '/pages/login/login'
            });
          }
        }
      });
      return;
    }

    this.setData({
      showModal: true,
      userRating: 5,
      userRatings: {
        taste: 5,
        service: 5,
        environment: 5
      },
      reviewContent: '',
      reviewImages: [],
      selectedTags: []
    });
  },

  // 关闭弹窗
  closeModal: function() {
    this.setData({
      showModal: false
    });
  },

  // 设置总体评分
  setRating: function(e) {
    const score = parseInt(e.currentTarget.dataset.score);
    this.setData({
      userRating: score
    });
  },

  // 设置各方面评分
  setAspectRating: function(e) {
    const type = e.currentTarget.dataset.type;
    const score = parseInt(e.currentTarget.dataset.score);
    const userRatings = { ...this.data.userRatings };
    userRatings[type] = score;
    
    this.setData({
      userRatings
    });
  },

  // 输入评价内容
  inputContent: function(e) {
    this.setData({
      reviewContent: e.detail.value
    });
  },

  // 选择图片
  chooseImage: function() {
    const { reviewImages } = this.data;
    const remainCount = 3 - reviewImages.length;
    
    if (remainCount <= 0) return;
    
    wx.chooseImage({
      count: remainCount,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          reviewImages: [...reviewImages, ...res.tempFilePaths]
        });
      }
    });
  },

  // 移除图片
  removeImage: function(e) {
    const index = e.currentTarget.dataset.index;
    const reviewImages = [...this.data.reviewImages];
    reviewImages.splice(index, 1);
    
    this.setData({
      reviewImages
    });
  },

  // 切换标签
  toggleTag: function(e) {
    const tag = e.currentTarget.dataset.tag;
    let selectedTags = [...this.data.selectedTags];
    
    const index = selectedTags.indexOf(tag);
    if (index !== -1) {
      selectedTags.splice(index, 1);
    } else {
      selectedTags.push(tag);
    }
    
    this.setData({
      selectedTags
    });
  },

  // 提交评价
  submitReview: function() {
    const { userRating, userRatings, reviewContent, reviewImages, selectedTags } = this.data;
    
    if (userRating <= 0) {
      wx.showToast({
        title: '请选择评分',
        icon: 'none'
      });
      return;
    }
    
    if (!reviewContent.trim()) {
      wx.showToast({
        title: '请输入评价内容',
        icon: 'none'
      });
      return;
    }
    
    // 将标签数据转换为显示格式
    const tagMap = {
      'taste': '菜品好吃',
      'service': '服务周到',
      'environment': '环境舒适',
      'price': '性价比高',
      'critical': '有待改进'
    };
    
    const tags = selectedTags.map(t => tagMap[t]);
    
    // 模拟提交评价
    const app = getApp();
    const userInfo = app.globalData.userInfo || { nickName: '用户' + Math.floor(Math.random() * 1000) };
    
    const newReview = {
      id: Date.now(),
      username: userInfo.nickName,
      avatar: userInfo.avatarUrl || '',
      rating: userRating,
      content: reviewContent,
      images: reviewImages,
      tags: tags,
      date: new Date().toISOString().split('T')[0],
      reply: ''
    };
    
    // 将新评价添加到列表
    const reviews = [newReview, ...this.data.reviews];
    
    // 更新标签计数
    const tagCounts = { ...this.data.tagCounts };
    if (userRating >= 4) {
      tagCounts.praise++;
    }
    
    tags.forEach(tag => {
      if (tag === '菜品好吃') tagCounts.taste++;
      if (tag === '服务周到') tagCounts.service++;
      if (tag === '环境舒适') tagCounts.environment++;
      if (tag === '有待改进') tagCounts.critical++;
    });
    
    // 根据当前筛选条件更新列表
    let filteredReviews = reviews;
    if (this.data.activeTag !== 'all') {
      this.filterByTag({ currentTarget: { dataset: { tag: this.data.activeTag } } });
    } else {
      this.setData({
        filteredReviews: reviews
      });
    }
    
    this.setData({
      reviews,
      total: reviews.length,
      tagCounts,
      showModal: false
    });
    
    wx.showToast({
      title: '评价提交成功',
      icon: 'success'
    });
  }
})