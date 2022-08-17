import type { Ref } from 'vue'
import { Bucket, Region, cos } from './index'
export const imgList: Ref = ref([])

export const loadImages = async () => {
  imgList.value = []
  const { Contents } = await cos.getBucket({
    Bucket,
    Region,
  })
  Contents.forEach(async (value) => {
    imgList.value.push({
      name: value.Key,
      date: value.LastModified,
      url: await cos.getObjectUrl({ Key: value.Key, Bucket, Region }, null),
    })
  })
}
