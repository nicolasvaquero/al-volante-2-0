import React from "react";

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            Nuestros servicios
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Ofrecemos la siguiente variedad de servicios para que puedas
            aprender de manera comoda y segura
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Instructores
              </h2>
              <p className="leading-relaxed text-base">
                Contamos con la posibilidad de elegir tener clase con
                instructora/o. Para que te puedas comoda/o.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M2 7v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V7"></path>
                  <path d="M2 7h20"></path>
                  <path d="M12 7v14"></path>
                  <path d="M2 21a1 1 0 0 1 1-1h8v1H3a1 1 0 0 1-1-1z"></path>
                  <path d="M22 21a1 1 0 0 0-1-1h-8v1h8a1 1 0 0 0 1-1z"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Material didáctico
              </h2>
              <p className="leading-relaxed text-base">
                Brindamos modelos de examenes para que te puedas enfocar en lo
                que te van a tomar.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 17h14a1 1 0 001-1v-5a1 1 0 00-.68-.95l-1.5-.5a1 1 0 01-.82-1.15l.38-3.8A2 2 0 0015 4H9a2 2 0 00-1.97 1.6l-.39 3.8a1 1 0 01-.82 1.15l-1.5.5A1 1 0 004 11v5a1 1 0 001 1z" />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="16.5" cy="17.5" r="1.5" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Alquiler de auto para rendir examén
              </h2>
              <p className="leading-relaxed text-base">
                Te alquilamos el vehiculo para que puedas rendir sin preocuparte
                por nada más.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 17h14a1 1 0 001-1v-5a1 1 0 00-.68-.95l-1.5-.5a1 1 0 01-.82-1.15l.38-3.8A2 2 0 0015 4H9a2 2 0 00-1.97 1.6l-.39 3.8a1 1 0 01-.82 1.15l-1.5.5A1 1 0 004 11v5a1 1 0 001 1z" />
                  <circle cx="7.5" cy="17.5" r="1.5" />
                  <circle cx="16.5" cy="17.5" r="1.5" />
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Servicio puerta a puerta
              </h2>
              <p className="leading-relaxed text-base">
                Te pasamos a buscar y te dejamos en tu domicilio para que no
                tengas que moverte.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Amplia flota de vehiculos disponible
              </h2>
              <p className="leading-relaxed text-base">
                Contamos con una amplia flota de vehiculos para que puedas
                elegir el que te sea más comodo.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                Seguro
              </h2>
              <p className="leading-relaxed text-base">
                Contamos con vehiculos equipados con doble comando y seguro
                especial para coche escuela
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
