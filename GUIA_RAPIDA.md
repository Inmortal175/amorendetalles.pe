# 🚀 Guía Rápida - 5 Minutos

## Para empezar YA (lo mínimo indispensable)

### 1️⃣ Cambia tu número de WhatsApp

📂 Abre el archivo: `data/products.ts`

🔍 Busca esta línea (está al inicio):
```typescript
export const WHATSAPP_NUMBER = '51900000000';
```

✏️ Reemplaza `51900000000` con tu número (incluye código de país, sin +, sin espacios):
- Perú: `51987654321`
- México: `52987654321`
- Colombia: `57987654321`
- etc.

### 2️⃣ Instala y ejecuta

Abre la terminal en esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

Abre tu navegador en: http://localhost:3000

**¡Listo! Tu landing está funcionando** ✨

---

## 📝 Personalización Básica (5 min más)

### Cambiar productos

📂 Mismo archivo: `data/products.ts`

Edita los productos cambiando:
- `name`: Nombre del producto
- `price`: Precio base
- `description`: Descripción
- `requiresImage`: `true` si necesita foto, `false` si no

### Agregar tus fotos

1. Guarda tus fotos de productos en: `public/images/`
2. Nómbralas igual que pusiste en `products.ts`
3. Ejemplo: si pusiste `image: '/images/mi-producto.jpg'`, guarda la foto como `mi-producto.jpg`

---

## 🌐 Publicar en Internet

### Opción 1: Netlify (MÁS FÁCIL)

1. Crea cuenta gratis en: https://netlify.com
2. Ejecuta en terminal: `npm run build`
3. Arrastra la carpeta `out` a Netlify
4. ¡Listo! Te da una URL automática

### Opción 2: Vercel

1. Crea cuenta gratis en: https://vercel.com
2. Sube tu proyecto a GitHub
3. Conecta GitHub con Vercel
4. Deploy automático

---

## ❓ Problemas Comunes

**"npm no se reconoce"**
→ Necesitas instalar Node.js: https://nodejs.org/

**"Los enlaces de WhatsApp no funcionan"**
→ Revisa que tu número tenga código de país y sin espacios ni símbolos

**"No veo mis imágenes"**
→ Verifica que las imágenes estén en `public/images/` y los nombres coincidan

---

## 📞 Lo Esencial

- **Archivo principal de productos:** `data/products.ts`
- **Textos del sitio:** Carpeta `components/`
- **Imágenes:** Carpeta `public/images/`
- **Comandos:**
  - `npm install` → Instalar
  - `npm run dev` → Ver en localhost
  - `npm run build` → Preparar para publicar

---

**¿Algo salió mal?** Lee el README.md completo para más detalles.

¡Éxito con tu campaña! 💝
