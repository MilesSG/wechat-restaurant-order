@echo off
echo ===================================================
echo 微信餐厅点餐小程序 - 全部图片修复工具
echo ===================================================
echo.

echo 第一部分: 修复菜单图片
echo ===================================================
echo.
call fix_menu_images.bat
echo.

echo 第二部分: 修复特色菜品图片
echo ===================================================
echo.
echo 步骤1: 检查特色菜品图片
echo ---------------------------------------------------
echo 检查图片文件大小...
for %%F in (images\dishes\dish*.jpg) do (
    for /f "usebackq" %%A in ('%%F') do (
        if %%~zA LSS 10000 (
            echo 警告：%%F 文件大小过小，可能下载失败 (%%~zA 字节)
            echo 标记为需要重新下载
            set "need_redownload=true"
        ) else (
            echo 正常：%%F (%%~zA 字节)
        )
    )
)
echo.

echo 步骤2: 下载特色菜品图片
echo ---------------------------------------------------
call download_featured_dishes.bat
echo.

echo ===================================================
echo 全部图片修复完成！
echo.
echo 如果还有图片显示问题，请运行单独的修复脚本：
echo - fix_menu_images.bat 修复菜单图片
echo - download_featured_dishes.bat 修复特色菜品图片
echo =================================================== 