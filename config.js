module.exports = {
  app: {
    token:
      'MTAyMjE3MjIxMDIyMTMwMTgxMA.G6HOQG.XF67G_UObBavJIRhfarzfU73ebY_Kx_h1aMjKs',
    playing: 'by thanhquang28 ❤️',
    global: true,
    guild: 'XXX',
  },

  opt: {
    DJ: {
      enabled: false,
      roleName: '',
      commands: [],
    },
    maxVol: 30,
    leaveOnEnd: true,
    loopMessage: false,
    spotifyBridge: true,
    defaultvolume: 75,
    discordPlayer: {
      ytdlOptions: {
        quality: 'highestaudio',
        highWaterMark: 1 << 25,
      },
    },
  },
}
