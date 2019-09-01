import express = require('express');
import path = require('path');
import cors = require('cors');
import bodyParser = require('body-parser');

export default class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
    }

    static init(port: number) {
        return new Server(port);
    }

    private publicFolder(){
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use( express.static(publicPath)); 
        this.app.use(bodyParser);
        this.app.use(cors({origin: 'http://localhost:4200'}));
    }

    start(callback: any) {
        this.app.listen(this.port, callback );
        this.publicFolder();
    }
}