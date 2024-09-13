import { Bot } from "https://deno.land/x/grammy@v1.30.0/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
const env = await config();

const bot = new Bot(env.TGTOKEN);// <-- put your bot token between the "" (https://t.me/BotFather)
bot.on("message", (ctx) => ctx.reply("start for deno tgbot!"));
bot.start();