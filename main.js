const { Player } = require('discord-player')
const { Client, GatewayIntentBits } = require('discord.js')
const schedule = require('node-schedule')
const express = require('express')
const app = express()
const port = process.env.PORT || 5000

const Axios = require('axios').default

app.get('/', (req, res) => {
  res.send('Me Wake Up!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

global.client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
  disableMentions: 'everyone',
})

client.config = require('./config')

global.player = new Player(client, client.config.opt.discordPlayer)

require('./src/loader')
require('./src/events')

client.login(client.config.app.token)

schedule.scheduleJob('0 */25 13-20 * * *', () => {
  Axios.get('https://thanh-bot.herokuapp.com/')
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
})
