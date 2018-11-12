const { keyArray, deleteTopology } = require('./registryData')

function getExistingKeys () {
  return new Promise(resolve => {
    const unfilteredList = []

    global.regedit.arch.list(keyArray)
      .on('data', entry => unfilteredList.push(entry))
      .on('finish', () => {
        // Data being an empty object indicates that the value doesn't exist
        const keyList = unfilteredList.filter(key => Object.keys(key.data).length > 0)
        resolve(keyList)
      })
  })
}

async function cleanRegistry () {
  const existingKeys = await getExistingKeys()

  if (existingKeys.length > 0) {
    for (let key in deleteTopology) {
      const keyPath = deleteTopology[key]

      try {
        await deleteKey(keyPath)
      } catch (err) {
        if (err.message === 'registry path does not exist') console.warn(`Tried to delete non-existent registry key ${keyPath}, ignoring.`.yellow)
        else console.error(`ERROR: Could not cleanup registry key ${keyPath}!\n`.red, err)
      }
    }
  }
}

function createKey (keyPath) {
  return new Promise((resolve, reject) => {
    global.regedit.createKey(keyPath, err => {
      if (err) reject(err)
      else resolve()
    })
  })
}

function deleteKey (keyPath) {
  return new Promise((resolve, reject) => {
    global.regedit.deleteKey(keyPath, err => {
      if (err) reject(err)
      else resolve()
    })
  })
}

function putValue (keyObj) {
  return new Promise((resolve, reject) => {
    global.regedit.putValue(keyObj, err => {
      if (err) reject(err)
      else resolve()
    })
  })
}

module.exports = {
  createKey: createKey,
  putValue: putValue,
  deleteKey: deleteKey,
  getExistingKeys: getExistingKeys,
  cleanRegistry: cleanRegistry
}
