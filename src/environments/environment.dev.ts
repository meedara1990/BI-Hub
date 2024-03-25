export const environment = {
  production: false,
  awsAuthorizeURL:
    'https://bi-dev.auth.us-west-2.amazoncognito.com/oauth2/authorize?client_id=5tv7fr7gp04lmnpmqhb10756hr&redirect_uri=https://nmgbi-dev-int.nmgcloud.io&response_type=code&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsTokenUrl: 'https://bi-dev.auth.us-west-2.amazoncognito.com/oauth2/token',
  awsUserInfoUrl:
    'https://bi-dev.auth.us-west-2.amazoncognito.com/oauth2/userInfo',
  awsLogOut:
    'https://bi-dev.auth.us-west-2.amazoncognito.com/logout?client_id=5tv7fr7gp04lmnpmqhb10756hr&redirect_uri=https://nmgbi-dev-int.nmgcloud.io&response_type=code&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsSingleSignOut: 'https://mynmg.okta.com/login/signout',
  redirect_uri: 'https://nmgbi-dev-int.nmgcloud.io',
  client_id: '5tv7fr7gp04lmnpmqhb10756hr',
  url: 'https://nmg.us.qlikcloud.com/',
  testStr: 'TestDev'
};
