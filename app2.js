// МЕТОД slice

function mySlice(arr, start, end) {
  if (start === undefined && end === undefined) {
    return [...arr];
  }

  if (start < 0) {
    start = arr.length + start;
  }
  if (end < 0) {
    end = arr.length + end;
  }

  start = start || 0;
  end = end === undefined ? arr.length : end;

  start = Math.max(0, Math.min(start, arr.length));
  end = Math.max(0, Math.min(end, arr.length));

  const result = [];

  for (let i = start; i < end; i++) {
    result.push(arr[i]);
  }

  return result;
}



// МЕТОД indexOf

function myIndexOf(arr, item, from = 0){
    if(from < 0){
        from = Math.max(0, arr.length + from)
    }

    for( let i = from; i < arr.length; i++){
        if(arr[i] === item){
            return i;
        }
    }

    return -1;
}

// МЕТОД myIncludes

function myIncludes(arr, item, from = 0) {
    if(from < 0){
        from = Math.max(0, arr.length + from)
    }



    for(let i = from; i < arr.length; i++){
        if(Number.isNaN(item) && Number.isNaN(arr[i])){
            return true;
        }
        if(arr[i] === item){
            return true;
        }
    }

    return false
}

const arr = [1, 2, 3, 5, NaN];

console.log(myIncludes(arr, NaN))