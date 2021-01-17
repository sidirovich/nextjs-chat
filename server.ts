//import { User, Rooms } from './interfaces/';
import low from 'lowdb';
import { createServer } from 'http';
import Koa from 'koa';
import Router  from 'koa-router';
import next from 'next';


import FileSync from 'lowdb/adapters/FileSync';
const adapter = new FileSync('./db/db.json');
const db = low(adapter);
db.defaults({ rooms: [] }).write();


const appKoa = new Koa();
const server = createServer(appKoa.callback());
const io = require('socket.io')(server);
const app = next({ dev: true });
const handle = app.getRequestHandler();

/*
function subscribeRoom(Room: string,  initial: User) {
    const data: any = db.get<string>('rooms');
    const room = data.find({ room: Room }).value();
    if (room) {
        data.find({ room: Room }).set('invited', { uid: initial.uid, name: initial.name, publicKey: initial.publicKey}).write()
        const findedRoom: Rooms = data.find({ room: Room }).value();
        if (findedRoom.initial) {
            return {
                status: 'join',
                decripterKey: findedRoom.initial.publicKey,
            }
        } else {
            return {
                status: 'error',
                decripterKey: undefined,
            }
        }
    } else {
        data.push({ room: Room, initial: { uid: initial.uid, name: initial.name, publicKey: initial.publicKey}}).write();
        return {
            status: 'create',
            decripterKey: undefined,
        }
    }
}
*/

io.sockets.on('connection', function (socket: any) {
    // server-side
    console.log('connection:', socket.id );
    /*
    socket.on('subscribe', function(data: Rooms) {
        console.log('subscribe -> ', data.room);
        if (data.room && data.initial) {
            subscribeRoom(data.room, data.initial);
            socket.join(data.room);
            socket.broadcast.to(data.room).emit('publickey', {
                publickey: data.initial.publicKey
            });
        }
    });
    socket.on('repeatkey', function(data: Rooms) {
        if (data.initial) {
            socket.broadcast.to(data.room).emit('publickey', {
                publickey: data.initial.publicKey
            });
        }
    });
    socket.on('send', function(data: any) {
        console.log('sending -> ', data.room);
        socket.broadcast.to(data.room).emit('private', {
            author:  data.author,
            message: data.message
        });
    });
    */
});

app.prepare().then(() => {
    const router = new Router();
    router.get('/healthcheck', async ctx => {
        ctx.body = 'ok';
        ctx.respond = true;
    })
    router.get('(.*)', async ctx => {
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })
    appKoa.use(async (ctx, next) => {
        ctx.res.statusCode = 200
        await next();
    })
    appKoa.use(router.routes());
    server.listen(3000, () => {
        console.log('> Ready on http://localhost:3000')
    })
})