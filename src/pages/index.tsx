import { Link } from "@heroui/link";
import { Chip } from "@heroui/react";
import posthog from "posthog-js";
import { FaApple, FaGooglePlay } from "react-icons/fa";

import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import DefaultLayout from "@/layouts/default";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
import FadeContent from "@/blocks/Animations/FadeContent/FadeContent";
// import { siteConfig } from "@/config/site";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import MobileOnly from "@/components/MobileOnly";

const textsVelocity = [
  "Alojamientos Experiencias Actividades Transporte Organización",
  "Restaurantes Bares Consejos Cultura Turismo Aventura",
];

const textsRotating = [
  "Grupos",
  "Alojamientos",
  "Reservas",
  "Transporte",
  "Salidas",
  "Aventuras",
  "Itinerarios",
  "Pagos",
];

export default function IndexPage() {
  return (
    <MobileOnly>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 md:py-4 overflow-x-hidden">
          <div className="inline-block w-full mt-52 text-center justify-center">
            <div className="bg-gradient-to-b from-[#fff] to-[#e9e9e9] w-full pb-3 px-4">
              <SplitText
                className="text-5xl font-bold md:text-5xl lg:text-6xl"
                delay={50}
                text="¡Hola, viajero!"
              />
              <div className="text-center mt-20 px-4">
                <div className="text-4xl pt-20 md:text-4xl lg:text-5xl flex flex-col items-center justify-center text-center">
                  <GradientText
                    animationSpeed={10}
                    className="custom-class"
                    colors={[
                      "#2E005D",
                      "#5C0087",
                      "#8A0087",
                      "#FF6200",
                      "#FF8000",
                    ]}
                    showBorder={false}
                  >
                    Atrévete a descubrir como nunca antes.
                  </GradientText>
                </div>
                <div className="mt-4 flex flex-col items-center gap-4">
                  {/* Botón principal - Web App */}
                  <a
                    className="bg-white border-2 border-[#5C0087] hover:scale-105 transition-transform duration-300 rounded-full px-6 py-3 shadow-lg flex items-center justify-center"
                    href="https://app.esviaia.com/"
                  >
                    <GradientText
                      animationSpeed={5}
                      className="text-lg font-bold"
                      colors={[
                        "#2E005D",
                        "#FF6200",
                        "#5C0087",
                        "#FF8000",
                        "#8A0087",
                      ]}
                      showBorder={false}
                    >
                      Probar Viaia ahora
                    </GradientText>
                    <p>✨</p>
                  </a>

                  {/* Botones deshabilitados - App Store y Google Play */}
                  <Chip
                    className="relative overflow-hidden cursor-pointer transition-all hover:scale-105 bg-gray-50 border-2 border-gray-200 "
                    style={{
                      padding: "16px 24px",
                      borderRadius: "999px",
                    }}
                  >
                    <ShinyText
                      className="text-gray-800  font-semibold text-lg"
                      disabled={false}
                      speed={10}
                      text="Próximamente"
                    />
                  </Chip>
                  <div className="flex flex-col sm:flex-row gap-4 mt-1 justify-center items-center">
                    <button
                      disabled
                      className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg flex items-center gap-2 cursor-not-allowed opacity-70"
                    >
                      <FaApple className="w-5 h-5" />
                      App Store
                    </button>
                    <button
                      disabled
                      className="bg-gray-300 text-gray-500 py-2 px-4 rounded-lg flex items-center gap-2 cursor-not-allowed opacity-70"
                    >
                      <FaGooglePlay className="w-5 h-5" />
                      Google Play
                    </button>
                  </div>
                </div>
              </div>
              <div className="pt-20 md:text-4xl lg:text-5xl">
                <SplitText
                  className="text-3xl pt-10 md:text-4xl lg:text-5xl"
                  delay={50}
                  text="Explorar sin límites es el nuevo destino"
                />
                <p className="text-4xl">🗺️</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center  px-4 gap-4 bg-neutral-100 ">
              <div className="text-4xl pt-8 md:text-4xl lg:text-5xl">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={[
                    "#2E005D",
                    "#5C0087",
                    "#8A0087",
                    "#FF6200",
                    "#FF8000",
                  ]}
                  showBorder={false}
                >
                  Tu viaje empieza con un mensaje
                </GradientText>
                <p>💬</p>
              </div>
              <div className="flex justify-center mt-7">
                <FadeContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/InputChat2.png"
                  />
                </FadeContent>
              </div>
              <div className="text-2xl pt-6 md:text-4xl lg:text-5xl">
                <p>
                  Sin mil pestañas abiertas. Solo tú, tus ideas y un espacio
                  donde todo fluye.
                </p>
              </div>
              <div className="flex justify-center flex-col gap-4 mt-7">
                <AnimatedContent>
                  <div className="flex justify-end">
                    <img
                      alt="Chat interface illustration"
                      className="w-3/4"
                      src="/MensajeUser.png"
                    />
                  </div>
                </AnimatedContent>
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/RespuestaViaia.png"
                  />
                </AnimatedContent>
              </div>
            </div>

            <div className="bg-[#ffffff] w-full pb-3 px-8">
              <div className="text-4xl pt-6 md:text-4xl lg:text-5xl flex flex-col items-center justify-center text-center">
                <img
                  alt="Logo"
                  className="mb-2"
                  height={40}
                  src="/Vector-2.png"
                  width={150}
                />
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={[
                    "#2E005D",
                    "#5C0087",
                    "#8A0087",
                    "#FF6200",
                    "#FF8000",
                  ]}
                  showBorder={false}
                >
                  escucha, sugiere y se adapta.
                </GradientText>
                <p>🤓</p>
              </div>
              <div className="text-2xl pt-6 md:text-4xl lg:text-5xl">
                <span>
                  Ya sea que estés planeando una escapada en solitario o un
                  viaje en grupo, todo sucede en el{" "}
                  <ShinyText
                    className="text-gray-800 font-bold bg-transparent"
                    disabled={false}
                    speed={3}
                    text="Chat."
                  />
                </span>
              </div>
              <div className="flex justify-center mt-7">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/dash.png"
                  />
                </AnimatedContent>
              </div>
              <div className="text-2xl pt-6 md:text-4xl lg:text-5xl">
                Tan fácil como contarle a un amigo a dónde quieres ir.
              </div>
              <div className="flex justify-center mt-5">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70 rounded-xl"
                    src="/DETAIL.png"
                  />
                </AnimatedContent>
              </div>
              <div className="flex justify-center mt-7">
                <ScrollVelocity
                  className="custom-scroll-text"
                  texts={textsVelocity}
                  velocity={50}
                />
              </div>
            </div>
            <div className="flex justify-center my-4">
              <div className="flex gap-3">
                <Link
                  isExternal
                  className="bg-[#FF6200] text-white hover:bg-[#FF6200]/90 rounded-full shadow-lg px-8 py-2 transition-all"
                  href="https://app.esviaia.com/"
                  onPress={() => {
                    {
                      posthog.capture("button_clicked", { property: "to_app" });
                    }
                  }}
                >
                  Ir a la App
                </Link>
              </div>
            </div>
            <div className="flex justify-center gap-2 align-content-center text-xl md:text-4xl lg:text-5xl">
              <div>
                <span> Vamos a planear algo juntos 🛎️</span>
              </div>
            </div>
            <div className="flex justify-center">
              <RotatingText
                animate={{ y: 0 }}
                className="px-2 sm:px-2 md:px-3 text-black font-boldoverflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                exit={{ y: "-120%" }}
                initial={{ y: "100%" }}
                rotationInterval={2000}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                staggerDuration={0.025}
                staggerFrom="last"
                texts={textsRotating}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </div>
            <div className="flex gap-4 justify-center my-4">
              <Chip
                className="relative overflow-hidden cursor-pointer transition-all hover:scale-105 bg-gray-50 border-2 border-gray-200 "
                style={{
                  padding: "16px 24px",
                  borderRadius: "999px",
                }}
              >
                <ShinyText
                  className="text-gray-800  font-semibold text-lg"
                  disabled={false}
                  speed={10}
                  text="¡Muy pronto!"
                />
              </Chip>
            </div>
          </div>
          {/* Blur */}
          <div className="bg-gradient-to-b from-[#fcfcfc] to-gray-200/50 w-full pb-3 px-8 opacity-50 blur-md">
            {/* <div className="bg-gradient-to-b from-[#fcfcfc] to-gray-100/50 w-full pb-3 px-8">
              <div className="text-2xl pt-6 md:text-4xl lg:text-5xl">
                Adiós a las notas sueltas y los links que se pierden🌪️
              </div>
              <div className="flex justify-center mt-7">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-full"
                    src="/orden.png"
                  />
                </AnimatedContent>
              </div>
              <p className="text-2xl text-left pl-10 py-10 md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide">
                🗓️ Elige fechas <br />
                💰 Define un presupuesto <br />
                👥 Invita a amigos
              </p>
              <div className="flex justify-center">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-full"
                    src="/config.png"
                  />
                </AnimatedContent>
              </div>
              <div className="text-4xl pt-10 md:text-4xl lg:text-5xl">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
                  showBorder={false}>
                  VIAIA organiza todo mientras tú piensas en la aventura.
                </GradientText>
                <p>🥾</p>
              </div>
              <div className="flex justify-center">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-full"
                    src="/friend.png"
                  />
                </AnimatedContent>
              </div>
              <p className="text-xl pb-2 pt-6 md:text-4xl lg:text-5xl">
                Con VIAIA, todos pueden proponer, votar y ajustar detalles en un
                solo espacio.
              </p>
              <p className="text-2xl text-left pl-8 py-10 md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide">
                🚫 ¿Dónde nos quedamos? <br />
                🚫 ¿Alguien reservó esto? <br />✅ Todo está ahí, listo para que
                el viaje fluya.
              </p>
              <div className="text-4xl pt10 md:text-4xl lg:text-5xl">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
                  showBorder={false}>
                  Viajar en grupo no debería sentirse como coordinar una logística
                  imposible.
                </GradientText>
                <p>🥾</p>
              </div>
              <div className="py-8">
                <SplitText
                  className="text-4xl font-bold md:text-5xl lg:text-6xl"
                  delay={50}
                  text="¡El Planner lo tiene todo y más!"
                />
              </div>
            </div>
            <div className="bg-gradient-to-b from-[#fcfcfc] to-gray-100/50 w-full pb-3 px-8">
              <div className="text-4xl pt10 md:text-4xl lg:text-5xl">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
                  showBorder={false}>
                  Reservar Sin Estrés, solo con Emoción
                </GradientText>
                <p>🤩</p>
              </div>
              <p className="text-2xl text-left pl-8 py-10 md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide">
                🛒 Elige lo que te gusta. <br />
                📑 Revisa los detalles. <br />
                💳 Paga solo o divide. <br />✅ Listo.
              </p>
              <div className="flex justify-center">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/shopping.png"
                  />
                </AnimatedContent>
              </div>
              <p className="text-xl py-4 md:text-4xl lg:text-5xl">
                Después de tu viaje, VIAIA te preguntará ¿Cómo estuvo?
              </p>
              <p className="text-2xl text-left pl-8 py-10 md:text-4xl lg:text-5xl font-light leading-relaxed tracking-wide">
                📝 Deja una calificación <br />
                💬 Unas palabras si quieres. <br />
                ✨ Eso es todo. <br />
              </p>
              <div className="text-4xl pt10 md:text-4xl lg:text-5xl">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={["#2E005D", "#5C0087", "#8A0087", "#FF6200", "#FF8000"]}
                  showBorder={false}>
                  Tu experiencia ayuda a hacer VIAIA más inteligente.
                </GradientText>
                <p>🫶</p>
              </div>
              <div className="flex justify-center">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/review.png"
                  />
                </AnimatedContent>
              </div>
            </div> */}
            <div className="bg-gradient-to-b from-[#fcfcfc] to-gray-100/50 w-full pb-3 px-8">
              <div className="py-8">
                <SplitText
                  className="text-2xl font-bold md:text-5xl lg:text-6xl"
                  delay={50}
                  text="Tu plan de viaje se organiza solo."
                />
              </div>
              <div className="flex justify-center">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70"
                    src="/itinerario.png"
                  />
                </AnimatedContent>
              </div>
              <div className="text-4xl pt-10 md:text-4xl lg:text-5xl">
                <GradientText
                  animationSpeed={10}
                  className="custom-class"
                  colors={[
                    "#2E005D",
                    "#5C0087",
                    "#8A0087",
                    "#FF6200",
                    "#FF8000",
                  ]}
                  showBorder={false}
                >
                  Viaia ya está lista. Solo faltas tú.
                </GradientText>
                <p>😎</p>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </MobileOnly>
  );
}
