const fs = require("fs");

const input = JSON.parse(fs.readFileSync("test.json", "utf8"));

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

fs.writeFileSync("converted.json", JSON.stringify(result, null, 4));

console.log("转换完成！");
