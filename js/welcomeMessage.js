function welcomeMessage(){
  let d = new Date()
  let time = d.getHours()
  if (time<12){
    document.write("Good morning");
  }
  else (time>=12 && time<17)
  {
    document.write("Have a nice day");
  }
}
document.write("<br>");
welcomeMessage();

