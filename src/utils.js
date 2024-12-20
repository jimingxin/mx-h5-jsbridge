export function getBrowserInfo() {
  const ua = window.navigator.userAgent.toLowerCase() || navigator.vendor.toLowerCase() || window.opera.toLowerCase()
  const isAndroid = /Android/i.test(ua)
  const isIOS = /iPhone|iPad|iPod/i.test(ua)
  const isHarmonyOS = /HarmonyOs|OpenHarmony/i.test(ua) && !isAndroid
  return { isIOS, isAndroid, isHarmonyOS }
}
export function isJSON(str) {
  if (typeof str === 'string') {
    try {
      JSON.parse(str)
      return true
    } catch (e) {
      return false
    }
  }
  return false
}

export function getPlatform() {
  return getBrowserInfo();
  
}
