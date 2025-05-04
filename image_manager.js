/**
 * 餐厅点餐小程序图片资源管理工具
 * 
 * 此脚本可以帮助管理餐厅小程序的图片资源，包括：
 * 1. 列出已有图片资源
 * 2. 添加新的图片资源(需要从本地添加到项目对应目录)
 * 3. 生成图片路径配置文件供小程序使用
 */

const fs = require('fs');
const path = require('path');

// 图片资源根目录
const IMAGE_ROOT = './images';
const categories = ['banners', 'dishes', 'avatars'];

// 配置文件路径
const CONFIG_PATH = './image_config.js';

/**
 * 列出指定目录下的所有图片
 * @param {string} category 图片分类
 * @returns {Array} 图片路径数组
 */
function listImages(category) {
  const categoryPath = path.join(IMAGE_ROOT, category);
  
  try {
    if (!fs.existsSync(categoryPath)) {
      console.log(`目录不存在: ${categoryPath}`);
      return [];
    }
    
    return fs.readdirSync(categoryPath)
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
      })
      .map(file => path.join('/', IMAGE_ROOT, category, file));
  } catch (error) {
    console.error(`列出${category}图片时出错:`, error);
    return [];
  }
}

/**
 * 生成图片配置文件
 */
function generateConfig() {
  const config = {};
  
  categories.forEach(category => {
    config[category] = listImages(category);
  });
  
  const configContent = `/**
 * 餐厅点餐小程序图片资源配置文件
 * 由image_manager.js自动生成，请勿手动修改
 */

module.exports = ${JSON.stringify(config, null, 2)};`;

  try {
    fs.writeFileSync(CONFIG_PATH, configContent);
    console.log(`已生成配置文件: ${CONFIG_PATH}`);
  } catch (error) {
    console.error('生成配置文件时出错:', error);
  }
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  switch (command) {
    case 'list':
      // 列出所有图片
      console.log('所有图片资源:');
      categories.forEach(category => {
        const images = listImages(category);
        console.log(`\n[${category}] - ${images.length}张图片:`);
        images.forEach(img => console.log(`  ${img}`));
      });
      break;
      
    case 'generate':
      // 生成配置文件
      generateConfig();
      break;
      
    default:
      // 显示使用帮助
      console.log(`
餐厅点餐小程序图片资源管理工具

用法:
  node image_manager.js <命令>

命令:
  list      列出所有图片资源
  generate  生成图片配置文件

例子:
  node image_manager.js list
  node image_manager.js generate
`);
      break;
  }
}

// 执行主函数
main(); 