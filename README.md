# 💝 Landing Page San Valentín 2025 - Amor en Detalles

Landing page profesional para la campaña de Día del Amor y la Amistad de **Amor en Detalles**, diseñada para convertir visitas en ventas directas por WhatsApp Business con política de reserva y pago por Yape.

## 🏪 Información del Negocio

- **Nombre:** Amor en Detalles
- **Facebook:** [@amorendetalles.pe](https://www.facebook.com/amorendetalles.pe)
- **WhatsApp:** +51 973 175 966
- **Yape:** +51 903 477 300 (Luz Can*)
- **Modalidad:** Detalles personalizados bajo pedido
- **Reserva:** 50% obligatorio por Yape

## 🎯 Características

- ✨ Diseño cálido y artesanal optimizado para mobile
- 📱 Integración directa con WhatsApp Business  
- 💬 Mensajes prellenados con política de reserva
- 🏦 **Sección de Política de Reserva (50% obligatorio)**
- 💳 **Sección de Métodos de Pago con Yape**
- 📱 **Espacio para QR de Yape personalizado**
- 🖼️ Páginas de detalle con galería de imágenes
- 🔍 Zoom interactivo en imágenes
- 📘 **Enlace a Facebook en múltiples secciones**
- 🚀 Performance optimizado (Static Site Generation)
- 🎨 Iconos profesionales con Heroicons
- 🎭 Animaciones sutiles y profesionales
- 📦 Sin backend, sin base de datos

## 🛠️ Stack Tecnológico

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Heroicons** (iconos)
- **Static Rendering**

## 📥 Instalación

1. **Descomprime el archivo** en tu carpeta de proyectos

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

## ⚙️ Configuración

### 1. Configura tu número de WhatsApp

Edita el archivo `/data/products.ts` y reemplaza el número de WhatsApp:

```typescript
export const WHATSAPP_NUMBER = '51973175966'; // Tu número actual
```

Cambia `51973175966` por tu número con código de país (sin + ni espacios).

### 2. Personaliza los productos (opcional)

En el mismo archivo `/data/products.ts`, puedes editar los productos:

```typescript
{
  id: '1',
  name: 'Nombre del producto',
  price: 35,
  description: 'Descripción corta',
  requiresImage: false,    // true si necesita foto del cliente
  image: '/images/producto.jpg',
  images: [                // Galería de 4 imágenes
    '/images/producto.jpg',
    '/images/producto-2.jpg',
    '/images/producto-3.jpg',
    '/images/producto-4.jpg',
  ],
  features: [              // Características del producto
    'Característica 1',
    'Característica 2',
  ],
  detailedDescription: 'Descripción larga y detallada del producto',
}
```

### 3. Agrega tus imágenes de productos

**IMPORTANTE:** Cada producto necesita 4 imágenes para la galería.

Coloca las imágenes en: `public/images/`

Nombra las imágenes según definiste en products.ts:
- `producto.jpg` (imagen principal)
- `producto-2.jpg` (vista 2)
- `producto-3.jpg` (vista 3)
- `producto-4.jpg` (vista 4)

**Nota:** El proyecto incluye placeholders. Para producción, reemplázalos con tus fotos reales de productos.

### 4. Agrega tu QR de Yape

**IMPORTANTE:** El QR de Yape es esencial para recibir pagos de reserva.

1. **Obtén tu QR de Yape:**
   - Desde la app de Yape: Mi perfil → Mi código QR
   - O solicita uno personalizado a BCP

2. **Guarda la imagen como:**
   ```
   /public/images/yape-qr.png
   ```

3. **Activa el QR en el código:**
   - Abre: `components/PaymentMethods.tsx`
   - Busca el comentario que dice: `{/* When you add the actual QR, uncomment this */}`
   - Descomenta el código del componente `<Image>`
   - Elimina el placeholder

**Ver instrucciones detalladas:** `/public/images/INSTRUCCIONES_QR_YAPE.md`

## 🏪 Política Comercial

### Reserva Obligatoria
- **Mínimo:** 50% del valor total
- **Opcional:** Pago completo (100%) al momento de reservar
- **Método:** Yape únicamente
- **Confirmación:** Envío de comprobante por WhatsApp

### Datos de Pago
- **Número de Yape:** +51 903 477 300
- **Titular:** Luz Can*

### Mensajes de WhatsApp
Todos los mensajes prellenados incluyen:
- Nombre del producto y precio
- Mención de la política de reserva (50%)
- Indicación de pago por Yape
- Si requiere imagen, lo especifica

**Ejemplo de mensaje:**
```
Hola 👋💝
Quiero hacer un pedido en Amor en Detalles

📦 Producto: Caja Amor Clásica
💰 Precio base: S/35
🎨 Personalizable: Sí

Entiendo que la reserva es del 50% y se realiza por Yape.
Quedo atento(a) para realizar la reserva 😊
```

## 🚀 Uso

### Desarrollo (con live reload)

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

1. **Genera el sitio estático:**
   ```bash
   npm run build
   ```

2. **Los archivos estarán en la carpeta `/out`**

3. **Súbelos a tu hosting:**
   - Netlify (arrastra la carpeta /out)
   - Vercel (conecta tu repositorio)
   - GitHub Pages
   - Cualquier hosting estático

## 📱 Mensajes de WhatsApp

Los mensajes se generan automáticamente con este formato:

**Sin imagen requerida:**
```
Hola 👋💝
*Quiero hacer un pedido de un detalle personalizado*

📦 *Producto:* Caja Amor Clásica
💰 *Precio base:* S/35
🎨 *Personalizable:* Sí

Quedo atento(a) a los pasos para personalizarlo 😊
```

**Con imagen requerida:**
```
Hola 👋💝
*Quiero hacer un pedido de un detalle personalizado*

📦 *Producto:* Marco Romántico Personalizado
💰 *Precio base:* S/50
📸 *Requiere imagen de los enamorados:* Sí

Indíquenme por favor cómo enviar la imagen y los datos para la personalización ✨
```

## 🎨 Personalización de Diseño

### Colores

Edita `/tailwind.config.js` para cambiar la paleta de colores:

```javascript
colors: {
  rose: { /* tus colores */ },
  warm: { /* tus colores */ },
}
```

### Textos

Todos los textos principales están en:
- `/components/Hero.tsx` - Sección principal
- `/components/ProductsGrid.tsx` - Productos
- `/components/InfoSection.tsx` - Información y proceso
- `/components/FinalCTA.tsx` - Llamado a la acción final
- `/components/Footer.tsx` - Pie de página

## 📋 Checklist Pre-Lanzamiento

- [ ] Configurar número de WhatsApp en `/data/products.ts`
- [ ] Reemplazar imágenes placeholder con fotos reales
- [ ] Actualizar precios de productos
- [ ] Verificar fechas límite en `InfoSection.tsx`
- [ ] Probar todos los enlaces de WhatsApp
- [ ] Revisar textos y ortografía
- [ ] Optimizar imágenes (usa TinyPNG o similar)
- [ ] Probar en móvil
- [ ] Generar build de producción
- [ ] Subir a hosting

## 🎯 Tips para Máxima Conversión

1. **Imágenes de calidad:** Usa fotos reales de tus productos, bien iluminadas
2. **Responde rápido:** Ten WhatsApp Business configurado para respuestas rápidas
3. **Comparte en redes:** Instagram Stories, Estados de WhatsApp, Facebook
4. **Urgencia:** La fecha límite (12 de febrero) crea urgencia natural
5. **Testimonios:** Considera agregar fotos de clientes satisfechos (con permiso)

## 📂 Estructura del Proyecto

```
landing-san-valentin/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ProductsGrid.tsx
│   ├── InfoSection.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
├── data/
│   └── products.ts
├── public/
│   └── images/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🐛 Solución de Problemas

**Error al instalar dependencias:**
```bash
# Intenta limpiar la caché
npm cache clean --force
npm install
```

**El sitio no se ve bien en producción:**
- Verifica que todas las imágenes estén en `/public/images/`
- Revisa la consola del navegador para errores

**Los enlaces de WhatsApp no funcionan:**
- Verifica que el número en `products.ts` incluya código de país
- Formato: `51900000000` (sin + ni espacios)

## 📞 Soporte

Este es un proyecto listo para producción. Si necesitas ayuda adicional:
- Revisa la documentación de Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs

## 📄 Licencia

Proyecto desarrollado para uso comercial. Personaliza y usa libremente para tu negocio.

---

Hecho con 💝 para celebrar el amor.

**¡Éxito con tu campaña de San Valentín 2025!** 🎁✨
