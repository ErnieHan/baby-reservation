const path = require('path')
const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const postResponse = require(path.join(__dirname, 'postResponse.js'))
const routes = require(path.join(__dirname, 'routes.json'))
const domain = 'http://localhost:6060'

server.post('/shopping/v1/cartItems', function (req, res) {
  res.header('Access-Control-Allow-Origin', domain)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(204).jsonp({})
})

server.post('/shopping/v1/customers/login', function (req, res) {
  res.header('Access-Control-Allow-Origin', domain)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(201).jsonp({
    customer: {
      firstName: '嘉欣',
      familyName: '陳',
      preferenceLanguage: 'ZHT',
      email: 'chanky@gmail.com',
      mobileCountryCode: '852',
      mobileNumber: '93714125',
      salute: '02'
    }
  })
})

server.patch('/shopping/v1/customers/info', function (req, res) {
  res.header('Access-Control-Allow-Origin', domain)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(401).jsonp({
    customer: {
      firstName: '嘉欣',
      familyName: '陳',
      preferenceLanguage: 'ZHT',
      email: 'chanky@gmail.com',
      mobileCountryCode: '852',
      mobileNumber: '93714125',
      salute: '02'
    }
  })
})

server.put('/shopping/v1/cartItems', function (req, res) {
  res.header('Access-Control-Allow-Origin', domain)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(200).jsonp([
    {
      districtName: '香港區',
      subDistrictName: '中西區',
      storeId: '183',
      displayName: '183 EMP豪行(金鐘太古廣場)',
      address: '香港金鐘太古廣場L1層139號',
      telephoneNumber: '+852 2154 0061',
      givenName: 'EMPHASIS金鐘太古廣場店',
      operatingHour: '11:00-20:00',
      dsLatitude: '22.277368',
      dsLongitude: '114.165130'
    }
  ])
})

server.post('/shopping/v1/compositions/temp-orders', function (req, res) {
  res.header('Access-Control-Allow-Origin', domain)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(201).jsonp({
    hashCtId: 'Q1QyNDdBVzAwMDA0OA==',
    paymentMethodCode: 'ATM',
    eftPayRedirectUrl:
      'https://vmp.eftpay.com.cn/VMP/web/payPage?userkey=12345678&outTradeNo=20190824010716&sign=5c24f30f758d86e2ba1cc1a291aa6d392f563180584f071d2d725eff52947f05'
  })

  // res.status(400).jsonp({
  //   errors: [
  //     {
  //       message: 'The total price is out of range.',
  //       errorCode: 'E00949',
  //       entity: '',
  //       property: '',
  //       invalidValue: ''
  //     }
  //   ]
  // })

  // res.status(500).jsonp({})
})

server.post('/shopping/v1/compositions/deliveries', function (req, res) {
  res.header('Access-Control-Allow-Origin', domain)
  res.header('Access-Control-Allow-Credentials', 'true')
  res.status(204).jsonp({})
})

server.use(middlewares)
server.use(jsonServer.rewriter(routes))
server.use(postResponse)
server.use(router)
server.listen(6061, () => {
  console.log('JSON Server is running')
})
