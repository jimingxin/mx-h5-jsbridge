import { getBrowserInfo, isJSON, getPlatform} from './utils'
import connectIOSBridge from './jsBridge_ios'
import connectAndroidBridge from './jsBridge_android'
import connectHarmonyOSBridge from './jsBridge_harmony'

const { isAndroid, isIOS, isHarmonyOS } = getBrowserInfo()

/**
 * 函数描述：js注册方法给app调用
 *
 * jsBridge.registerHandler(name, callback(data, appCallback))
 * @param {String} name 方法名
 * @param {Function} callback 回调函数
 * @param {Any} callback.data app返回的数据
 * @param {Function} callback.appCallback app返回的回调
 * @return
 */
function registerHandler(name, callback) {
  const connectBridge = (bridge) => {
    bridge.registerHandler(name, (data, appCallback) => {
      if (isJSON(data)) data = JSON.parse(data)
      if (typeof callback === 'function') callback(data, appCallback)
    })
    bridge.registerHandler(name, callback)
  }
  if (isIOS ) {
    connectIOSBridge(connectBridge)
  }else if(isHarmonyOS){
    connectHarmonyOSBridge(connectBridge)
  }else if (isAndroid) {
    connectAndroidBridge(connectBridge)
  }
}

/**
 * 函数描述：js调用app方法
 *
 * jsBridge.callHandler(name, params, callback)
 * @param {String} name 方法名
 * @param {Object} params 参数
 * @param {Function} callback 回调函数
 * @return
 */
function callHandler(name, params, callback=(res)=>{}) {
  const connectBridge = (bridge) => {
    bridge.callHandler(name, params, (data) => {
      if (isJSON(data)) data = JSON.parse(data)
      if (typeof callback === 'function') callback(data)
    })
  }
  if (isIOS ) {
    connectIOSBridge(connectBridge)
  }else if(isHarmonyOS){
		connectHarmonyOSBridge(connectBridge)
  } else if (isAndroid) {
    connectAndroidBridge(connectBridge)
  }
}

function onInit() {
  if (isAndroid) {
     connectAndroidBridge((bridge) => {
      bridge.init()
     })
   }
 }
onInit()

const JsBridge = {
  registerHandler,
  callHandler,
	getPlatform
}
window.JsBridge = JsBridge
export default JsBridge
