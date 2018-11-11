const regedit = require('regedit')
const { entries } = require('./registryData')
const { cleanRegistry } = require('./utils')

// TODO: Friendlier logging

function createKey (keyPath) {
  return new Promise((resolve, reject) => {
    regedit.createKey(keyPath, err => {
      if (err) {
        console.error(`An error occurred while creating key ${keyPath}!\n`, err)
        reject(err)
      } else resolve()
    })
  })
}

function putValue (keyObj) {
  return new Promise((resolve, reject) => {
    regedit.putValue(keyObj, err => {
      if (err) {
        console.error(`An error occurred while adding key values!\n`, err)
        reject(err)
      } else resolve()
    })
  })
}

async function insertKeys () {
  try {
    await cleanRegistry()
    console.log('Inserted keys into registry.')
  } catch (err) {
    console.error(`Could not insert registry keys!\n`, err)
    return
  }

  for (let entry in entries) {
    await createKey(entry)
    await putValue({ [entry]: entries[entry] })
  }
}

async function removeKeys () {
  try {
    await cleanRegistry()
    console.log('Removed keys from registry.')
  } catch (err) {
    console.error(`Could not remove registry keys!\n`, err)
  }
}

module.exports = {
  insertKeys: insertKeys,
  removeKeys: removeKeys
}
