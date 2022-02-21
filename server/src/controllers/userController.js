const express = require("express");
const router = express.Router();

const service = require("../services/userService");

// router.get('/', (req, res) => {
//     res.send('Register Page');
// });

router.post("/register", async (req, res) => {
  
  let { username, password } = req.body;
  try {
    let user = await service.register({ username, password });
    let { accessToken, refreshToken } = await service.login({
      username,
      password,
    });
    res.json({
      _id: user._id,
      username: user.username,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.json({ type: "error", message: error.message });
  }
});

module.exports = router;
