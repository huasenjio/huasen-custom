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
const { checkAdminPower, checkLoginPower } = require('../middleware/user.middleware.js');
const { getOptions, update } = require('../controller/calculate.controller.js');

/**
 * @api {post} /calculate/getOptions 获取计算选项
 * @apiVersion 1.0.0
 * @apiGroup calculate
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "productColor": []
 *     }
 */
router.post('/getOptions', handleJWT, checkLoginPower, getOptions);
router.post('/update', handleJWT, checkAdminPower, update);

module.exports = router;
