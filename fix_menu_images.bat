@echo off
echo ===================================================
echo 微信餐厅点餐小程序 - 菜单图片修复工具
echo ===================================================
echo.

echo 步骤1: 清理现有菜单图片
echo ---------------------------------------------------
if exist images\menu (
    echo 删除现有菜单图片目录...
    rd /s /q images\menu
)
echo 创建菜单图片目录...
mkdir images\menu 2>nul
echo.

echo 步骤2: 下载菜单图片
echo ---------------------------------------------------
call download_menu_images.bat
echo.

echo 步骤3: 检查下载的图片
echo ---------------------------------------------------
echo 检查图片文件大小...
for %%F in (images\menu\*.jpg) do (
    for /f "usebackq" %%A in ('%%F') do (
        if %%~zA LSS 10000 (
            echo 警告：%%F 文件大小过小，可能下载失败 (%%~zA 字节)
        ) else (
            echo 正常：%%F (%%~zA 字节)
        )
    )
)
echo.

echo 步骤4: 下载默认图片
echo ---------------------------------------------------
call download_default_images.bat
echo.

echo ===================================================
echo 修复完成！
echo.
echo 如果还有图片显示问题，请查看 README_MENU_IMAGES.md
echo 获取更多排障信息和解决方案。
echo ===================================================