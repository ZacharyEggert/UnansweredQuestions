const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const http = require('http');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers,
} = require('./utils/chatUsers');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 5000;

const hbs = exphbs.create({ helpers, extname: '.hbs' });

const sess = {
    secret: process.env.SECRET || 'secret_string',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use(routes);

const botName = 'PhilosophyChat Bot';

io.on('connection', (socket) => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);
        socket.join(user.room);
        //welcome current user
        socket.emit(
            'message',
            formatMessage(botName, 'Welcome to Philosophy Chat!')
        );

        //broadcast when user connects
        socket.broadcast
            .to(user.room)
            .emit(
                'message',
                formatMessage(botName, `${user.username} has joined the chat`)
            );

        //send user and room info
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room),
        });
    });

    //listen for chatMessage
    socket.on('chatMessage', (msg) => {
        const user = getCurrentUser(socket.id);
        // console.log(socket.id);
        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    //runs when client disconnects
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit(
                'message',
                formatMessage(botName, `${user.username} has left the chat`)
            );

            io.to(user.room).emit('roomusers', {
                room: user.room,
                users: getRoomUsers(user.room),
            });
        }
    });
});

sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, () => console.log('Now listening on port ' + PORT));
});
