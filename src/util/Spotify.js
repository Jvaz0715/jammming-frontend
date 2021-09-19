let accessToken;
const Spotify = {
   getAccessToken(){
      if (accessToken) {
         return accessToken;
      }
      // check for an access token match
      // we will use regex to target the access token in the url
      const accessTokenMatch = window.location.href.match(/access_token=([^&]* )/);
      // get the token expiration from url as well
      const expiresInMatch = window.location.href.match(/expires_in=([^&]* )/);

      if(accessTokenMatch && expiresInMatch){
         accessToken = accessTokenMatch[1];
         const expiresIn = Number(expiresInMatch[1]);

         // the following hint provided by codecademy will clear url parameters
         // and allow us to grab a new access token after it expires
         window.setTimeout(() => accessToken = '', expiresIn * 1000);
         window.history.pushState('Access Token', null, '/');
         return accessToken;
      };
   }
};

export default Spotify;