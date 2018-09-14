import Mock from 'mockjs'
import loginAPI from './login'
import articleAPI from './article'
import remoteSearchAPI from './remoteSearch'
import transactionAPI from './transaction'

import personAPI from './person'
import dictionaryAPI from './dictionary'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)

// 文章相关
Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
Mock.mock(/\/article\/detail/, 'get', articleAPI.getArticle)
Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

// 搜索相关
Mock.mock(/\/search\/user/, 'get', remoteSearchAPI.searchUser)

// 账单相关
Mock.mock(/\/transaction\/list/, 'get', transactionAPI.getList)

// 人员相关
Mock.mock(/\/person\/list/, 'get', personAPI.getList)
Mock.mock(/\/person\/detail/, 'get', personAPI.getPerson)
Mock.mock(/\/person\/create/, 'post', personAPI.createPerson)
Mock.mock(/\/person\/update/, 'post', personAPI.updatePerson)

// 字典相关
Mock.mock(/\/dictionary\/list/, 'get', dictionaryAPI.getDictionary)

export default Mock
