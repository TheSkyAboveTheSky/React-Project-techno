const client = require('socket.io')(4000);
const Chat = require('../models/Chat');


const connectSocket = async () => {
    client.on('connection', function (socket) {
        console.log("a user connected");
        sendStatus = function (s) {
            socket.emit('status', s);
        }

        Chat.find().limit(100).sort({ _id: 1 }).toArray((err, res) => {
            if (err) throw err;
            socket.emit('message', res);
        }
        );

        socket.on('input', (data) => {
            const newChat = new Chat({
                name: data.name,
                message: data.message
            })
            newChat.save().then(chat => {
                client.emit('message', chat);

                sendStatus({
                    message: "Message sent",
                    clear: true
                });
            }
            ).catch(err => {
                console.log(err)
            }
            );
        }
        );


        socket.on('clear', () => {
            Chat.remove({}, () => {
                socket.emit('cleared');
            })
        }
        )
    });

}
module.exports = connectSocket;