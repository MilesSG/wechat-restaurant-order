# 特色菜品图片管理

本文档说明特色菜品图片的管理方式及解决图片不显示问题的方案。

## 文件结构

```
images/
  └── dishes/          # 特色菜品图片目录
      ├── dish1.jpg    # 红烧排骨
      ├── dish2.jpg    # 水煮鱼片
      ├── dish3.jpg    # 干锅牛蛙
      ├── dish4.jpg    # 宫保鸡丁
      └── dish5.jpg    # 麻婆豆腐
  └── dishes/          # 默认菜品图片目录（与特色菜品共用）
      ├── default_dish.jpg       # 通用默认图片
      ├── default_hot_dish.jpg   # 热菜默认图片
      ├── default_cold_dish.jpg  # 凉菜默认图片
      └── ...其他默认图片
```

## 特色菜品图片下载脚本

项目包含一个批处理脚本用于下载特色菜品图片：

`download_featured_dishes.bat` - 下载所有特色菜品图片

如果特色菜品图片无法显示，可以运行这个脚本重新下载。

## 图片工具类

`utils/image-util.js` 文件包含处理图片的工具函数：

- `getFeaturedDishes()`: 获取特色菜品数据
- `getValidImagePath(imagePath, type)`: 处理图片路径，确保路径有效，如果无效则提供默认图片

## 首页代码修改

首页使用图片工具类处理特色菜品图片路径：

```javascript
loadImageData: function() {
  this.setData({
    featuredDishes: ImageUtil.getFeaturedDishes().map(dish => {
      return {
        ...dish,
        image: ImageUtil.getValidImagePath(dish.image, 'dish')
      };
    })
  });
}
```

## 解决红烧排骨图片不显示问题的方法

问题：红烧排骨使用的是 `images/dishes/dish1.jpg` 文件，但该文件可能下载失败或损坏。

解决方案：

1. 运行 `download_featured_dishes.bat` 下载特色菜品图片
2. 如果单独下载无法解决问题，可以运行 `fix_all_images.bat` 修复所有图片
3. 首页加载时会自动使用 `getValidImagePath()` 函数处理图片路径，确保即使图片不可用也会显示默认图片

## 如何验证修复成功

1. 运行下载脚本后，检查 `images/dishes/dish1.jpg` 文件是否正常（文件大小应大于10KB）
2. 重新进入小程序，查看首页的特色推荐中的红烧排骨是否显示正确的图片
3. 如果图片仍然无法显示，检查首页代码是否正确调用了 `getValidImagePath()` 函数

## 常见问题

### 图片仍然无法显示

可能的原因：

1. 下载脚本执行失败，没有成功下载图片
2. 图片URL可能变更或失效
3. 小程序缓存问题

解决方法：

1. 检查下载脚本执行输出，确认下载是否成功
2. 检查图片文件大小，如果小于10KB，可能是下载失败
3. 尝试使用不同的图片源（修改download_featured_dishes.bat中的URL）
4. 清除小程序缓存后重新进入 