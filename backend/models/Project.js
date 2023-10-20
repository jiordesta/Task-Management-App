import mongoose from "mongoose";
const ProjectSchema = new mongoose.model({
    title:{type:String},
    description:{type:String},
    owner:[{type: mongoose.Types.ObjectId}],
    workers:[{type: mongoose.Types.ObjectId}],
    image:{type:String},
    created:{type:Date, default:Date.now}
})
export default mongoose.model('Project', ProjectSchema)