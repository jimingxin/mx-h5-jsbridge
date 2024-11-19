# mx-h5-jsbridge

基于[h5-jsbridge](https://github.com/XiaoLin1995/h5-jsbridge)进行二次封装，支持 harmonyOS,实现一套代码，多端使用。

> Javascript bridge [android](https://github.com/lzyzsd/JsBridge)/[ios](https://github.com/marcuswestin/WebViewJavascriptBridge)/[harmony](https://github.com/1ilI/WebViewJavascriptBridge_harmony) webview

## Install

```
npm install mx-h5-jsbridge --save
```

## Use

```js
import JsBridge from 'mx-h5-jsbridge'

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
JsBridge.registerHandler('funName', function (data, appCallback) {
  console.log(data)
}) 

/**
 * 函数描述：js调用app方法
 *
 * JsBridge.callHandler(name, params, callback)
 * @param {String} name 方法名
 * @param {Object} params 参数
 * @param {Function} callback 回调函数
 * @return
 */
JsBridge.callHandler('funName', { event: 'click' }, function (data) {
  console.log(data)
})
```