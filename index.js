// add solution here
function theBeatlesPlay(musicians, instruments) {
  const array = [];
  for(let i = 0; i < musicians.length; i++) {
    let string = "";
    string = musicians[i] + " plays " + instruments[i];
    array.push(string);
    }

  return array;
}

function johnLennonFacts(facts) {
  const array = []
  let i = 0
  while(i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array;
}

function iLoveTheBeatles(num) {
  const array = [];
  do {
    array.push("I love the Beatles!")
    num ++
  } while(num < 15)
  return array
}
