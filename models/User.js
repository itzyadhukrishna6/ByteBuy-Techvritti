import mongoose, { Mongoose } from "mongoose";


const userSchema = new mongoose.Schema({
    _Id:{ type : String, required:true},
    name: { type : String, required:true },
    email: { type : String, required:true, unique:true },
    imageUrl : { type : String, required:true }, 
    cartItems: { type : Object, default:{} },
}, { minimize: false})

const User = mongoose.models.user || Mongoose.model('user',userSchema)

export default User