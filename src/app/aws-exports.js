const  cognitoAuth = {
  Cognito: {
    userPoolId: 'us-west-2_EBNASkvxl',
    userPoolClientId: '56ebl6922l2rf2d5t134e4nvmo',
    mandatorySignIn: true,
    loginWith: {
      oauth: {
        domain: 'bi-dev.auth.us-west-2.amazoncognito.com',
        scopes: [
          'phone',
          'email',
          'profile',
          'openid',
          'aws.cognito.signin.user.admin'
        ],
        redirectSignIn: ['http://localhost:3000'],
        redirectSignOut: ['https://mynmg.okta.com'],
        responseType: 'code',
        providers: [{ custom: 'Okta' }]
      }
    }
  }
}
export default cognitoAuth;

