const mongoose=require("mongoose");

const HoldingsSchema=require("../schemas/holdingsSchema");
const HoldingsModel =mongoose.model("holding",HoldingsSchema);

module.exports=HoldingsModel;