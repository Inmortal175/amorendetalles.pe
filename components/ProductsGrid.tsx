import { products } from '@/data/products';
import ProductCard from './ProductCard';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function ProductsGrid() {
  return (
    <section id="productos" className="py-20 bg-warm-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-rose-900 mb-4">
              Nuestros Detalles Especiales
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Cada pieza es única, creada con dedicación y amor artesanal para hacer de tu regalo algo inolvidable
            </p>
            
            {/* Decorative line */}
            <div className="flex items-center justify-center mt-6 gap-3">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent to-rose-400 rounded-full"></div>
              <HeartIcon className="w-8 h-8 text-rose-500" />
              <div className="h-1 w-16 bg-gradient-to-l from-transparent to-rose-400 rounded-full"></div>
            </div>
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Bottom note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-white rounded-2xl shadow-lg px-6 py-4 max-w-md">
              <p className="text-gray-700 text-sm">
                <span className="font-semibold text-rose-600">Nota:</span> Todos los precios son bases. El precio final depende de la personalización que elijas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
