import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shifting-room',
  templateUrl: './shifting-room.component.html',
  styleUrls: ['./shifting-room.component.css']
})
export class ShiftingRoomComponent {
  currentStep:number=1
  fullCount:number=10
  exType:string=""
  exList:any=[
    // Chest
    "BARBELL BENCH PRESS",
    "INCLINE BENCH PRESS",
    "DUMBELL BENCH PRESS",
    "DUMBELL INCLINE FLY",
    // Arms 4
    "DUMBELL CURL",
    "EZ BAR CURL",
    "HAMMER CURL",
    "OVERHEAD EXTENSION",
    "SKULL CRUSHERS",
    // Shoulders 9
    "BARBELL STANDING PRESS",
    "SEATED DUMBBELL PRESS",
    "ARNOLD PRESS",
    "LATERAL RAISE",
    "BENT OVER REVERSE FLY",
    "UPRIGHT ROW",
    "FRONT RAISES",
    // Legs 16
    "Back Squartes",
    "Lunges",
    "Romanian Deadlifts",
    "Hip Thrusts",
    "Calf Raises",
    "Box Squartes",
    // Back 23
    "Diver Push Ups",
    "Half Squat",
    "Double Chest Expansion",
    "LawnMovers",
    "DeadLifts",
    "Wall Arm Slides",
    // Abs
      // Upper 29
      "Crunches",
      "High Crunches",
      "Sit-Ups",
      "Long Arm Crunches",
      "Hundreds",
      "Knee Crunches",
      // Lower
      "Reverse Crunches",
      "Scissors",
      "Leg Raises",
      "Pulse-Ups",
      "Bicycle Crunches",
      "Crunch Kicks",
      // 6pack
      "Flutter Kicks",
      "Elbow Plank",
      "L-sit",
      "Star Plank",
      "Hollow Hold",
      "V-Up",
      // Obliques
      "Sitting Twists",
      "Cross Crunches",
      "Side Jack Knives",
      "Toe Taps",
      "Sitting Punches",
      "Side Plank",
      // Complete
      "Knee to Elbow",
      "Knee to Elbow V2",
      "Dead Bug",
      "Plank Crunches",
      "Side Plank Crunches",
      "V with Rotation",
      // Core
      "Half Wipers",
      "Arm-Leg Raises",
      "Wipers",
      "Plank Roles",
      "Knee-in Twist",
      "Climber Taps",
      // 64
  ]
  exName:string=this.exList[0]
  imgList:any=[
    // Chest
    "../../assets/EX/CHEST/BARBELL BENCH PRESS.jpg",
    "../../assets/EX/CHEST/INCLINE BENCH PRESS.jpg",
    "../../assets/EX/CHEST/DUMBELL BENCH PRESS.jpg",
    "../../assets/EX/CHEST/DUMBELL INCLINE FLY.jpg",
    // Arms
    "../../assets/EX/ARMS/DB CURL.jpg",
    "../../assets/EX/ARMS/EZ BAR CURL.jpg",
    "../../assets/EX/ARMS/HAMMER CURL.jpg",
    "../../assets/EX/ARMS/OVERHEAD EXTENSION.jpg",
    "../../assets/EX/ARMS/SKULL CRUSHERS.jpg",
    // Shoulders
    "../../assets/EX/SHOULDERS/BARBELL STANDING PRESS.jpg",
    "../../assets/EX/SHOULDERS/SEATED DUMBBELL PRESS.jpg",
    "../../assets/EX/SHOULDERS/ARNOLD PRESS.jpg",
    "../../assets/EX/SHOULDERS/LATERAL RAISE.jpg",
    "../../assets/EX/SHOULDERS/BENT OVER REVERSE FLY.jpg",
    "../../assets/EX/SHOULDERS/UPRIGHT ROW.jpg",
    "../../assets/EX/SHOULDERS/FRONT RAISES.jpg",
    // Legs
    "../../assets/EX/LEGS/Back Squartes.PNG",
    "../../assets/EX/LEGS/Lunges.PNG",
    "../../assets/EX/LEGS/Romanian Deadlifts.PNG",
    "../../assets/EX/LEGS/Hip Thrusts.PNG",
    "../../assets/EX/LEGS/Calf Raises.PNG",
    "../../assets/EX/LEGS/Box Squartes.PNG",
    // Back
    "../../assets/EX/BACK/Diver Push Ups.PNG",
    "../../assets/EX/BACK/Half Squat.PNG",
    "../../assets/EX/BACK/Double Chest Expansion.PNG",
    "../../assets/EX/BACK/LawnMovers.PNG",
    "../../assets/EX/BACK/DeadLifts.PNG",
    "../../assets/EX/BACK/Wall Arm Slides.PNG",
    // Abs
      // Upper
      "../../assets/EX/ABS/UPPER/Crunches.PNG",
      "../../assets/EX/ABS/UPPER/High Crunches.PNG",
      "../../assets/EX/ABS/UPPER/Sit-Ups.PNG",
      "../../assets/EX/ABS/UPPER/Long Arm Crunches.PNG",
      "../../assets/EX/ABS/UPPER/Hundreds.PNG",
      "../../assets/EX/ABS/UPPER/Knee Crunches.PNG",
      // Lower
      "../../assets/EX/ABS/LOWER/Reverse Crunches.PNG",
      "../../assets/EX/ABS/LOWER/Scissors.PNG",
      "../../assets/EX/ABS/LOWER/Leg Raises.PNG",
      "../../assets/EX/ABS/LOWER/Pulse-Ups.PNG",
      "../../assets/EX/ABS/LOWER/Bicycle Crunches.PNG",
      "../../assets/EX/ABS/LOWER/Crunch Kicks.PNG",
      // 6pack
      "../../assets/EX/ABS/6PACK/Flutter Kicks.PNG",
      "../../assets/EX/ABS/6PACK/Elbow Plank.PNG",
      "../../assets/EX/ABS/6PACK/L-sit.PNG",
      "../../assets/EX/ABS/6PACK/Star Plank.PNG",
      "../../assets/EX/ABS/6PACK/Hollow Hold.PNG",
      "../../assets/EX/ABS/6PACK/V-Up.PNG",
      // Obliques
      "../../assets/EX/ABS/OBLIQUES/Sitting Twists.PNG",
      "../../assets/EX/ABS/OBLIQUES/Cross Crunches.PNG",
      "../../assets/EX/ABS/OBLIQUES/Side Jack Knives.PNG",
      "../../assets/EX/ABS/OBLIQUES/Toe Taps.PNG",
      "../../assets/EX/ABS/OBLIQUES/Sitting Punches.PNG",
      "../../assets/EX/ABS/OBLIQUES/Side Plank.PNG",
      // Complete
      "../../assets/EX/ABS/COMPLETE/Knee to Elbow.PNG",
      "../../assets/EX/ABS/COMPLETE/Knee to Elbow V2.PNG",
      "../../assets/EX/ABS/COMPLETE/Dead Bug.PNG",
      "../../assets/EX/ABS/COMPLETE/Plank Crunches.PNG",
      "../../assets/EX/ABS/COMPLETE/Side Plank Crunches.PNG",
      "../../assets/EX/ABS/COMPLETE/V with Rotation.PNG",
      // Core
      "../../assets/EX/ABS/CORE/Half Wipers.PNG",
      "../../assets/EX/ABS/CORE/Arm-Leg Raises.PNG",
      "../../assets/EX/ABS/CORE/Wipers.PNG",
      "../../assets/EX/ABS/CORE/Plank Roles.PNG",
      "../../assets/EX/ABS/CORE/Knee-in Twist.PNG",
      "../../assets/EX/ABS/CORE/Climber Taps.PNG",
  ]
  imgsrc:string=this.imgList[28]
  reps:number=10
  sets:number=3
  SSDATA:any={}
  exe1:string=""
  exe2:string=""
  CDay:string=""
  BiginCounter1:number=0
  EndCounter1:number=0
  BiginCounter2:number=0
  EndCounter2:number=0
  finish:boolean=false
  repAdd:number=0
  constructor(private router: Router) { }
  ngOnInit(): void {
    console.log("exList Length : ",this.exList.length)
    this.getData()
    this.repAdd=Math.round((JSON.parse(localStorage.getItem("daycount") || "0"))/4)
    this.reps=this.reps+this.repAdd
    console.log("this.reps : ",this.reps)
  }
  getData(){
    this.exe1=localStorage.getItem("TodayExe1") || ""
    console.log("exe1",this.exe1 )
    this.exe2=localStorage.getItem("TodayExe2") || ""
    console.log("exe2",this.exe2 )

    this.CDay =localStorage.getItem("daycount2") || ""
    console.log("this.CDay",this.CDay)
    this.exType = this.exe1
    this.currentStep = 1

    if(this.CDay=="1"){
      this.fullCount=9
      this.BiginCounter1=0
      this.EndCounter1=3
      this.BiginCounter2=4
      this.EndCounter2=8
      this.exName=this.exList[0]
      this.imgsrc=this.imgList[0]
    }
    if(this.CDay=="2"){
      this.fullCount=41
      this.BiginCounter1=29
      this.EndCounter1=63
      this.BiginCounter2=16
      this.EndCounter2=21
      this.exName=this.exList[28]
      this.imgsrc=this.imgList[28]
    }
    if(this.CDay=="3"){
      this.fullCount=13
      this.BiginCounter1=23
      this.EndCounter1=28
      this.BiginCounter2=9
      this.EndCounter2=15
      this.exName=this.exList[23]
      this.imgsrc=this.imgList[23]
    }
    if(this.CDay=="4"){
      this.fullCount=40
      this.BiginCounter1=29
      this.EndCounter1=63
      this.BiginCounter2=4
      this.EndCounter2=8
      this.exName=this.exList[28]
      this.imgsrc=this.imgList[28]
    }
    if(this.CDay=="5"){
      this.fullCount=10
      this.BiginCounter1=0
      this.EndCounter1=3
      this.BiginCounter2=16
      this.EndCounter2=21
      this.exName=this.exList[0]
      this.imgsrc=this.imgList[0]
    }
    if(this.CDay=="6"){
      this.fullCount=42
      this.BiginCounter1=22
      this.EndCounter1=28
      this.BiginCounter2=29
      this.EndCounter2=63
      this.exName=this.exList[22]
      this.imgsrc=this.imgList[22]
    }
  }
  next(){
    if(this.BiginCounter1<this.EndCounter1){
      this.BiginCounter1++
      this.currentStep++
      this.exName=this.exList[this.BiginCounter1]
      this.imgsrc=this.imgList[this.BiginCounter1]
    }else if(this.BiginCounter2<=this.EndCounter2){
      this.exType=this.exe2

      this.currentStep++
      this.exName=this.exList[this.BiginCounter2]
      this.imgsrc=this.imgList[this.BiginCounter2]
      this.BiginCounter2++
    }else{
      this.finish=true
      this.exType
    }
  }
  finished(){
    this.router.navigate(['finishroom']);
  }
}
