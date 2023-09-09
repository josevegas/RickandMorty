const app=require('./scr/app.js');
require('dotenv').config();
const {sequelize}=require('./scr/db.js');

const {PORT}=process.env;
sequelize.sync({force:false}).then(()=>{
    console.log('Conected to DB');
    app.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}`);
    });
});