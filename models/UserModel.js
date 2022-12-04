const mongoose=require("mongoose")
const Schema=mongoose.Schema

const UserSchema =new Schema({
    name:{type:String,requred:true},
    email:{type:String,required:true,unique:true},
    username:{type:String,required:true,unique:true,trim:true},
    password:{type:String,required:true,select:false},
    profilePic:{type:String},
    newMsgPopup:{type:Boolean,default:true},
    unreadMsg:{type:Boolean,default:false},
    unreadNotif:{type:Boolean,default:false},
    role:{type:String,default:"user",enum:["user","root"]},
    resetToke:{type:String},
    expireToken:{type:Date}

},{timestamps:true});

module.exports=mongoose.model('User',UserSchema)