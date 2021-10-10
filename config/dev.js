const config = {
    database: {
        host: 'localhost',
        port: '27017',
        db: 'ecomServeDev',
        username: '',
        password: ''
    },
    http: {
        enabled: true,
        port: 6000
    },
    https: {
        enabled: false,
        port: 443,
        options: {
            key: '',
            cert: '',
            ca: ''
        }
    },
    profileImageUploadUrl: {
        url: '/home/*****'
    },
    nodeMailer: {
        username: 'test@rapportyk',
        password: '12345',
        from: ''
    },
    sms: {
        url: "http://smst.queenmultiservices.in/API/WebSMS/Http/v1.0a/index.php?username=rapporty&password=Rapporty@5&sender=ECOM&to=",
        username: 'rapporty',
        password: 'Rapporty@5',
        senderId: '=ECOM',
    },
    notification: {
        serverKey: 'AIzaSyAN8sTjdTZN_c7Dfl4DL00YP5-wCnLrbTE'
    }
};

module.exports = config;