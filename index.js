// add solution here
function theBeatlesPlay(musicians, instruments) {
  let array = [];
  for(let i = 0; i < musicians.length; i++) {
    let string = "";
    for(let j = 0; j < instruments.length; j++) {
      string = musicians[i] + " plays " + instruments[j];
      array.push(string);
    }
  }
  return array;
}
