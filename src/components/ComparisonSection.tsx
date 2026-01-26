type ComparisonMetric = {
  metric: string;
  aiPrimary: string;
  aiSecondary?: string;
  whatsapp: string;
  impact?: string;
  icon?: string;
};

const comparisonData: ComparisonMetric[] = [
  {
    metric: "Recupera tu tiempo",
    aiPrimary: "No tienes que preocuparte por responder",
    whatsapp: "Debes dedicar tiempo a responder",
    impact: "Dedica tu tiempo a crecer, no a responder mensajes repetitivos",
    icon: "⏳",
  },
  {
    metric: "Mejora la conversión",
    aiPrimary: "+23–70% de la conversión enfocada en acciones",
    whatsapp: "3–12% con atención tradicional",
    impact: "+40–60% más retención con Viaia",
    icon: "🚀",
  },
  {
    metric: "Tiempo de respuesta",
    aiPrimary: "Respuesta inmediata 24/7",
    whatsapp: "Horas o incluso días",
    impact: "Clientes atendidos al instante",
    icon: "⏱️",
  },
  {
    metric: "Tasa de resolución",
    aiPrimary: "71–93% de consultas resueltas automáticamente",
    whatsapp: "Depende de intervención humana",
    impact: "Lleva a otro nivel la experiencia del cliente",
    icon: "🤖",
  },
  {
    metric: "Atención multilenguaje",
    aiPrimary: "Disponible en todos los idiomas",
    whatsapp: "Limitada a pocos idiomas",
    impact: "Preparado para atender a cualquier público",
    icon: "🌐",
  },
  {
    metric: "Densidad de información",
    aiPrimary: "Clara y directa, orientada a la venta",
    whatsapp: "Mensajes largos, confusos y densos",
    impact: "Mayor comprensión y retención con Viaia",
    icon: "📄",
  },
  {
    metric: "Interacciones simultáneas",
    aiPrimary: "Conversaciones ilimitadas al mismo tiempo",
    whatsapp: "1–3 conversaciones a la vez",
    impact: "Atiendes más clientes sin esfuerzo extra",
    icon: "💬",
  },
];

export default function ComparisonSection() {
  return (
    <div className="bg-gradient-to-b from-white to-purple-50 py-12 px-6 rounded-3xl  mt-8">
      <h2 className="text-4xl flex flex-col md:text-5xl text-center font-bold mb-10 flex-wrap items-center justify-center gap-2">
        <img
          alt="Logo"
          className="mb-2 w-[150px] md:w-[350px]"
          height={40}
          src="/Vector-2.png"
        />
        Te ayuda a no perder clientes
      </h2>

      {/* Móvil */}
      <div className="md:hidden flex flex-col gap-6">
        {comparisonData.map((item) => (
          <div
            key={item.metric}
            className="border border-purple-200 rounded-2xl p-5 bg-white shadow-sm"
          >
            {/* Métrica */}
            <p className="text-xl font-semibold text-purple-900 flex items-center justify-center gap-2 text-center">
              <span className="text-2xl">{item.icon}</span>
              {item.metric}
            </p>

            {/* Viaia */}
            <div className="mt-4 bg-green-50 rounded-xl p-3 text-center">
              <p className="text-xs uppercase tracking-wide text-green-700 font-semibold">
                Con Viaia
              </p>
              <p className="text-green-700 font-bold text-lg mt-1">
                {item.aiPrimary}
              </p>
              {item.aiSecondary && (
                <p className="text-green-700/70 text-sm mt-1">
                  {item.aiSecondary}
                </p>
              )}
            </div>

            {/* WhatsApp */}
            <div className="mt-3 text-center">
              <p className="text-xs uppercase tracking-wide text-gray-400">
                WhatsApp tradicional
              </p>
              <p className="text-gray-600 text-sm mt-1">{item.whatsapp}</p>
            </div>

            {/* Impacto */}
            {item.impact && (
              <div className="mt-4 text-center">
                <p className="text-blue-600 font-semibold text-sm">
                  {item.impact}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop */}
      <div className="overflow-x-auto hidden md:block">
        <table className="min-w-full table-auto border-collapse text-left shadow-sm rounded-2xl overflow-hidden">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-6 py-4 text-lg md:text-xl font-semibold text-purple-900">
                ¿Qué ganas?
              </th>
              <th className="px-6 py-4 text-lg md:text-xl font-semibold text-green-600">
                Con Viaia
              </th>
              <th className="px-6 py-4 text-lg md:text-xl font-semibold text-gray-700">
                Sin Viaia
              </th>
              <th className="px-6 py-4 text-lg md:text-xl font-semibold text-blue-700">
                Resultado real
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item) => (
              <tr key={item.metric} className="border-b last:border-b-0">
                <td className="px-6 py-4 font-semibold flex items-center gap-2 text-purple-900">
                  {item.icon} {item.metric}
                </td>
                <td className="px-6 py-4 text-green-600 font-bold">
                  {item.aiPrimary}
                  {item.aiSecondary && (
                    <span className="text-gray-500 font-medium block mt-1">
                      {item.aiSecondary}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-gray-600">{item.whatsapp}</td>
                <td className="px-6 py-4 text-blue-700 font-semibold">
                  {item.impact || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
