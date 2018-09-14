import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/person/list',
    method: 'get',
    params: query
  })
}

export function fetchPerson(id) {
  return request({
    url: '/person/detail',
    method: 'get',
    params: { id }
  })
}

export function createPerson(data) {
  return request({
    url: '/person/create',
    method: 'post',
    data
  })
}

export function updatePerson(data) {
  return request({
    url: '/person/update',
    method: 'post',
    data
  })
}
