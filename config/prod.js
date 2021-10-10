const config = {
    database: {
        host: 'localhost',
        port: '27017',
        db: 'Vehica',
        username: '',
        password: ''
    },
    http: {
        enabled: true,
        port: 8000
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
        serverKey: 'AAAA5E2JrjQ:APA91bFu4w_4-M3HaRBosoCjdID_52lwpTYqqGxJqtzqicuRAaXfhRHJgVI1nLPhTG7LqAtfAY5UfGHEo0uI0KYj6CzMlDpX5KC9f38QXDOJCSZ5bk_-WBUUaSW-byczcGqB7zg23Rwy'
    }
};

module.exports = config;