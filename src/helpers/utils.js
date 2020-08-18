export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); // 'mohit 123' -> 'mohit%20123'
    let encodedValue = encodeURIComponent(params[property]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  return formBody.join('&'); // 'username=mohit&password=mohit123'
}
