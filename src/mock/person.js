import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 4

for (let i = 0; i < count; i++) {
  List.push(
    Mock.mock({
      id: '@increment',
      timestamp: +Mock.Random.date('T'),
      name: '@first',
      age: '@integer(10, 40)',
      'sex|1': ['1', '2']
    })
  )
}

export default {
  getList: config => {
    const { name, sex, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (sex && item.sex !== +sex) return false
      if (name && item.title.indexOf(name) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter(
      (item, index) => index < limit * page && index >= limit * (page - 1)
    )

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPerson: config => {
    const { id } = param2Obj(config.url)
    for (const person of List) {
      if (person.id === +id) {
        return person
      }
    }
  },
  createPerson: () => ({
    data: 'success'
  }),
  updatePerson: () => ({
    data: 'success'
  })
}
