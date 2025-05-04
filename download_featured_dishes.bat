@echo off
echo 开始下载餐厅点餐小程序特色菜品图片...

rem 创建目录
mkdir images\dishes 2>nul

echo.
echo 下载特色菜品图片...
curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" -o images\dishes\dish1.jpg https://i.imgur.com/c7V5gfo.jpg
curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" -o images\dishes\dish2.jpg https://i.imgur.com/KJSCIja.jpg
curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" -o images\dishes\dish3.jpg https://i.imgur.com/cTczHoU.jpg
curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" -o images\dishes\dish4.jpg https://i.imgur.com/Muh4YLY.jpg
curl -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36" -o images\dishes\dish5.jpg https://i.imgur.com/dZoTqDx.jpg

echo.
echo 特色菜品图片下载完成！
echo 请检查图片文件是否正确下载。如果存在文件大小过小的图片，可能需要重新下载。 