function sign(m, sec){ // m - message (should be number), s - secret key
  let m2s = (Number(m)**Number(sec[0]))%Number(sec[1]);// m2s - message to sign, calculates sign from raw message
  console.log(Number(m)**Number(sec[0]));
  return m2s; // returns sign
}
