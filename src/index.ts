import fs from 'fs';
import ini from 'ini';
import { Bot } from 'grammy';
import { SocksProxyAgent } from "socks-proxy-agent";

const CONFIG = ini.parse(fs.readFileSync('config.ini', 'utf8'));
const QUOTES: string[] = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));

var botConfig = {};
if (CONFIG['SOCKS5_PROXY']['HOST']) {
    // 使用对象字面量直接构造配置
    botConfig = {
        client: {
            baseFetchConfig: {
                agent: new SocksProxyAgent(`socks5://${CONFIG['SOCKS5_PROXY']['HOST']}:${CONFIG['SOCKS5_PROXY']['PORT']}`),
                compress: true // 一个可选的性能优化
            }
        }
    };
}

var bot = new Bot(CONFIG['BOT_TOKEN'], botConfig);

bot.command('start', async function (ctx) {
    let quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
    await ctx.reply(quote);
});

bot.start();