import React from "react";

const LandingPage = () => {
  return (
    <section className="text-gray-600 body-font">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://lh3.googleusercontent.com/p/AF1QipNPrz48Ng409fZAqYD8W_lYMc9-NVTrfEB_SXtl=s680-w680-h510"
          ></img>
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Al volante
            </h1>
            <p className="mb-8 leading-relaxed">
              En Al Volante, entendemos que aprender a conducir es más que
              dominar un vehículo: es adquirir confianza y seguridad en las
              carreteras del Gran Buenos Aires. Nos enorgullece ofrecerte una
              experiencia de aprendizaje personalizada y conveniente, comenzando
              desde tu hogar en la zona sur. Nuestros instructores altamente
              capacitados están comprometidos a guiarte en cada paso del camino.
              Ya sea que estés empezando desde cero o perfeccionando tus
              habilidades existentes, adaptamos nuestras lecciones para
              satisfacer tus necesidades individuales. 
              
              <br></br>
              <br />
              Además, contamos con una
              flota diversa de vehículos modernos y seguros, listos para
              proporcionarte la mejor experiencia de aprendizaje posible. Desde
              autos compactos hasta SUVs, tenemos el vehículo perfecto para cada
              etapa de tu desarrollo como conductor. No pierdas más tiempo
              buscando. ¡Déjanos venir a ti! Nuestro servicio de búsqueda abarca
              toda la zona sur del Gran Buenos Aires, asegurando que la
              conveniencia esté siempre a tu alcance. Con Al Volante, no solo
              aprendes a manejar, sino que descubres la verdadera libertad que
              viene con estar al volante. Contáctanos hoy mismo y comienza tu
              viaje hacia la independencia en la carretera.
            </p>

          </div>
        </div>
      </section>
    </section>
  );
};

export default LandingPage;
