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
        type: String,
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
        type: String,
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
    imageUrls:{
        type: Array,
        required: true
    },
    UserRef:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    Contact:{
        type: String,
        required: true
    },
    Features:{
        type: String,
        required: true
    },
    Type:{
        type: String,
        required: true
    },
    Condition:{
        type: String,
        required: true
    },



},{timestamps: true});

const List= mongoose.model('List',ListSchema);
export default List;