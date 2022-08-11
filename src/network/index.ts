import httpPrivateService from '@services/httpPrivateService';
import httpPublicService from '@services/httpPublicService';

//notes
// httpPrivateService for authorized user with token
//httpPublicService for unauthorized user
//uploadFileAgent for all formdata requests

// const demoReq = httpPublicService.get("url", {
//     params: []
// })

export const doLogin = (data: { username: string; password: string }) => {
  return httpPublicService.post('auth/login', data);
};

export const doSignup = (data: any) => {
  return httpPublicService.post('account/signup', data);
};

export const doCheckEmail = (data: any) => {
  return httpPublicService.post('account/checkEmail', data);
};

export const doResetPassword = (data: {
  username: string;
  password: string;
}) => {
  return httpPublicService.post('account/resetPassword', data);
};

export const doSearch = () => {
  return httpPrivateService.get('search', {
    params: {
      q: 'food',
    },
  });
};

export const doGetMealPlan = () => {
  return httpPrivateService.get('mealplan');
};

export const doTapeMeasure = (data: any) => {
  return httpPublicService.get('/util/weighinDetails/tapeMeasure', {
    params: data,
  });
};
