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
          <div className="w-[70%] h-[200px] mt-5 flex justify-center items-center rounded-[32px] bg-lion-blue">
            <h1 className="font-helvetic-bold text-5xl text-center uppercase text-lion-yellow">
              A continuación, algunos reportes que nos llegaron de diferentes
              partes del Peru.
            </h1>
          </div>
        </div>
        <div className="relative z-30  w-full h-screen pt-40 flex justify-center items-center">
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
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <img src={image.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="relative bg-[url('/ciudad-de-juliaca-3.jpg')] bg-cover bg-center h-screen w-full">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="absolute inset-0 flex justify-center items-start z-20">
          <div className="w-[70%] h-[200px] mt-5 flex flex-col justify-center items-center rounded-[32px] bg-lion-blue">
            <h1 className="font-helvetic-bold text-5xl text-center uppercase text-lion-yellow">
              Evidencia
            </h1>
            <p className="text-lion-yellow font-helvetic-regular text-4xl">
              ​​Una muestra de como es que viven estas personas en la región de
              Puno.
            </p>
            <p className="text-lion-yellow font-helvetic-regular text-4xl">
              ​​ Mandadas por:
            </p>
          </div>
        </div>
        <div className="relative z-30  w-full h-screen pt-40 flex flex-col justify-center items-center">
          <div className="grid grid-cols-3 gap-6">
            {evidencia.map((evidencia, index) => (
              <div
                key={index}
                className="bg-lion-blue p-4 shadow-lion-yellow rounded-lg"
              >
                <h3 className="text-2xl uppercase font-helvetic-medium text-lion-yellow mb-2 text-center">
                  {evidencia.title}
                </h3>
                <img
                  src={evidencia.img}
                  alt="img"
                  className="w-full h-[320px] rounded-md"
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
