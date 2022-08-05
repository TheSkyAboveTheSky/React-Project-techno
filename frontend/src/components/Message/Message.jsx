import './Message.css';
import { format } from 'timeago.js';

export default function Message({ message, own }) {

    let messageArea;
    if (message.text.substring(0, 8) === 'uploads\\') {
        if (message.text.slice(-4) === '.jpg' || message.text.slice(-4) === '.png' || message.text.slice(-4) === '.gif' || message.text.slice(-5) === '.jpeg') {
            messageArea = <img style={{ width: "100%", height: "100%" }} src={`http://localhost:3000/api/image/getImage?name=${message.text.substring(8)}`} alt={message.text} />
        }
        else if (message.text.slice(-4) === '.pdf') {
            messageArea = <object
                data={`http://localhost:3000/api/image/getImage?name=${message.text.substring(8)}`}
                type="application/pdf"
                width="500"
                height="678"
            >

                <iframe
                    src={`http://localhost:3000/api/image/getImage?name=${message.text.substring(8)}`}
                    width="500"
                    height="678"
                >
                    <p>This browser does not support PDF!</p>
                </iframe>
            </object>
        }
        // else if (message.text.slice(-5) === '.xlsx') {
        //     messageArea = <iframe src={`http://localhost:3000/api/image/getImage?name=${message.text.substring(8)}`} width='100%' height='565px' frameborder='0'> </iframe>

        // }
    }
    else {
        messageArea = <p className="messageText">{message.text}</p>
    }



    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                />
                {messageArea}
            </div>
            <div className="messageBottom">{format(message.createdAt)}</div>
        </div>
    )
}