# 图片下载脚本 - 为微信餐厅点餐小程序下载图片资源
# 此脚本将从免费图片资源网站下载餐饮相关图片并保存到对应目录

# 创建目录（如果不存在）
$directories = @("images\banners", "images\dishes", "images\avatars")
foreach ($dir in $directories) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "创建目录: $dir"
    }
}

# 定义图片URL和本地保存路径
$imageResources = @(
    # 轮播图
    @{
        Url = "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg"
        Path = "images\banners\banner1.jpg"
        Description = "春季新菜上市宣传图"
    },
    @{
        Url = "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
        Path = "images\banners\banner2.jpg"
        Description = "双人套餐宣传图"
    },
    @{
        Url = "https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg"
        Path = "images\banners\banner3.jpg"
        Description = "VIP会员宣传图"
    },
    
    # 菜品图
    @{
        Url = "https://images.pexels.com/photos/2942312/pexels-photo-2942312.jpeg"
        Path = "images\dishes\dish1.jpg"
        Description = "红烧排骨"
    },
    @{
        Url = "https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg"
        Path = "images\dishes\dish2.jpg"
        Description = "水煮鱼片"
    },
    @{
        Url = "https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg"
        Path = "images\dishes\dish3.jpg"
        Description = "干锅牛蛙"
    },
    @{
        Url = "https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg"
        Path = "images\dishes\dish4.jpg"
        Description = "宫保鸡丁"
    },
    @{
        Url = "https://images.pexels.com/photos/5409010/pexels-photo-5409010.jpeg"
        Path = "images\dishes\dish5.jpg"
        Description = "麻婆豆腐"
    },
    
    # 用户头像
    @{
        Url = "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
        Path = "images\avatars\avatar1.jpg"
        Description = "用户头像1"
    },
    @{
        Url = "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
        Path = "images\avatars\avatar2.jpg"
        Description = "用户头像2"
    },
    @{
        Url = "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
        Path = "images\avatars\avatar3.jpg"
        Description = "用户头像3"
    },
    @{
        Url = "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
        Path = "images\avatars\avatar4.jpg"
        Description = "用户头像4"
    }
)

# 下载图片
$webClient = New-Object System.Net.WebClient
$count = 0
$total = $imageResources.Count

foreach ($resource in $imageResources) {
    $count++
    $url = $resource.Url
    $path = $resource.Path
    $desc = $resource.Description
    
    Write-Host "[$count/$total] 正在下载: $desc -> $path"
    
    try {
        $webClient.DownloadFile($url, $path)
        Write-Host "  ✓ 下载成功" -ForegroundColor Green
    } catch {
        Write-Host "  ✗ 下载失败: $_" -ForegroundColor Red
    }
}

Write-Host "`n图片下载完成! 共下载 $count 张图片。" -ForegroundColor Cyan 