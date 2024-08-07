import React from "react";

const Colabora = () => {
  const items = [
    {
      item: "Taza de Ceramica",
      price: 12.0,
      img: "/col01.png",
    },
    {
      item: "Camiseta #We Serve",
      price: 20.0,
      img: "/col02.png",
    },
    {
      item: "Polo Azul Marino",
      price: 17.0,
      img: "/col03.png",
    },
    {
      item: "Delantal de cocina",
      price: 15.0,
      img: "/col04.png",
    },
    {
      item: "Bolso We Serve",
      price: 35.0,
      img: "/col05.png",
    },
    {
      item: "Mochila de Viaje",
      price: 45.0,
      img: "/col06.png",
    },
    {
      item: "Gorra Blanca",
      price: 7.0,
      img: "/col07.png",
    },
    {
      item: "Cartera",
      price: 40.0,
      img: "/col08.png",
    },
    {
      item: "Gorra Amarilla",
      price: 5.0,
      img: "/col09.png",
    },
    {
      item: "Bufanda",
      price: 10.0,
      img: "/col10.png",
    },
    {
      item: "Paraguas",
      price: 9.0,
      img: "/col11.png",
    },
    {
      item: "Cartera Blanca",
      price: 50.0,
      img: "/col12.png",
    },
    {
      item: "Polera Rosa",
      price: 28.0,
      img: "/col13.png",
    },
    {
      item: "Polera Morada",
      price: 29.0,
      img: "/col14.png",
    },
    {
      item: "Camiseta Verde #We Serve",
      price: 28.0,
      img: "/col15.png",
    },
    {
      item: "Camiseta Negra Leon #We Serve",
      price: 25.0,
      img: "/col16.png",
    },
    {
      item: "Polera Negra #We Serve",
      price: 29.0,
      img: "/col17.png",
    },
  ];

  return (
    <>
      <div className="w-full flex justify-center items-start">
        <div className="w-[90%] h-[200px] mt-5 flex flex-col justify-center items-center rounded-[32px] bg-lion-blue">
          <h1 className="font-helvetic-bold text-8xl text-lion-yellow">
            ¡AYUDANOS A SERVIR!
          </h1>
          <p className="font-helvetic-regular text-lion-yellow text-2xl pt-5">
            ¡Te presentamos nuestra tienda de ropa y nuestro botón de donación!
          </p>
        </div>
      </div>
      <div className="w-full bg-white flex flex-wrap justify-center">
  {
    items.map((item, index) => (
      <div key={index} className="w-[20%] flex flex-col justify-center items-center m-2 p-2 bg-white rounded-[32px] shadow-lg">
        <div className="w-full h-[300px] flex justify-center items-center rounded-[32px]">
          <img src={item.img} alt={item.item} className="w-[200px]" />
        </div>
        <div className="w-full flex flex-col justify-center items-center mt-2">
          <h1 className="font-helvetic-bold text-2xl text-lion-yellow text-center">{item.item}</h1>
          <p className="font-helvetic-regular text-lion-yellow text-xl text-center">Precio: ${item.price}</p>
          <button className="w-[150px] h-[40px] mt-2 bg-lion-yellow rounded-[32px] font-helvetic-bold text-lion-blue text-xl">Comprar</button>
        </div>
      </div>
    ))
  }
</div>

    </>
  );
};

export default Colabora;
