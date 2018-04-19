
var DATA_TYPE_ENUM = require('./internal/enum/dataTypeEnum');
var assertDataType = require('./internal/assertDataType');

/**
 * 校验`val`是否为string
 *
 * 只有当`val`类型为`string`或者`[object String]`时，返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isString(val) {
  return typeof val === DATA_TYPE_ENUM.STRING || assertDataType(DATA_TYPE_ENUM.STRING, val);
}

module.exports = _isString;
