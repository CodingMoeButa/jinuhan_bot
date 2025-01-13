import fs from 'fs';
import ini from 'ini';
import { Bot } from 'grammy';

const CONFIG = ini.parse(fs.readFileSync('config.ini', 'utf8'));
const QUOTES: string[] = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));

var bot = new Bot(CONFIG['BOT_TOKEN']);

bot.command('start', async function (ctx) {
    let quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    await ctx.reply(quote);
});

bot.start();