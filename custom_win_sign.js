// Custom Windows code signing stub
// This file is required by electron-builder.yml but for the fork we skip signing.
// To enable signing, set the environment variables and implement proper signing here.
exports.default = async function signWin(config) {
  // Skip signing for fork builds — signing requires a Windows code signing certificate
  console.log('[custom_win_sign] Skipping Windows code signing (no certificate configured)')
  return true
}
