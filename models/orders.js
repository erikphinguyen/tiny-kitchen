// migrations define columns and tables; updates db
import mongoose from "mongoose";

const Schema = mongoose.Schema;  // don't invoke Schema bc this is a key of a mongoose fx
// would have to pass in arguments for Schema if we did invoke

const OrderSchema = Schema();
