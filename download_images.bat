@echo off
echo 开始下载餐厅点餐小程序所需图片...

rem 创建目录
mkdir images\banners 2>nul
mkdir images\dishes 2>nul
mkdir images\avatars 2>nul

echo.
echo 下载轮播图...
curl -o images\banners\banner1.jpg https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress
curl -o images\banners\banner2.jpg https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress
curl -o images\banners\banner3.jpg https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress

echo.
echo 下载菜品图...
curl -o images\dishes\dish1.jpg https://images.pexels.com/photos/2942312/pexels-photo-2942312.jpeg?auto=compress
curl -o images\dishes\dish2.jpg https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress
curl -o images\dishes\dish3.jpg https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress
curl -o images\dishes\dish4.jpg https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress
curl -o images\dishes\dish5.jpg https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg?auto=compress

echo.
echo 下载用户头像...
curl -o images\avatars\avatar1.jpg https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress
curl -o images\avatars\avatar2.jpg https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress
curl -o images\avatars\avatar3.jpg https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress
curl -o images\avatars\avatar4.jpg https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress

echo.
echo 图片下载完成! 