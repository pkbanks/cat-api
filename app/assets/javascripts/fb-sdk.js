window.fbAsyncInit = function() {
  FB.init({
    appId      : '128523111100173',
    cookie     : true,
    xfbml      : true,
    version    : 'v2.10'
  });
    
  FB.AppEvents.logPageView();   
  
  // when FB SDK loads, check the login state of the user
  checkLoginState();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    if(response.status === "connected"){
      console.log("FB connected");
      fbConnectApi(response);
    } else{
      console.log("FB not connected");
      removeUserName();
    }
  });
}

function fbConnectApi(response){
  console.log("do stuff with FB API");
  FB.api('/me', function(response){
    const welcomeMessage = response.name;
    document.getElementById('user-status-msg').innerHTML = welcomeMessage;
  });
  return 1;
}

function removeUserName(){
  console.log("hoho");
  document.getElementById('user-status-msg').innerHTML = ""
}







