@echo off
echo 开始下载默认菜品图片...

rem 创建目录
mkdir images\dishes 2>nul

echo.
echo 下载默认菜品图片...
curl -o images\dishes\default_dish.jpg https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg
curl -o images\dishes\default_hot_dish.jpg https://upload.wikimedia.org/wikipedia/commons/3/30/Yuan_yang_rice.jpg
curl -o images\dishes\default_cold_dish.jpg https://upload.wikimedia.org/wikipedia/commons/1/1b/Cold_plate_01.jpg
curl -o images\dishes\default_soup.jpg https://upload.wikimedia.org/wikipedia/commons/d/d5/Campbell%27s_chicken_noodle_soup.jpg
curl -o images\dishes\default_staple.jpg https://upload.wikimedia.org/wikipedia/commons/9/9d/Chinese_steamed_bun_20101027.jpg
curl -o images\dishes\default_dessert.jpg https://upload.wikimedia.org/wikipedia/commons/7/79/Egg_custard_tart.jpg
curl -o images\dishes\default_drink.jpg https://upload.wikimedia.org/wikipedia/commons/7/75/Taiwanesebubbleteawithicecream.jpg

echo.
echo 默认菜品图片下载完成! 