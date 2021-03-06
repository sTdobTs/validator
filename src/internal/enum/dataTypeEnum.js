
// Js 数据类型
var DATA_TYPE_ENUM = {};

// 存储类型
[ 'NULL',
  'UNDEFINED',

  'BOOLEAN',
  'NUMBER',
  'STRING',
  'SYMBOL',

  'OBJECT',
  'ARRAY',
  'SET',
  'MAP',
  'WEAKSET',
  'WEAKMAP',

  'FUNCTION',
  'DATE'
].forEach((jsType) => {
  DATA_TYPE_ENUM[jsType] = jsType.toLowerCase();
});

module.exports = DATA_TYPE_ENUM;
