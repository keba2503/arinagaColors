// components/SustainabilitySection.js

import Image from 'next/image';
import imageEnergy from '../../images/energy-saving.png';
import imageWasteManagement from '../../images/waste-management.png';
import imageResponsibleConsumption from '../../images/responsible-consumption.png';
import imageLowConsumptionAppliances from '../../images/low-consumption-appliances.png';
import imageNaturalAmenities from '../../images/natural-amenities.png';
import imageGreenPhilosophy from '../../images/green-philosophy.png';
import banner from '../../images/banner-arinaga.jpg';

const SustainabilitySection = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="relative w-full h-96 overflow-hidden">
        <Image
          src={banner}
          alt="Banner Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 p-4 text-white rounded-2xl w-1/2">
          <h2 className="text-3xl md:text-4xl">Sostenibilidad</h2>
          <p className="mt-2 text-base md:text-lg">
            En Arinaga Colors, estamos comprometidos con el medio ambiente y
            adoptamos prácticas sostenibles que respetan nuestro entorno y
            colaboran a reducir nuestra huella de carbono.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-8 ">
        <Card
          imgSrc={imageEnergy}
          title="Ahorro de energía"
          text="El uso de bombillas LED en todas las viviendas y en las zonas comunes permite un bajo consumo energético, producen menos calor y reducen la contaminación lumínica."
        />
        <Card
          imgSrc={imageWasteManagement}
          title="Gestión de residuos"
          text="Animamos a nuestros huéspedes a separar sus residuos empleando los distintos cubos de reciclaje puestos a su disposición."
        />
        <Card
          imgSrc={imageResponsibleConsumption}
          title="Consumo responsable"
          text="Fomentamos el consumo de productos locales y de temporada, apostando por los alimentos de proximidad y aconsejando a nuestros huéspedes."
        />
        <Card
          imgSrc={imageLowConsumptionAppliances}
          title="Electrodomésticos de bajo consumo"
          text="Apostamos por el uso de electrodomésticos de bajo consumo, catalogados con la letra A o B por su eficiencia energética."
        />
        <Card
          imgSrc={imageNaturalAmenities}
          title="Amenities naturales"
          text="Nuestros envases de gel y champú son 100% reciclables."
        />
        <Card
          imgSrc={imageGreenPhilosophy}
          title="Filosofía verde"
          text="Respetamos el entorno en el que se emplazan nuestras viviendas vacacionales y queremos compartir nuestra filosofía con nuestros huéspedes, asumiendo la responsabilidad de los impactos ambientales de nuestras acciones y trabajando activamente para reducir nuestra huella ecológica."
        />
      </div>
    </div>
  );
};

const Card = ({ imgSrc, title, text }) => (
  <div className="bg-white shadow-md p-6 rounded-2xl">
    <Image src={imgSrc} alt={title} className="w-32 h-32 mx-auto" />
    <h3 className="text-xl font-bold mt-4 text-center">{title}</h3>
    <p className="mt-2 text-gray-600 text-justify">{text}</p>
  </div>
);

export default SustainabilitySection;
