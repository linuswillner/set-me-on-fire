const fs = require('fs-extra')
const zip = require('zip-dir')

// Get VBS from node_modules and transfer to build folder
fs.ensureDirSync('./build/vbs')
fs.copySync('./node_modules/regedit/vbs', 'build/vbs')

// Create ZIP archive
zip('./build', { saveTo: './build/SetMeOnFire.zip' }, err => {
  if (err) console.error('Could not create ZIP file!\n', err)
})
