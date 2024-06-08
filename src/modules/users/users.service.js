import { ObjectId } from "mongodb";

class UsersService {
    constructor(db) {
        this.collection = db?.collection('users');
    }

    async getUsers() {
        return await this.collection.find().toArray();
    }

    async getUserById(id) {
 
        return await this.collection.findOne({ _id: ObjectId(id) });
    }

    async createUser(user) {
        console.log(user);
        return await this.collection.insertOne(user);
    }
}

export { UsersService };
