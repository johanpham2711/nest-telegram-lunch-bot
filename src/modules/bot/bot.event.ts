import { Injectable } from '@nestjs/common';
import { Hears, Help, On, Start, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
@Injectable()
export class BotEvent {
  getData(): { message: string } {
    return { message: 'Welcome to server!' };
  }

  @Start()
  async startCommand(ctx: Context): Promise<void> {
    await ctx.reply('Welcome');
  }

  @Help()
  async helpCommand(ctx: Context): Promise<void> {
    await ctx.reply('Send me a sticker');
  }

  @On('sticker')
  async onSticker(ctx: Context): Promise<void> {
    await ctx.reply('👍');
  }

  @Hears('hi')
  async hearsHi(ctx: Context): Promise<void> {
    await ctx.reply('Hey there');
  }
}
