import * as Express from 'express';
import * as Http from 'http';
import * as socketIo from 'socket.io';
import { Client } from 'pg';

const app = Express();
const http = new Http.Server(app);
const io = socketIo(http);
const PORT = process.env.PORT || 3000;
const path = process.cwd();
const log: string[] = [];

const client = new Client({
    user: 'pgUser112',
    host: '172.25.59.205',
    database: 'ChatRoom',
    password: 'p@ssPg112',
    port: 5432,
});
client.connect();

app.get('/', (req: any, res: any) => {
    console.log(`${path} ${req}`);
    res.sendFile(`${path}/dist/index.html`);
});

// ログ取得
app.get('/ChatRoom/sendReq', async (req: any, res: any) => {
    const roomId:string = req.body.roomId;
    console.log(req.body.roomId);
    let logs;
    const value = [roomId];
    const sql = 'select * from public.chatlog where roomid = $1';

    await client.query(sql, value)
    .then((res) => {
        console.log(res.rows);
        logs = JSON.stringify(res.rows);
        console.log(`ログ出力:${logs}`);
    }).catch((err) => {
        console.log(err);
        client.end();
    });
    res.send(logs);

});

// ルームリスト取得
app.get('/ChatRoomList/req', async (req: any, res: any) => {
    console.log(req.body);
    const roomList :{roomId:string, roomName:string}[] = [];
    const sql = 'select * from public.roomlist';

    await client.query(sql)
    .then((res) => {
        console.log(res.rows);
        for (const val of res.rows) {
            const value = { roomId:(val.roomid).toString() , roomName:val.roomname };
            roomList.push(value);
        }
    }).catch((err) => {
        console.log(err);
        client.end();
    });
    res.send(roomList);
});

// 静的リソース
app.use(Express.static(`${path}/dist`));

// socket.ioで接続後、emitされたイベントをonで受け取る
io.on('connection', (socket: any) => {
    console.log('connected');
    socket.on('ENTER_ROOM', async (id: string, name: string, userId:string) => {
        const value = [userId, name, id];
        const sql = 'insert into public.userlist (userid,enterroom,roomid) values ($1,$2,$3)';
        await client.query(sql, value)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                    client.end();
                });
        console.log(`EntertedRoom : ${id}\nEntertedRoomname : ${name}`);
    });

    // メッセージ送信時サーバー処理
    socket.on('SEND_TODO', async (msg: string, userId:string, roomId:string) => {
        console.log(`CatchMessage : ${msg}`);
        // log.push(msg);
        const value = [userId, msg, roomId];
        const sql = 'insert into chatlog (userid, chatlog, roomid) values($1, $2, $3)';
        await client.query(sql, value)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                    client.end();
                });
        // console.log(`現在のログ : ${log}`);
        io.emit('RECEIVE_TODO', msg, roomId);
    });
    // 入室時その部屋のログ取得リクエスト
    // ログ取得はaxiosで行っているので現在は未使用
    socket.on('REQUEST_ALLLOG', () => {
        console.log('ログを送信します');
        socket.emit('RECEIVE_ALLLOG', log);
    });

    // メッセージ入力時サーバー処理
    socket.on('UPDATE_TODO', (name:string) => {
        console.log(`NowInput: ${name}`);
        io.emit('NOWINPUT_TODO', `${name}`);
    });

    socket.on('EXIT_CHATROOM', async (userId:string) => {
        const value = [userId];
        const sql = 'delete from public.userlist where userid = $1';
        await client.query(sql, value)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                    client.end();
                });
    });

    // ユーザーの入退室等のお知らせを送信するサーバー処理
    socket.on('INFORMATION', async (msg:string, roomId:string) => {
        console.log(`[information]:${msg}`);

        const value = ['[server]', `[information]:${msg}`, roomId];
        const sql = 'insert into chatlog (userid, chatlog, roomid) values($1, $2, $3)';
        await client.query(sql, value)
                .then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.log(err);
                    client.end();
                });

        // log.push(`[server]:[information]:${msg}`);
        io.emit('RECEIVE_TODO', `[server]:[information]:${msg}`, roomId);
    });

    socket.on('DEBUG', (msg:string) => {
        console.log(msg);
    });
});

http.listen(PORT, () => {
    console.log(`listening server : ${PORT}`);
},
);
