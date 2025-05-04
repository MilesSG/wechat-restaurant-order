const fs = require('fs');
const path = require('path');

// 简单的图标SVG模板
function createIconSvg(color) {
  // 基本SVG图标数据
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <rect fill="${color}" x="2" y="2" width="20" height="20" rx="3"></rect>
    </g>
</svg>`;
}

// 创建图标
const icons = [
  { name: 'home', normalColor: '#999999', selectedColor: '#FF6B35' },
  { name: 'menu', normalColor: '#999999', selectedColor: '#FF6B35' },
  { name: 'queue', normalColor: '#999999', selectedColor: '#FF6B35' },
  { name: 'review', normalColor: '#999999', selectedColor: '#FF6B35' }
];

// 为每个图标创建正常和选中状态
icons.forEach(icon => {
  // 正常状态
  fs.writeFileSync(
    path.join(__dirname, `${icon.name}.png`), 
    createIconSvg(icon.normalColor),
    'utf8'
  );
  
  // 选中状态
  fs.writeFileSync(
    path.join(__dirname, `${icon.name}_selected.png`), 
    createIconSvg(icon.selectedColor),
    'utf8'
  );
  
  console.log(`Created ${icon.name}.png and ${icon.name}_selected.png`);
});

console.log('All icon files created successfully!'); 