import mongoose from "mongoose";

const ListSchema = new mongoose.Schema({
    Brand:{
        type: String,
        required: true
    },
    Model:{
        type: String,
        required: true
    },
    Year:{
        type: Number,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    FuelType:{
        type: String,
        required: true
    },
    Gear:{
        type: String,
        required: true
    },
    Millage:{
        type: Number,
        required: true
    },
    District:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        required: true
    },
    Image:{
        type: Array,
        required: true
    },
    UserRef:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    Contact:{
        type: Number,
        required: true
    },
    Features:{
        type: String,
        required: true
    },


},{timestamps: true});

const List= mongoose.model('List',ListSchema);
export default List;