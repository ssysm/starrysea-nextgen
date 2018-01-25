### 添加一个新的募捐记录

创建一个新的新的募捐记录🆕 **需要管理员权限**

```endpoint
POST /funding/create
```

属性 | 介绍
---|---
`activity_id` | (必填) 活动对象ID
`name` | (必填) 名字
`amount` | (必填) 金额大小
`message` | (选填) 消息

#### Example response

```json
{
    "success": true,
    "response": {
        "_id": "5a6a5c6c75ba5aed47c1fc0d",
        "activity_id": "5a6a31fe6bf671e8ec965d64",
        "name": "adnj",
        "amount": 0.88,
        "message": "",
        "__v": 0
    }
}
```

### 按活动对象ID获取募捐记录

按活动对象ID获取募捐记录

```endpoint
GET /funding/activity?activity_id={活动对象ID}
```

#### Example response

```json
{
    "success": true,
    "response": [
        {
            "_id": "5a6a5c6c75ba5aed47c1fc0d",
            "activity_id": "5a6a31fe6bf671e8ec965d64",
            "name": "adnj",
            "amount": 0.88,
            "message": "",
            "__v": 0
        }
    ]
}
```

### 按对象ID删除募捐记录

按对象ID删除募捐记录 **需要管理员权限**

```endpoint
DELETE /funding/delete
```

属性 | 介绍
---|---
`uid` | (必填) 对象ID

#### Example response

```json
{
    "success": true,
    "response": {
        "n": 1,
        "ok": 1
    }
}
```
