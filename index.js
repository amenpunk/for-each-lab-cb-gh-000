function iterativeLog(array){
      array.forEach((el,i) => console.log(`${i}: ${el}`));
}

function iterate(callback){
      var matriz = [1,2,3,4,5]
      matriz.forEach(callback);
      return matriz
}

function doToArray(array,callback){
      array.forEach(callback);
}
