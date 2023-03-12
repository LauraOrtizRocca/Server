const express = require("express");
const {
  addUserController,
  getUserController,
  getUserByUsernameController,
  updateUserController,
  deleteUserController,
} = require("../controller/userController");
const validator = require("../utils/validator");
const { body } = require("express-validator");
const router = express.Router();

router.get("/user", getUserController);
router.get("/user/:username", getUserByUsernameController);
router.put("/user/:username", updateUserController);
router.post(
  "/user",
  body("password").isLength({ min: 5, max: 15 }),
  body("username").isLength({ min: 5, max: 15}),
  validator,
  addUserController
);
router.delete("/user/:username", deleteUserController);



const signUpCheck = () => {
    return [
        body('password').trim().notEmpty().isLength({ min: 6}), 
        body ('cfpassword').trim().custom((value, {req}) => {
            if (value !== req.body.password) {
                throw new Error('la contraseña no cumple con los requisitos')
            }
            return true; })]
        }
    
module.exports = { signUpCheck };

module.exports = router;