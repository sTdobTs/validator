
## isString(val)

#### 描述：

    校验参数 `val` 是否为 `string`

#### 参数：

    val，任意类型

#### 说明：

    当参数 val 为 `string` 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isString(''); // => true
jxmValidator.isString('   '); // => true

jxmValidator.isString('3'); // => true
jxmValidator.isString(3); // => false

jxmValidator.isString(true); // => false
jxmValidator.isString(null); // => false
jxmValidator.isString(undefined); // => false

jxmValidator.isString({}); // => false

jxmValidator.isString(Object(3)); // => false
jxmValidator.isString(Object('3')); // => true
```
