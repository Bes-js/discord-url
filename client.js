"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

const request = require('request');
var EventEmitter = require('events');

const VanityEvents = {
    VanitySuccess: 'VanitySuccess',
    VanityError: 'VanityError'
};

class VanityClient extends EventEmitter {
    constructor({selfToken, guildId, api = { version: 10 }, betterLog = true } = {}) {
        super();
        if (!selfToken) throw new SyntaxError("Please Specify a Self Token!");
        this.token = selfToken;
        this.guildID = guildId;
        this.log = betterLog || true;
        console.log(this.log);
        this.version = api.version || { version: 10 };
        this.VanityClient = new EventEmitter();

        if(typeof this.log !== "boolean") throw new SyntaxError("Log Must Be True or False!");
        if (this.log == true) {
            console.log("\n");
            console.log("\x1b[31m%s\x1b[0m", "▓█████▄  ██▓  ██████  ▄████▄   ▒█████   ██▀███  ▓█████▄     █    ██  ██▀███   ██▓    ")
            console.log("\x1b[31m%s\x1b[0m", "▒██▀ ██▌▓██▒▒██    ▒ ▒██▀ ▀█  ▒██▒  ██▒▓██ ▒ ██▒▒██▀ ██▌    ██  ▓██▒▓██ ▒ ██▒▓██▒    ");
            console.log("\x1b[31m%s\x1b[0m", "░██   █▌▒██▒░ ▓██▄   ▒▓█    ▄ ▒██░  ██▒▓██ ░▄█ ▒░██   █▌   ▓██  ▒██░▓██ ░▄█ ▒▒██░    ");
            console.log("\x1b[31m%s\x1b[0m", "░▓█▄   ▌░██░  ▒   ██▒▒▓▓▄ ▄██▒▒██   ██░▒██▀▀█▄  ░▓█▄   ▌   ▓▓█  ░██░▒██▀▀█▄  ▒██░    ");
            console.log("\x1b[31m%s\x1b[0m", "░▒████▓ ░██░▒██████▒▒▒ ▓███▀ ░░ ████▓▒░░██▓ ▒██▒░▒████▓    ▒▒█████▓ ░██▓ ▒██▒░██████▒");
            console.log("\x1b[31m%s\x1b[0m", " ▒▒▓  ▒ ░▓  ▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░ ▒▒▓  ▒    ░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░░ ▒░▓  ░");
            console.log("\x1b[31m%s\x1b[0m", " ░ ▒  ▒  ▒ ░░ ░▒  ░ ░  ░  ▒     ░ ▒ ▒░   ░▒ ░ ▒░ ░ ▒  ▒    ░░▒░ ░ ░   ░▒ ░ ▒░░ ░ ▒  ░")
            console.log("\x1b[31m%s\x1b[0m", " ░ ░  ░  ▒ ░░  ░  ░  ░        ░ ░ ░ ▒    ░░   ░  ░ ░  ░     ░░░ ░ ░   ░░   ░   ░ ░   ")
            console.log("\x1b[32m", "\n")
            console.log("\x1b[31m", "NPM => https://www.npmjs.com/package/discord-url", "\x1b[0m", "\x1b[36m", "Support => https://discord.gg/luppux", "\x1b[0m")
        }

    };


    



    async setVanityURL(url) {
         if(!url) return null;
          const headers = {
          "authorization": this.token,
          "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
          };

          const payload = { "code": url };
          request.patch({
          url: `https://discord.com/api/v${this.version}/guilds/${this.guildID}/vanity-url`,
          headers: headers,
          json: payload
          }, (error, response, body) => {
          if (response.statusCode == 200) {
          this.emit(VanityEvents.VanitySuccess,{ statusCode: 200, vanityURLCode: url, guildId: this.guildID })
          return true;
          } else {
          this.emit(VanityEvents.VanityError, { statusCode: response.statusCode, errorMessage: response.body.message, guildId: this.guildID });
          return false;
          }
        });

    }


}

module.exports = { VanityClient, VanityEvents };