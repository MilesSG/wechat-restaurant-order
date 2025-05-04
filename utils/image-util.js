/**
 * 餐厅点餐小程序图片资源工具类
 */

// 图片资源配置，可以从image_config.js导入，这里为了简化直接写入
const ImageConfig = {
  banners: [
    '/images/banners/banner1.jpg',
    '/images/banners/banner2.jpg',
    '/images/banners/banner3.jpg',
  ],
  dishes: [
    '/images/dishes/dish1.jpg',
    '/images/dishes/dish2.jpg',
    '/images/dishes/dish3.jpg',
    '/images/dishes/dish4.jpg',
    '/images/dishes/dish5.jpg',
  ],
  avatars: [
    '/images/avatars/avatar1.jpg',
    '/images/avatars/avatar2.jpg',
    '/images/avatars/avatar3.jpg',
    '/images/avatars/avatar4.jpg',
  ],
  defaults: {
    banner: '/images/banners/banner1.jpg',
    dish: '/images/dishes/dish1.jpg',
    avatar: '/images/default_avatar.png'
  }
};

/**
 * 获取首页轮播图片
 * @returns {Array} 轮播图数据
 */
function getBanners() {
  return [
    {
      id: 1,
      image: ImageConfig.banners[0],
      title: '春季新菜上市',
      desc: '限时八折优惠，快来品尝'
    },
    {
      id: 2,
      image: ImageConfig.banners[1],
      title: '周末双人套餐',
      desc: '精选美食，浪漫共享'
    },
    {
      id: 3,
      image: ImageConfig.banners[2], 
      title: '尊享VIP会员',
      desc: '会员专享折扣与优先服务'
    }
  ];
}

/**
 * 获取特色菜品
 * @returns {Array} 特色菜品数据
 */
function getFeaturedDishes() {
  return [
    {
      id: 101,
      name: '红烧排骨',
      price: 68,
      image: ImageConfig.dishes[0],
      tag: '热销'
    },
    {
      id: 102,
      name: '水煮鱼片',
      price: 88,
      image: ImageConfig.dishes[1],
      tag: '招牌'
    },
    {
      id: 103,
      name: '干锅牛蛙',
      price: 98,
      image: ImageConfig.dishes[2]
    },
    {
      id: 104,
      name: '宫保鸡丁',
      price: 58,
      image: ImageConfig.dishes[3],
      tag: '特价'
    },
    {
      id: 105,
      name: '麻婆豆腐',
      price: 38,
      image: ImageConfig.dishes[4]
    }
  ];
}

/**
 * 获取用户评价数据
 * @returns {Array} 用户评价数据
 */
function getReviews() {
  return [
    {
      id: 1,
      username: '美食爱好者',
      avatar: ImageConfig.avatars[0],
      rating: 5,
      content: '菜品很新鲜，服务也很周到，下次还会再来！'
    },
    {
      id: 2,
      username: '吃货小王',
      avatar: ImageConfig.avatars[1],
      rating: 4,
      content: '红烧排骨味道非常好，肉质鲜嫩，不过价格稍微有点贵'
    },
    {
      id: 3,
      username: '老顾客',
      avatar: ImageConfig.defaults.avatar,
      rating: 5,
      content: '这家店是我的最爱，每次来都点水煮鱼，辣度可以根据自己喜好调整'
    },
    {
      id: 4,
      username: '品鉴达人',
      avatar: ImageConfig.avatars[3],
      rating: 5,
      content: '环境很好，适合商务宴请，服务员态度也很好'
    }
  ];
}

/**
 * 处理图片路径，如果传入的路径无效，返回默认图片
 * @param {string} imagePath 图片路径
 * @param {string} type 图片类型：banner、dish、avatar
 * @returns {string} 有效的图片路径
 */
function getValidImagePath(imagePath, type = 'dish') {
  if (!imagePath || imagePath.includes('imgur.com') || imagePath.startsWith('http')) {
    return ImageConfig.defaults[type] || ImageConfig.defaults.dish;
  }
  
  // 特别处理特色菜品图片
  if (type === 'dish' && imagePath.includes('/dishes/')) {
    const fileName = imagePath.split('/').pop();
    // 检查文件名是否为dish1.jpg到dish5.jpg格式
    if (/^dish[1-5]\.jpg$/.test(fileName)) {
      // 针对dish1.jpg特别处理（红烧排骨）
      if (fileName === 'dish1.jpg') {
        // 直接使用热菜默认图片
        return '/images/dishes/default_hot_dish.jpg';
      }
      
      // 其他特色菜品的映射
      const dishTypeMapping = {
        '2': 'hot-dishes', // 水煮鱼片 -> 热菜
        '3': 'hot-dishes', // 干锅牛蛙 -> 热菜
        '4': 'hot-dishes', // 宫保鸡丁 -> 热菜
        '5': 'hot-dishes'  // 麻婆豆腐 -> 热菜
      };
      
      const dishNumber = fileName.match(/\d+/)[0];
      const dishType = dishTypeMapping[dishNumber] || 'default';
      
      // 默认图片映射
      const defaultDishImages = {
        'hot-dishes': '/images/dishes/default_hot_dish.jpg',
        'cold-dishes': '/images/dishes/default_cold_dish.jpg',
        'soup': '/images/dishes/default_soup.jpg',
        'staple-food': '/images/dishes/default_staple.jpg',
        'dessert': '/images/dishes/default_dessert.jpg',
        'drinks': '/images/dishes/default_drink.jpg',
        'default': '/images/dishes/default_dish.jpg'
      };
      
      try {
        // 由于下载脚本面临网络问题，我们直接使用默认图片
        return defaultDishImages[dishType] || defaultDishImages.default;
      } catch (error) {
        // 如果发生错误，返回对应类型的默认图片
        return defaultDishImages[dishType] || defaultDishImages.default;
      }
    }
  }
  
  return imagePath;
}

/**
 * 检查菜单图片是否存在，如不存在则提供默认图片
 * @param {string} imagePath - 菜单图片路径
 * @returns {string} 处理后的图片路径
 */
function getMenuImagePath(imagePath) {
  // 获取图片文件名
  const fileName = imagePath.split('/').pop();
  const category = getImageCategory(fileName);
  
  // 默认图片映射
  const defaultImages = {
    'hot-dishes': '/images/dishes/default_hot_dish.jpg',
    'cold-dishes': '/images/dishes/default_cold_dish.jpg',
    'soup': '/images/dishes/default_soup.jpg',
    'staple-food': '/images/dishes/default_staple.jpg',
    'dessert': '/images/dishes/default_dessert.jpg',
    'drinks': '/images/dishes/default_drink.jpg',
    'default': '/images/dishes/default_dish.jpg'
  };
  
  try {
    // 在小程序环境中，我们无法直接检查文件是否存在
    // 所以我们使用一个备用方案 - 预加载图片列表
    const availableImages = getAvailableMenuImages();
    if (availableImages.includes(fileName)) {
      return imagePath;
    }
    return defaultImages[category] || defaultImages.default;
  } catch (error) {
    return defaultImages[category] || defaultImages.default;
  }
}

/**
 * 根据图片文件名推断菜品类别
 * @param {string} fileName - 图片文件名
 * @returns {string} 菜品类别
 */
function getImageCategory(fileName) {
  const categoryMapping = {
    'gongbao_chicken.jpg': 'hot-dishes',
    'boiled_fish.jpg': 'hot-dishes',
    'mapo_tofu.jpg': 'hot-dishes',
    'sweet_sour_ribs.jpg': 'hot-dishes',
    'century_egg_tofu.jpg': 'cold-dishes',
    'cucumber_salad.jpg': 'cold-dishes',
    'spicy_tripe.jpg': 'cold-dishes',
    'tomato_egg_soup.jpg': 'soup',
    'seaweed_egg_soup.jpg': 'soup',
    'sour_fish_soup.jpg': 'soup',
    'egg_fried_rice.jpg': 'staple-food',
    'noodles.jpg': 'staple-food',
    'dan_dan_noodles.jpg': 'staple-food',
    'rice_cake.jpg': 'dessert',
    'mango_pudding.jpg': 'dessert',
    'watermelon_juice.jpg': 'drinks',
    'lemon_tea.jpg': 'drinks',
    'milk_tea.jpg': 'drinks'
  };
  
  return categoryMapping[fileName] || 'default';
}

/**
 * 获取可用的菜单图片列表
 * @returns {Array<string>} 图片文件名列表
 */
function getAvailableMenuImages() {
  // 在实际应用中，这个函数可以被实现为从服务器获取可用图片列表
  // 或者在小程序启动时进行一次性检查
  // 这里我们简单地返回所有期望的图片
  return [
    'gongbao_chicken.jpg',
    'boiled_fish.jpg',
    'mapo_tofu.jpg',
    'sweet_sour_ribs.jpg',
    'century_egg_tofu.jpg',
    'cucumber_salad.jpg',
    'spicy_tripe.jpg',
    'tomato_egg_soup.jpg',
    'seaweed_egg_soup.jpg',
    'sour_fish_soup.jpg',
    'egg_fried_rice.jpg',
    'noodles.jpg',
    'dan_dan_noodles.jpg',
    'rice_cake.jpg',
    'mango_pudding.jpg',
    'watermelon_juice.jpg',
    'lemon_tea.jpg',
    'milk_tea.jpg'
  ];
}

module.exports = {
  getBanners,
  getFeaturedDishes,
  getReviews,
  getValidImagePath,
  getMenuImagePath,
  getImageCategory,
  getAvailableMenuImages
}; 