module.exports = {
    name: 'API',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    base_url: process.env.BASE_URL || 'http://localhost:3000',
    db: {
        uri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/api',
    },
    accountSid: "AC40b1c97027706d31c345a9f2bd800768",
    authToken: "7bb80fc990a84e660c7670f5ae29afd1",
    sendingNumber: "+15878406018"
};