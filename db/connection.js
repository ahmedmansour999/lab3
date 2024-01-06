import mongoose from "mongoose";

const initConnection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/sara7aIntro")
        .then(() => console.log('connected'))
    .catch((err) => console.log("err",err))

}


export default initConnection;