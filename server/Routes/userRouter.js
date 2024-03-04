const router=require("express").Router();

const {signup,login,authMiddleware, loginWithCookie}=require('../controllers/UserController');

router.post("/signup",signup);
router.post("/login",login);
router.get('/login',authMiddleware,loginWithCookie);
// router.patch('/addfriend',authMiddleware,addfriend);
// router.patch('/removefriend',authMiddleware,removefriend);
module.exports = router;