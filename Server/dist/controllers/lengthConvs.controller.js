"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromToAnyLength = void 0;
const conversionFactors_1 = require("../libs/conversionFactors");
function fromToAnyLength(req, res) {
    const { value, fromUnit, toUnit, } = req.body;
    if (!value || !fromUnit || !toUnit) {
        return res.status(400).json({
            error: 'Faltan parámetros en la solicitud...',
        });
    }
    // Se definen los factores de conversión de una unidad determinada a otra...
    const conversionFactor = {
        kilometros: conversionFactors_1.kilometerConversions,
        metros: conversionFactors_1.meterConversions,
        centimetros: conversionFactors_1.centimetersConversions,
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
    const result = value * factor;
    // const fixedResult = rawResult.toFixed(5);
    return res.status(200).json({ result, unit: toUnit });
}
exports.fromToAnyLength = fromToAnyLength;
//# sourceMappingURL=lengthConvs.controller.js.map