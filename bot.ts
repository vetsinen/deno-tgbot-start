import { Bot } from "https://deno.land/x/grammy@v1.30.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

let botToken = Deno.env.get("TGTOKEN");
if (!botToken) {
     console.log("Deno Environment variable 'TGTOKEN' not found.");
     const env = await config();
     botToken = env.TGTOKEN
    //Deno.exit()
}
console.log("Your bot token is:", botToken);

const bot = new Bot(botToken);// <-- put your bot token between the "" (https://t.me/BotFather)
bot.on("message", (ctx) => ctx.reply("start for deno tgbot!"));
bot.start();