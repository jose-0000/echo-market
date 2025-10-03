const express = require("express");
const router = express.Router();
const Community = require("../models/Community");

// POST /api/community  (create)
router.post("/", async (req, res) => {
    const { communityName, communityType, location, accessType, description } = req.body;

    // backend validation
    if (!communityName || !communityType) {
        return res.status(400).json({ error: "Community name and type are required" });
    }

    try {
        const community = new Community({ communityName, communityType, location, accessType, description });
        await community.save();
        res.status(201).json({ message: "Community created successfully", community });
    } catch (err) {
        console.error("❌ Error saving community:", err);
        res.status(500).json({ error: err.message });
    }
});

// GET /api/community  (list)
router.get("/", async (req, res) => {
    try {
        const communities = await Community.find();
        res.json(communities);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;




