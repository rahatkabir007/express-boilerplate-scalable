import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';
import { generateToken } from "../../utils/jwtSign.js";

class UsersService {
    constructor(db) {
        this.collection = db?.collection('users');
    } 

    async registerUser(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = { ...userData, password: hashedPassword };
        await this.collection.insertOne(user);
        return user;
    }

    async loginUser(userData) {
        const user = await this.collection.findOne({ email: userData.email });
        if (!user) {
            throw new Error('User Not Registered');
        }
        if (user && await bcrypt.compare(userData.password, user.password)) {
            const token = generateToken(user.email);
            // console.log(user, token)
            return { user, token };
        }
        else {
            throw new Error('Email or Password is invalid');
        }
    }

    async getUsers() {
        return await this.collection.find().toArray();
    }

    async getUserById(id) {
        return await this.collection.findOne({ _id: ObjectId(id) });
    }
}



export { UsersService };