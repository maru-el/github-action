"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const nest_winston_1 = require("nest-winston");
const winston_1 = __importDefault(require("winston"));
const app_module_1 = require("./app/app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: nest_winston_1.WinstonModule.createLogger({
            level: process.env.NODE_ENV === "production" ? "warn" : "debug",
            transports: [
                new winston_1.default.transports.Console({
                    format: winston_1.default.format.combine(winston_1.default.format.timestamp(), nest_winston_1.utilities.format.nestLike()),
                }),
            ],
        }),
    });
    const port = process.env.PORT || 3000;
    await app.listen(port, "0.0.0.0");
}
bootstrap();
//# sourceMappingURL=main.js.map