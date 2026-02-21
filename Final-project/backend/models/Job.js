const mongoose = require("mongoose");
const jobschema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        company: { type: String, required: true },
        location: { type: String, required: true },
        salary: { type: String, required: true },
        logo: { type: String, },
        description: { type: String, required: true },
    },
    {timestamps:true}
);
module.exports = mongoose.model("JOB-AEC",jobschema);