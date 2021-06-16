module.exports = {
  'errno': 0,
  'error': '',
  'cost': 232,
  'request_id': '2018121418073383422',
  'data|10-30': [{
    'guid': '@guid()',
    'phone|regexp': /1[3-9]\d{10}/,
    'agent_name': '@cname()',
    'agent_code|regexp': /\d{6}/,
    'agent_avatar': '@image("400x300", "#50B347", "#FFF", "mocker")',
    'city_name': '@city(true)',
    'ip': '@ip()'
  }]
}
