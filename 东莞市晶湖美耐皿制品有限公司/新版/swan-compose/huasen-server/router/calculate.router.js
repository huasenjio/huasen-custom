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
const { getOptions, update, add } = require('../controller/calculate.controller.js');

/**
 * @api {post} /calculate/getOptions 获取全部配置
 * @apiVersion 1.0.0
 * @apiGroup calculate
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {name, key, data}
 *     ]
 */
router.post('/getOptions', handleJWT, checkLoginPower, getOptions);

/**
 * @api {post} /calculate/update 更新配置
 * @apiVersion 1.0.0
 * @apiGroup calculate
 * @apiParam {string} _id 配置id
 * @apiParam {string} name 名称
 * @apiParam {string} key 索引值
 * @apiParam {object} data 内容
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {_id, name, key, data}
 *     ]
 */
router.post('/update', handleJWT, checkAdminPower, update);

/**
 * @api {post} /calculate/add 添加配置
 * @apiVersion 1.0.0
 * @apiGroup calculate
 * @apiParam {string} name 名称
 * @apiParam {string} key 索引值
 * @apiParam {json} data 内容
 * @apiParam {string} data.type 配置类型
 * @apiParam {array} data.value 配置列表
 */
router.post('/add', handleJWT, checkAdminPower, add);

module.exports = router;
