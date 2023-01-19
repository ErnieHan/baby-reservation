const writeCookie = (name, data, domain) => {
  if (domain) {
    document.cookie = name.toString() + '=' + data + ';path=/;domain=' + domain
  } else {
    document.cookie = name.toString() + '=' + data + ';path=/'
  }
  return ''
}

export default writeCookie
