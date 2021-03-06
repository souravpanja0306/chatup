const io = require("socket.io")(5000, {
    cors: {
        origin: "http://localhost:3000"
    }
})

let users = []

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId)
        && users.push({ userId, socketId })
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

const getUser = (senderId) => {
    return users.find((user) => { user.senderId === senderId })
}

io.on("connection", (socket) => {
    console.log("A user is connected")
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id)
        io.emit("getUsers", users)
    })


    socket.on("sendMsg", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId)
        console.log(user)
        io.to(user.socket_id).emit("getMessege", {
            senderId,
            text
        })
    })


    socket.on("disconnect", () => {
        console.log("A user disconnected!")
        removeUser(socket.id)
        io.emit("getUsers", users)
    })
})
