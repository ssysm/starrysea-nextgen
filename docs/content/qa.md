### 添加新问题

添加一个新的问题

```endpoint
POST /qa/ask
```

属性 | 介绍
---|---
`question` | (必填) 提问的问题


#### Example Response
```json
{
    "success": true,
    "response": {
        "answer": null,
        "answered": false,
        "created": "2018-02-02T03:37:25.616Z",
        "_id": "5a73dd1b89194cb6fa3d7981",
        "question": "Hello123",
        "__v": 0
    }
}
```

### 获取被回答问题列表

获取已回答的问题列表

```endpoint
GET /qa/?page={页数}&limit={每页数量}
```

#### Example Response

```json
{
    "success": true,
    "response": [
    {
        "success": true,
        "response": [
            {
                "answer": "你好123",
                "answered": true,
                "created": "{timestamp}",
                "_id": "{OBJ Id}",
                "question": "Hello123",
                "__v": 0
            }
        ]
    }
    //...
    ]
}
```

### 获取所有问题


### 回答问题

### 按对象ID删除问题



