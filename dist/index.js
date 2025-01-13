"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const ini_1 = __importDefault(require("ini"));
const grammy_1 = require("grammy");
const CONFIG = ini_1.default.parse(fs_1.default.readFileSync('config.ini', 'utf8'));
const QUOTES = JSON.parse(fs_1.default.readFileSync('quotes.json', 'utf8'));
var bot = new grammy_1.Bot(CONFIG['BOT_TOKEN']);
bot.command('start', function (ctx) {
    return __awaiter(this, void 0, void 0, function* () {
        let quote = QUOTES[Math.floor(Math.random() * QUOTES.length)];
        yield ctx.reply(quote);
    });
});
bot.start();
