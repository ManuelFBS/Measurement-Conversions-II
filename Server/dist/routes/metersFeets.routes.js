"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lengthConvs_controller_1 = require("../controllers/lengthConvs.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/toanylength', lengthConvs_controller_1.fromToAnyLength);
exports.default = router;
//# sourceMappingURL=metersFeets.routes.js.map