// app.js
App({
  globalData: {
    userInfo: null,
    orders: [],
    cart: []
  },
  
  onLaunch: function() {
    // 获取本地存储的用户信息
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo) {
      this.globalData.userInfo = userInfo;
    }

    // 获取本地存储的订单数据
    const orders = wx.getStorageSync('orders');
    if (orders) {
      this.globalData.orders = JSON.parse(orders);
    }

    // 获取本地存储的购物车数据
    const cart = wx.getStorageSync('cart');
    if (cart) {
      this.globalData.cart = JSON.parse(cart);
    }
  },

  // 保存用户信息
  saveUserInfo: function(userInfo) {
    this.globalData.userInfo = userInfo;
    wx.setStorageSync('userInfo', userInfo);
  },

  // 保存订单
  saveOrder: function(order) {
    this.globalData.orders.push(order);
    wx.setStorageSync('orders', JSON.stringify(this.globalData.orders));
  },

  // 更新购物车
  updateCart: function(cart) {
    this.globalData.cart = cart;
    wx.setStorageSync('cart', JSON.stringify(cart));
  },

  // 清空购物车
  clearCart: function() {
    this.globalData.cart = [];
    wx.removeStorageSync('cart');
  }
}) 