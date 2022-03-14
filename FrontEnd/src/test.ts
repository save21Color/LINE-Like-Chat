import * as Express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';

const app = Express();
const https = new http.Server(app);
const io = socketIo(https);
const PORT = process.env.PORT || 3000;
const path = process.cwd();
let log: string = '';

app.get('/', (req: any, res: any) => {
    res.render('index', { value:log });
    console.log(`${path}/dist  ${req}`);
    // res.sendFile(`${path}/dist/index.html`);
    // res.send({logs:log});
});

app.set('view engine', 'ejs');

app.get('/page1', (req: any, res: any) => {
    res.render('index2', { value:log });
    console.log(`${path}/dist  ${req}`);
});

app.use(Express.static(`${path}/dist`));

io.on('connection', (socket: any) => {
    console.log('connected');
    socket.on('message', (msg: string) => {
        console.log(`message:  ${msg}`);
        log += `${msg}\n`;
        io.emit('messageShow', msg);
    });
    socket.on('message2', (msg: string) => {
        console.log(`message:  ${msg}`);
        log += `${msg}\n`;
        io.emit('messageShow2', msg);
    });
});

https.listen(PORT, () => {
    console.log(`listening server : ${PORT}`);
},
);
