import mysql = require('mysql');

export default class MYSQL {

    private static _instance: MYSQL;

    cnn: mysql.Connection;
    connected: boolean = false;

    constructor() {
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: 'a12352785',
            database: 'node_db'
        });

        this.connectDB();
    }

    public static get instance() {
        return this._instance || ( this._instance = new this() );
    }

    static runQuery ( query: string, callback: Function ){
        this.instance.cnn.query(query, ( err, results: Object[], fields )=>{
            if (err){console.log('Error in the query');
            console.log(err);
            return;
        }


        });
    }

    private connectDB() {
        this.cnn.connect(( err: mysql.MysqlError ) => {
            if ( err ) {
                console.log(err.message);
                return;
            }

            this.connected = true;
            console.log('DB online');
        });
    }
}