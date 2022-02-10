// var i =0;
// while(i<15){
//     console.log(i);
//     if(i==5){
//         break;
//     }
   
//     i++;
// }

// for (var i=0; i<=20; i++){
//     console.log(i);
//     if(i==5){
//             break;
//     }

// }

var numbers = [22, 33, 44, 110, 55, 66, 77, 88, 99, 11, 3, ];
// for( var i = 0; i<numbers.length; i++){
//     var num = numbers[i];
//     console.log(num);
//     if(num>100){
//         break;
//     }
// }
for(var i =0; i<numbers.length; i++){
    var num = numbers[i];
    
    if(num>100){
        continue;
    }
    console.log(num);
}

