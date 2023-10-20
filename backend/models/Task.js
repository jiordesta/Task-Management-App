import mongoose from 'mongoose'
const TaskSchema = new mongoose.Schema({
    description: {type: String},
    title: {type:String},
    members: [{type: mongoose.Types.ObjectId}],
    created:{type:Date, default:Date.now},
    deadline:{type:Date, default:0}
})
export default mongoose.model('Task', TaskSchema)