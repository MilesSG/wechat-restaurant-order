// 引入图片工具类
const ImageUtil = require('../../utils/image-util');

Page({
  data: {
    userInfo: null,
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    
    // 轮播图数据
    banners: [],
    
    // 特色菜品
    featuredDishes: [],
    
    // 用户评价
    recentReviews: [],
    
    // 餐厅信息
    restaurantInfo: {
      name: '品味餐厅',
      address: '北京市朝阳区建国路88号中央公园广场B1层',
      hours: '周一至周日 10:00-22:00',
      phone: '010-88889999'
    },
    
    // 功能入口
    features: [
      {
        icon: '🍽️',
        title: '菜品浏览',
        desc: '查看我们的特色菜品',
        url: '/pages/menu/menu'
      },
      {
        icon: '👤',
        title: '用户登录',
        desc: '微信一键授权登录',
        url: '/pages/login/login'
      },
      {
        icon: '🕒',
        title: '排队状态',
        desc: '查看当前排队情况',
        url: '/pages/queue-status/queue-status'
      },
      {
        icon: '⭐',
        title: '用户评价',
        desc: '查看或提交用户评价',
        url: '/pages/user-reviews/user-reviews'
      }
    ]
  },

  onLoad: function() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      });
    }

    // 获取全局用户信息
    const app = getApp();
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    }
    
    // 加载图片数据
    this.loadImageData();
  },
  
  onShow: function() {
    // 每次页面显示时可以进行数据刷新
    this.loadRecentReviews();
    this.loadFeaturedDishes();
  },
  
  // 加载图片数据
  loadImageData: function() {
    this.setData({
      banners: ImageUtil.getBanners().map(banner => {
        return {
          ...banner,
          image: ImageUtil.getValidImagePath(banner.image, 'banner')
        };
      }),
      featuredDishes: ImageUtil.getFeaturedDishes().map(dish => {
        return {
          ...dish,
          image: ImageUtil.getValidImagePath(dish.image, 'dish')
        };
      }),
      recentReviews: ImageUtil.getReviews().map(review => {
        return {
          ...review,
          avatar: ImageUtil.getValidImagePath(review.avatar, 'avatar')
        };
      })
    });
  },
  
  // 加载最新评价
  loadRecentReviews: function() {
    // 实际开发中应该从服务器获取数据
    // 这里使用本地数据
    console.log('加载最新评价');
  },
  
  // 加载特色菜品
  loadFeaturedDishes: function() {
    // 实际开发中应该从服务器获取数据
    // 这里使用本地数据
    console.log('加载特色菜品');
  },

  // 跳转到对应页面
  navigateTo: function(e) {
    const url = e.currentTarget.dataset.url;
    wx.navigateTo({
      url: url
    });
  },
  
  // 跳转到菜品详情
  navigateToDish: function(e) {
    const dishId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/menu/dish-detail?id=${dishId}`
    });
  },

  // 扫码点餐
  scanQRCode: function() {
    wx.scanCode({
      onlyFromCamera: true,
      success: (res) => {
        // 处理扫码结果，通常会返回一个包含桌号的链接或文本
        // 假设返回的是类似 "table:10" 的格式
        const result = res.result;
        
        if (result.includes('table:')) {
          const tableNumber = result.split(':')[1];
          wx.navigateTo({
            url: `/pages/order/order?tableId=${tableNumber}`
          });
        } else {
          wx.showToast({
            title: '无效的二维码',
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '扫码失败',
          icon: 'none'
        });
      }
    });
  },
  
  // 拨打电话
  makePhoneCall: function() {
    wx.makePhoneCall({
      phoneNumber: this.data.restaurantInfo.phone,
      fail: () => {
        wx.showToast({
          title: '拨号取消',
          icon: 'none'
        });
      }
    });
  },
  
  // 查看地图
  openLocation: function() {
    // 实际开发中应该使用真实的经纬度
    wx.openLocation({
      latitude: 39.908823,
      longitude: 116.397470,
      name: this.data.restaurantInfo.name,
      address: this.data.restaurantInfo.address,
      scale: 18
    });
  },

  // 跳转到菜单页
  navigateToMenu: function () {
    wx.switchTab({
      url: '/pages/menu/menu'
    });
  },

  // 跳转到预约排队页
  navigateToQueue: function () {
    wx.switchTab({
      url: '/pages/queue-status/queue-status'
    });
  },

  // 点击菜品
  onDishTap: function (e) {
    const dishId = e.currentTarget.dataset.id;
    // 跳转到菜品详情页或者直接添加到购物车
    wx.switchTab({
      url: '/pages/menu/menu'
    });
  }
}) 