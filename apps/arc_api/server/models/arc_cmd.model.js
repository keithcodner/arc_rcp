const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');
 
class ARC_CMDModel {
    tableName = 'arc_cmd_table';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        let res = columnSet.replace(",", " AND ");
        sql += ` WHERE ${res}`;
        
        return await query(sql, [...values]);      
    }

    
    findOne = async (params) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);

        // return back the first row (user)
        return result[0];
    }

    create = async ({ cmd_an_id,r_usr_an_id,c_usr_an_id,r_usr_code_name,cmd_exec_name,cmd_exec_params,cmd_exec_data,cmd_status,cmd_op1,cmd_op2,cmd_op3,cmd_date_created,cmd_date_executed}) => {
        const sql = `INSERT INTO ${this.tableName}
        (cmd_an_id,r_usr_an_id,c_usr_an_id,r_usr_code_name,cmd_exec_name,cmd_exec_params,cmd_exec_data,cmd_status,cmd_op1,cmd_op2,cmd_op3,cmd_date_created,cmd_date_executed) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        const result = await query(sql, [cmd_an_id,r_usr_an_id,c_usr_an_id,r_usr_code_name,cmd_exec_name,cmd_exec_params,cmd_exec_data,cmd_status,cmd_op1,cmd_op2,cmd_op3,cmd_date_created,cmd_date_executed]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, cmd_id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE cmd_id = ?`;

        const result = await query(sql, [...values, cmd_id]);

        return result;
    }


    delete = async (cmd_id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE cmd_id = ?`;
        const result = await query(sql, [cmd_id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
    /**/
}

module.exports = new ARC_CMDModel;