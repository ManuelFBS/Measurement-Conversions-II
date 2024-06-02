import { Request, Response } from 'express';
import {
  kilometerConversions,
  meterConversions,
  centimetersConversions,
} from '../libs/conversionFactors';

export function fromToAnyLength(
  req: Request,
  res: Response,
): any {
  const {
    value,
    fromUnit,
    toUnit,
  }: {
    value: number;
    fromUnit: string;
    toUnit: string;
  } = req.body;

  if (!value || !fromUnit || !toUnit) {
    return res.status(400).json({
      error: 'Faltan parámetros en la solicitud...',
    });
  }

  // Se definen los factores de conversión de una unidad determinada a otra...
  const conversionFactor: {
    [key: string]: { [key: string]: number };
  } = {
    kilometros: kilometerConversions,
    metros: meterConversions,
    centimetros: centimetersConversions,
  };

  // /////const factor = conversionFactor[fromUnit]?.[toUnit] ?? 0;
  const fromConversions = conversionFactor[fromUnit];

  if (!fromConversions) {
    return res.status(400).json({
      error: `Unidad de origen no válida: ${fromUnit}`,
    });
  }

  const factor = fromConversions[toUnit];

  if (factor === undefined) {
    return res.status(400).json({
      error: `Unidad de destino no válida: ${toUnit}`,
    });
  }

  const result: number = value * factor;
  // const fixedResult = rawResult.toFixed(5);

  return res.status(200).json({ result, unit: toUnit });
}
