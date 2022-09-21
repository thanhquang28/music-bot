const { Player } = require('discord-player')
const { Client, GatewayIntentBits } = require('discord.js')
const express = require('express')
const app = express()
const port = 5000

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
