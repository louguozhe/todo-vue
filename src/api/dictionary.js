import request from '@/utils/request'

export function fetchDicList(query) {
  return request({
    url: '/dictionary/list',
    method: 'get',
    params: query
  })
}
