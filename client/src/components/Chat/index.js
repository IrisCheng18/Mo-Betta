import React from 'react'
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import RoomList from './RoomList'
import NewRoomForm from './NewRoomForm'
import { tokenUrl, instanceLocator } from './config'
import './style.css'

class Chat extends React.Component {

    constructor() {
        super()
        this.state = {
            // active room state
            roomId: null,
            // messages array data coming from Chatkit
            messages: [],
            // room states from Chatkit
            joinableRooms: [],
            joinedRooms: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        this.subscribeToRoom = this.subscribeToRoom.bind(this)
        this.getRooms = this.getRooms.bind(this)
        this.createRoom = this.createRoom.bind(this)
    }

    componentDidMount() {
        // Chatkit setting in config.js
        const chatManager = new Chatkit.ChatManager({
            instanceLocator,
            userId: 'perborgen',
            tokenProvider: new Chatkit.TokenProvider({
                url: tokenUrl
            })
        })
        // Connecting to ChatKit and listening for/retrieving new messages 
        chatManager.connect()
            .then(currentUser => {
                // Hooking component to current user object
                this.currentUser = currentUser
                // Getting joined/joinable rooms
                this.getRooms()
            })
            // .catch for promise failure case
            .catch(err => console.log('error on connecting: ', err))
    }

    // Method to get joined and joinable rooms data from Chatkit return a promise
    getRooms() {
        this.currentUser.getJoinableRooms()
            // Handling promise
            .then(joinableRooms => {
                // Setting room data to state
                this.setState({
                    joinableRooms,
                    joinedRooms: this.currentUser.rooms
                })
            })
            // .catch for promise failure case
            .catch(err => console.log('error on joinableRooms: ', err))
    }
// Method to subscribe to rooms passing roomid
    subscribeToRoom(roomId) {
        // Clearing state when room changes to clear old room's messages
        this.setState({ messages: [] })
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {
                    // setting new messages in state by adding them to the messages array (via spread operator...redefining array into new copy...replacing originl messages [] with new one []
                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
        // Handling returned promise of rooms and setting to state the room user is currently in
            .then(room => {
                this.setState({
                    roomId: room.id
                })
                // Calling .getRoom() to update state of joined/joinable room after subscribe
                this.getRooms()
            })
            // promise error catch
            .catch(err => console.log('error on subscribing to room: ', err))
    }

    sendMessage(text) {
        // Calling sendMessage on current user and sending messages to Chatkit with the current roomId
        this.currentUser.sendMessage({
            text,
            roomId: this.state.roomId
        })
    }

    createRoom(name) {
        this.currentUser.createRoom({
            name
        })
            .then(room => this.subscribeToRoom(room.id))
            .catch(err => console.log('error with createRoom: ', err))
    }

    // New message changes state and triggeres re-render
    // Which re-renders MessageList rendering messages to UI
    render() {
        return (
            <div className="app">
                <RoomList
                    // Sending room data to <RoomList component...passing subsribe to room method
                    subscribeToRoom={this.subscribeToRoom}
                    // combining two arrays with spread operator
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]}
                    roomId={this.state.roomId}
                />
                {/* Sending messages data as props to <MessageList */}
                <MessageList
                    roomId={this.state.roomId}
                    messages={this.state.messages}
                />
                {/* Reverse data flow: sending data up to the parent Chat component via sendMessage method  */}
                {/* Giving the SendMessageForm component access to the method */}
                <SendMessageForm
                    disabled={!this.state.roomId}
                    sendMessage={this.sendMessage}
                />
                <NewRoomForm
                    createRoom={this.createRoom}
                />
            </div>
        );
    }
}

export default Chat