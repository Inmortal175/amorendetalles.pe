# 🚀 Guía de Publicación (Deployment)

## Netlify (Recomendado para principiantes)

### Opción A: Drag & Drop

1. **Genera el build:**
   ```bash
   npm run build
   ```

2. **Ve a:** https://app.netlify.com/drop

3. **Arrastra la carpeta `/out`** que se creó

4. **¡Listo!** Netlify te da una URL automática

### Opción B: Git Deploy

1. Sube tu proyecto a GitHub
2. Conecta tu repositorio en Netlify
3. Configuración:
   - Build command: `npm run build`
   - Publish directory: `out`

---

## Vercel (Recomendado para desarrolladores)

1. **Instala Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. Sigue las instrucciones en terminal

**O desde GitHub:**
- Sube a GitHub
- Conecta en vercel.com
- Deploy automático

---

## GitHub Pages

1. **Instala gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Agrega a package.json:**
   ```json
   "scripts": {
     "deploy": "next build && next export && gh-pages -d out"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Activa GitHub Pages** en Settings del repo

---

## Hosting Compartido (cPanel, etc.)

1. **Genera el build:**
   ```bash
   npm run build
   ```

2. **Sube la carpeta `/out` vía FTP** a `public_html/` o `www/`

3. **Asegúrate** de que `index.html` esté en la raíz

---

## Firebase Hosting

1. **Instala Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login:**
   ```bash
   firebase login
   ```

3. **Inicia proyecto:**
   ```bash
   firebase init hosting
   ```

4. **Configuración:**
   - Public directory: `out`
   - Single-page app: `No`

5. **Build y deploy:**
   ```bash
   npm run build
   firebase deploy
   ```

---

## ⚠️ Importante para TODOS los hostings

### 1. Antes de deployar:

✅ Cambiar número de WhatsApp en `data/products.ts`
✅ Agregar imágenes reales en `public/images/`
✅ Revisar todos los textos
✅ Probar enlaces de WhatsApp
✅ Optimizar imágenes

### 2. Después de deployar:

✅ Probar en móvil
✅ Verificar todos los enlaces de WhatsApp
✅ Comprobar que las imágenes cargan
✅ Testear el sitio con amigos/familia

---

## 🔧 Troubleshooting

**"404 Not Found" en rutas:**
- Verifica que estés usando el directorio `out`
- Asegúrate de configurar como "static site"

**"Imágenes no cargan":**
- Verifica rutas en `products.ts`
- Comprueba que existan en `public/images/`

**"WhatsApp no abre":**
- Revisa el formato del número (sin + ni espacios)
- Prueba en móvil y desktop

---

## 📊 Recomendaciones por Plataforma

- **Principiantes:** Netlify (drag & drop)
- **Desarrolladores:** Vercel
- **Gratis ilimitado:** GitHub Pages
- **Ya tienes hosting:** cPanel/FTP
- **Necesitas Analytics:** Firebase

---

## 💡 Tips Pro

1. **Dominio personalizado:** Compra en Namecheap, conecta en Netlify/Vercel
2. **Analytics:** Agrega Google Analytics o Plausible
3. **CDN:** Netlify/Vercel incluyen CDN gratis
4. **SSL:** Automático en Netlify/Vercel/GitHub Pages
5. **Caché:** Ya está optimizado en el build

---

**¿Primera vez?** → Netlify Drag & Drop
**¿Sabes Git?** → Vercel o Netlify Git Deploy
**¿Tienes hosting?** → Sube carpeta `/out` por FTP

¡Éxito! 🎉
