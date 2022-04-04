// Create an if statement to see if a number is positive or negative
const number = -5; 
if (number >= 0 ) {
  console.log ('The number is positive');
}
else {
  console.log('The number is negative');
}

// Days until weekend
const day = 'Saturday';
switch (day){
  case 'Monday':
    console.log('4 more days until weekend');
    break;
  case 'Tuesday':
    console.log('3 more days until weekend');
    break;
  case 'Wednesday':
    console.log('Only 2 more days until weekend');
    break;
  case 'Thursday':
    console.log('Just a day until weekend');
    break;
  case 'Friday':
    console.log('It is the weekend already');
    break;
  case 'Saturday':
    console.log('It is the weekend - enjoy');
    break;
  case 'Sunday':
    console.log('It is the weekend - enjoy');
    break;
  default:
    console.log("Sorry ! we didn't recognise the day");
}

// Vegaetable prices using Javascript

const item = "beetroots";
switch (item){
  case 'Potato':
  case 'Carrot':
    console.log(" The price is 5 euros per Kg");
    break;
    case 'Broccoli':
    case 'Cabbage':
    case 'Asparagus':  
    console.log(" The price is 10 euros per Kg");
    break;
    default:
    console.log(" The price not known");
    break;
}