const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
    },
    body:{
         type: String,
         required: "Body is required",
    },
    photo: {
         type: Buffer,
         contentType: String //extension type e.g- .png
    },
    postedBy: {
        type: ObjectId, // user schema
        ref: "User"
    },
    created:{
        type: Date,
        default: Date.now

    }

});

module.exports = mongoose.model("posts" , PostSchema);