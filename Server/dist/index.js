"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
function main() {
    const appListener = app_1.default.listen(app_1.default.get('port'), () => {
        console.log(`Server is running on port: ${app_1.default.get('port')}`);
    });
    //   process.on('SIGINT', () => {
    //     console.log('Received SIGINT signal, shutting down...');
    //   });
    //   appListener.close();
}
main();
//# sourceMappingURL=index.js.map