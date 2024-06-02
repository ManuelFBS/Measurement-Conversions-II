import React, { useState } from 'react';
import axios from '../../api/axios';
// import { Link } from 'react-router-dom';

const interMetricSystem = [
  'kilometros',
  'metros',
  'centimetros',
  'milimetros',
  'micrometros',
  'nanometros',
  'picometros',
  'pulgadas',
  'pies',
  'yardas',
  'millas_terrestres',
  'millas_nauticas',
];

export function ConversionsPage() {
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [selectedDestination, setSelectedDestination] =
    useState('');
  const [inputValue, setInputValue] = useState('');
  const [convertedValue, setConvertedValue] = useState('');

  const handleOriginChange = (e) => {
    setSelectedOrigin(e.target.value);

    // Si se selecciona en origen lo mismo que en destino, resetear destino...
    // if (e.target.value === selectedDestination) {
    //   setSelectedDestination('');
    // }
  };

  const handleDestinationChange = (e) => {
    setSelectedDestination(e.target.value);

    // Si se selecciona en destino lo mismo que en origen, resetear origen...
    // if (e.target.value === selectedOrigin) {
    //   setSelectedOrigin('');
    // }
  };

  const handleInputChange = async (e) => {
    const value = e.target.value;

    setInputValue(value);

    if (selectedOrigin && selectedDestination && value) {
      try {
        const response = await axios.post(
          '/conversions/fromto',
          {
            value: parseFloat(value),
            fromUnit: selectedOrigin,
            toUnit: selectedDestination,
          },
        );
        setConvertedValue(response.data.result);
      } catch (error) {
        console.error('Error during conversion:', error);
      }
    } else {
      setConvertedValue('');
    }
  };

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-blue-950 max-w-xl w-full p-8 rounded-md">
        <h1 className="text-center text-2xl italic text-blue-100 font-bold mb-3">
          Conversiones
        </h1>

        <div>
          {/* <Label className="text-blue-100 font-bold">
              Mes:
            </Label> */}
          <div className="flex flex-row">
            <select
              className="w-full bg-gray-300 text-slate-800 px-4 py-2 rounded-md my-3 mt-1 mr-5 mb-3"
              value={selectedOrigin}
              onChange={handleOriginChange}
            >
              <option value="">
                Seleccione unidad origen
              </option>
              {interMetricSystem.map((unit) => (
                <option
                  key={unit}
                  value={unit}
                  // disabled={unit === selectedDestination}
                >
                  {unit}
                </option>
              ))}
            </select>

            <select
              className="w-full bg-gray-300 text-slate-800 px-4 py-2 rounded-md my-3 mt-1 mb-3"
              value={selectedDestination}
              onChange={handleDestinationChange}
            >
              <option value="">
                Seleccione unidad destino
              </option>
              {interMetricSystem.map((unit) => (
                <option
                  key={unit}
                  value={unit}
                  // disabled={unit === selectedOrigin}
                >
                  {unit}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-row">
            <input
              type="text"
              className="w-full bg-gray-300 text-slate-800 px-4 py-2 rounded-md my-5 mt-1 mr-5 mb-3"
              value={inputValue}
              onChange={handleInputChange}
            />

            <label className="w-full bg-gray-300 text-slate-800 px-4 py-2 rounded-md my-5 mt-1 mb-3 flex items-center justify-center">
              {convertedValue}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
