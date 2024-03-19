export const environment = {
  production: false,
  awsAuthorizeURL:
    'https://bi-dev.auth.us-west-2.amazoncognito.com/oauth2/authorize?client_id=56ebl6922l2rf2d5t134e4nvmo&redirect_uri=http://localhost:3000&response_type=code&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsTokenUrl: 'https://bi-dev.auth.us-west-2.amazoncognito.com/oauth2/token',
  awsUserInfoUrl:
    'https://bi-dev.auth.us-west-2.amazoncognito.com/oauth2/userInfo',
  awsLogOut:
    'https://bi-dev.auth.us-west-2.amazoncognito.com/logout?client_id=56ebl6922l2rf2d5t134e4nvmo&redirect_uri=http://localhost:3000&response_type=code&state=STATE&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsSingleSignOut: 'https://mynmg.okta.com/login/signout',
  redirect_uri: 'http://localhost:3000',
  client_id: '56ebl6922l2rf2d5t134e4nvmo',
  url: 'https://nmg.us.qlikcloud.com/',
  testStr: 'TestDev'
};
