const ARC_CMDModel = require('../models/arc_cmd.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config(); 

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class ARC_CMDController {
    getAll_CMD_Users = async (req, res, next) => {
        let ARC_CMD_users = await ARC_CMDModel.find();
        if (!ARC_CMD_users.length) {
            throw new HttpException(404, 'Command not found');
        }

        res.send(ARC_CMD_users);
    };

    getAllUnexecutedCMDs = async (req, res, next) => {
        let ARC_CMD_users = await ARC_CMDModel.find({ cmd_status: req.params.cmd_status, r_usr_an_id : req.params.r_usr_an_id});
        if (!ARC_CMD_users.length) {
            throw new HttpException(404, 'Command not found');
        }

        res.send(ARC_CMD_users);
    };

    get_CMD_UserById = async (req, res, next) => {
        const cmD_usr_name = await ARC_CMDModel.findOne({ cmd_id: req.params.cmd_id });
        if (!cmD_usr_name) {
            throw new HttpException(404, 'Command not found');
        }

        const { r_usr_an_id, ...userNotFound } = cmD_usr_name;

        res.send(userNotFound);
    };

    get_CMD_UserByANId = async (req, res, next) => {
        const cmD_usr_name = await ARC_CMDModel.findOne({ cmd_lst_an_id: req.params.cmd_lst_an_id });
        if (!cmD_usr_name) {
            throw new HttpException(404, 'Command not found');
        }

        const { r_usr_an_id, ...userNotFound } = cmD_usr_name;

        res.send(userNotFound);
    };

    getUnexecutedCommands = async (req, res, next) => {
        const cmD_usr_name = await ARC_CMDModel.findOne({ cmd_lst_an_id: req.params.cmd_lst_an_id });
        if (!cmD_usr_name) {
            throw new HttpException(404, 'Command not found');
        }

        const { r_usr_an_id, ...userNotFound } = cmD_usr_name;

        res.send(userNotFound);
    };

    create_CMD_User = async (req, res, next) => {

        const result = await ARC_CMDModel.create(req.body);

        if (!result) {
            throw new HttpException(501, 'Something went wrong');
        }

        res.status(201).send('Command was created!');
    };

    update_CMD_User = async (req, res, next) => {
        
        const { confirm_password, ...restOfUpdates } = req.body;

        // do the update query and get the result
        // it can be partial edit
        const result = await ARC_CMDModel.update(restOfUpdates, req.params.cmd_id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Command not found' :
            affectedRows && changedRows ? 'Command updated successfully' : 'Updated failed';

        res.send({ message, info });
    };

    delete_CMD_User = async (req, res, next) => {
        const result = await ARC_CMDModel.delete(req.params.cmd_id);
        if (!result) {
            throw new HttpException(404, 'User not found');
        }
        res.send('Command has been deleted');
    };

/*
    getUserByuserName = async (req, res, next) => {
        const user = await UserModel.findOne({ username: req.params.username });
        if (!user) {
            throw new HttpException(404, 'User not found');
        }

        const { password, ...userWithoutPassword } = user;

        res.send(userWithoutPassword);
    };

    getCurrentUser = async (req, res, next) => {
        const { password, ...userWithoutPassword } = req.currentUser;

        res.send(userWithoutPassword);
    };

    userLogin = async (req, res, next) => {
        this.checkValidation(req);

        const { email, password: pass } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new HttpException(401, 'Unable to login!');
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new HttpException(401, 'Incorrect password!');
        }

        // user matched!
        const secretKey = process.env.SECRET_JWT || "";
        const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
            expiresIn: '24h'
        });

        const { password, ...userWithoutPassword } = user;

        res.send({ ...userWithoutPassword, token });
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

    // hash password if it exists
    hashPassword = async (req) => {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
    }
    */
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new ARC_CMDController;