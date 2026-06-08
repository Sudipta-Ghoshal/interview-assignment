const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const User = require('../models/user');


// --- Routes ---
// 1. Registration Route
router.post('/register', async (req, res) => {
    try {
        let { username, password } = req.body;

        // Normalize input
        username = username?.trim().toLowerCase();
        password = password?.trim();

        // Empty validation
        if (!username || !password) {
            return res.status(400).json({
                message: 'Username and password are required'
            });
        }

        // Username validation
        const usernameRegex = /^(?=.*[a-zA-Z])[a-zA-Z0-9_]{3,20}$/;

        if (!usernameRegex.test(username)) {
            return res.status(400).json({
                message:
                    'Username must contain at least one letter and be 3-20 characters long'
            });
        }

        // Password validation
        if (password.length < 4 || password.length > 8) {
            return res.status(400).json({
                message:
                    'Password must be between 4 and 8 characters'
            });
        }

        // Existing user check
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({
                message: 'User already exists'
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({
            username,
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({
            message: 'User registered successfully'
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Server error'
        });
    }
});

// 2. Login Route
router.post('/login', async (req, res) => {
    try {
        let { username, password } = req.body;

        // Normalize input
        username = username?.trim().toLowerCase();
        password = password?.trim();

        // Validate input
        if (!username || !password) {
            return res.status(400).json({
                message: 'Username and password are required'
            });
        }

        // Find user
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });

        // Check password
        const isMatchPassword = await bcrypt.compare(password, user.password);
        if (!isMatchPassword) return res.status(400).json({ message: 'Invalid credentials' });

        // Return success. We'll send the username.
        res.status(200).json({ username: user.username });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;