@echo off
echo 开始下载餐厅点餐小程序菜单所需图片...

rem 创建目录
mkdir images\menu 2>nul

echo.
echo 下载热菜图片...
curl -o images\menu\gongbao_chicken.jpg https://upload.wikimedia.org/wikipedia/commons/0/0f/Kung_Pao_chicken.jpg
curl -o images\menu\boiled_fish.jpg https://upload.wikimedia.org/wikipedia/commons/5/57/Sichuan_water_boiled_fish.jpg
curl -o images\menu\mapo_tofu.jpg https://upload.wikimedia.org/wikipedia/commons/a/a8/Mapo_doufu.jpg
curl -o images\menu\sweet_sour_ribs.jpg https://upload.wikimedia.org/wikipedia/commons/d/d8/Sweet_and_sour_spare_ribs.jpg

echo.
echo 下载凉菜图片...
curl -o images\menu\century_egg_tofu.jpg https://upload.wikimedia.org/wikipedia/commons/1/18/Century_egg_and_tofu.jpg
curl -o images\menu\cucumber_salad.jpg https://upload.wikimedia.org/wikipedia/commons/2/24/Korean_cucumber_salad-Oi_muchim-01.jpg
curl -o images\menu\spicy_tripe.jpg https://upload.wikimedia.org/wikipedia/commons/4/47/Spicy_Beef_Tripe_and_Other_Organ_Meat_%286777607073%29.jpg

echo.
echo 下载汤品图片...
curl -o images\menu\tomato_egg_soup.jpg https://upload.wikimedia.org/wikipedia/commons/9/91/Tomato_and_egg_soup.jpg
curl -o images\menu\seaweed_egg_soup.jpg https://upload.wikimedia.org/wikipedia/commons/d/d3/Korean_egg_drop_soup_3.jpg
curl -o images\menu\sour_fish_soup.jpg https://upload.wikimedia.org/wikipedia/commons/1/14/Fish_head_soup.jpg

echo.
echo 下载主食图片...
curl -o images\menu\egg_fried_rice.jpg https://upload.wikimedia.org/wikipedia/commons/8/8c/Yang_Chow_Fried_Rice.jpg
curl -o images\menu\noodles.jpg https://upload.wikimedia.org/wikipedia/commons/f/f5/Basic_lo_mein.jpg
curl -o images\menu\dan_dan_noodles.jpg https://upload.wikimedia.org/wikipedia/commons/4/4a/Dandan_noodles.jpg

echo.
echo 下载甜点图片...
curl -o images\menu\rice_cake.jpg https://upload.wikimedia.org/wikipedia/commons/e/e1/Red_bean_rice_cake.jpg
curl -o images\menu\mango_pudding.jpg https://upload.wikimedia.org/wikipedia/commons/0/0a/Mango_Pudding_%283875161362%29.jpg

echo.
echo 下载饮品图片...
curl -o images\menu\watermelon_juice.jpg https://upload.wikimedia.org/wikipedia/commons/8/89/Watermelon_juice.jpg
curl -o images\menu\lemon_tea.jpg https://upload.wikimedia.org/wikipedia/commons/9/96/Lemon_Tea.jpg
curl -o images\menu\milk_tea.jpg https://upload.wikimedia.org/wikipedia/commons/3/39/Bubble_Tea.jpg

echo.
echo 菜单图片下载完成! 
echo 请检查图片文件是否正确下载。如果存在文件大小过小的图片，可能需要重新下载。 