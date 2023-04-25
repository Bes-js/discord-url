<h6 align="center">
<img src="https://cdn.discordapp.com/attachments/1041745966186909826/1100436100331347988/coollogo_com-188622067.png" width="500px" height="100px" alt="stats" align="center">
<h6/>

<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>

![npm version](https://img.shields.io/npm/v/canvafy?color=blue&label=npm%20i%20discord-url)
![npm info](https://img.shields.io/npm/dw/discord-url?color=blue)

```shell
⚠️ Warn Message;

This Method Is A Forbidden Method On Discord, It Violates Discord Terms And Other Rules.

I do not accept any responsibility, advice and return on the people who will use it.
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=FF0000&repeat=false&width=435&lines=%E2%9D%94+How+To+Install%3F)](#)

To Install the `discord-url` module, open a console and write the code below.
<br> </br>
For **npm**
```console
npm i discord-url
```

For **Yarn**
```console
yarn add discord-url
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=00EDFF&repeat=false&width=435&lines=%F0%9F%8E%AF+Describing)](#)

For **CommonJS**
```javascript
const { VanityClient }= require("discord-url")
const urlClient = new VanityClient("Self Token","Guild ID",true)
```

For **ES6**
```javascript
import { VanityClient } from "discord-url";
const urlClient = new VanityClient("Self Token","Guild ID",true)
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=blue&repeat=false&width=435&lines=✨+Functions+And+Events)](#)

<a href="https://discord.gg/luppux" target="_blank">Click Here To Get Support!</a>
```javascript
# Function

urlClient.setVanityURL("luppux"); // It Helps You Set The Specified URL

# Events

urlClient.on("VanitySuccess", async(res) => {
console.log(res); // return; { vanityURL:"luppux" ,guildID:""1011632065885765743 }
})

urlClient.on('VanityError', async(err) => {
console.log(err); // return; { error: <Error Message Received> }
})
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=blue&repeat=false&width=435&lines=🪄+Example+For+v14)](#)
```js
const { VanityClient }= require("discord-url")
const urlClient = new VanityClient("Self Token","Guild ID",true)

urlClient.setVanityURL("luppux");

urlClient.on("VanitySuccess", async(response) => {
console.log(`URL ${response.vanityURL} Successfully Received!`);
})

urlClient.on('VanityError', async(error) => {
console.log(`An Error Occurred While Retrieving URL!\nError; ${error}`);
})
```

<br> <br/>
# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=9D06E6&repeat=false&width=435&lines=Support+%26+Donate)](#)

[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)
<br> </br>
<a href="https://www.buymeacoffee.com/beykant" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="120px" height="30px" alt="Buy Me A Coffee"></a>
