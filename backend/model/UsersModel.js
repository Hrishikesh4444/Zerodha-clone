const mongoose=require("mongoose");

const UsersSchema=require("../schemas/usersSchema");
const UsersModel =mongoose.model("user",UsersSchema);

module.exports=UsersModel;