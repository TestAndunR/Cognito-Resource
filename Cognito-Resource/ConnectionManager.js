module.exports=function(){

    this.dbConnections = [];

    this.dbConnections["UserPoolDB"] = {
            host: process.env.EndPoint_rdsUserPoolDB,
            port: process.env.Port_rdsUserPoolDB,
            user: process.env.User_rdsUserPoolDB,
            password: process.env.Password_rdsUserPoolDB,
            database: "userPool",
        };
    };