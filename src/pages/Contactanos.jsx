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
      <div className="relative w-full h-screen">
        <div className="inset-0 flex justify-center items-start z-20">
          <div className="lg:w-[70%] lg:h-[200px] w-[95%] mt-5 flex flex-col justify-center items-center rounded-[32px] bg-lion-blue">
            <h1 className="font-helvetic-bold lg:text-4xl text-base p-3 text-center uppercase text-lion-yellow">
              Si tienes algo que reportar o alguna idea que nos pueda ayudar a
              reducir o mitigar la pobreza en el Perú, no dudes en contactarnos.
            </h1>
          </div>
        </div>
        <div className="max-w-lg mx-auto my-7 p-6 bg-lion-blue rounded-lg shadow-lion-yellow">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-medium text-lion-yellow font-helvetic-medium uppercase text-xl"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium text-lion-yellow font-helvetic-medium uppercase text-xl"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block font-medium text-lion-yellow font-helvetic-medium uppercase text-xl"
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
                className="px-6 py-2 bg-lion-yellow text-lion-blue font-helvetic-medium text-xl rounded-md shadow transform hover:scale-110 transition-transform focus:outline-none"
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
