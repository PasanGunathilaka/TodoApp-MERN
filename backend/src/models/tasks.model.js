const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
    {

        title: {
            type: String,
            required: true,
        },

        activeStatus: {
            type: String,
            //enum: ["Todo", "Done"],
            default: "Todo",
        },

        endDate: {
            type: String,
            reqired: true
        },


    },
    { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
