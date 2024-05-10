/**
 * docker-compose.yml中设置的管理员账号密码
 * root MONGO_INITDB_ROOT_USERNAME - 账号
 * password MONGO_INITDB_ROOT_PASSWORD - 密码
 */

// 验证超级管理员身份
db.auth("root", "Mongo12345*");
// 读取huasen数据库
const huasenDB = db.getSiblingDB("huasen");

// printjson(huasenDB.getUser("huasen"));
// 判断是否存在huasen用户
if (!huasenDB.getUser("huasen")) {
  print("create huasen user for huasen DB...");
  // 不存在则创建用户
  huasenDB.createUser({
    user: "huasen",
    pwd: "Mongo12345*",
    roles: [
      {
        // 赋予这个用户读写 huasen 数据库的权限
        role: "readWrite",
        db: "huasen",
      },
    ],
  });
}
