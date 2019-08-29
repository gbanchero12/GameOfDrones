import Server from './server/server';

const server = Server.init( 3000 );

server.start( ()=> {console.log('Server runing in port 3000')} );

