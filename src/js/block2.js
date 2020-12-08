function sign(m, sec){ // m - message (should be number), s - secret key
  console.log(m);
  let m2s = BigInt(BigInt(m)**BigInt(sec[0]))%BigInt(sec[1]);// m2s - message to sign, calculates sign from raw message
  //console.log(BigInt(m)**BigInt(sec[0]))%BigInt(sec[1]);
  return m2s; // returns sign
}
