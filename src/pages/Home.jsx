import React, { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const Home = () => {
  const videoRef = useRef(null);
  useEffect(() => {
    Swal.fire({
      title: "Bienvenidos",
      text: "Reporte a los Leones - Proyecto Humanidades",
      imageUrl: "/logo.png",
      // imageWidth: 200,
      // imageHeight: 200,
      // imageAlt: "Custom image",
      customClass: {
        confirmButton:
          "bg-lion-yellow text-lion-blue text-xl hover:bg-lion-blue hover:text-lion-yellow transition duration-300 font-helvetic-bold border-transparent focus:outline-none focus:ring-0",
        title: "text-lion-yellow lg:text-3xl text-xl uppercase font-helvetic-bold", // Estilo del título
        popup:
          "text-lion-blue lg:text-2xl text-base font-helvetic-medium rounded-3xl shadow-lion-yellow w-[95%] lg:w-[40%]", // Estilo general del texto en el popup
        image: "w-[100px] lg:w-[200px]  ", // Estilo de la imagen
      },
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="w-full flex justify-center items-start">
        <div className="w-[90%] h-[100px] lg:w-[70%] lg:h-[200px] mt-5 flex justify-center items-center rounded-[32px] bg-lion-blue">
          <h1 className="font-helvetic-bold text-4xl lg:text-8xl text-lion-yellow">
            ¿QUÉ SOMOS?
          </h1>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <div className="w-[80%] h-full mt-5 lg:flex lg:flex-row flex flex-col">
          <div className="w-full lg:p-10">
            <h2 className="text-justify text-xl lg:text-3xl font-helvetic-medium">
            El Clubes de Leones es una organización mundial de servicio con más de 46.000 clubes y 1,5 millones de miembros activos distribuidos en 206 países y áreas geográficas.
            </h2>
            <p className="text-justify font-helvetic-light lg:text-xl text-base mt-5">
              Nuestra misión es trabajar incansablemente para promover el
              desarrollo sostenible, la justicia social y la equidad en todo el
              mundo, asi como satisfacer las necesidades de la comunidad tanto a nivel global como local. En esta página, nos enfocaremos específicamente en la lucha
              contra la pobreza en el Perú, un desafío que afecta a millones de
              personas y limita su acceso a una vida digna.
            </p>
            <h3 className="text-start lg:text-2xl text-xl font-helvetic-medium mt-5">
              La pobreza en el Perú es una realidad compleja y multidimensional.
            </h3>
            <p className="text-justify font-helvetic-light lg:text-xl text-base">
              Se manifiesta en la falta de acceso a necesidades básicas como
              alimentación, agua potable, saneamiento, vivienda, educación y
              atención médica. Esta situación limita las oportunidades de las
              personas para desarrollarse plenamente y alcanzar su máximo
              potencial.
            </p>
            <h3 className="text-start lg:text-2xl text-xl font-helvetic-medium mt-5">
              Como Club, estamos comprometidos a trabajar de manera integral para
              combatir la pobreza en el Perú.
            </h3>
            <p className="text-justify font-helvetic-light lg:text-xl text-base">
              Implementamos programas y proyectos que buscan fortalecer las
              capacidades de las comunidades, promover el emprendimiento,
              generar oportunidades de empleo, mejorar la calidad de la
              educación y la salud, y defender los derechos de las personas más
              marginadas.
            </p>
            <h3 className="text-start lg:text-2xl text-xl font-helvetic-medium mt-5">
              Creemos que la erradicación de la pobreza es posible si trabajamos
              juntos.
            </h3>
            <p className="text-justify font-helvetic-light lg:text-xl text-base">
              Invitamos a todos los sectores de la sociedad a unirse a esta
              lucha: gobiernos, empresas, organizaciones civiles y ciudadanos
              individuales.
            </p>
          </div>

          <div className="w-full mt-7 pt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-3">
              <div className="w-full h-32 lg:h-48 rounded-2xl overflow-hidden">
                <img
                  src="/img01.png"
                  alt="img01"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-32 lg:h-48 rounded-2xl overflow-hidden">
                <img
                  src="/img02.png"
                  alt="img01"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-32 lg:h-48 rounded-2xl overflow-hidden">
                <img
                  src="/img03.png"
                  alt="img01"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-32 lg:h-48 rounded-2xl overflow-hidden">
                <img
                  src="/img04.png"
                  alt="img01"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-32 lg:h-48 rounded-2xl overflow-hidden">
                <img
                  src="/img05.png"
                  alt="img01"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-32 lg:h-48 rounded-2xl overflow-hidden">
                <img
                  src="/img06.png"
                  alt="img01"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center items-center p-5 bg-slate-400/40 rounded-3xl">
              <div className="flex h-[180px]">
                <FaQuoteLeft className="lg:text-[60px] text-3xl mr-4 text-lion-yellow" />
              </div>
              <p className="lg:text-3xl text-base pr-7 text-justify italic text-lion-blue font-helvetic-bold">
                JUNTOS PODEMOS CONSTRUIR UN MUNDO MÁS JUSTO Y EQUITATIVO, DONDE
                TODAS LAS PERSONAS TENGAN LA OPORTUNIDAD DE VIVIR UNA VIDA PLENA
                Y DIGNA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <video
          src="/lions.mp4"
          controls
          ref={videoRef}
          className="lg:w-1/2 w-[95%] h-auto rounded-3xl my-5"
        ></video>
      </div>

      <div className="relative bg-[url('/ciudad-de-juliaca.jpg')] bg-cover bg-center lg:h-screen h-full w-full">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 lg:p-10 text-white flex flex-col justify-center items-center">
          <h2 className="lg:text-7xl text-4xl font-helvetic-bold text-lion-yellow mt-10 lg:mt-28 lg:mb-11">
            PROPÓSITO
          </h2>
          <div className="lg:w-[80%] lg:h-[60vh] w-[95%] h-full lg:p-8 p-4 rounded-3xl bg-[#00000080] backdrop-blur-sm mb-5">
            <p className="lg:text-4xl text-lg font-helvetic-regular text-justify mb-4">
              En Lions Club, estamos comprometidos a combatir la pobreza en
              todas sus formas. Creemos que todos merecen la oportunidad de
              vivir una vida digna y plena, y estamos trabajando arduamente para
              hacer de esto una realidad.
            </p>
            <p className="lg:text-3xl text-base font-helvetic-regular text-justify mb-8">
              Por eso, te pedimos tu ayuda. Si vives en una zona donde la
              pobreza es un problema grave, te pedimos que la reportes aquí. Tu
              información nos ayudará a identificar las áreas más afectadas y a
              canalizar recursos y apoyo a quienes más lo necesitan.
            </p>
            <h3 className="lg:text-3xl text-lg font-helvetic-bold text-lion-yellow mb-4">
              ¿Cómo puedes ayudar?
            </h3>
            <ol className="list-decimal pl-5 font-helvetic-regular lg:text-2xl text-base">
              <li className="mb-2">
                <span className="font-helvetic-bold text-lion-yellow">
                  Reporta tu zona:
                </span>{" "}
                Ingresa tu dirección o selecciona tu ciudad en el mapa
                interactivo.
              </li>
              <li className="mb-2">
                <span className="font-helvetic-bold text-lion-yellow">
                  Describe la situación:
                </span>{" "}
                Bríndanos detalles sobre el porcentaje de pobreza, las
                condiciones de vida y las necesidades más urgentes de la
                comunidad.
              </li>
              <li className="mb-2">
                <span className="font-helvetic-bold text-lion-yellow">
                  Sube fotos o videos (opcional):
                </span>{" "}
                Si tienes material visual que pueda ayudarnos a comprender mejor
                la situación, no dudes en compartirlo.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="relative bg-[url('/ciudad-de-juliaca-1.jpg')] bg-cover bg-center lg:h-full h-full w-full">
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 lg:p-10  text-white flex flex-col justify-center items-center">
          <h2 className="lg:text-7xl text-4xl font-helvetic-bold text-lion-yellow mt-10 lg:mt-28 lg:mb-11 text-center">
            ¿Qué haremos con tu información?
          </h2>
          <div  className="lg:w-[80%] lg:h-full w-[95%] h-full lg:p-8 p-4 rounded-3xl bg-[#00000080] backdrop-blur-sm mb-5">
            <ol className="list-decimal pl-5 font-helvetic-regular lg:text-3xl text-base">
              <li className="mb-2">
                <span className="font-helvetic-bold text-lion-yellow">
                  Localización:
                </span>{" "}
                Utilizaremos tu información para identificar las áreas más
                afectadas por la pobreza.
              </li>
              <li className="mb-2">
                <span className="font-helvetic-bold text-lion-yellow">
                  Contacto:
                </span>{" "}
                Nos pondremos en contacto contigo para obtener más información y
                coordinar acciones de ayuda.
              </li>
              <li className="mb-2">
                <span className="font-helvetic-bold text-lion-yellow">
                  Ayuda humanitaria:
                </span>{" "}
                Canalizaremos recursos y apoyo a las comunidades más
                necesitadas, como alimentos, medicinas, ropa y materiales de
                construcción.
              </li>
              <li className="mb-2">
                <span className="font-helvetic-bold text-lion-yellow">
                  Proyectos de desarrollo:
                </span>{" "}
                Trabajaremos con las comunidades para desarrollar proyectos a
                largo plazo que promuevan el autoabastecimiento y la generación
                de oportunidades.
              </li>
            </ol>
            <h3 className="lg:text-5xl text-2xl font-helvetic-bold text-lion-yellow lg:mt-28 lg:mb-11 text-center">
              Juntos podemos hacer la diferencia:
            </h3>
            <p className="lg:text-4xl text-base font-helvetic-regular text-justify mb-4">
              Cada reporte que recibimos es un paso más hacia un futuro más
              justo y equitativo. Con tu ayuda, podemos llegar a más personas y
              brindarles la asistencia que necesitan para salir de la pobreza.
            </p>

            <h3 className="text-3xl font-helvetic-bold text-lion-yellow mb-4 uppercase my-10 text-center">
              ¡Gracias por tu apoyo!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
