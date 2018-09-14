import { param2Obj } from '@/utils'

const DictionaryList = {
  P_性别: [
    { code: '1', name: '男' },
    { code: '2', name: '女' }
  ],
  P_职务: [
    { code: '01', name: '军职' },
    { code: '02', name: '师职' }
  ]
}

export default {
  getDictionary: config => {
    const { dicName } = param2Obj(config.url)
    return DictionaryList[dicName]
  }
}
