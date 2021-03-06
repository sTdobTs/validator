
var DATA_TYPE_ENUM = require('./internal/enum/dataTypeEnum');
var assertDataType = require('./internal/assertDataType');

/**
 * 校验参数 `val` 是否为 boolean
 *
 * 若参数 `val` 的类型为 `boolean` 或者 `[object Boolean]` 时, 则返回 true,
 *
 * 否则, 返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isBoolean(val) {
  return typeof val === DATA_TYPE_ENUM.BOOLEAN || assertDataType(DATA_TYPE_ENUM.BOOLEAN, val);
}

module.exports = _isBoolean;
