    const { Timestamp } = require("mongodb")
    const mongoose = require("mongoose")

    const userSchema = mongoose.Schema({
        name : {
        type:String,
        required : true,

        },
        email: {
            type : String,
            required : true,
            unique : true
        },
        phone : {
            type : Number,
            default : 0
        },
        password : {
            type : String,
            required : true
        },
        isGoogle: {
            type: Boolean,
            dafault:false
        },
    },

        {
            Timestamp: true
        },


    )
    module.exports = mongoose.model('User',userSchema)

