# 微信餐厅点餐小程序图片资源管理

## 说明

本文档用于说明小程序图片资源的管理方式。为了确保小程序中的图片资源能够正常显示，我们使用本地图片替代外部链接，避免因外部链接失效导致的图片显示问题。

## 目录结构

```
/images
  /banners    - 轮播图资源
  /dishes     - 菜品图片资源
  /avatars    - 用户头像资源
  其他图标和默认图片...
```

## 图片下载脚本

我们提供了两种方式下载图片资源：

### 1. PowerShell脚本 (download_images.ps1)

此脚本通过PowerShell下载图片，但在某些环境下可能因编码问题导致执行失败。

### 2. 批处理文件 (download_images.bat)

批处理文件使用curl下载图片，适用于大多数Windows环境：

```
# 执行方式
.\download_images.bat
```

## 图片资源管理工具 (image_manager.js)

此Node.js工具用于管理图片资源，提供以下功能：

- 列出所有图片资源
- 生成图片配置文件

```
# 列出所有图片
node image_manager.js list

# 生成配置文件
node image_manager.js generate
```

## 图片工具类 (utils/image-util.js)

为方便在小程序中使用图片资源，我们提供了图片工具类，主要功能：

- 获取轮播图数据 (getBanners)
- 获取特色菜品数据 (getFeaturedDishes)
- 获取用户评价数据 (getReviews)
- 处理图片路径 (getValidImagePath)

## 如何添加新图片

1. 将图片文件添加到对应目录 (/images/banners, /images/dishes, /images/avatars)
2. 运行 `node image_manager.js generate` 生成更新的配置文件
3. 在代码中使用 `ImageUtil` 工具类访问图片资源

## 图片来源

当前图片资源来自以下免费图片网站：

- Pexels (https://www.pexels.com/) - 免费高质量图片网站
- 如需添加更多图片，推荐使用以下网站：
  - Unsplash (https://unsplash.com/)
  - Pixabay (https://pixabay.com/)
  - 千图网、站酷等国内图片网站 