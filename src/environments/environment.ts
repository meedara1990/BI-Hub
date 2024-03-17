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
  inTakelink1:
    'https://mynmg-my.sharepoint.com/:l:/g/personal/nimita_chand_neimanmarcus_com/FCdLJaWLA7JHt-2Z84GMw78BGTEKCZf3DewE1TP4D1p28w?e=EZYXzn',
  inTakelink2:
    'https://mynmg-my.sharepoint.com/:x:/g/personal/nimita_chand_neimanmarcus_com/ER4cNXJ4LhZFs05hRSvn6kwBg-VK6--e0IjUnz4UJ-L26Q?e=vM667L',

  fileUploadToS3Url:
    'https://qqjvpfw5dd.execute-api.us-west-2.amazonaws.com/stage-dev/cheetah-opt-out-files',

  url: 'https://nmg.us.qlikcloud.com/',
  testStr: 'TestDev'
};
