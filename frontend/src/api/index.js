var socket = new WebSocket("ws://localhost:8081/ws");

let connect = (cb) => {
    console.log("尝试连接...");

    socket.onopen = () =>{
        console.log("连接成功");
    }

    socket.onmessage = msg => {
        console.log(msg);
        cb(msg);
    }

    socket.onclose = event => {
        console.log("Socket 连接关闭:", event);
    }

    socket.onerror = error => {
        console.log("Socket Error:", error);
    }
}

let sendMsg = msg => {
    console.log("发生消息:", msg);
    socket.send(msg);
}

export {connect, sendMsg};