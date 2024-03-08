import React, { Fragment } from 'react';
// import About from './components/About';
import Section from '../../Section/Section';
import MeetingForm from '../../../components/Form/MeetingForm';
import aboutMeImg from '../../../assets/img/me/mePhoto.jpeg'


const AboutComponent = () => {
  return (
    <Section>
    {/* <Fade delay={300} direction="right"> */}
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 my-10 mt-16 mb-10">
      <div className="col-span-1 md:col-span-1 xl:col-span-2 flex flex-col justify-center xl:ml-6">
        <h2 className="text-5xl xl:text-4xl text-center xl:text-start  text-primary font-bold uppercase">
            Sobre mí
          </h2>
        <div className='grid grid-cols-1 xl:grid-cols-2'>
          <div className="col-span-2 xl:col-span-1 flex justify-center flex-col">
            <img
              src={aboutMeImg}
              alt="about-img"
              className="object-cover rounded-full shadow-lg h-[280px] w-[280px] mt-10 mx-20 md:mx-2 md:w-[300px] md:h-[300px] xl:w-[350px] xl:h-[350px] xl:my-10 xl:mx-20 hover:scale-110 duration-300"
            />
          </div>
          <div className="col-span-2 xl:col-span-1 ">
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 xl:text-left">   
              Bienvenido a Verónica Concha Propiedades, tu destino confiable para arriendos y ventas 
              inmobiliarias! En nuestra plataforma, te ofrecemos una amplia gama de propiedades cuidadosamente 
              seleccionadas para satisfacer tus necesidades y preferencias. Con la experiencia y dedicación de 
              Verónica Concha, nuestra profesional inmobiliaria líder, te garantizamos un servicio personalizado y 
              transparente en cada paso del proceso. Ya sea que estés buscando el hogar perfecto para vivir, invertir 
              en bienes raíces o gestionar el arriendo de tu propiedad, estamos aquí para hacer que tus sueños inmobiliarios 
              se hagan realidad.
              <br />
              <br />
                Descubre la excelencia en el servicio inmobiliario con Verónica Concha Propiedades. 
                ¡Tu próxima propiedad te espera!
              <br />
            </p>
            <p className="text-lg xl:text-xl text-gray-700 mt-8 ml-0 xl:ml-1 md:text-center xl:text-left">
              Verónica Concha.
            </p>
            <p className="text-xl xl:text-xl text-gray-700 ml-0 xl:ml-1 md:text-center xl:text-left">
              Fundador de Verónica Concha  Propiedades.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* </Fade>  */}
  </Section>
  );
};

export default AboutComponent;
