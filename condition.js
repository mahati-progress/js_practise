function checkAge(age) {
  if (age >= 18) {
    console.log("old enough to vote");
  }
  else {
    console.log("must be 18 or older");
  }
}

checkAge(17);
checkAge(25);

//nested if-else

function checkGrade(score) {
  let grade;
  if (score >= 90) {
    grade = 'A';
  }
  else {
    if (score >= 80) {
      grade = 'B';
    }
    else {
      if (score >= 70) {
        grade = 'C';
      }
      else {
        grade = 'D';
      }
    }
  }
  console.log(grade);
}

checkGrade(50);


function checkDayOfWeek(dayNumber) {
  let day;
  switch (dayNumber) {
    case 1:
      console.log("monday");
      break;
    
     case 2:
      console.log("tuesday");
      break;
    
     case 3:
      console.log("wednesday");
      break;
    
     case 4:
      console.log("thursday");
      break;
    
     case 5:
      console.log("friday");
      break;
    
     case 6:
      console.log("saturday");
      break;
    
     case 7:
      console.log("sunday");
      break;
    
     default:
      console.log("please provide valid number");
      break;
  }

  
}

checkDayOfWeek(7);
checkDayOfWeek(0);