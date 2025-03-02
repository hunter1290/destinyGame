const express = require('express');
const { handleAIRequest } = require('../controllers/aiController');

const router = express.Router();

// REST API Endpoint for AI
router.post('/chat', async (req, res) => {
    try {
        const response = await handleAIRequest(req.body.message);
        res.json({ response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
