const mongoose=require("mongoose");

const OrdersSchema=require("../schemas/ordersSchema");
const OrdersModel =mongoose.model("order",OrdersSchema);

module.exports=OrdersModel;