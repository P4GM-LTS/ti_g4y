function verify(m, sign, p){ // m - message (should be number), s - sign, p - public key
  let s2m = BigInt(BigInt(sign)**BigInt(p[0]))%BigInt(p[1]); // s2m - sign to message, calculate raw message from sign
  return BigInt(m) == s2m; //if message equals to decrypted sign return true, else return false
}
