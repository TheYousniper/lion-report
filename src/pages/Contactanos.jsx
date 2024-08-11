import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactanos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qq1bckt", "template_adrqs89", form.current, {
        publicKey: "MuznnZpNuIiMLwf-k",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <div className="relative w-full h-screen z-[-10]">
        <div className="inset-0 flex justify-center items-start z-20">
          <div className="w-[70%] h-[200px] mt-5 flex flex-col justify-center items-center rounded-[32px] bg-lion-blue">
            <h1 className="font-helvetic-bold text-4xl text-center uppercase text-lion-yellow">
              Si tienes algo que reportar o alguna idea que nos pueda ayudar a reducir o mitigar la pobreza en el Perú, no dudes en contactarnos.
            </h1>
          </div>
        </div>
        <div className="max-w-lg mx-auto my-7 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-4xl uppercase bg-lion-blue w-[80%] rounded-xl mx-auto p-2 font-helvetic-bold mb-6 text-center text-lion-yellow ">
            Contáctanos
          </h2>
          <form>
            <div className="mb-4">
              <label
                for="name"
                className="block font-medium text-lion-blue font-helvetic-medium uppercase text-xl"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="email"
                className="block font-medium text-lion-blue font-helvetic-medium uppercase text-xl"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                for="message"
                className="block font-medium text-lion-blue font-helvetic-medium uppercase text-xl"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-lion-blue text-lion-yellow font-helvetic-medium text-xl rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contactanos;
