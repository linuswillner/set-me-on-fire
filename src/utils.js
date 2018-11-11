const regedit = require('regedit')
const { keyArray, deleteTopology } = require('./registryData')

// TODO: Friendlier logging, reduce callback hell

function getExistingKeys () {
  return new Promise(resolve => {
    const unfilteredList = []

    regedit.arch.list(keyArray)
      .on('data', entry => unfilteredList.push(entry))
      .on('finish', () => {
        // Data being an empty object indicates that the value doesn't exist
        const keyList = unfilteredList.filter(key => Object.keys(key.data).length > 0)
        resolve(keyList)
      })
  })
}

function cleanRegistry () {
  return new Promise((resolve, reject) => {
    getExistingKeys().then(existingKeys => {
      if (existingKeys.length > 0) {
        deleteTopology.forEach(key => {
          regedit.deleteKey(key, err => {
            if (err) {
              console.error(`Could not clean up registry key ${key}!\n`, err)
              reject(err)
            } else resolve()
          })
        })
      } else resolve()
    })
  })
}

module.exports = {
  getExistingKeys: getExistingKeys,
  cleanRegistry: cleanRegistry
}
