// migrations define columns and tables; updates db
import mongoose from "mongoose";

const Schema = mongoose.Schema;  // don't invoke Schema bc this is a key of a mongoose fx
// would have to pass in arguments for Schema if we did invoke

// unique model of the schema
const OrderSchema = Schema({
    items: {
        type: String,
        required: true,
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }

}, {timestamps: true});

export const Order = mongoose.model("Order", OrderSchema); // name of model is "Order", with OrderSchema passed in
