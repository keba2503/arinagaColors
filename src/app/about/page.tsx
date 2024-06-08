import rightImg from "@/images/about-hero-right.png";
import React, {FC} from "react";
import SectionHero from "./SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

export interface PageAboutProps {
}

const PageAbout: FC<PageAboutProps> = ({}) => {
    return (
        <div className={`nc-PageAbout overflow-hidden relative`}>
            {/* ======== BG GLASS ======== */}
            <BgGlassmorphism/>
            <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
                <SectionHero
                    rightImg={rightImg}
                    heading="Nosotros"
                    btnText=""
                    subHeading="¡Bienvenido a Arinaga Colors!
          Disfruta de una estancia acogedora en nuestras viviendas
          vacacionales ubicadas en la Playa de Arinaga, con impresionantes
          vistas al mar y encantadoras terrazas o balcones. Hemos decorado
          los apartamentos, conocidos como 'The White House',
          'The Yellow House' y 'The Blue House',
           siguiendo tonalidades que representan la belleza de las Islas Canarias."
                />
                <div className="text-justify text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
                    <span className="block md:inline">
                      Te recomendamos que te sumerjas en la relajante experiencia de contemplar el mar
                      mientras te relajas con una bebida en la mano, acompañado del suave sonido de las olas.
                      Nuestras viviendas son ideales para parejas en busca de un refugio romántico, así como para grupos de hasta 5 personas.
                    </span>
                    <br/><br/>
                    <span className="block md:inline">
                      Además, si viajas con una familia más grande, también podemos combinar varios apartamentos para acomodarlos a todos.
                      Nuestros alojamientos son exteriores y llenos de luz, totalmente equipados con lavadora, plancha, acceso ilimitado a
                      Internet de alta velocidad (fibra óptica), secador de pelo y Smart TV. La cocina de estilo americano cuenta con placa
                      vitrocerámica, nevera, microondas, horno, congelador, vajilla, cubertería, utensilios de cocina, cafeteras (de cápsula, americana e italiana),
                      tostadora, hervidor de agua y exprimidor. También ofrecemos todo lo necesario para tu bebé (cuna, truna y bañera), bajo petición y sin ningún
                      coste añadido.
                    </span>
                    <br/><br/>
                    <span className="block md:inline">
                       Encontrarás un paseo de aproximadamente 2 kilómetros que recorre el pueblo de un extremo a otro. Nuestras viviendas se
                       encuentran en este encantador paseo, rodeado de una gran variedad de restaurantes y bares. La playa se divide en varias
                       zonas de baño, la mayoría de ellas de piedra, pero también hay áreas con arena. Además, cerca de la vivienda, encontrarás
                       la zona del Soco Negro, con una piscina natural y plataformas de madera para tomar el sol, y la zona del Risco Verde, ideal
                       para bañarse con marea alta y también con plataformas de madera para relajarse.
                    </span>
                    <br/><br/>
                    <span className="block md:inline">
                        Ven y disfruta de unas vacaciones inolvidables en Arinaga Colors, donde el mar, la tranquilidad y la comodidad se unen para ofrecerte una
                        experiencia única en la Playa de Arinaga. Mi familia y yo nos esforzamos por ofrecer a nuestros huéspedes un ambiente cálido y acogedor
                        para que su estancia sea inolvidable. ¡No pierdas la oportunidad de disfrutar de unas vacaciones perfectas en Arinaga!
                     </span>
                </div>
                {/*  <SectionFounder/>  */}
                <SectionSubscribe2/>
            </div>
        </div>
    );
};

export default PageAbout;
