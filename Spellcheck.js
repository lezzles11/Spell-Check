function checkSpelling(s) {
  let arr = s.split(" ");
  console.log(arr);
  if (arr.length === 1) return helper(arr[0]);
  let returnThisArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    returnThisArr.push(helper(arr[i]));
  }
  return returnThisArr;
}

// Checks ONE word only
function helper(s) {
  let map = new Map();
  map.set("tast", "test");
  map.set("teh", "the");
  map.set("tee", "the");
  if (!map.get(s)) {
    return "Sorry, dictionary not this advanced";
  } else {
    return map.get(s);
  }
}
//console.log(checkSpelling("tast"));

console.log(checkSpelling("tast teh tee"));

// quokka
