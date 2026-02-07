import { 
  ShieldCheckIcon, 
  ClockIcon, 
  CheckCircleIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline';

export default function ReservationPolicy() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border-2 border-blue-200">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <ShieldCheckIcon className="w-16 h-16 text-blue-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-blue-900 mb-3">
                Política de Reserva
              </h2>
              <div className="h-1 w-24 bg-blue-400 mx-auto rounded-full"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 text-center md:text-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                Todos nuestros detalles se realizan <strong className="text-blue-900">bajo pedido y de forma personalizada</strong>.
              </p>

              {/* Key points */}
              <div className="grid md:grid-cols-2 gap-6 my-8">
                {/* Reserva 50% */}
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 border-2 border-blue-300">
                  <div className="flex items-start gap-4">
                    <BanknotesIcon className="w-12 h-12 text-blue-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-blue-900 mb-2">
                        Reserva Mínima
                      </h3>
                      <p className="text-3xl font-display font-bold text-blue-600 mb-2">
                        50%
                      </p>
                      <p className="text-sm text-gray-700">
                        del valor total para confirmar tu pedido
                      </p>
                    </div>
                  </div>
                </div>

                {/* Pago 100% */}
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-6 border-2 border-green-300">
                  <div className="flex items-start gap-4">
                    <CheckCircleIcon className="w-12 h-12 text-green-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl text-green-900 mb-2">
                        Pago Completo
                      </h3>
                      <p className="text-3xl font-display font-bold text-green-600 mb-2">
                        100%
                      </p>
                      <p className="text-sm text-gray-700">
                        opcional si deseas pagar todo al momento de reservar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important notice */}
              <div className="bg-blue-900 rounded-2xl p-6 text-white">
                <div className="flex items-start gap-4">
                  <ClockIcon className="w-8 h-8 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-xl mb-2">
                      ¿Por qué es obligatoria la reserva?
                    </h3>
                    <p className="text-blue-100 leading-relaxed">
                      La reserva es necesaria para <strong>iniciar la elaboración</strong> de tu detalle 
                      y <strong>asegurar tu fecha de entrega</strong>. Al ser productos personalizados y hechos a mano, 
                      necesitamos confirmar cada pedido antes de comenzar.
                    </p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="font-bold text-xl text-gray-900 mb-4 text-center">
                  Proceso de Reserva
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                      1
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Elige tu detalle</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                      2
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Realiza la reserva (50%)</p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                      3
                    </div>
                    <p className="text-sm font-semibold text-gray-900">Iniciamos tu pedido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
