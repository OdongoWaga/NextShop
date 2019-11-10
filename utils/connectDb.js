import mongoose from 'mongoose'

const connection = {}

async function connectionDb() {
    if (connection.isConnected) {
        console.log("Using existing connection")
        return;
    }
    // Use new database connection

    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true

    })

    console.log("DB Connected")

    connection.isConnected = db.connections[0].readyState
}

export default connectionDb;