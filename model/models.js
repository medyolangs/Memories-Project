/*
* Use MODEL of MVC to store all the information that you are going to use in your app
* get the data in mongodb
* store data in mongodb

import mongoose from 'mongooes'

* Schema tells the mongodb to store data with this properties
const postSchema = mongoose.Scheme({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: new Date()
    }
})

* turn all of that into model
const PostMessage = mongoose.model('PostMessage', postSchema)

export default PostMessage

*/
