const express = require('express');
const authMiddleware = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

// Public route
router.get('/public', (req, res) => {
    res.json({ message: "This is a public API. No authentication needed." });
});

// Protected route
router.get('/dashboard', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.userId).select("-password");
        res.json({ message: "Welcome to your dashboard!", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Another protected route
router.get('/profile', authMiddleware, async (req, res) => {
    res.json({ message: `Hello User ${req.user.userId}, this is your profile.` });
});

router.get('/allaccount',authMiddleware,async(req,res)=>{
    try  {
        const acc = await User.find();
        res.json(acc);
        
    } catch (error) {
        
    }
})

module.exports = router;
