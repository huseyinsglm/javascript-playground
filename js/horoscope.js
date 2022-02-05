function horoscope(day, month) {
  let horoscopeArray = [
  {name:"başak",startMonth:8 ,endMonth: 9,startDay: 24,endDay: 23},
  {name:"terazi",startMonth: 9,endMonth: 10,startDay:24 ,endDay:23 },
  {name:"akrep ",startMont: 10,endMonth:11 ,startDay:24 ,endDay:22 },
  {name:"yay ",startMont: 11,endMonth:12 ,startDay:23 ,endDay:21 },
  {name:"oğlak",startMonth:12 ,endMonth: 1 , startDay:22,endDay:20 },
  {name:"kova ",startMonth:1 , endMonth: 2,startDay: 21,endDay:19 },
  {name:"balık", startMonth: 2,endMonth: 3,startDay: 20,endDa:20 },
  {name:"koç", startMonth: 3,endMonth: 4,startDay: 21,endDay:20 },
  {name:"boğa",startMonth: 4,endMonth:5 ,startDay: 21,endDay:21 },
  {name:"ikizler",startMonth:5,endMonth:6 ,startDay: 22,endDay:21 },
  {name:" yengeç", startMonth:6,endMonth: 7,startDay: 22,andDay: 23},
  {name:" aslan", startMonth: 7,endMonth: 8,startDay: 24,endDay: 23},
];


  for (let i = 0; i < horoscopeArray.length; i++) {
    if (horoscopeArray[i].startMonth <= month && horoscopeArray[i].endMonth >= month &&
      horoscopeArray[i].startDay <= day && horoscopeArray[i].endDay >= day) {
      return horoscopeArray[i].name;
    }
  }
}
console.log(horoscope(23,12)+" expected volue=oğlak");
console.log(horoscope(16,4)+" expected volue=koç");



