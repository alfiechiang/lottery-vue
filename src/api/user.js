import request from '@/utils/axiosReq'

import request2 from '@/utils/axiosReq2'


export function loginReq(data) {
  return request2({
    url: '/login',
    data,
    method: 'post',
    bfLoading: false,
    isParams: true,
    isAlertErrorMsg: false
  })
}

export function getInfoReq() {
  return request2({
    url: '/userinfo',
    bfLoading: false,
    method: 'post',
    isAlertErrorMsg: false
  })
}

export function logoutReq() {
  return request({
    url: '/integration-front/user/loginOut',
    method: 'post'
  })
}
