### 获取最新版本信息

从Github上获取主分支最新版本信息

*注:Github API会限制访问次数，请做好缓存工作*

```endpoint
GET /version/latest/version
```

#### Example response

```json
{
  "success":true,
  "response":{
    "tag_name":"{Version Number}",
    "prerelease":false
  }
}
```

### 获取最新commit信息

从Github上获取主分支最新commit信息

*注:Github API会限制访问次数，请做好缓存工作*

#### Example response

```json
{
  "success":true,
  "response":{
    "commit":"{Commit SHA512}"
  }
}
```
