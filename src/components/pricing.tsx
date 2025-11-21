import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Button,
  Chip,
  Switch,
} from "@heroui/react";
import { Icon } from "@iconify/react";

import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";

const CATEGORY_STYLES = {
  ACCOMMODATION: { color: "#5C0087", name: "Acomodação", action: "Reserva" },
  ACTIVITY: { color: "#FF8000", name: "Atividade", action: "Viva" },
  F_AND_B: { color: "#B40078", name: "Restaurante", action: "Peça" },
  TRANSPORT: { color: "#2E005D", name: "Transporte", action: "Viaje" },
};

const styles = `
  @keyframes borderShine {
    0% { box-shadow: 0 0 2px 0px rgba(0, 120, 168, 0.5); }
    50% { box-shadow: 0 0 4px 1px rgba(0, 168, 232, 0.6); }
    100% { box-shadow: 0 0 2px 0px rgba(0, 120, 168, 0.5); }
  }
  .shining-border { animation: borderShine 4s infinite ease-in-out; }
  .shining-chip { animation: borderShine 4s infinite ease-in-out; }
`;

if (typeof document !== "undefined") {
  const styleElement = document.createElement("style");

  styleElement.innerHTML = styles;
  document.head.appendChild(styleElement);
}

type PricingTier = {
  name: string;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  features: string[];
  icon: string;
  category: keyof typeof CATEGORY_STYLES;
  isPopular?: boolean;
};

export const PricingTiers: React.FC = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof CATEGORY_STYLES>("ACCOMMODATION");
  const [isAnnual, setIsAnnual] = useState<boolean>(false);

  const tiers: PricingTier[] = [
    {
      name: "Acomodações (até 20 quartos)",
      originalPrice: 70.0,
      discountedPrice: 50.0,
      description:
        "Ideal para pousadas ou acomodações pequenas que buscam mais visibilidade e gestão inteligente.",
      features: [
        "1 mês de teste grátis",
        "20% de desconto na assinatura anual",
        "Certificação de serviço Viaia",
        "Suporte de IA 24/7",
        "Gestão completa de perfil e reservas",
      ],
      icon: "lucide:home",
      category: "ACCOMMODATION",
    },
    {
      name: "Acomodações (mais de 20 quartos)",
      originalPrice: 100.0,
      discountedPrice: 80.0,
      description:
        "Para hotéis ou complexos turísticos com maior demanda e necessidade de controle avançado.",
      features: [
        "1 mês de teste grátis",
        "20% de desconto na assinatura anual",
        "Gestão de dados, disponibilidade e preços",
        "Painel completo de reservas e clientes",
        "Certificação de serviço Viaia",
      ],
      icon: "lucide:building",
      category: "ACCOMMODATION",
      isPopular: true,
    },
    {
      name: "Atividades turísticas",
      originalPrice: 70.0,
      discountedPrice: 50.0,
      description:
        "Perfeito para operadores, guias e experiências locais que desejam conectar-se com mais viajantes.",
      features: [
        "1 mês de teste grátis",
        "20% de desconto na assinatura anual",
        "Certificação de serviço Viaia",
        "Gestão de reservas e disponibilidade",
        "Integração com atendimento automático por chat",
      ],
      icon: "lucide:compass",
      category: "ACTIVITY",
      isPopular: true,
    },
    {
      name: "Restaurantes",
      originalPrice: 50.0,
      discountedPrice: 30.0,
      description:
        "Pensado para restaurantes, cafés e bares que buscam atrair viajantes e mostrar sua oferta.",
      features: [
        "1 mês de teste grátis",
        "20% de desconto na assinatura anual",
        "Certificação de serviço Viaia",
        "Gestão de perfil e avaliações",
        "Atendimento automatizado a consultas",
      ],
      icon: "lucide:utensils-crossed",
      category: "F_AND_B",
      isPopular: true,
    },
    {
      name: "Transporte",
      originalPrice: 50.0,
      discountedPrice: 30.0,
      description:
        "Ideal para serviços de traslado, passeios sobre rodas ou transporte privado que desejem mais reservas.",
      features: [
        "1 mês de teste grátis",
        "20% de desconto na assinatura anual",
        "Certificação de serviço Viaia",
        "Gestão de perfil, rotas e disponibilidade",
        "Atendimento automatizado a solicitações de traslado",
      ],
      icon: "lucide:bus",
      category: "TRANSPORT",
      isPopular: true,
    },
  ];

  const filteredTiers = tiers.filter(
    (tier) => tier.category === selectedCategory,
  );

  return (
    <div className="w-full flex flex-col items-center py-10 px-4">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
          <GradientText
            showBorder
            animationSpeed={8}
            className="font-black tracking-tight"
            colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
          >
            Planos adaptados ao seu serviço
          </GradientText>
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          Viaia impulsiona sua visibilidade, otimiza sua gestão e conecta seu
          serviço com mais exploradores.
        </p>
      </div>

      {/* Tabs de categorías */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.entries(CATEGORY_STYLES).map(([key, { color, name }]) => (
          <button
            key={key}
            className={`px-4 py-2 text-sm font-semibold rounded-full border-2 transition-all ${
              selectedCategory === key
                ? "text-white"
                : "bg-transparent text-gray-600"
            }`}
            style={{
              backgroundColor: selectedCategory === key ? color : "transparent",
              borderColor: color,
            }}
            onClick={() =>
              setSelectedCategory(key as keyof typeof CATEGORY_STYLES)
            }
          >
            {name}
          </button>
        ))}
      </div>

      {/* Toggle de precios mensual/anual */}
      <div className="flex justify-center items-center gap-4 mb-8">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Mensal
        </span>
        <Switch
          aria-label="Alternar para preços anuais"
          color="default"
          isSelected={isAnnual}
          size="lg"
          onValueChange={setIsAnnual}
        />
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Anual
          </span>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="flex flex-col md:flex-row xl:flex-row justify-center items-stretch gap-8 max-w-7xl w-full">
          {filteredTiers.map((tier, index) => (
            <Card
              key={index}
              className={`border-2 relative ${
                tier.isPopular
                  ? "border-[#007A8A] shining-border"
                  : "border-default-200"
              } overflow-visible transition-all duration-300`}
            >
              {tier.isPopular && (
                <div className="absolute -top-3 left-0 right-0 flex justify-center">
                  <Chip
                    className="h-6 bg-[#007A8A] text-white border-2 border-white/50 shining-chip"
                    variant="shadow"
                  >
                    Mais popular
                  </Chip>
                </div>
              )}

              <CardHeader className="flex flex-col items-center gap-2 pt-6 text-center">
                <Icon
                  className="text-3xl mb-1"
                  icon={tier.icon}
                  style={{ color: CATEGORY_STYLES[tier.category].color }}
                />
                <h3 className="text-lg font-bold">{tier.name}</h3>
                <p className="text-sm text-foreground-500 px-4">
                  {tier.description}
                </p>
              </CardHeader>

              <CardBody className="py-6 text-center">
                <div className="flex justify-center items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold">
                    $
                    {isAnnual
                      ? Math.round(tier.originalPrice * 12 * 0.8)
                      : tier.originalPrice}
                  </span>
                  <span className="text-danger text-sm font-medium">
                    /{isAnnual ? "ano" : "mês"}
                  </span>
                </div>

                {/* Información adicional según el período seleccionado */}
                {isAnnual ? (
                  <div className="mx-auto mb-4 text-center text-sm text-gray-700 dark:text-gray-300">
                    <div className="text-green-600 font-semibold">
                      Você economiza R${Math.round(tier.originalPrice * 12 * 0.2)} ao
                      ano!
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto mb-4 text-center text-sm text-gray-700 dark:text-gray-300">
                    <div className="text-gray-500">
                      Pague anualmente e economize 20%
                    </div>
                  </div>
                )}

                {/* Características */}
                <div className="flex flex-col gap-2">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon className="text-success" icon="lucide:check" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center mt-10 text-center">
        <Button
          className="bg-[#007A8A] text-white hover:bg-[#0088C2] shining-border"
          size="lg"
          onPress={() => (window.location.href = "https://wa.me/13075001620")}
        >
          Contate-nos
        </Button>
        <p className="text-sm text-gray-500 mt-4 max-w-xs">
          Vamos conversar sobre seu serviço e personalizar seu plano com a Viaia.
        </p>
      </div>
    </div>
  );
};
