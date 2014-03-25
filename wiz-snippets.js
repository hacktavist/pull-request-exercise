//Ben's snippet:

//1. define a Wiz Class

function Wiz(name, level) {
  this.name = name;
  this.level = level;
  this.peeDraw = ""; //Nic has added this to not have clutter and because he doesn't quite understand js inheritance crap
}

function compareWizzes(a, b) {
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

//END Ben's snippet P

//Nic's Snippet:

//draw quick/basic ascii art of peeing on wizard

function drawWizLvl(wiz) {
  var peePipe = "",
    peePipeStream = wiz.level;

  for (var i = 0; i < peePipeStream; i++) {
    peePipe += "          |\n";
  }
  return wiz.peeDraw = "8---> ---\n" + "         \\" + "\n" + peePipe + "         '-'---\n" + "         | o o |\n" + "         |  >  |\n" + "         |  o  |\n" + "          ----- \n";
}

var wiz = new Wiz('Mike', 3);
var draw = drawWizLvl(wiz);
console.log(draw);

//End Nic's Snippet

//McGraw's Dark Wiz Locator

function darkWizz(wizArray) {
  var itsLong = wizArray.length;
  if (itsLong > 0) {
    for (w = 0; w < itsLong; w++) {
      if (wizArray[w].name == 'Mike') {
        wizArray[w].name = 'Mike the Penis Wizard';
      }
    }
  } else alert("All Hail Mike, The Dark Penis Wizard");
}

//End McGraw's Dark Wiz Locator
