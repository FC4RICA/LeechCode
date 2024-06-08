import express from 'express';
import { LogOut } from '../controller/User/user/Logout';
import { register } from '../controller/User/user/Register';
import { isLogin, validateToken } from '../middleware/auth';
import { Login } from '../controller/User/user/Login';
import { getUser } from '../controller/User/user/Getuser';
import { getUserByUserID } from '../controller/User/user/GetUserByUserID';
import { getPost } from '../controller/User/post/getPost';
import { getPostByPostID } from '../controller/User/post/getPostByPostID';
import { editUsername } from '../controller/User/user/EditUsername';
import { editPassword } from '../controller/User/user/EditPassword';
import { deleteAccount } from '../controller/User/user/deleteAccount';

const router = express.Router();

router.get("/", (req, res) => {
    res.send({
        message: "this is user router",
    });
});

router.get("/getUser", validateToken, getUser);
router.get("/getUserByUserID", getUserByUserID);
router.get("/logout", LogOut);
router.post("/login", isLogin, Login);
router.post("/register", isLogin, register);
router.put("/editUsername", editUsername);
router.put("/editPassword", editPassword);
router.delete("/deleteAccount", deleteAccount);

// Post router
router.get("/post/getPost", getPost);
router.get("/post/getPostByPostID", getPostByPostID);

export default router;