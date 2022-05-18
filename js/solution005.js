// 8 kyu
// Calculate BMI


function bmi(weight, height) {
  let userBMI = weight / height**2
  if(userBMI <= 18.5){
    return "Underweight"
  }else if(userBMI <=25.0){
    return "Normal"
  }else if(userBMI <= 30.0){
    return "Overweight"
  }else if(userBMI > 30){
    return "Obese"
  }
}