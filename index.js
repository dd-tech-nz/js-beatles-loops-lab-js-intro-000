// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(let i = 0; i < musicians.length; i++) {
    let string = "";
    string += musicians[i];
    for(let j = 0; j < instruments.length; j++) {
      string = string + " plays " + instruments[j];
      array.push(string);
    }
  }
  return array;
}
