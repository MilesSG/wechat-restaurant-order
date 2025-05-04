// 菜单数据
const categories = [
  { id: 'hot-dishes', name: '热菜' },
  { id: 'cold-dishes', name: '凉菜' },
  { id: 'soup', name: '汤品' },
  { id: 'staple-food', name: '主食' },
  { id: 'dessert', name: '甜点' },
  { id: 'drinks', name: '饮品' }
];

const dishes = [
  {
    id: 1,
    name: '宫保鸡丁',
    price: 38,
    image: '/images/menu/gongbao_chicken.jpg',
    description: '选用新鲜鸡肉，配以花生、辣椒等炒制而成，麻辣鲜香。',
    category: 'hot-dishes',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 2,
    name: '水煮鱼片',
    price: 58,
    image: '/images/menu/boiled_fish.jpg',
    description: '鲜嫩的鱼片配以麻辣汤底，口感细腻，麻辣爽口。',
    category: 'hot-dishes',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 3,
    name: '麻婆豆腐',
    price: 32,
    image: '/images/menu/mapo_tofu.jpg',
    description: '传统川菜，豆腐嫩滑，配以肉末，麻辣可口。',
    category: 'hot-dishes',
    isPopular: false,
    isSpicy: true
  },
  {
    id: 4,
    name: '糖醋排骨',
    price: 48,
    image: '/images/menu/sweet_sour_ribs.jpg',
    description: '选用优质猪排，糖醋口味，外酥里嫩，色泽金红。',
    category: 'hot-dishes',
    isPopular: true,
    isSpicy: false
  },
  {
    id: 5,
    name: '皮蛋豆腐',
    price: 22,
    image: '/images/menu/century_egg_tofu.jpg',
    description: '鲜嫩豆腐配以皮蛋，清爽可口，开胃下饭。',
    category: 'cold-dishes',
    isPopular: false,
    isSpicy: false
  },
  {
    id: 6,
    name: '凉拌黄瓜',
    price: 18,
    image: '/images/menu/cucumber_salad.jpg',
    description: '新鲜黄瓜配以特制调味料，清脆爽口，开胃消暑。',
    category: 'cold-dishes',
    isPopular: false,
    isSpicy: false
  },
  {
    id: 7,
    name: '酸辣肚丝',
    price: 36,
    image: '/images/menu/spicy_tripe.jpg',
    description: '精选牛百叶，配以酸辣调料，爽脆可口。',
    category: 'cold-dishes',
    isPopular: false,
    isSpicy: true
  },
  {
    id: 8,
    name: '番茄蛋花汤',
    price: 20,
    image: '/images/menu/tomato_egg_soup.jpg',
    description: '新鲜番茄熬煮的浓汤，配以鲜嫩蛋花，酸甜开胃。',
    category: 'soup',
    isPopular: false,
    isSpicy: false
  },
  {
    id: 9,
    name: '紫菜蛋花汤',
    price: 22,
    image: '/images/menu/seaweed_egg_soup.jpg',
    description: '精选紫菜配以鲜嫩蛋花，清爽不油腻。',
    category: 'soup',
    isPopular: false,
    isSpicy: false
  },
  {
    id: 10,
    name: '酸菜鱼汤',
    price: 48,
    image: '/images/menu/sour_fish_soup.jpg',
    description: '酸菜与鱼肉的完美结合，酸香开胃，鲜而不腻。',
    category: 'soup',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 11,
    name: '蛋炒饭',
    price: 18,
    image: '/images/menu/egg_fried_rice.jpg',
    description: '香喷喷的炒饭，配以新鲜蔬菜和优质鸡蛋。',
    category: 'staple-food',
    isPopular: true,
    isSpicy: false
  },
  {
    id: 12,
    name: '阳春面',
    price: 16,
    image: '/images/menu/noodles.jpg',
    description: '简单而美味的面条，配以特制卤汤，清淡爽口。',
    category: 'staple-food',
    isPopular: false,
    isSpicy: false
  },
  {
    id: 13,
    name: '担担面',
    price: 24,
    image: '/images/menu/dan_dan_noodles.jpg',
    description: '四川特色面食，麻辣鲜香，回味无穷。',
    category: 'staple-food',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 14,
    name: '红糖糍粑',
    price: 28,
    image: '/images/menu/rice_cake.jpg',
    description: '传统糯米甜点，配以红糖浆，软糯香甜。',
    category: 'dessert',
    isPopular: false,
    isSpicy: false
  },
  {
    id: 15,
    name: '芒果布丁',
    price: 22,
    image: '/images/menu/mango_pudding.jpg',
    description: '新鲜芒果制作的布丁，香甜细滑，口感丰富。',
    category: 'dessert',
    isPopular: true,
    isSpicy: false
  },
  {
    id: 16,
    name: '西瓜汁',
    price: 15,
    image: '/images/menu/watermelon_juice.jpg',
    description: '新鲜西瓜现榨，清凉解渴，夏日必备。',
    category: 'drinks',
    isPopular: false,
    isSpicy: false
  },
  {
    id: 17,
    name: '柠檬茶',
    price: 18,
    image: '/images/menu/lemon_tea.jpg',
    description: '精选柠檬与红茶的完美结合，酸甜可口。',
    category: 'drinks',
    isPopular: true,
    isSpicy: false
  },
  {
    id: 18,
    name: '奶茶',
    price: 20,
    image: '/images/menu/milk_tea.jpg',
    description: '香浓奶茶，口感丝滑，甜度适中。',
    category: 'drinks',
    isPopular: true,
    isSpicy: false
  }
];

module.exports = {
  categories,
  dishes
}; 