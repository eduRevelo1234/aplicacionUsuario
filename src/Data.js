export const dataPoints =[];


/* for (let i = 0; i < 100; i++) {
  let data = {
    coordinates: [
      Math.ceil(Math.random() * 50) + 20,
      Math.ceil(Math.random() * 50) + 20,
    ],
  };
  console.log({data});
  dataPoints.push(data);
} */



 
for( let i=0; i < 20; i++ ){
  for( let j=0 ; j < 20; j++){
    let data = {
      coordinates: [
         250 + i,
        -75 +j,
      ],
    }
    dataPoints.push(data);
  }
  
}  

for( let i=0; i < 20; i++ ){
  for( let j=0 ; j < 20; j++){
    let data = {
      coordinates: [
        150 + i,
        50 +j,
      ],
    }
    dataPoints.push(data);
  }
  
} 

for( let i=0; i < 8; i++ ){
  for( let j=0 ; j < 8; j++){
    let data = {
      coordinates: [
        150 + i,
        200 +j,
      ],
    }
    dataPoints.push(data);
  }
  
} 

for( let i=0; i < 1; i++ ){
  for( let j=0 ; j < 1; j++){
    let data = {
      coordinates: [
        0 + i,
        0 +j,
      ],
    }
    dataPoints.push(data);
  }
  
} 

for( let i=0; i < 1; i++ ){
  for( let j=0 ; j < 1; j++){
    let data = {
      coordinates: [
        0 + i,
        150 +j,
      ],
    }
    dataPoints.push(data);
  }
  
} 

for( let i=0; i < 10; i++ ){
  for( let j=0 ; j < 10; j++){
    let data = {
      coordinates: [
         -200 + i,
        -50 +j,
      ],
    }
    dataPoints.push(data);
  }
  
}  

for( let i=0; i < 10; i++ ){
  for( let j=0 ; j < 10; j++){
    let data = {
      coordinates: [
        350 + i,
        150 +j,
      ],
    }
    dataPoints.push(data);
  }
  
}  


for( let i=0; i < 20; i++ ){
  for( let j=0 ; j < 20; j++){
    let data = {
      coordinates: [
        350 + i,
        50 +j,
      ],
    }
    dataPoints.push(data);
  }
  
}  

for( let i=0; i < 1; i++ ){
  for( let j=0 ; j < 1; j++){
    let data = {
      coordinates: [
        -200 - i,
        150 - j,
      ],
    }
    dataPoints.push(data);
  }
}  