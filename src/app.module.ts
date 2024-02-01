import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';

import { AppController } from './app.controller';
import { TELEGRAM_BOT_TOKEN } from './constants';
import { BotModule } from './modules/bot';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: TELEGRAM_BOT_TOKEN,
    }),
    BotModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
