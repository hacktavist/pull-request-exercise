//Ben's snippet:

//1. define a Wiz Class
function Wiz(name, level) {
  this.name = name;
  this.level = level;
}

function compareWizzes(a,b) {
  if (a.level < b.level)
     return -1;
  if (a.level > b.level)
    return 1;
  return 0;
}


function sort_wiz_levels(wizArray) {
  return wizArray.sort(compareWizzes);
}

// create an array of Wiz's
var wizArray = [];
wizArray.push(new Wiz('McGraw', 2));
wizArray.push(new Wiz('Ben', 1));
wizArray.push(new Wiz('Mike', 3));

//sort wiz
var sortedWizards = sort_wiz_levels(wizArray);
console.dir(sortedWizards);

//END Ben's snippet
