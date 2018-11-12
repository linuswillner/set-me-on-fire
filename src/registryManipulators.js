const { entries } = require('./registryData')
const { createKey, putValue, cleanRegistry } = require('./utils')

async function insertKeys () {
  await cleanRegistry()

  for (let entry in entries) {
    try {
      await createKey(entry)
      await putValue({ [entry]: entries[entry] })
    } catch (err) {
      console.error(`ERROR: Could not create registry key ${entry}!\n`.red, err)
    }
  }

  console.log('Done! Now, whenever you right-click a file or folder in the Windows Explorer, you will see an option called "Set Me On Fire".'.green)
  console.log('WARNING: Clicking "Set Me On Fire" will permanently delete the target file or folder. Don\'t say I didn\'t warn you.'.red)
}

async function removeKeys () {
  try {
    await cleanRegistry()
    console.log('Done! You will not have the "Set Me On Fire" option anymore.'.green)
  } catch (err) {
    console.error('ERROR: Could not revert registry changes!\n'.red, err)
  }
}

module.exports = {
  insertKeys: insertKeys,
  removeKeys: removeKeys
}
