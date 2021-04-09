const API_BASE_URL = 'https://api.talktier.com';
const getApiUrl = (endpoint) => API_BASE_URL + endpoint;
export const LOGIN = getApiUrl('/user/v1/loginSignupOtp');
// export const SIGNUP = getApiUrl('/user/registerUser');
// export const UPLOAD_IMAGE = getApiUrl('/common/uploadFile')
export const OTP_VERIFY = getApiUrl('/user/v1/verifyOtp');
export const USER_SEARCH = getApiUrl('/user/v1/getUserSearch');
export const USER_NEAR_ME = getApiUrl('/user/v1/getUserNearMe');
export const GET_ALL_CONVERSATIONS = getApiUrl('/user/v1/getAllConversations');


export const GET_CONVERSATIONS_ON_MESSAGES = getApiUrl('/user/v1/getConversationMessages');