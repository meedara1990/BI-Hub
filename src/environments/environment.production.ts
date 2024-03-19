export const environment = {
  production: true,
  awsAuthorizeURL:
    'https://bi-prod.auth.us-west-2.amazoncognito.com/oauth2/authorize?client_id=4bp9pfilebccdke2gleg9u84sm&redirect_uri=https://bi.nmgcloud.io&response_type=code&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsTokenUrl: 'https://bi-prod.auth.us-west-2.amazoncognito.com/oauth2/token',
  awsUserInfoUrl:
    'https://bi-prod.auth.us-west-2.amazoncognito.com/oauth2/userInfo',
  awsLogOut:
    'https://bi-prod.auth.us-west-2.amazoncognito.com/logout?client_id=4bp9pfilebccdke2gleg9u84sm&redirect_uri=https://bi.nmgcloud.io&response_type=code&state=STATE&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsSingleSignOut: 'https://mynmg.okta.com/login/signout',
  redirect_uri: 'https://bi.nmgcloud.io',
  client_id: '4bp9pfilebccdke2gleg9u84sm',
  url: 'https://nmg.us.qlikcloud.com/',
  testStr: 'TestPROD'
};
