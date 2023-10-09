const mongoose = require('mongoose');

const db = () =>{
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser : true
}).then(()=>{
    console.log("mongodb bağlandıı");
}).catch((err)=>{
    console.log(err)
})
}
module.exports= db //fonksiyonu export ettik
