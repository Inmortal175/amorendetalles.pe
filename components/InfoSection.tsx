import { CalendarDaysIcon, ClockIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function InfoSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-warm-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Important dates */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border-2 border-rose-200 animate-slide-up">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-900 mb-3">
                Información Importante
              </h2>
              <div className="h-1 w-24 bg-rose-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Date limit */}
              <div className="text-center p-6 bg-gradient-to-br from-rose-100 to-rose-50 rounded-2xl">
                <CalendarDaysIcon className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-rose-900 mb-2">
                  Fecha límite
                </h3>
                <p className="text-3xl font-display font-bold text-rose-600 mb-2">
                  12 de febrero
                </p>
                <p className="text-sm text-gray-700">
                  Último día para hacer tu pedido y garantizar la entrega
                </p>
              </div>

              {/* Made to order */}
              <div className="text-center p-6 bg-gradient-to-br from-warm-100 to-warm-50 rounded-2xl">
                <ClockIcon className="w-16 h-16 text-amber-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-rose-900 mb-2">
                  Bajo demanda
                </h3>
                <p className="text-gray-700 mb-2">
                  No manejamos stock
                </p>
                <p className="text-sm text-gray-600">
                  Cada detalle se elabora especialmente después de tu pedido
                </p>
              </div>

              {/* Unique */}
              <div className="text-center p-6 bg-gradient-to-br from-rose-100 to-warm-50 rounded-2xl">
                <SparklesIcon className="w-16 h-16 text-rose-500 mx-auto mb-4" />
                <h3 className="font-bold text-xl text-rose-900 mb-2">
                  100% Artesanal
                </h3>
                <p className="text-gray-700 mb-2">
                  Hecho a mano
                </p>
                <p className="text-sm text-gray-600">
                  Cada detalle es único, con la dedicación que tu regalo merece
                </p>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-rose-900 mb-3">
                ¿Cómo hacer tu pedido?
              </h2>
              <p className="text-gray-600">Es muy simple, solo sigue estos pasos</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-rose-200 hidden md:block"></div>
                </div>
                <h3 className="font-bold text-lg text-rose-900 mb-2">Elige tu detalle</h3>
                <p className="text-sm text-gray-600">
                  Selecciona el producto perfecto de nuestra colección
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-rose-200 hidden md:block"></div>
                </div>
                <h3 className="font-bold text-lg text-rose-900 mb-2">Contacta por WhatsApp</h3>
                <p className="text-sm text-gray-600">
                  Haz clic en "Pedir ahora" y el mensaje se prellenará automáticamente
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-rose-200 hidden md:block"></div>
                </div>
                <h3 className="font-bold text-lg text-rose-900 mb-2">Personaliza</h3>
                <p className="text-sm text-gray-600">
                  Te guiaremos para que personalices tu detalle a tu gusto
                </p>
              </div>

              {/* Step 4 */}
              <div className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-rose-900 mb-2">Recibe tu regalo</h3>
                <p className="text-sm text-gray-600">
                  Lo elaboramos con amor y lo entregas a tiempo para el 14
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
