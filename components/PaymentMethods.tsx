import Image from 'next/image';
import { 
  DevicePhoneMobileIcon, 
  UserIcon,
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  CreditCardIcon,
  QrCodeIcon
} from '@heroicons/react/24/outline';
import { YAPE_NUMBER, YAPE_HOLDER, WHATSAPP_NUMBER, YAPE_IMAGE } from '@/data/products';

export default function PaymentMethods() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-purple-900 mb-3">
              Métodos de Pago
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Realiza tu reserva de forma rápida y segura
            </p>
            <div className="h-1 w-24 bg-purple-400 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Yape Info */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border-2 border-purple-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-purple-100 p-4 rounded-2xl mb-4">
                  {/* Logo de Yape - ícono */}
                  <CreditCardIcon className="w-12 h-12 md:w-14 md:h-14 text-purple-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-2">
                  Paga con Yape
                </h3>
                <p className="text-gray-600 text-sm">
                  Método principal de pago
                </p>
              </div>

              {/* Datos de Yape - FUENTE ROBOTO */}
              <div className="space-y-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <DevicePhoneMobileIcon className="w-6 h-6 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-700">Número de Yape:</span>
                  </div>
                  <p className="text-xl md:text-2xl font-bold text-purple-900 ml-9">
                    +{YAPE_NUMBER.slice(0, 2)} {YAPE_NUMBER.slice(2, 5)} {YAPE_NUMBER.slice(5, 8)} {YAPE_NUMBER.slice(8)}
                  </p>
                </div>

                <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
                  <div className="flex items-center gap-3 mb-2">
                    <UserIcon className="w-6 h-6 text-purple-600" />
                    <span className="text-sm font-semibold text-gray-700">Titular:</span>
                  </div>
                  <p className="text-lg md:text-xl font-bold text-purple-900 ml-9">
                    {YAPE_HOLDER}
                  </p>
                </div>
              </div>

              {/* Trust message */}
              <div className="mt-6 bg-green-50 border-2 border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <ShieldCheckIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong className="text-green-900">Pago seguro:</strong> Una vez realizada la reserva por Yape, 
                      envíanos el comprobante por WhatsApp para confirmar tu pedido inmediatamente.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp reminder */}
              <div className="mt-4">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hola%0AQuiero confirmar mi pago de reserva por Yape`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
                >
                  <ChatBubbleBottomCenterTextIcon className="w-5 h-5" />
                  Enviar comprobante por WhatsApp
                </a>
              </div>
            </div>

            {/* QR Code */}
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl p-6 md:p-8 border-2 border-purple-200 flex flex-col">
              <div className="text-center mb-6">
                <h3 className="text-xl md:text-2xl font-bold text-purple-900 mb-2">
                  Escanea el QR
                </h3>
                <p className="text-gray-600 text-sm">
                  Yapea directamente desde tu celular
                </p>
              </div>

              {/* QR Code Container */}
              <div className="flex-1 flex items-center justify-center">
                <div className="relative w-full max-w-sm aspect-square overflow-hidden">
                  {/* Placeholder for QR - LISTO PARA IMAGEN REAL */}
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl border-4 border-purple-300 flex items-center justify-center p-6 md:p-8 overflow-hidden">
                    {/* <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center max-w-full">
                        <QrCodeIcon className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 text-purple-600" />
                        <p className="text-purple-900 font-bold text-base md:text-lg mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                          QR de Yape
                        </p>
                        <p className="text-purple-700 text-xs md:text-sm px-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                          Agrega tu QR aquí:
                        </p>
                        <code className="text-xs bg-purple-900 px-2 py-1 rounded mt-2 inline-block break-all">
                          yape-qr.png
                        </code>
                      </div>
                    </div> */}
                    {/* Cuando agregues el QR real, descomenta y elimina el placeholder: */}
                    <Image
                      src={YAPE_IMAGE}
                      alt="QR de Yape - Amor en Detalles"
                      fill
                      className="object-contain p-6 md:p-8"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                   
                  </div>
                </div>
              </div>

              {/* Instructions - FUENTE ROBOTO */}
              <div className="mt-6 bg-purple-50 rounded-xl p-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                <h4 className="font-bold text-purple-900 mb-2 text-sm">
                  Cómo yapear:
                </h4>
                <ol className="text-xs md:text-sm text-gray-700 space-y-1 list-decimal list-inside">
                  <li>Abre tu app de Yape</li>
                  <li>Escanea este QR o usa el número</li>
                  <li>Ingresa el monto de la reserva</li>
                  <li>Confirma el pago</li>
                  <li>Envía el comprobante por WhatsApp</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-6 md:mt-8 text-center">
            <p className="text-gray-600 text-sm">
              <strong>Recuerda:</strong> La reserva mínima es del 50% del valor total. 
              Puedes pagar el 100% si lo deseas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
