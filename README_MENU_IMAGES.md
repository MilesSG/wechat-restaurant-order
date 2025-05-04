# 菜单图片管理

本文档说明菜单图片的管理方式及解决图片不匹配问题的方案。

## 文件结构

```
images/
  └── menu/            # 菜单图片目录
      ├── gongbao_chicken.jpg
      ├── boiled_fish.jpg
      ├── mapo_tofu.jpg
      └── ...其他菜品图片
  └── dishes/          # 默认菜品图片目录
      ├── default_dish.jpg       # 通用默认图片
      ├── default_hot_dish.jpg   # 热菜默认图片
      ├── default_cold_dish.jpg  # 凉菜默认图片
      └── ...其他默认图片
```

## 图片下载脚本

项目包含两个批处理脚本用于下载图片：

1. `download_menu_images.bat` - 下载所有菜单图片
2. `download_default_images.bat` - 下载默认菜品图片

如果图片下载失败或需要更新图片，可以运行这些脚本重新下载。

## 图片工具类

`utils/image-util.js` 文件包含处理图片的工具函数：

- `getMenuImagePath(imagePath)`: 检查菜单图片是否存在，不存在则提供默认图片
- `getImageCategory(fileName)`: 根据图片文件名推断菜品类别
- `getAvailableMenuImages()`: 获取可用的菜单图片列表

## 菜单数据

`utils/menuData.js` 文件定义了菜单数据，包括菜品类别和菜品信息。每个菜品都有对应的图片路径，格式为：`/images/menu/{图片名称}.jpg`。

## 菜单页面

菜单页面使用图片工具类处理图片路径，确保即使某些图片不可用，也能显示合适的替代图片。

## 解决图片不匹配问题的方法

1. 运行 `download_menu_images.bat` 下载所有菜单图片
2. 运行 `download_default_images.bat` 下载默认菜品图片
3. 在菜单页面中，使用 `getMenuImagePath()` 函数处理图片路径

## 如何添加新的菜品和图片

1. 在 `utils/menuData.js` 中添加新的菜品数据
2. 在 `download_menu_images.bat` 中添加新图片的下载命令
3. 在 `utils/image-util.js` 的 `getImageCategory()` 函数中添加新图片的类别映射
4. 在 `utils/image-util.js` 的 `getAvailableMenuImages()` 函数中添加新图片的文件名

## 常见问题

### 图片无法显示

如果菜单图片无法显示，可能的原因包括：

1. 图片文件不存在或下载失败
2. 图片路径不正确
3. 图片格式不支持

解决方法：

1. 检查图片文件是否存在，如不存在，运行下载脚本
2. 检查 `menuData.js` 中的图片路径是否正确
3. 确保使用支持的图片格式（如JPG, PNG等） 