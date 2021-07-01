const http = require('http')
const fs = require('fs')
const path = require('path')

const baseUrl = 'http://21.57.224.236' // 网关服务 需要手动设置

console.log(`开始生成${baseUrl}服务对应的api文件....`)
// request(`${baseUrl}/swagger-resources`).then(list => {
  request(`${baseUrl}`).then(list => {
  // list为微服务列表
  console.log('开始list：', list)
  // recursiveDoc(list)
})

// const accnt_xl_findSblxList = data => {return axios({url:microStr+`/accnt/xl/findSblxList`,method: 'get',data})}//查询电缆线路设备下所有设备类型
// const accnt_djlsjb_xldjExports = (data,config) => {return axios({url:microStr+'/accnt/djlsjb/xldjExports',method: 'post',data,config})}//线路定级导出

/**
 * 递归生成api
 */
function recursiveDoc (list) {
  if (list && list.length > 0) {
    console.log()
    console.log(`正在读取${list[0].name}配置...`)
    request(baseUrl + list[0].location).then(result => {
      let filename = `${list[0].name}.js` // 生成的文件名
      let data = 'import axios from \'@/utils/request\'\n'
      let { paths = {}, basePath } = result, method
      console.log('result::', result)
      for (let path in paths ) {
        if (paths[path]['post']) {
          // post请求
          method = 'post'
          data += `export const ${path.replace(/\//g, '_').substring(1)} = (data,config) => {return axios({url:'${basePath + path}',method: '${method}',data,config})}//${paths[path][method]['summary']}\n`
        } else if (paths[path]['get']) {
          // get请求
          method = 'get'
          data += `export const ${path.replace(/\//g, '_').substring(1)} = (data,config) => {return axios({url:'${basePath + path}',method: '${method}',config, params: data)}//${paths[path][method]['summary']}\n`
        }
      }
      try {
        fs.writeFileSync(path.resolve(__dirname, `../src/api/${filename}`), data)
        console.log(`已生成${list[0].name}的服务`)
      } catch (error) {
        console.error(`生成${list[0].name}的服务对应api文件失败`)
        console.error(error)
      }
      list.splice(0, 1)
      recursiveDoc(list)
    }).catch(err => {
      console.log(`读取${list[0].name}配置失败`)
      console.error(err)
    })
  }
}



/**
 * 根据网址爬取数据
 */
function request (url) {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      var html = ''
      res.on('data', data => {
        html += data
      })
      res.on('end', () => {
        resolve(JSON.parse(html))
      })
    }).on('error', err => {
      reject(err)
    })
  })
}