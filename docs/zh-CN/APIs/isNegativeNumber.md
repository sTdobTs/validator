
## isNegativeNumber(val, options)

#### 描述：

    校验参数 `val` 是否为负数

#### 参数：

    val，任意类型

    options，可选参数，默认值 {isStrict: false}

    options.isStrict, 严格模式(true)／非严格模式(false)

#### 说明：

    该接口存在两种模式, 即严格模式、非严格模式;

    默认采用 `非严格模式`

    若参数 `val` 为 number 类型, 并且是负数 则返回 true, 否则返回 false
    若参数 `val` 为 string 类型, 并且通过验证为负数字符串, 则返回 true, 否则返回 false
    若参数 `val` 不属于以上两种类型, 则直接返回 false

    若参数 `val` 的值为空字符串（''、'   '）, 则直接返回 false

    若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false

    e.g.

      待校验参数值: '-3'
      > 若是严格模式，则该参数值校验后，返回 false
      > 若是非严格模式, 则该参数值校验后, 返回 true

#### 示例：

```javascript
jxmValidator.isNegativeNumber(-.3); // => true
jxmValidator.isNegativeNumber(-3); // => true
jxmValidator.isNegativeNumber(-3.5); // => true
jxmValidator.isNegativeNumber('-.3'); // => true
jxmValidator.isNegativeNumber('-3'); // => true
jxmValidator.isNegativeNumber('-3.5'); // => true
jxmValidator.isNegativeNumber(-.3, {isStrict: true}); // => true
jxmValidator.isNegativeNumber(-3, {isStrict: true}); // => true
jxmValidator.isNegativeNumber(-3.5, {isStrict: true}); // => true
jxmValidator.isNegativeNumber('-.3', {isStrict: true}); // => false
jxmValidator.isNegativeNumber('-3', {isStrict: true}); // => false
jxmValidator.isNegativeNumber('-3.5', {isStrict: true}); // => false

jxmValidator.isNegativeNumber(0); // => false
jxmValidator.isNegativeNumber('0'); // => false
jxmValidator.isNegativeNumber(0, {isStrict: true}); // => false
jxmValidator.isNegativeNumber('0', {isStrict: true}); // => false

jxmValidator.isNegativeNumber(3); // => false
jxmValidator.isNegativeNumber('3'); // => false
jxmValidator.isNegativeNumber(3, {isStrict: true}); // => false
jxmValidator.isNegativeNumber('3', {isStrict: true}); // => false

jxmValidator.isNegativeNumber(''); // => false
jxmValidator.isNegativeNumber('   '); // => false
jxmValidator.isNegativeNumber(null); // => false
jxmValidator.isNegativeNumber(undefined); // => false

jxmValidator.isNegativeNumber(NaN); // => false
jxmValidator.isNegativeNumber(Number.POSITIVE_INFINITY); // => false
jxmValidator.isNegativeNumber(Number.NEGATIVE_INFINITY); // => false
```
