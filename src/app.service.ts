import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, Interval } from '@nestjs/schedule';

@Injectable()
export class AppService {
  //creamos un loger
  private readonly logger = new Logger(AppService.name);

  //@Cron("10 * * * * *")//10 segundos en todos los minutos, a todas las horas, de todos los dias del mes y de todos los dias de la semana
  @Cron(CronExpression.EVERY_10_SECONDS)
  //creamos un metodo
  showEveryFiSeconds(){
    this.logger.debug("Este mensaje se muestra cada 10 segundos")
  }

  //podemos realizar un interval Method
  @Interval(5000)
  intervalMethod(){
    this.logger.debug("Este mensaje se muestra cada 5 segundos")

  }
}
