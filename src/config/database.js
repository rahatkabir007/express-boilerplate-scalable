import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config();

const client = new MongoClient(process.env.MONGODB_URI);

const connectDB = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
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

