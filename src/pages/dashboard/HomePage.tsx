import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Logo from '../../assets/LogoBlanco.webp';
import Integracion from '../../assets/Integración.webp';
import View1 from '../../assets/App-1.webp';
import View2 from '../../assets/App-2.webp';
import View3 from '../../assets/App-3.webp';

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full bg-primary text-white">
      {/* Hero Section */}
      <div className="p-10 md:p-14 shadow-md mb-6 md:mb-8 text-center w-full">
        <img
          src={Logo}
          alt="PanaPay Logo"
          className="mx-auto mb-6 md:mb-8 h-48 md:h-64" // Ajusta el tamaño aquí
        />
        <p className="text-3xl md:text-4xl mb-8 md:mb-10">
          La procesadora de pagos para cooperativas urbanas y rurales en Ecuador
        </p>
        <button
          className="btn-primary text-2xl md:text-3xl px-10 md:px-12 py-5 md:py-6 flex items-center mx-auto"
          onClick={handleButtonClick}
        >
          Comienza Ahora
          <ArrowRight className="ml-2 h-8 w-8" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative h-4/5">
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-75 rounded-full p-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="w-full h-80 md:h-[30rem] overflow-hidden">
              <img
                src={Integracion}
                alt="Modal Content"
                className="w-full h-full object-contain rounded-lg mt-8"
              />
            </div>
          </div>
        </div>
      )}

      {/* Cómo Funciona */}
      <div className="p-4 md:p-6 shadow-md mb-2 md:mb-4 w-full">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-3 md:mb-5">
          Cómo Funciona
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-1 md:gap-1 mb-3 md:mb-5 items-center">
          <div className="col-span-1 bg-secondary p-2 md:p-4 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-1">Cliente</h3>
            <p>Inicia la transacción</p>
          </div>

          <div className="hidden md:flex justify-center items-center text-highlight col-span-1 mx-0">
            <ArrowRight className="h-6 w-6" />
          </div>

          <div className="col-span-1 bg-secondary p-2 md:p-4 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-1">Cooperativa</h3>
            <p>Procesa la solicitud</p>
          </div>

          <div className="hidden md:flex justify-center items-center text-highlight col-span-1 mx-0">
            <ArrowRight className="h-6 w-6" />
          </div>

          <div className="col-span-1 bg-secondary p-2 md:p-4 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-1">Pana Pay</h3>
            <p>Valida y enruta</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-1 items-center">
          <div className="col-span-1 bg-secondary p-2 md:p-4 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-1">API</h3>
            <p>Gestiona la operación</p>
          </div>

          <div className="hidden md:flex justify-center items-center text-highlight col-span-1 mx-0">
            <ArrowRight className="h-6 w-6" />
          </div>

          <div className="col-span-1 bg-secondary p-2 md:p-4 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-1">Procesadora</h3>
            <p>Completa el pago</p>
          </div>
        </div>
      </div>
      <div className="mb-4 w-full px-4 md:px-6">
        <h3 className="text-xl md:text-3xl font-bold text-center mb-3 md:mb-5">
          Nuestro Servicio
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-full h-96">
              <img
                src={View1}
                alt="Nuestra Aplicación 1"
                className="rounded-lg shadow-md w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-96">
              <img
                src={View2}
                alt="Nuestra Aplicación 2"
                className="rounded-lg shadow-md w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full h-96">
              <img
                src={View3}
                alt="Nuestra Aplicación 3"
                className="rounded-lg shadow-md w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Beneficios */}
      <div className="p-4 md:p-6 shadow-md mb-0 w-full">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-6">
          Beneficios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
          <div className="bg-secondary p-4 md:p-6 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">Tiempo Real</h3>
            <p>Procesa transacciones instantáneamente</p>
          </div>

          <div className="bg-secondary p-4 md:p-6 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">Menor Costo</h3>
            <p>Tarifas competitivas para cooperativas</p>
          </div>

          <div className="bg-secondary p-4 md:p-6 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Fácil Integración
            </h3>
            <p>API simple y bien documentada</p>
          </div>

          <div className="bg-secondary p-4 md:p-6 rounded-lg text-center">
            <h3 className="text-lg md:text-xl font-bold mb-2">
              Seguridad Total
            </h3>
            <p>Transacciones protegidas con TLS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;