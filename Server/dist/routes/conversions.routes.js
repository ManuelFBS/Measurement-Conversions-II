"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lengthConvs_controller_1 = require("../controllers/lengthConvs.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/fromto', lengthConvs_controller_1.fromToAnyLength);
exports.default = router;
//# sourceMappingURL=conversions.routes.js.map