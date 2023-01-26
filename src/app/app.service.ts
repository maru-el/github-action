import { Injectable } from "@nestjs/common";
import dayjs from "dayjs";

@Injectable()
export class AppService {
  heartbeat(): string {
    return "hi";
  }

  timezone(): string[] {
    return [
      new Date(Date.now()).toString(),
      dayjs().format("YYYY-MM-DD HH:mm:ss"),
      Intl.DateTimeFormat().resolvedOptions().timeZone,
    ];
  }
}
