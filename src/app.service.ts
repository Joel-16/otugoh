import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {message: "server up and running"};
  }
}
