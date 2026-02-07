#!/bin/bash

# Script para crear imágenes placeholder SVG para los productos

cd /home/claude/landing-san-valentin/public/images

# Productos y sus colores
declare -A productos=(
  ["caja-clasica"]="#f43f5e"
  ["marco-romantico"]="#ec4899"
  ["peluche-chocolates"]="#fb923c"
  ["desayuno-amor"]="#fbbf24"
  ["bouquet-flores"]="#f472b6"
  ["carta-personalizada"]="#a855f7"
  ["album-fotos"]="#8b5cf6"
  ["combo-especial"]="#ef4444"
)

# Crear SVG para cada producto (4 variantes)
for producto in "${!productos[@]}"; do
  color="${productos[$producto]}"
  
  for i in {1..4}; do
    nombre_archivo="${producto}"
    if [ $i -gt 1 ]; then
      nombre_archivo="${producto}-${i}"
    fi
    
    cat > "${nombre_archivo}.jpg" << EOF
<svg width="800" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad${producto}${i}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:${color};stop-opacity:0.4" />
    </linearGradient>
  </defs>
  <rect width="800" height="800" fill="url(#grad${producto}${i})"/>
  <circle cx="400" cy="300" r="80" fill="white" opacity="0.3"/>
  <text x="400" y="500" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">
    ${producto^^}
  </text>
  <text x="400" y="550" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.8">
    Imagen ${i}
  </text>
</svg>
EOF
  done
done

echo "Imágenes placeholder creadas exitosamente en public/images/"
ls -lh
