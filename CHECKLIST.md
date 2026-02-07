# ✅ Checklist Pre-Lanzamiento

## 📋 Antes de empezar

- [ ] Descomprimir el archivo landing-san-valentin.zip
- [ ] Abrir la carpeta en tu editor de código favorito
- [ ] Tener Node.js instalado (v18 o superior)

---

## ⚙️ Configuración Inicial (CRÍTICO)

### 1. Número de WhatsApp
- [ ] Abrir `data/products.ts`
- [ ] Cambiar `WHATSAPP_NUMBER` por tu número real
- [ ] Verificar formato: código de país + número (sin + ni espacios)
- [ ] Ejemplo: `51987654321` para Perú

### 2. Productos
- [ ] Revisar los 8 productos de ejemplo en `data/products.ts`
- [ ] Personalizar nombres según tus productos reales
- [ ] Ajustar precios base
- [ ] Actualizar descripciones
- [ ] Marcar `requiresImage: true` si necesita foto del cliente

### 3. Imágenes
- [ ] Tomar fotos profesionales de cada producto
- [ ] Optimizar imágenes (recomendado: tinypng.com)
- [ ] Guardar en `public/images/`
- [ ] Nombrar exactamente como en `products.ts`
- [ ] Agregar imagen hero principal

---

## 📝 Personalización de Textos

### Hero (components/Hero.tsx)
- [ ] Revisar título principal
- [ ] Ajustar subtítulo si es necesario
- [ ] Verificar textos de badges

### Información (components/InfoSection.tsx)
- [ ] Confirmar fecha límite (12 de febrero)
- [ ] Ajustar tiempos de entrega si es necesario
- [ ] Verificar pasos del proceso de compra

### Footer (components/Footer.tsx)
- [ ] Actualizar número de teléfono visible
- [ ] Agregar nombre de tu negocio
- [ ] Añadir redes sociales si deseas

---

## 🧪 Testing Local

- [ ] Ejecutar `npm install`
- [ ] Ejecutar `npm run dev`
- [ ] Abrir http://localhost:3000
- [ ] Probar TODOS los enlaces de WhatsApp
- [ ] Verificar que los mensajes se prellenan correctamente
- [ ] Revisar diseño en móvil (Chrome DevTools)
- [ ] Comprobar que todas las imágenes cargan
- [ ] Revisar ortografía y gramática

---

## 📱 Testing de WhatsApp

Para cada producto:
- [ ] Hacer clic en "Pedir ahora"
- [ ] Verificar que WhatsApp se abre
- [ ] Confirmar que el mensaje está prellenado
- [ ] Revisar que el producto es correcto
- [ ] Validar que el precio coincide
- [ ] Comprobar si dice "Requiere imagen" cuando aplica

---

## 🚀 Build de Producción

- [ ] Ejecutar `npm run build`
- [ ] Verificar que no hay errores
- [ ] Revisar la carpeta `/out` generada
- [ ] Probar el build localmente: `npx serve out`

---

## 🌐 Deployment

Elige tu plataforma:

### Opción Netlify:
- [ ] Crear cuenta en netlify.com
- [ ] Arrastrar carpeta `/out` a netlify.com/drop
- [ ] Esperar deployment
- [ ] Probar URL generada

### Opción Vercel:
- [ ] Crear cuenta en vercel.com
- [ ] Conectar repositorio de GitHub
- [ ] Confirmar configuración automática
- [ ] Esperar deployment

### Opción Hosting propio:
- [ ] Subir contenido de `/out` vía FTP
- [ ] Colocar en carpeta public_html o www
- [ ] Verificar que index.html está en la raíz

---

## ✅ Post-Deployment

- [ ] Visitar el sitio en producción
- [ ] Probar en múltiples dispositivos:
  - [ ] iPhone/Android
  - [ ] Tablet
  - [ ] Desktop
- [ ] Verificar enlaces de WhatsApp en producción
- [ ] Comprobar velocidad de carga
- [ ] Revisar en diferentes navegadores
- [ ] Testear con amigos/familia

---

## 📢 Marketing y Lanzamiento

### Redes Sociales
- [ ] Preparar posts para Instagram
- [ ] Crear estados de WhatsApp
- [ ] Diseñar stories de lanzamiento
- [ ] Programar posts en Facebook

### WhatsApp Business
- [ ] Configurar mensaje automático
- [ ] Crear respuestas rápidas
- [ ] Preparar templates de respuesta
- [ ] Configurar catálogo (opcional)

### Contenido
- [ ] Tomar fotos del proceso
- [ ] Grabar videos cortos
- [ ] Preparar carrusel de productos
- [ ] Crear countdown para fecha límite

---

## 🎯 Estrategia de Ventas

- [ ] Definir horario de atención
- [ ] Preparar precios finales con personalizaciones
- [ ] Establecer política de cambios/devoluciones
- [ ] Definir zonas de delivery
- [ ] Calcular tiempos de producción realistas

---

## 📊 Seguimiento

- [ ] Configurar Google Analytics (opcional)
- [ ] Crear hoja de cálculo para pedidos
- [ ] Preparar sistema de tracking de entregas
- [ ] Definir métricas a seguir

---

## ⚠️ Antes del 12 de Febrero

- [ ] Recordatorio a seguidores (7 días antes)
- [ ] Intensificar publicaciones (5 días antes)
- [ ] Countdown diario (3 días antes)
- [ ] Último día: comunicar URGENCIA

---

## 🚨 Contingencias

- [ ] Backup del sitio guardado
- [ ] Número de WhatsApp de respaldo
- [ ] Plan B si el hosting falla
- [ ] Contactos de soporte técnico

---

## 💰 Finanzas

- [ ] Calcular costos de materiales
- [ ] Definir margen de ganancia
- [ ] Establecer mínimos de pedido
- [ ] Planear reinversión de ganancias

---

## 📝 Legal (si aplica)

- [ ] Términos y condiciones
- [ ] Política de privacidad
- [ ] Facturación (si es negocio formal)
- [ ] Registro de negocio (si aplica)

---

## 🎉 ¡Listo para Lanzar!

Cuando todos los items críticos estén marcados:

✅ Configuración completa
✅ Testing exitoso
✅ Deployment funcionando
✅ Marketing preparado

**¡ES HORA DE VENDER! 🚀💝**

---

## 📞 ¿Necesitas Ayuda?

Si algo no funciona:
1. Revisa README.md para documentación completa
2. Consulta GUIA_RAPIDA.md para soluciones rápidas
3. Verifica DEPLOYMENT.md para problemas de hosting
4. Lee MARKETING.md para estrategias de venta

---

**Última actualización:** Antes del 29 de enero
**Meta:** Estar 100% listo para el 1 de febrero

¡Mucho éxito con tu campaña! 💝✨
