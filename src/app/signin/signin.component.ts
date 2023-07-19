import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  DAY:string="0";
  NumDay:number=0
  rest:boolean=false
  exe1:string=""
  exe2:string=""
  pop1:boolean=false
  constructor(private router: Router) { }
  ngOnInit(): void {
    // this.checktruedate()
    this.checktruedate2()
  }
  land(){
    this.router.navigate(['']);
  }
  goback(){
    this.router.navigate(['']);
  }
  checktruedate2(){
    this.DAY = JSON.parse (localStorage.getItem('daycount2')|| "0")
    this.NumDay = Number(this.DAY)
    if(this.NumDay==1){
      this.exe1="CHEST"
      this.exe2="ARMS"
      localStorage.setItem("TodayExe1",'CHEST')
      localStorage.setItem("TodayExe2",'ARMS')
    }
    if(this.NumDay==2){
      this.exe1="ABS"
      this.exe2="LEGS"
      localStorage.setItem("TodayExe1",'ABS')
      localStorage.setItem("TodayExe2",'LEGS')
    }
    if(this.NumDay==3){
      this.exe1="BACK"
      this.exe2="SHOULDERS"
      localStorage.setItem("TodayExe1",'BACK')
      localStorage.setItem("TodayExe2",'SHOULDERS')
    }
    if(this.NumDay==4){
      this.exe1="ABS"
      this.exe2="ARMS"
      localStorage.setItem("TodayExe1",'ABS')
      localStorage.setItem("TodayExe2",'ARMS')
    }
    if(this.NumDay==5){
      this.exe1="CHEST"
      this.exe2="LEGS"
      localStorage.setItem("TodayExe1",'CHEST')
      localStorage.setItem("TodayExe2",'LEGS')
    }
    if(this.NumDay==6){
      this.exe1="BACK"
      this.exe2="ABS"
      localStorage.setItem("TodayExe1",'BACK')
      localStorage.setItem("TodayExe2",'ABS')
    }
    if(this.NumDay==7){
      this.rest=true
      this.exe1="REST"
      this.exe2=""
      localStorage.setItem("TodayExe1",'REST')
      localStorage.setItem("TodayExe2",'')
      localStorage.setItem('daycount2',"1")
    }
  }
  checktruedate(){
    const monthDetails = JSON.parse(localStorage.getItem("monthDetails") || "[]");
    const currentDate = new Date();
    if (monthDetails !== null) {
      for (var i = 0; i < monthDetails.length; i++) {
        console.log("HERE 01",monthDetails)
        for(var j = 0;j<(monthDetails[i].details).length;j++){
          if(monthDetails[i].details[j].today==true){
            console.log("false DAY : ",monthDetails[i].details[j])
            const dateString = monthDetails[i].details[j].dateString;
            const [currentMonth, currentDay, currentYear] = currentDate.toLocaleDateString('en-US').split('/');
            const formattedDate = `${currentMonth}-${currentDay}-${currentYear}`;
            if (dateString === formattedDate) {
              monthDetails[i].details[j].today = true;
              console.log("true DAY : ",monthDetails[i].details[j])
              this.DAY=monthDetails[i].details[j].day
              console.log("monthDetails : ",monthDetails)
              localStorage.setItem("daycount", JSON.stringify(this.DAY));
              localStorage.setItem("monthDetails", JSON.stringify(monthDetails));
              this.getExeTypes()
            }else{
              monthDetails[i].details[j].today = false;
            }
          }
          if(monthDetails[i].details[j].today==false){
            const dateString = monthDetails[i].details[j].dateString;
            const [currentMonth, currentDay, currentYear] = currentDate.toLocaleDateString('en-US').split('/');
            const formattedDate = `${currentMonth}-${currentDay}-${currentYear}`;
            if (dateString === formattedDate) {
              monthDetails[i].details[j].today = true;
              console.log("true DAY : ",monthDetails[i].details[j])
              this.DAY=monthDetails[i].details[j].day
              console.log("monthDetails : ",monthDetails)
              localStorage.setItem("monthDetails", JSON.stringify(monthDetails));
              this.getExeTypes()
            }else{
              monthDetails[i].details[j].today = false;
            }
          }
        }
      }
    } else {
         console.log("ERROR CODE 01")
    }
  }
  getExeTypes(){
    const monthDetails = JSON.parse(localStorage.getItem("monthDetails") || "[]");
    const currentDate = new Date();
    if (monthDetails !== null) {
      for (var i = 0; i < monthDetails.length; i++) {

        for(var j = 0;j<(monthDetails[i].details).length;j++){
          if(monthDetails[i].details[j].today==true){
            const dateString = monthDetails[i].details[j].dateString;
            const [currentMonth, currentDay, currentYear] = currentDate.toLocaleDateString('en-US').split('/');
            const formattedDate = `${currentMonth}-${currentDay}-${currentYear}`;
            if (dateString === formattedDate) {
              console.log("HERE 02",monthDetails[i].details[j])
              for(var k=0; k<(monthDetails[i].details[j].exercises).length;k++){
                console.log("counting exe :",monthDetails[i].details[j].exercises[k].type)
                localStorage.setItem("Cmonth",monthDetails[i].month)
                localStorage.setItem("CDay",monthDetails[i].details[j].dayName)
                if(monthDetails[i].details[j].exercises[k].type=="00"){
                  this.rest=true
                  localStorage.removeItem("TodayExe1")
                  localStorage.removeItem("TodayExe2")
                  localStorage.setItem("TodayExe1",'Rest')
                }else{
                  this.rest=false
                  if(monthDetails[i].details[j].exercises[k].type=="01"){
                    this.exe1=monthDetails[i].details[j].exercises[k].name
                    localStorage.setItem("TodayExe1",this.exe1)
                  }
                  if(monthDetails[i].details[j].exercises[k].type=="02"){
                    this.exe2=monthDetails[i].details[j].exercises[k].name
                    localStorage.setItem("TodayExe2",this.exe2)
                  }
                  console.log("EXE1:",this.exe1,"EXE2:",this.exe2)
                }
                console.log("REST DAY ? : ", this.rest)
              }
            }
          }
        }
      }
    } else {
         console.log("ERROR CODE 01")
    }
  }
  shiftingRoom0(){
    this.pop1=true
  }
  shiftingRoom(){
    this.pop1=false
    this.router.navigate(['shiftingroom']);
  }
  popClear(){
    this.pop1=false
  }
}
