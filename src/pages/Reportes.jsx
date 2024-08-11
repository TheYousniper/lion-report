import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Reportes = () => {
  const images = [
    {
      img: "/repoLoreto.png",
    },
    {
      img: "/repoPuno.png",
    },
    {
      img: "/repoUcayali.png",
    },
  ];

  const evidencia = [
    {
      title: "Juan Gonzales",
      img: "/niños1.png",
    },
    {
      title: "Laura Mamani",
      img: "/niños2.png",
    },
    {
      title: "Isabel Diaz",
      img: "/niños3.png",
    },
  ];

  return (
    <>
      <div className="relative bg-[url('/ciudad-de-juliaca-2.jpg')] bg-cover bg-center h-screen w-full">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 flex justify-center items-start z-20">
          <div className="w-[95%] h-[120px] p-5 lg:w-[70%] lg:h-[200px] mt-5 flex justify-center items-center rounded-[32px] bg-lion-blue">
            <h1 className="font-helvetic-bold text-lg lg:text-6xl uppercase text-center text-lion-yellow">
              A continuación, algunos reportes que nos llegaron de diferentes
              partes del Peru.
            </h1>
          </div>
        </div>
        <div className="relative z-30  w-full h-screen lg:pt-40 pt-36 flex justify-center items-center">
          {" "}
          {/* Asegúrate de que este div esté encima de los otros elementos */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            initialSlide={1}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper "
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative bg-[url('/ciudad-de-juliaca-3.jpg')] bg-cover bg-center lg:h-screen w-full h-full">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 flex justify-center items-start z-20">
          <div className="lg:w-[70%] lg:h-[200px] w-[95%] h-[150px] mt-5 flex flex-col justify-center items-center rounded-[32px] bg-lion-blue">
            <h1 className="font-helvetic-bold text-2xl lg:text-8xl text-lion-yellow">
              Evidencia
            </h1>
            <p className="font-helvetic-regular text-lion-yellow lg:text-2xl text-lg text-center px-2 lg:pt-5">
              ​​Una muestra de como es que viven estas personas en la región de
              Puno.
            </p>
            <p className="font-helvetic-regular text-lion-yellow lg:text-2xl text-lg text-center px-2 lg:pt-5">
              ​​ Mandadas por:
            </p>
          </div>
        </div>
        <div className="relative z-20 w-full lg:h-screen h-full pt-40 flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-7">
            {evidencia.map((evidencia, index) => (
              <div
                key={index}
                className="bg-lion-blue p-4 shadow-lion-yellow rounded-lg lg:w-full w-[90%] mx-auto lg:h-auto h-[300px]"
              >
                <h3 className="text-2xl uppercase font-helvetic-medium text-lion-yellow mb-2 text-center">
                  {evidencia.title}
                </h3>
                <img
                  src={evidencia.img}
                  alt="img"
                  className="lg:w-full lg:h-[320px] h-[200px] rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reportes;
