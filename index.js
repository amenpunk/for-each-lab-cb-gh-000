function iterativeLog(array){
      array.forEach(function(item,index){
      console.log(`${index}: ${item}`);
      });
}

function iterate(callback){
      var matriz = [1,2,3,4,5]
      matriz.forEach(callback);
      return matriz
}

function doToArray(array,callback){
      array.forEach(callback);
}
