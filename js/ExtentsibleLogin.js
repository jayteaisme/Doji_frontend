/**
Process Google plus
**/

(function () {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

function onLoadCallback() {
    gapi.client.load('plus', 'v1', function () { });
}

function login() {
    var myParams = {
        'clientid': '863109637838-0k7cf370b3eu8qkuvsgjohlb8g968c0m.apps.googleusercontent.com', //You need to set client id
        'cookiepolicy': 'single_host_origin',
        'callback': 'loginCallBack', //callback function
        'approvalprompt': 'force',
        'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
    };

    gapi.auth.signIn(myParams);
}

function loginCallBack(resultInformation) {
    if (resultInformation['status']['signed_in']) {
        var request = gapi.client.plus.people.get(
        {
            'userId': 'me'
        });
        request.execute(function (resp) {
            var email = '',
                i,
                informationCustomer,
                userName = '';
            userName = resp['displayName'];
            if (resp['emails']) {
                for (i = resp['emails'].length; i--;) {
                    if (resp['emails'][i]['type'] == 'account') {
                        email = resp['emails'][i]['value'];
                    }
                }
            }
    if (email !== '') {
                informationCustomer = {
                    'userName': userName,
                    'email': email,
                    'provider': 'google'
                };
                LoginModule.sendLoginServer(informationCustomer);
            } else {
                $('#messageError').html('Đăng nhập không thành công');
            }
        });
    }
}


/**
Process Login Facebook.
**/

window.fbAsyncInit = function () {
    FB.init({
        appId: '1044351232251515',
        xfbml: true,
        version: 'v2.5'
    });
};

(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function LoginFacebook() {
    FB.login(function (response) {
        debugger;
        console.log(response);
        if (response.authResponse) {
            getUserInfo();
            window.location.reload();
        } else {
            $("messageError").html('Bạn đã hủy quá trình đăng nhập hoặc tài khoản facebook của bạn không đủ thông tin cần thiết.');
        }
    }, { scope: 'email,user_photos,user_videos' });
}

function getUserInfo() {
    var avtFb;
    FB.api("/me/picture?width=50&height=50", function (response) {
        avtFb = response.data.url;
    });
    FB.api('/me', function (response) {
        if (typeof response === "object") {
            var email = response.email || '',
                userName = response.name || '',
                fbID = response.id || '',
                gender = response.gender || '',
                informationUser;
            console.log(informationUser);
            if (email.trim().length > 0) {
                informationUser = {
                    'fbID': fbID,
                    'gender': gender,
                    'userName': userName,
                    'email': email,
                    'provider': 'facebook',
                    'avatar': avtFb,
                };
                LoginModule.sendLoginServer(informationUser);
            } else {
                console.log('Đăng nhập không thành công');
            }
        } else {
            $('#messageError').html('Xin lỗi! Chúng tôi không thể đăng nhập được từ tài khoản facebook của bạn.');
        }
    });
}

jQuery(document).ready(function ($) {
    var btnLoginGoogle = $('.btnLogin_Google'),
        btnLoginFacebook = $('#btnLogin_Facebooke');

    btnLoginGoogle.on('click', function (e) {
        e.preventDefault();
        debugger 
        login();
    });

    $('body').on('click', '#btnLogin_Facebooke', function (e) {
        e.preventDefault();
        debugger;
        LoginFacebook();
    });
});

/**
 * Create module process for login.
 */
var LoginModule = (function () {
    var buildUrlServer, sendLoginServer;
    /**
     * Send information of user to server.
     * @param informationUser object that hold infomation of user.
     */
    sendLoginServer = function (informationUser) {
        'use strict';
        var urlServer = '/Ajax/Member/ProcessForGooglePlusAndFacebook';

        if (typeof informationUser === "object") {
            $.post(urlServer, informationUser).done(function (statusLogin) {
                if (typeof statusLogin === "object") {
                    if (typeof statusLogin.Erros === "boolean" && statusLogin.Erros === false) {
                        window.location.reload();
                    } else {
                        $('#messageError').html('Đăng nhập không thành công');
                    }
                } else {
                    $('#messageError').html('Đăng nhập vào facebook không thành công');
                }
            });
        } else {
            $('#messageError').html('Không kết nối được với tài khoản facebook của bạn!');
        }
    };

    return {
        sendLoginServer: function (informationUser) {
            return sendLoginServer(informationUser);
        }
    };
}());



