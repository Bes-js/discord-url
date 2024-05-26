<h6 align="center">
<img src="https://raw.githubusercontent.com/Bes-js/discord-url/main/discord-url-logo.png" width="500px" height="250px" alt="stats" align="center">
<h6/>



> **`⚠️` Warn Message: `This Method Is A Forbidden Method On Discord,
> It Violates Discord Terms And Other Rules,`**
> **`I do not accept any responsibility, advice and return on the people who will use it,`** 
> **`This Package Has No Connection With The Original Discord, It Was Made By 3 Parties.`**


# How to Install? 

> **To Install the `discord-url` module, open a console and write the code below.**

```shell
npm install discord-url
```
#
# How to use

For **ES6** & **TypeScript**
```typescript
import { VanityClient, VanityEvents } from "discord-url";
const vanityManager = new VanityClient({
    selfToken: 'Your Secret T0k3n',
    guildId: 'Target Guild ID'
})

vanityManager.setVanityURL('luppux').then((response) => {
    console.log('Request Sent Successfully');
}).catch((err) => {
  console.error(err);
});

vanityManager.on(VanityEvents.VanitySuccess, async(response) => {
 /* Vanity Will Be Triggered When URL Is Retrieved Successfully. */
})

vanityManager.on(VanityEvents.VanityError, async(response) => {
 /* It will be triggered when an error occurs while retrieving the 
  Vanity URL or it cannot be retrieved. */
})
```

# [![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=9D06E6&repeat=false&width=435&lines=Support+Server)](#)
[![Discord Banner](https://api.weblutions.com/discord/invite/luppux/)](https://discord.gg/luppux)