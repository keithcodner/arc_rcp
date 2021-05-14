const express = require('express');
const router = express.Router();
const ARC_CMDController = require('../controllers/arc_cmd.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');


//localhost:3000/api/arc_db/arc_cmd_table
router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_CMDController.getAll_CMD_Users)); 

//localhost:3000/api/arc_db/arc_cmd_table - Unexecuted
router.get('/cmd_status/:cmd_status/r_usr_an_id/:r_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_CMDController.getAllUnexecutedCMDs)); 

//localhost:3000/api/arc_db/arc_cmd_table/cmd_id/1
router.get('/cmd_id/:cmd_id', /*auth(),*/ awaitHandlerFactory(ARC_CMDController.get_CMD_UserById)); 

//localhost:3000/api/arc_db/arc_cmd_table/cmd_usr_an_id/QWERT123
router.get('/cmd_usr_an_id/:cmD_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_CMDController.get_CMD_UserByANId));  

//http://localhost:3000/api/arc_db/arc_cmd_table/c_usrs
router.post('/mkcmd/', /*auth(),*/ awaitHandlerFactory(ARC_CMDController.create_CMD_User)); 

//localhost:3000/api/arc_db/arc_cmd_table/cmd_id/3
router.patch('/cmd_id/:cmd_id', /*auth(),*/ awaitHandlerFactory(ARC_CMDController.update_CMD_User)); 

//localhost:3000/api/arc_db/arc_cmd_table/cmd_id/3
router.delete('/cmd_id/:cmd_id', /*auth(),*/ awaitHandlerFactory(ARC_CMDController.delete_CMD_User)); 

/*
// http://localhost:3000/api/arc_db/arc_cmd_table (get all)
// http://localhost:3000/api/arc_db/arc_cmd_table/cmd_id/1  (get by table id)
// http://localhost:3000/api/arc_db/arc_cmd_table/cmd_usr_an_id/QWERT123  (get by table an id)
// http://localhost:3000/api/arc_db/arc_cmd_table/mkcmd (post)
// http://localhost:3000/api/arc_db/arc_cmd_table/cmd_id/3  (patch)
// http://localhost:3000/api/arc_db/arc_cmd_table/cmd_id/3  (delete)
// sample data
    {
        "cmd_an_id" : "ABC12352",
        "r_usr_an_id" : "ASDF123",
        "c_usr_an_id" : "QWERT123",
        "r_usr_code_name" : "ARCANE",
        "cmd_exec_name" : "WAIT_0",
        "cmd_exec_params" : "{time_sec : '20'}",
        "cmd_exec_data" : "0",
        "cmd_status" : "UNEXECUTED",
        "cmd_op1" : "0",
        "cmd_op2" : "0",
        "cmd_op3" : "0",
        "cmd_date_created" : "2021-03-05 01:16:12",
        "cmd_date_executed" : "2021-03-05 01:16:13"
    }

    cmd_an_id,r_usr_an_id,c_usr_an_id,r_usr_code_name,cmd_exec_name,cmd_exec_params,cmd_exec_data,cmd_status,cmd_op1,cmd_op2,cmd_op3,cmd_date_created,cmd_date_executed
*/



module.exports = router;