import { Injectable } from '@nestjs/common';
import { Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
@Injectable()
export class BotEvent {
  @Start()
  async startCommand(ctx: Context): Promise<void> {
    await ctx.reply('Welcome');
    console.log(await ctx.sendMessage('ok'));
  }

  @Help()
  async helpCommand(ctx: Context): Promise<void> {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context): Promise<void> {
    await ctx.reply('👍');
    console.log('🚀 ~ BotEvent ~ onSticker ~ ctx:', ctx.update);
  }

  @Hears('hi')
  async hearsHi(ctx: Context): Promise<void> {
    await ctx.sendSticker(
      'CAACAgUAAxkBAANcZbtsQf1s1Wv42eZYngABzrhCICEtAAJdAQAC1qeZECviXzBn1WdlNAQ',
    );
  }
}
