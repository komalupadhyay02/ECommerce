const mongoose=require("mongoose")
const {Schema}=mongoose
const productSchema=new Schema({
    name:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
        min:0
    },
    img:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        require:true
    },
    reviews:[
        {
            type:Schema.Types.ObjectId,
            ref:"Review"
        }
    ]
})
const Product=mongoose.model("Product",productSchema)
module.exports=Product