const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        type:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        },
        totalPrice:{
            type:Number,
            required:true,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Products", inventorySchema);