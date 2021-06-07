/*
 * @Author: fenzhou
 * @Date: 2021-06-02 10:14:15
 * @LastEditors: fenzhou
 * @LastEditTime: 2021-06-02 10:19:57
 * @Description: 
 */
import { Message } from 'element-ui'

/**
 * base64转blob
 * @param dataURL
 * @param fileName
 */
function dataURIToBlob(dataURL, fileName) {
  const bstr = atob(dataURL.split(',')[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  const blob = new Blob([u8arr])
  download(blob, fileName)
}

/**
 * 下载
 * @param blob
 * @param fileName
 */
function download(blob, fileName) {
  const URL = window.URL || window.webkitURL
  const link = document.createElement('a')
  if ('download' in link) { // 非IE浏览器
    link.download = fileName
    link.style.display = 'none'
    link.href = URL.createObjectURL(blob)
    document.body.appendChild(link)
    link.click()
    URL.revokeObjectURL(link.href)
    document.body.removeChild(link)
  } else {
    navigator.msSaveBlob(blob, fileName)
  }
}

/**
 * 下载二进制流
 *
 * @param json
 * @param fileName
 */
export const downloadBuffer = (json, fileName, format = '.xls', error = false) => {
  const data = json.data
  return new Promise((resolve, reject) => {
    const b = new Blob([data])
    const r = new FileReader()
    r.readAsText(b, 'utf-8')
    r.onload = function() {
      if (r.result.indexOf('"successful":false,') === -1) {
        downloadCsv(data, fileName, format)
        resolve(data)
      } else {
        const res = JSON.parse(r.result)
        error && Message.error('下载失败：' + res.resultHint)
        reject(res)
      }
    }
  })
}

// 下载word
export const downloadWord = (json, fileName) => {
  const data = json.data
  return new Promise((resolve) => {
    const b = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.wodprocessingml.document;charset=utf-8' })
    const d = document.createElement('a')
    let href = window.URL.createObjectURL(b)
    d.href = href
    d.download = fileName + '.doc'
    document.body.appendChild(d)
    d.click()
    document.body.removeChild(d)
    window.URL.revokeObjectURL(href)
    resolve()
  })
}


/**
 * 下载图片
 *
 * @param data
 * @param fileName
 */
export const downloadImage = (data, fileName) => {
  const blobSrc = 'data:image/png;base64,' + data
  dataURIToBlob(blobSrc, fileName)
}

/**
 * 下载Csv
 *
 * @param data
 * @param fileName
 */
export const downloadCsv = (data, fileName, format) => {
  const blob = new Blob([data])
  download(blob, fileName + format)
}
