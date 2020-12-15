const mongoose = require('mongoose')
    // 导入config模块
const config = require('config');
mongoose.set('useCreateIndex', true)

mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('success connect');
    })
    .catch(() => {
        console.log('failure connect');
    })