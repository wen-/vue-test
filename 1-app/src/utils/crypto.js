import CryptoJS from 'crypto-js/crypto-js'

export const encrypt = password => {
  let key1 = 'Ad5t-==*a.iPkLDv>p&):VJ1';//加密串
  let keyHex = CryptoJS.enc.Utf8.parse(key1);
  let encrypted = CryptoJS.TripleDES.encrypt(
    window.btoa(encodeURIComponent(password)),
    keyHex,
    {
      iv: keyHex,
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  )
  return encrypted.toString();
};
