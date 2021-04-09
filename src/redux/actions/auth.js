import { apiDelete, apiGet, apiPost, apiPut, clearUserData, getItem, getUserData, setItem, setUserData , } from '../../utils/utils';
import { OTP_VERIFY ,LOGIN ,USER_SEARCH , USER_NEAR_ME, GET_ALL_CONVERSATIONS, GET_CONVERSATIONS_ON_MESSAGES } from '../../config/urls';
import types from '../types';
import store from '../store';

const {dispatch}=store;

export function loginWithOTP(data = {}) {

 

  return new Promise((resolve, reject) => {
    apiPost(LOGIN, data).then(res => {
    
      
     

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}



export function OTPVerify(data = {}) {

 

  return new Promise((resolve, reject) => {
    apiPost(OTP_VERIFY, data).then(res => {
    
      setUserData(res.data).then(suc=>{
      
          dispatch({
              type:types.OTP_VERIFY,
              payload:res.data
          })
      })

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}

export const onLogout=()=>{
  
  dispatch({
  type:types.ON_LOGOUT,
})

}


export function UserData(data = {}) {



  return new Promise((resolve, reject) => {
    apiPost(USER_SEARCH , data).then(res => {
    
      console.log(res , "User Data")

      resolve(res);
    }).catch(error => {
      reject(error);
    })
  })

}


export function ChangeThemeColor(themeColorId) {

  dispatch({
    type:types.CHANGE_THEME_COLOR,
    payload:themeColorId
  })
}



export function search(searchText , cord) {
  // console.log(cord,"cords")
  let URL = `${USER_NEAR_ME}` +`?name=${searchText}` +`&coordinates=["${cord.longitude}", "${cord.latitude}"]`
  return apiGet(URL)
}


export function getAllConversations (){
  let URL = `${GET_ALL_CONVERSATIONS}` +`?limit= ${5} &skip=0`
  
  return apiGet(URL)
}


export function getConversationMessages(id){
  let URL = `${GET_CONVERSATIONS_ON_MESSAGES}`+`?commonConversationId=${id}`
  console.log(URL , "...............URL")
  return apiGet(URL)
}


