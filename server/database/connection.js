const mongoose=require('mongoose')

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            // useNewUrlParse:true,
            // useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        })

        console.log(`MongoDB connected ${conn.connection.host}`);
        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports=connectDB