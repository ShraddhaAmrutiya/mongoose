const mongoose =require ('mongoose');

const userSchema=new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        min: 1, 
        max: 60 
    },
    email:{
        type:String,
        required: true,
        minlength:3,
        maxlength:20,
        lowercase:true

    },
    
    bestFriend:mongoose.SchemaTypes.ObjectId,
    hobbies:[String],
    address:{
        street:String,
        city:String
    }},
    {timestamps : true}

)

module.exports = mongoose.model('User', userSchema)