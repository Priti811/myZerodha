const { Signup, verify, Login } = require("../controllers/AuthController.js");
const { userVerification } = require("../middlewares/AuthMiddleware.js");
const router = require("express").Router();

router.post("/signup", Signup);
router.get("/verify", verify);
router.post("/login", Login);
router.post("/", userVerification);

module.exports = router;
