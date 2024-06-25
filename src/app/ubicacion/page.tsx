import React from "react";

const Page: React.FC = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <iframe
            width="100%"
            height="1000" // Adjust this height as needed
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3279.78672081212!2d-58.284028!3d-34.710559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32d2eb4cf7f55%3A0x1d3064726c4b0011!2sEscuela%20de%20Manejo%20-%20Al%20Volante!5e0!3m2!1ses-419!2sar!4v1719283541933!5m2!1ses-419!2sar"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Dirección
              </h2>
              <p className="mt-1">
                Belgrano 483, B1876 Bernal, Provincia de Buenos Aires
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Email
              </h2>
              <a
                href="mailto:example@email.com"
                className="text-yellow-500 leading-relaxed"
              >
                example@email.com
              </a> */}
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Tel
              </h2>
              <p className="leading-relaxed">1138823750</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Al volante Bernal
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            </p>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-center relative">
          <iframe
            width="100%"
            height="1000" // Adjust this height as needed
            className="absolute inset-0"
            frameBorder={0}
            title="map"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7796.1613645648185!2d-58.40319175804162!3d-34.758563368541864!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd293ef8671a3%3A0x7b188c3dcbbe49b6!2sAntonio%20S%C3%A1enz%20339%2C%20B1832HUG%20Lomas%20de%20Zamora%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1719284296624!5m2!1ses-419!2sar"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Dirección
              </h2>
              <p className="mt-1">
                Antonio Sáenz 339, B1832HUG Lomas de Zamora, Provincia de Buenos
                Aires
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              {/* <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                Email
              </h2>
              <a
                href="mailto:example@email.com"
                className="text-yellow-500 leading-relaxed"
              >
                example@email.com
              </a> */}
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                Tel
              </h2>
              <p className="leading-relaxed">1138823750</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Al volante Lomas
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
          <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
