/*
 * @Autor: huasenjio
 * @Date: 2022-10-22 15:30:53
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-10-22 15:31:03
 * @Description: 邮箱路由
 */

const express = require('express');
const router = express.Router();

const { handleJWT, handleUselessParams } = require('../middleware/common.middleware.js');
const { checkAdminPower } = require('../middleware/user.middleware.js');

const { sign, login, findByPage, remove, update, add } = require('../controller/user.controller.js');

/**
 * @api {post} /user/findByPage 分页获取用户数据
 * @apiVersion 1.0.0
 * @apiGroup calculate
 * @apiParam {number} pageNo
 * @apiParam {number} pageSize
 * @apiParam {string} id
 * @apiParam {number} code
 * @apiParam {string} name
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "list": [],
 *       "totla": 0
 *     }
 */
router.post('/sign', sign);
router.post('/login', login);
router.post('/findByPage', handleJWT, checkAdminPower, findByPage);
router.post('/remove', handleJWT, checkAdminPower, remove);
router.post('/update', handleJWT, checkAdminPower, update);
router.post('/add', handleJWT, checkAdminPower, add);

module.exports = router;
