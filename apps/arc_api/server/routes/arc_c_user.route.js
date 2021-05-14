const express = require('express');
const router = express.Router();
const ARC_C_Controller = require('../controllers/arc_c_user.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');

//localhost:3000/api/arc_db/arc_c_users
router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getAllCUsers)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_id/1
router.get('/c_usr_id/:c_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getCUserById)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_an_id/QWERT123
router.get('/c_usr_an_id/:c_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getCUserByANId)); 

//http://localhost:3000/api/arc_db/arc_c_users/c_usrs
router.post('/c_usrs/', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.createCUser)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_id/3
router.patch('/c_usr_id/:c_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.updateCUser)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_id/3
router.delete('/c_usr_id/:c_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.deleteCUser)); 

/*
// http://localhost:3000/api/arc_db/arc_c_users (get all)
// http://localhost:3000/api/arc_db/arc_c_users/c_usr_id/1  (get by table id)
// http://localhost:3000/api/arc_db/arc_c_users/c_usr_an_id/QWERT123  (get by table an id)
// http://localhost:3000/api/arc_db/arc_c_users/c_usrs (post)
// http://localhost:3000/api/arc_db/arc_c_users/c_usr_id/3  (patch)
// http://localhost:3000/api/arc_db/arc_c_users/c_usr_id/3  (delete)
// sample data
    {
        "c_usr_id": 1,
        "c_usr_an_id": "QWERT123",
        "c_usr_name": "Keith",
        "c_usr_pwd": "p12345",
        "c_usr_pwd_hash": "1q2w3e",
        "c_usr_email": "codnerk@gmail.com",
        "c_usr_ip": "1.1.1.1",
        "c_usr_status": "Active",
        "c_usr_op1": "0",
        "c_usr_op2": "0",
        "c_usr_type": "Admin",
        "c_usr_date_created": "2021-03-05T05:55:57.000Z"
    }
*/


module.exports = router;