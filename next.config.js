/** @type {import('next').NextConfig} */
const nextConfig = {
  // NO usar output: 'export' para aprovechar Image Optimization de Vercel
  // ISR permite regeneración estática con cache inteligente
  
  images: {
    // Habilitar optimización automática de Vercel
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 año para imágenes optimizadas
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Remover console.log en producción
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Headers para caching agresivo
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|gif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Minificación con SWC
  swcMinify: true,
  
  // Optimizar imports de Heroicons
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
}

module.exports = nextConfig
