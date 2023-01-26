import { NestFactory } from "@nestjs/core";
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from "nest-winston";
import winston from "winston";

import { AppModule } from "@app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger({
      level: process.env.NODE_ENV === "production" ? "warn" : "debug",
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.timestamp(),
            nestWinstonModuleUtilities.format.nestLike()
          ),
        }),
      ],
    }),
  });
  const port = process.env.PORT || 3000;
  await app.listen(port, "0.0.0.0");
}
bootstrap();
