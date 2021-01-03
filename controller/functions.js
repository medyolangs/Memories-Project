/*
* export all the functions that you are going to use for your app 

* importing the model schema
import PostMessgage from '../model/models.js'

* READ/GETTING data from the database takes time, so to make it run use async await func
export const getRoute = async (req, res) => {
    try {
        const postMessages - await PostMessage,find()

        res.status(200).json(postMessages)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}


* POST/CREATE data and store in database
export const createRoute = asyc (req, res) => {
    const post = req.body

    const newPost = new PostMessage  

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

*/
