import { Router } from "express";
import UserController from "../controller/userController.js";

const userController=new UserController();

const router=Router()

router.post('/prompt',userController.getInfo);

export default router;