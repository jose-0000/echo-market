const mongoose = require("mongoose");

const communitySchema = new mongoose.Schema({
    communityName: {
        type: String,
        required: true
    },
    communityType: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    accessType: {
        type: String,
        enum: ["Public", "Private"], // optional enum
        default: "Public"
    },
    description: {
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model("Community", communitySchema);



