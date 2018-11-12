require('colors')
const readline = require('readline')
const main = require('./src/cli')

const regedit = require('regedit')
regedit.setExternalVBSLocation('./vbs')
global.regedit = regedit

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

main(rl)
