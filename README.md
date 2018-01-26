# starrysea-nextgen
下一代星之海官网版本

# 运行
## 依赖:
  - NodeJS Ver. 7+
  - NPM Ver. 4.2+
  - MongoDB Ver. 3.4+
  - Python Ver. 3.5

### API服务器(文件夹名称:server):
- 配置 `config.js`
   - `database`: MongoDB数据库连接uri
- `npm install`
- `node migrate.js`
- `npm run start`
- 服务器在3000端口监听

### 编译文档(文件夹名称:docs):
- `npm install`
- `npm run build`
- 编译文件在docs根目录(index.html)

### 编译前端(文件夹名称:client)
 - `npm install`
 - `npm run build`
 - 编译文件在`dist`文件夹
