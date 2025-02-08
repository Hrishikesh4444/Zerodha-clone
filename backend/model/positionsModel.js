const mongoose=require("mongoose");

const PositionsSchema=require("../schemas/positionsSchema");
const PositionsModel =mongoose.model("position",PositionsSchema);

module.exports=PositionsModel;