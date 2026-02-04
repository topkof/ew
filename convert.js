const fs = require("fs");

// 读取 test.json
const input = JSON.parse(fs.readFileSync("test.json", "utf8"));

// 构建新结构
const result = {
  cache_time: 7200,
  api_site: {}
};

input.forEach(item => {
  result.api_site[item.id] = {
    api: item.baseUrl,
    name: item.name
  };
});

// 覆盖写回 test.json
fs.writeFileSync("test.json", JSON.stringify(result, null, 4));

console.log("已覆盖 test.json");
