import React from 'react';
import { useState } from 'react';
import './chatstyle.css';

const ChatForm = (props) => {
    const { socket } = props;
    const initialState = {
        msg: '',
    };

    const [state, setState] = useState(initialState);

    const handleOnChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { msg } = state;
        socket.emit('chatMessage', msg);
        setState({ msg: '' });
    };

    return (
        <form id="chat-form">
            <input
                name="msg"
                value={state.msg}
                id="msg"
                type="text"
                placeholder="Enter Message"
                required
                autocomplete="off"
                onChange={handleOnChange}
            />
            <button
                className="w-3/12 mt-0 text-sm tracking-wider btn button-1 sm:ml-4"
                onClick={handleSubmit}
            >
                <i className="fas fa-paper-plane"></i> Send
            </button>
        </form>
    );
};

export default ChatForm;

// const chatForm = document.getElementById('chat-form');
// const chatMessages = document.querySelector('.chat-messages');
// const roomName = document.getElementById('room-name');
// const userList = document.getElementById('users');

// //get username and room from URL
// const { username, room } = Qs.parse(location.search, {
//     ignoreQueryPrefix: true,
// });

// const socket = io();

// //join chatroom
// socket.emit('joinRoom', { username, room });

// //get room and users
// socket.on('roomUsers', ({ room, users }) => {
//     outputRoomName(room);
//     outputUsers(users);
// });

// //message from server
// socket.on('message', (message) => {
//     console.log(message);
//     outputMessage(message);
//     //scroll down
//     chatMessages.scrollTop = chatMessages.scrollHeight;
// });

// //message submit
// chatForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     //get message text
//     const msg = e.target.elements.msg.value;

//     //emit message to server
//     socket.emit('chatMessage', msg);
//     //clear input
//     e.target.elements.msg.value = '';
//     e.target.elements.msg.focus();
// });

// //BELOW NEEDS TO BE HOISTED TO TOP
// //output message to DOM
// function outputMessage(message) {
//     const div = document.createElement('div');
//     div.classList.add('message');
//     div.innerHTML = ` <p class="meta">${message.username}  <span>${message.time} </span></p>
//     <p class="text">
//         ${message.text}
//     </p>`;
//     document.querySelector('.chat-messages').appendChild(div);
// }

// //add room name to DOM
// function outputRoomName(room) {
//     roomName.innerText = room;
// }

// //add users to DOM
// function outputUsers(users) {
//     userList.innerHTML = `
//     ${users.map((user) => `<li>${user.username}</li>`).join('')}
//     `;
// }
