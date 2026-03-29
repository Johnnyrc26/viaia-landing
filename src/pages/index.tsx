import { Link } from "@heroui/link";
import { Button, Chip } from "@heroui/react";
import posthog from "posthog-js";

import SplitText from "@/blocks/TextAnimations/SplitText/SplitText";
import DefaultLayout from "@/layouts/default";
import AnimatedContent from "@/blocks/Animations/AnimatedContent/AnimatedContent";
import ScrollVelocity from "@/blocks/TextAnimations/ScrollVelocity/ScrollVelocity";
import RotatingText from "@/blocks/TextAnimations/RotatingText/RotatingText";
// import { siteConfig } from "@/config/site";
import GradientText from "@/blocks/TextAnimations/GradientText/GradientText";
import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import MobileOnly from "@/components/MobileOnly";
import ComparisonSection from "@/components/ComparisonSection";
import { PricingTiers } from "@/components/pricing";

const textsVelocity = [
  "Alojamientos Experiencias Actividades Transporte Organización",
  "Restaurantes Bares Consejos Cultura Turismo Aventura",
];

const textsRotating = [
  "Atención 24/7",
  "Ten un perfil web profesional",
  "Cómo atiendes a tus clientes",
  "Cómo te descubren",
  "Control total de lo que ofreces",
  "Tus reservas",
  "Atención multilenguaje",
  "Productos listos para mostrar",
  "Tu tiempo",
];

export default function IndexPage() {
  return (
    <MobileOnly>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center gap-4 md:py-4 overflow-x-hidden">
          <div className="inline-block w-full mt-52 text-center justify-center">
            <div className="bg-gradient-to-b from-[#fff] to-[#e9e9e9] w-full pb-10 px-6">
              <div className="max-w-4xl mx-auto">
                <div className="text-center py-10">
                  <SplitText
                    className="text-5xl font-bold md:text-5xl lg:text-6xl"
                    delay={50}
                    text="¡Hola, servicio!"
                  />
                </div>

                <div className="text-center mt-12">
                  <div className="text-4xl md:text-4xl lg:text-5xl flex flex-col items-center justify-center">
                    <GradientText
                      animationSpeed={10}
                      className="custom-class max-w-3xl mx-auto"
                      colors={[
                        "#2E005D",
                        "#5C0087",
                        "#8A0087",
                        "#FF6200",
                        "#FF8000",
                      ]}
                      showBorder={false}
                    >
                      ¿Alguna vez perdiste un cliente por una respuesta lenta o
                      confusa?
                    </GradientText>
                    <br />
                    <div className="text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl">
                      <p>
                        <b>Viaia</b> organiza tu información para que no vuelva
                        a pasar.
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 flex flex-col items-center gap-6">
                    {/* Botón principal - Web App */}
                    <div className="mt-12 flex flex-col items-center gap-6 w-full">
                      <div
                        className="w-full glowing-border group hover:scale-[1.02] active:scale-95 transition-all duration-300"
                        style={
                          {
                            "--surface": "white",
                            "--glow-intensity": "0.23",
                            "--border-width": "1px",
                          } as React.CSSProperties
                        }
                      >
                        <Button
                          as="a"
                          className="w-full bg-[rgba(243,243,243,1)] dark:bg-[#808080] backdrop-blur-xl font-medium tracking-wide border-none"
                          href="https://app.esviaia.com/details/c363b451-6815-4395-88d6-f6b08fe27447"
                          radius="full"
                          size="lg"
                          style={{
                            color: "black",
                            height: "56px",
                          }}
                        >
                          <span
                            className="flex items-center gap-3 relative z-10"
                            style={{ fontWeight: "bold" }}
                          >
                            <span className="flex">
                              Vive una nueva forma de atención ✨
                            </span>
                          </span>
                        </Button>
                      </div>
                    </div>

                    {/* Botones deshabilitados - App Store y Google Play */}
                    <Chip
                      className="relative overflow-hidden cursor-pointer transition-all hover:scale-105 bg-gray-50 border-2 border-gray-200 mx-auto"
                      style={{
                        padding: "16px 24px",
                        borderRadius: "999px",
                      }}
                    >
                      <ShinyText
                        className="text-gray-800 font-semibold text-lg"
                        disabled={false}
                        speed={10}
                        text="Apps móviles en camino"
                      />
                    </Chip>

                    <div className="flex flex-row gap-4 justify-center items-center w-full">
                      <button
                        disabled
                        className="opacity-70 cursor-not-allowed bg-transparent border-0 p-0"
                      >
                        <img
                          alt="Get it on Google Play"
                          className="h-10 w-auto"
                          src="/GetItOnGooglePlay_Badge_Web_color_English.png"
                        />
                      </button>
                      <button
                        disabled
                        className="opacity-70 cursor-not-allowed bg-transparent border-0 p-0"
                        onClick={(e) => e.preventDefault()}
                      >
                        <img
                          alt="Download on the App Store"
                          className="h-10 w-auto"
                          src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        />
                      </button>
                    </div>

                    <div className="pt-8 flex flex-col items-center">
                      <SplitText
                        className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto"
                        delay={50}
                        text="La claridad para tu cliente lo cambia todo."
                      />
                      <p className="text-4xl mt-4">✅</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 w-full py-6">
              <div className="flex flex-col items-center justify-center px-4 gap-10">
                <div className="text-4xl pt-8 md:text-4xl lg:text-5xl text-center">
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
                    Todo empieza con una conversación clara
                  </GradientText>
                  <p>💬</p>
                </div>

                <div className="text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl">
                  <p>
                    Tus clientes preguntan, <b>Viaia</b> responde al instante,
                    claro y profesional. Disponible siempre, incluso cuando tú
                    no estás.
                  </p>
                </div>

                {/* Ejemplos de prompts */}
                <div className="flex flex-col items-start justify-center px-6 gap-6 text-left">
                  <div className="bg-white border border-neutral-300 rounded-2xl shadow-sm p-6 max-w-2xl w-full">
                    <p className="font-semibold mb-4 text-neutral-600 text-base md:text-lg">
                      Ejemplos de preguntas que hacen tus clientes:
                    </p>
                    <ul className="space-y-3 text-neutral-800 text-base md:text-lg">
                      <li>💬 ¿Qué incluye este servicio?</li>
                      <li>📅 ¿Tienen disponibilidad para esta fecha?</li>
                      <li>💰 ¿Cuánto cuesta y que formas de pago hay?</li>
                      <li>📍 ¿Dónde están ubicados?</li>
                      <li>🕒 ¿Cuánto dura la experiencia?</li>
                      <li>📄 ¿Qué debo saber antes de reservar?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ── WHATSAPP ADD-ON HIGHLIGHT ── */}
            <div className="bg-[#fcfcfc] w-full py-16 px-6">
              <div className="max-w-7xl mx-auto">
                <div className="wa-highlight">
                  <style>{`
                    .wa-highlight {
                      border-radius: 24px;
                      background: #ffffff;
                      position: relative;
                      overflow: hidden;
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 0;
                      box-shadow: 0 4px 20px rgba(0,0,0,0.08);
                    }
                    .wa-highlight-bg {
                      position: absolute; inset: 0;
                      background:
                        radial-gradient(ellipse 55% 80% at 0% 100%, rgba(37,211,102,0.06) 0%, transparent 60%),
                        radial-gradient(ellipse 40% 60% at 100% 0%, rgba(0,122,138,0.05) 0%, transparent 55%);
                      pointer-events: none;
                    }
                    .wa-highlight-dots {
                      position: absolute; inset: 0;
                      background-image: radial-gradient(circle, rgba(0,0,0,.015) 1px, transparent 1px);
                      background-size: 22px 22px;
                      pointer-events: none;
                    }
                    .wa-highlight-left {
                      position: relative; z-index: 1;
                      padding: 52px 48px 52px 52px;
                      display: flex; flex-direction: column; gap: 24px;
                      border-right: 1px solid rgba(0,0,0,.06);
                    }
                    .wa-badge {
                      display: inline-flex; align-items: center; gap: 8px; width: fit-content;
                      background: rgba(37,211,102,.12);
                      border: 1px solid rgba(37,211,102,.25);
                      border-radius: 99px; padding: 5px 14px;
                      font-size: 12px; color: rgba(37,211,102,.9); font-weight: 600;
                      letter-spacing: .04em; text-transform: uppercase;
                      font-family: 'Open Sans', sans-serif;
                    }
                    .wa-badge-dot {
                      width: 6px; height: 6px; border-radius: 50%;
                      background: #25D366; flex-shrink: 0;
                      box-shadow: 0 0 6px rgba(37,211,102,.6);
                      animation: waPulse 2s ease-in-out infinite;
                    }
                    @keyframes waPulse {
                      0%, 100% { opacity: 1; transform: scale(1); }
                      50% { opacity: .6; transform: scale(1.3); }
                    }
                    .wa-highlight-left h3 {
                      font-family: 'Poppins', sans-serif;
                      font-size: clamp(26px, 3vw, 38px);
                      font-weight: 600; line-height: 1.1;
                      color: #1a1a1a; letter-spacing: -1px;
                      margin: 0;
                    }
                    .wa-highlight-left h3 em {
                      font-style: normal; color: #25D366;
                    }
                    .wa-highlight-left p {
                      font-size: 15px; color: rgba(0,0,0,.6);
                      line-height: 1.75; font-weight: 300; margin: 0;
                      max-width: 380px;
                    }
                    .wa-highlight-left p strong {
                      color: rgba(0,0,0,.8); font-weight: 500;
                    }
                    .wa-cta-link {
                      display: inline-flex; align-items: center; gap: 8px; width: fit-content;
                      background: #25D366; border: none; border-radius: 99px;
                      padding: 11px 24px; font-family: 'Open Sans', sans-serif;
                      font-size: 14px; font-weight: 500; color: #fff;
                      cursor: pointer; text-decoration: none;
                      transition: opacity .2s, transform .15s;
                      box-shadow: 0 4px 16px rgba(37,211,102,.35);
                    }
                    .wa-cta-link:hover { opacity: .9; transform: translateY(-1px); }
                    .wa-cta-link svg { flex-shrink: 0; }

                    .wa-highlight-right {
                      position: relative; z-index: 1;
                      padding: 52px 52px 52px 48px;
                      display: flex; flex-direction: column; gap: 14px; justify-content: center;
                    }
                    .wa-feat {
                      display: flex; align-items: flex-start; gap: 16px;
                      background: rgba(0,0,0,.02);
                      border: 1px solid rgba(0,0,0,.07);
                      border-radius: 14px; padding: 18px 20px;
                      transition: background .2s;
                    }
                    .wa-feat:hover { background: rgba(0,0,0,.04); }
                    .wa-feat-icon {
                      width: 36px; height: 36px; border-radius: 10px;
                      background: rgba(37,211,102,.12);
                      border: 1px solid rgba(37,211,102,.2);
                      display: flex; align-items: center; justify-content: center;
                      font-size: 17px; flex-shrink: 0;
                    }
                    .wa-feat-body { display: flex; flex-direction: column; gap: 4px; }
                    .wa-feat-title { font-size: 14px; color: rgba(0,0,0,.75); font-weight: 500; }
                    .wa-feat-desc { font-size: 12.5px; color: rgba(0,0,0,.5); line-height: 1.5; }

                    @media (max-width: 900px) {
                      .wa-highlight {
                        grid-template-columns: 1fr;
                      }
                      .wa-highlight-left {
                        padding: 36px 24px 28px;
                        border-right: none;
                        border-bottom: 1px solid rgba(0,0,0,.06);
                      }
                      .wa-highlight-right {
                        padding: 28px 24px 36px;
                      }
                      .wa-highlight-left h3 { font-size: clamp(24px, 7vw, 30px); }
                      .wa-highlight-left p { font-size: 14px; }
                    }
                  `}</style>

                  <div className="wa-highlight-bg" />
                  <div className="wa-highlight-dots" />

                  {/* Lado izquierdo — mensaje */}
                  <div className="wa-highlight-left">
                    <div className="wa-badge">
                      <span className="wa-badge-dot" />
                      <span>Add-on WhatsApp</span>
                    </div>
                    <h3>
                      Tu perfil Viaia
                      <br />
                      ahora también
                      <br />
                      opera tu <em>WhatsApp</em>
                    </h3>
                    <p>
                      Todo lo que configuraste en Flow — precios, reglas,
                      productos, comodidades —
                      <strong> Viaia lo usa para atender</strong> a quien te
                      escribe directamente al número que asignes.
                      <br />
                      <strong>Viaia</strong> trabaja por ti desde tu perfil y
                      opera tu whatsapp, no pierdas ni una sola oportunidad
                    </p>
                    <div className="flex justify-center">
                      <a
                        className="wa-cta-link"
                        href="https://api.whatsapp.com/send/?phone=584228846783"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <svg
                          fill="currentColor"
                          height="16"
                          viewBox="0 0 24 24"
                          width="16"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.118 1.528 5.852L0 24l6.272-1.508A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-4.992-1.364l-.358-.213-3.724.895.944-3.628-.234-.373A9.818 9.818 0 1112 21.818z" />
                        </svg>
                        Experimenta la atención por WhatsApp
                      </a>
                    </div>
                  </div>

                  {/* Lado derecho — features */}
                  <div className="wa-highlight-right">
                    <div className="wa-feat">
                      <div className="wa-feat-icon">📲</div>
                      <div className="wa-feat-body">
                        <div className="wa-feat-title">
                          Tu número, tu asistente
                        </div>
                        <div className="wa-feat-desc">
                          El cliente escribe al número que asignes. Viaia toma
                          el control y atiende la conversación completa.
                        </div>
                      </div>
                    </div>
                    <div className="wa-feat">
                      <div className="wa-feat-icon">⚡</div>
                      <div className="wa-feat-body">
                        <div className="wa-feat-title">
                          Misma información, más alcance
                        </div>
                        <div className="wa-feat-desc">
                          Una sola configuración en Flow. Viaia la usa tanto en
                          tu perfil como en WhatsApp.
                        </div>
                      </div>
                    </div>
                    <div className="wa-feat">
                      <div className="wa-feat-icon">🌍</div>
                      <div className="wa-feat-body">
                        <div className="wa-feat-title">
                          En cualquier idioma, a cualquier hora
                        </div>
                        <div className="wa-feat-desc">
                          Viaia se adapta al idioma del cliente. Sin horarios.
                          Sin días libres.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="bg-orange-50 w-full pt-6">
              <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl">
                <div className="text-4xl  md:text-4xl lg:text-5xl text-center">
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
                    Hazte fácil de conocer
                  </GradientText>
                  <p>🔍</p>
                </div>
                <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl px-4">
                  <p>Que te encuentren y te entiendan en segundos. 🤓</p>
                </div>
              </div>

              <div className="flex justify-center items-center flex-col gap-4 mt-7 pb-4 px-6 w-full max-w-3xl mx-auto">
                <AnimatedContent>
                  <div className="flex justify-center w-full">
                    <img
                      alt="Chat interface illustration"
                      className="w-3/4 max-w-md"
                      src="/MensajeUser.png"
                    />
                  </div>
                </AnimatedContent>
              </div>
            </div> */}

            <div className="bg-gradient-to-b from-[#fff] to-[#f4f4f4] w-full pb-10 px-6">
              <div className="text-4xl pt-6 md:text-4xl lg:text-5xl flex flex-col items-center justify-center text-center">
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
                  Siempre tu servicio al alcance de tus clientes.
                </GradientText>
                <p>⚡️</p>
                <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl px-4">
                  <p>
                    Tu servicio listo, claro y profesional, sin perder tiempo ni
                    clientes.
                  </p>
                </div>
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
            </div>

            <div className="bg-[#fff] pb-10 px-6">
              <div className="text-4xl pt-6 md:text-4xl lg:text-5xl flex flex-col items-center justify-center text-center">
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
                  Atención 24/7 en todos los idiomas
                </GradientText>
                <p>🌎</p>
                <div className="text-2xl pt-6 md:text-3xl lg:text-4xl text-center max-w-3xl px-4">
                  <p>
                    Tus clientes siempre reciben respuestas claras y rápidas.
                  </p>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <AnimatedContent>
                  <img
                    alt="Chat interface illustration"
                    className="w-70 rounded-md"
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
            <ComparisonSection />
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
            <div className="flex justify-center gap-2 align-content-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              <div>
                <span> Optimiza todo lo que tu servicio ofrece 🛎️</span>
              </div>
            </div>
            <div className="flex justify-center">
              <RotatingText
                animate={{ y: 0 }}
                className="px-3 sm:px-4 md:px-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black font-bold overflow-hidden py-1 sm:py-1.5 md:py-2 justify-center rounded-lg tracking-wide"
                exit={{ y: "-120%" }}
                initial={{ y: "100%" }}
                rotationInterval={3500} // más lento
                splitLevelClassName="inline-flex mr-1 overflow-hidden justify-center items-center"
                staggerDuration={0.025}
                staggerFrom="last"
                texts={textsRotating}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </div>
            <Button
              className="bg-[#007A8A] text-white hover:bg-[#0088C2] rounded-full shadow-lg px-8 py-2 transition-all mt-6"
              size="lg"
              onPress={() =>
                (window.location.href = "https://wa.me/584228846783")
              }
            >
              Contáctanos
            </Button>
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
                  text="¡Muy pronto más!"
                />
              </Chip>
            </div>
          </div>
          {/* Blur */}
          <div className="bg-gradient-to-b from-[#fcfcfc] to-gray-200/50 w-full pb-3 px-8 opacity-50 blur-md">
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
          <PricingTiers />
        </section>
      </DefaultLayout>
    </MobileOnly>
  );
}
