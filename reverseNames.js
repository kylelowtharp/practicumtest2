//Kyle Lowtharp modify code practicm
//the only thing I did was put the middle initial after the first name
//I couldnt think of any way to cahnge the regex function for it to work


print(
  "Hopper, Grace N\nMcCarthy, John L\nRitchie, Dennis P"
    .replace(/([\w ]+), ([\w ]+)/g, "$2 $1"));
