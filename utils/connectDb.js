import mongoose from 'mongoose'

const connection = {}

async function connectionDb() {
    if (connection.isConnected) {
       
        return;
    }
    // Use new database connection

    const db = await mongoose.connect(process.env.MONGO_SRV, {
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true

    })

    

    connection.isConnected = db.connections[0].readyState
}

export default connectionDb;