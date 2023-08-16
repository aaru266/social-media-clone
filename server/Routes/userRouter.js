const router=require("express").Router();

const {signup,login}=require("../controller/Usercontroller");

router.post("/signup",signup);
router.post("/login",login);

module.exports = router;