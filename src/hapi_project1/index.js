
'use strict';
 
const Hapi = require('@hapi/hapi');
 
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});
 
server.route({
    method: 'GET',
    path: '/home',
    handler: (request, reply) => {
        return reply.redirect('http://localhost:4200').code(301);
    }
});
 
server.route({
    method: 'GET',
    path: '/user',
    handler: function (request, h) {
        const user = {
            firstName: "John",
            lastName: "Doe",
            userName: "JohnDoe",
            id: 123
        }
        return user;
    }
});

 
const init = async () => {
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
 
process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
 
init();