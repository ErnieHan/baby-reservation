const paymentWord = (payment, t) => {
  switch (payment) {
    case 'AliPay':
      return 'AliPayHK'

    case 'WechatPay':
      return 'WechatPayHK'

    case 'ATM':
      return t('atm')

    default:
      return ''
  }
}

export default paymentWord
