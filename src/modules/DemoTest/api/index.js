import request from '@/utils/request'

const DemoTest2Api = {
  getDemoTestList(params) {
    return request.get('/api/demo_test/list', params, {
      redirect: '404'
    })
  },
  getDemoTestListID(id, params) {
    return request.get(`/api/${ id }/list`, params)
  }
}

export default DemoTest2Api
