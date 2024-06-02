import {
  IN_FEET,
  IN_YARD,
  IN_MILES,
  IN_NAUTICAL_MILES,
  // IN_METER,
  IN_KILOMETERS,
  IN_CENTIMETERS,
  IN_MILLIMETERS,
  IN_MICROMETERS,
  IN_NANOMETERS,
  IN_PICOMETERS,
  //
  // FT_INCHES,
  FT_YARD,
  FT_MILES,
  FT_NAUTICAL_MILES,
  // FT_METER,
  FT_KILOMETERS,
  FT_CENTIMETERS,
  FT_MILLIMETERS,
  FT_MICROMETERS,
  FT_NANOMETERS,
  FT_PICOMETERS,
  //
  // YD_INCHES,
  // YD_FEET,
  YD_MILES,
  YD_NAUTICAL_MILES,
  // YD_METER,
  YD_KILOMETERS,
  YD_CENTIMETERS,
  YD_MILLIMETERS,
  YD_MICROMETERS,
  YD_NANOMETERS,
  YD_PICOMETERS,
  //
  // MI_METERS,
  // MI_KILOMETERS,
  // MI_INCHES,
  // MI_FEET,
  // MI_YARD,
  // MI_NAUTICAL_MILES,
  //
  // NM_METERS,
  // NM_KILOMETERS,
  // NM_INCHES,
  // NM_FEET,
  // NM_YARD,
  // NM_MILES,
} from '../constants/length.constants';

export const kilometerConversions = {
  metros: 1000,
  centimetros: 1e5,
  milimetros: 1e6,
  micrometros: 1e9,
  nanometros: 1e12,
  picometros: 1e15,
  pulgadas: 39370.07874,
  pies: 3280.839895,
  yardas: 1093.613298,
  millas_terrestres: 0.621373,
  millas_nauticas: 0.539957,
};

export const meterConversions = {
  kilometros: 0.001,
  centimetros: 100,
  milimetros: 1000,
  micrometros: 1e6,
  nanometros: 1e9,
  picometros: 1e12,
  pulgadas: 39.370079,
  pies: 3.2808399,
  yardas: 1.0936133,
  millas_terrestres: 6.213727e-4,
  millas_nauticas: 5.399568e-4,
};

export const centimetersConversions = {
  kilometros: 1 / 1e5,
  metros: 0.01,
  milimetros: 10,
  micrometros: 10000,
  nanometros: 1e7,
  picometros: 1e10,
  pulgadas: 0.393701,
  pies: 3.28084e-2,
  yardas: 1.09361e-2,
  millas_terrestres: 6.213727e-6,
  millas_nauticas: 5.399568e-6,
};

export const millimetersConversions = {
  kilometros: 1e-6,
  metros: 0.001,
  centimetros: 0.1,
  micrometros: 1000,
  nanometros: 1e6,
  picometros: 1e9,
  pulgadas: 3.937e-2,
  pies: 3.28084e-3,
  yardas: 1.093613e-3,
  millas_terrestres: 6.213727e-7,
  millas_nauticas: 5.399568e-7,
};

export const micrometersConversion = {
  kilometros: 1e-9,
  metros: 1e-6,
  centimetros: 1e-4,
  milimetros: 0.001,
  nanometros: 1000,
  picometros: 1e6,
  pulgadas: 3.937008e-5,
  pies: 3.28084e-6,
  yardas: 1.093613e-6,
  millas_terrestres: 6.2137274e-10,
  millas_nauticas: 5.399568e-10,
};

export const nanometersConversion = {
  kilometros: 1e-12,
  metros: 1e-9,
  centimetros: 1e-7,
  milimetros: 1e-6,
  micrometros: 0.001,
  picometros: 1000,
  pulgadas: 3.937008e-8,
  pies: 3.28084e-9,
  yardas: 1.093613e-9,
  millas_terrestres: 6.2137274e-13,
  millas_nauticas: 5.399568e-13,
};

export const picometersConversion = {
  kilometros: 1e-15,
  metros: 1e-12,
  centimetros: 1e-10,
  milimetros: 1e-9,
  micrometros: 1e-6,
  nanometros: 0.001,
  pulgadas: 3.937008e-11,
  pies: 3.28084e-12,
  yardas: 1.093613e-12,
  millas_terrestres: 6.2137274e-16,
  millas_nauticas: 5.399568e-16,
};

export const inchesConversion = {
  kilometros: 2.539999e-5,
  metros: 0.0254,
  centimetros: 2.54,
  milimetros: 25.4,
  micrometros: 25400,
  nanometros: 2.54e7,
  picometros: 2.54e10,
  pies: 0.833333,
  yardas: 0.027778,
  millas_terrestres: 1.578283e-5,
  millas_nauticas: 1.37149e-5,
};

export const feetConversion = {};

export const yardsConversion = {};

export const milesConversion = {};

export const nauticalMilesConversion = {};
