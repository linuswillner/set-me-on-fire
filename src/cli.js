const { exec } = require('child_process')
const { insertKeys, removeKeys } = require('./registryManipulators')
const introText = require('./introText')

function main (readlineInterface) {
  writeInitial()
  writeCommands(readlineInterface)
}

// Initial text output
function writeInitial () {
  console.log(introText)
  console.log('Now, you have three options.'.green)
}

// Commands and prompt
function writeCommands (readlineInterface) {
  console.log('') // Add automatic newline after old output
  console.log('1 / "Inject" - Add "Set Me On Fire" to the Explorer context menu.')
  console.log('2 / "Revert" - Revert the changes made by this program.')
  console.log('3 / "WTF" - View the idea that sparked this program.')

  readlineInterface.question('\nType one of the numbers or phrases above and press Enter to proceed.\n'.yellow, answer => {
    readlineInterface.pause()
    console.log('') // Add automatic newline before new output

    switch (answer.toLowerCase().replace('"', '')) {
      case 'inject':inject(); break
      case 'revert': revert(); break
      case 'wtf': viewSource(); break
      case '1': inject(); break
      case '2': revert(); break
      case '3': viewSource(); break
      default:
        console.log('Unknown option. Please try again.'.red)
        writeCommands()
    }
  })
}

function inject () {
  console.log('Injecting registry keys. This may take a while...'.magenta)
  insertKeys()
}

function revert () {
  console.log('Reverting registry keys. This may take a while...'.magenta)
  removeKeys()
}

function viewSource () {
  console.log('Opening webpage in your default browser. You may select another option when you\'re done.'.green)
  exec('explorer "https://youtu.be/w56Nd7BSL-c?t=561"')
  writeCommands()
}

module.exports = main
