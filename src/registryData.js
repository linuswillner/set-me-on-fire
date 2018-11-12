// ...\*\shell affects files, ...\Directory\shell affects folders

// Delete uses reverse topology in order to prevent EACCESS errors
const deleteTopology = [
  'HKCU\\Software\\Classes\\*\\shell\\SetMeOnFire\\command',
  'HKCU\\Software\\Classes\\Directory\\Shell\\SetMeOnFire\\command',
  'HKCU\\Software\\Classes\\*\\shell\\SetMeOnFire',
  'HKCU\\Software\\Classes\\Directory\\Shell\\SetMeOnFire'
]

const entries = {
  'HKCU\\Software\\Classes\\*\\shell\\SetMeOnFire': {
    '(Default)': {
      value: 'Set Me On Fire',
      type: 'REG_DEFAULT'
    },
    'Position': {
      value: 'Bottom',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\*\\shell\\SetMeOnFire\\command': {
    '(Default)': {
      value: 'del /f /q "%1"',
      type: 'REG_DEFAULT'
    }
  },
  'HKCU\\Software\\Classes\\Directory\\shell\\SetMeOnFire': {
    '(Default)': {
      value: 'Set Me On Fire',
      type: 'REG_DEFAULT'
    },
    'Position': {
      value: 'Bottom',
      type: 'REG_SZ'
    }
  },
  'HKCU\\Software\\Classes\\Directory\\Shell\\SetMeOnFire\\command': {
    '(Default)': {
      value: 'del /f /q "%1"',
      type: 'REG_DEFAULT'
    }
  }
}

const getKeyArray = () => {
  const keyArray = []

  for (let entry in entries) {
    keyArray.push(entry)
  }

  return keyArray
}

module.exports = {
  deleteTopology: deleteTopology,
  keyArray: getKeyArray(),
  entries: entries
}
