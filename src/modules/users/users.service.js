import { ObjectId } from "mongodb";
import bcrypt from 'bcrypt';

class UsersService {
    constructor(db) {
        this.collection = db?.collection('users');
    }

    async registerUser(userData) {
        console.log(userData)
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = { ...userData, password: hashedPassword };
        await this.collection.save(user);
        return user;
    }

    async loginUser(userData) {
        const user = await this.collection.findOne({ username: userData.username });
        if (user && await bcrypt.compare(userData.password, user.password)) {
            const token = generateToken(user._id);
            return { user, token };
        }
        throw new Error('Invalid username or password');
    }

    async getUsers() {
        return await this.collection.find().toArray();
    }

    async getUserById(id) {
        return await this.collection.findOne({ _id: ObjectId(id) });
    }
}

function generateToken(userId) {
    return jwt.sign({ _id: userId }, process.env.JWT_SECRET);
}

export { UsersService };