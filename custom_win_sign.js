// Custom Windows code signing stub
// This file is required by electron-builder.yml but for the fork we skip signing.
const path = require('path')

exports.default = async function signWin(config) {
  console.log('[custom_win_sign] Skipping Windows code signing (no certificate configured)')
}
