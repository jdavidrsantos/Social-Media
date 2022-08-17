import COS from 'cos-js-sdk-v5'

export * from './dark'
export * from './clip'
export * from './list'

export function hexToString(str: string) {
  let val = ''
  const arr = str.split(',')
  for (let i = 0; i < arr.length; i++)
    val += String.fromCharCode(parseInt(arr[i], 16))
  return val
}

export const Bucket = 'tvs-1313368113' /* 存储桶，必须字段 */
export const Region = 'eu-frankfurt' /* 存储桶所在地域，必须字段 */
const SecretId = 'IKIDHOGtHRRJxNYUFn7C3kFXaOxHMCn8ThgQ'
const SecretKey = 'bw4xcZOzMWSAf082jDTVLyNXS8anmV4R'
const c = '41'
const d = '6b'
// 初始化实例
export const cos = new COS({
  SecretId,
  SecretKey,
})

