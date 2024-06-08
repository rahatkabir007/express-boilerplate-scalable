import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config();

const connectDB = async () => {
    try {
        const client = new MongoClient(process.env.MONGODB_URI);
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(); // return the client after connection is established
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
        process.exit(1);
    }
};

export { connectDB };

// import { config } from 'dotenv';
// import { MongoClient } from 'mongodb';

// config();

// const client = new MongoClient(process.env.MONGODB_URI);

// async function connectDB() {
//     if (!client.isConnected()) {
//         await client.connect();
//     }
//     return client.db();
// }

// export { connectDB };

