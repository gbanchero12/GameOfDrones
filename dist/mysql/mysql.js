"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MYSQL {
    constructor() {
        this.connected = false;
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: 'a12352785',
            database: 'node_db'
        });
        this.connectDB();
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    connectDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.connected = true;
            console.log('DB online');
        });
    }
}
exports.default = MYSQL;
