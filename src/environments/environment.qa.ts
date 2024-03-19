export const environment = {
  production: true,
  awsAuthorizeURL:
    'https://bi-qa.auth.us-west-2.amazoncognito.com/oauth2/authorize?client_id=1q9c6r2oaa5s11addb3v0gea4a&redirect_uri=https://nmgbi-qa.nmgcloud.io&response_type=code&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsTokenUrl: 'https://bi-qa.auth.us-west-2.amazoncognito.com/oauth2/token',
  awsUserInfoUrl:
    'https://bi-qa.auth.us-west-2.amazoncognito.com/oauth2/userInfo',
  awsLogOut:
    'https://bi-qa.auth.us-west-2.amazoncognito.com/logout?client_id=1q9c6r2oaa5s11addb3v0gea4a&redirect_uri=https://nmgbi-qa.nmgcloud.io&response_type=code&state=STATE&state=STATE&scope=phone+email+openid+aws.cognito.signin.user.admin+profile',
  awsSingleSignOut: 'https://mynmg.okta.com/login/signout',
  redirect_uri: 'https://nmgbi-qa.nmgcloud.io',
  client_id: '1q9c6r2oaa5s11addb3v0gea4a',
  url: 'https://nmg.us.qlikcloud.com/',
  testStr: 'TestQA'
};
