const year=1000;

if (year % 400==0){ //400으로 나눴을때 0이면 윤년
    console.log(year,'윤년');
}else if (year%100==0){ //100으로 나눴을때 0이면 평년
    console.log(year, '평년');
}else if (year%4==0){ //4로 나눴을때 0이면 윤년
    console.log(year, '윤년');
}else { //나머지 평년
    console.log(year,'평년');
}
