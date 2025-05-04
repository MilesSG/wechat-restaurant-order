// pages/menu/menu.js
const menuData = require('../../utils/menuData.js');
const imageUtil = require('../../utils/image-util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedCategory: 'all',
    searchTerm: '',
    categories: menuData.categories,
    dishes: [],
    filteredDishes: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 处理菜品图片
    const dishes = menuData.dishes.map(dish => {
      return {
        ...dish,
        image: imageUtil.getMenuImagePath(dish.image)
      };
    });
    
    this.setData({
      dishes: dishes
    });
    
    this.filterDishes();
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

  // 选择分类
  selectCategory: function(e) {
    const categoryId = e.currentTarget.dataset.id;
    this.setData({
      selectedCategory: categoryId
    });
    this.filterDishes();
  },

  // 搜索菜品
  searchDishes: function(e) {
    this.setData({
      searchTerm: e.detail.value
    });
    this.filterDishes();
  },

  // 清除搜索
  clearSearch: function() {
    this.setData({
      searchTerm: ''
    });
    this.filterDishes();
  },

  // 过滤菜品
  filterDishes: function() {
    let filtered = this.data.dishes;
    
    // 应用类别筛选
    if (this.data.selectedCategory !== 'all') {
      filtered = filtered.filter(dish => dish.category === this.data.selectedCategory);
    }
    
    // 应用搜索筛选
    if (this.data.searchTerm.trim() !== '') {
      const term = this.data.searchTerm.toLowerCase().trim();
      filtered = filtered.filter(dish => 
        dish.name.toLowerCase().includes(term) || 
        dish.description.toLowerCase().includes(term)
      );
    }
    
    this.setData({
      filteredDishes: filtered
    });
  },

  // 添加到购物车
  addToCart: function(e) {
    const dishId = e.currentTarget.dataset.id;
    const dish = this.data.dishes.find(d => d.id === dishId);
    
    if (!dish) return;
    
    const app = getApp();
    let cart = app.globalData.cart || [];
    
    // 查找购物车中是否已有该菜品
    const existingIndex = cart.findIndex(item => item.id === dishId);
    
    if (existingIndex !== -1) {
      // 已存在，增加数量
      cart[existingIndex].quantity += 1;
    } else {
      // 不存在，添加新的
      cart.push({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        quantity: 1,
        note: ''
      });
    }
    
    // 更新全局购物车
    app.updateCart(cart);
    
    wx.showToast({
      title: '已添加到购物车',
      icon: 'success'
    });
  },

  // 跳转到订单页
  navigateToOrder: function() {
    const app = getApp();
    if (app.globalData.cart && app.globalData.cart.length > 0) {
      wx.navigateTo({
        url: '/pages/order/order'
      });
    } else {
      wx.showToast({
        title: '购物车为空',
        icon: 'none'
      });
    }
  }
})