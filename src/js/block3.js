function verify(m, sign, p){ // m - message (should be number), s - sign, p - public key
  let s2m = (Number(sign)**Number(p[0]))%Number(p[1]); // s2m - sign to message, calculate raw message from sign
  return Number(m) == s2m; //if message equals to decrypted sign return true, else return false
}

