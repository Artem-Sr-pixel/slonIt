function firstLetterToUppercase(string) {
  if (typeof string !== "string") {
    return "Данные должны быть строкой";
  }
  let result = string.split("");

  result[0] = result[0].toUpperCase();
  return result.join("");
}

const data = "привет";
console.log(firstLetterToUppercase(data));

// ------------------------------------------------------------------------------------------

function trimString(str, limit) {
  if(str.length <= limit){
    return str;
  }

  let lastValidIndex = limit;

  for(let i = limit; i >= 0; i--){
    if(/\s/.test(str[i])){
      lastValidIndex = i;
      break;
    }
  }

  if(/[.,!?:;]/.test(str[lastValidIndex - 1])){
    lastValidIndex--;
  }


  return str.slice(0, lastValidIndex).trim() + '...'
}

const string = ('Это очень длинная строка! которую нужно обрезать.')
console.log(trimString(string, 25))

// ------------------------------------------------------------------------------------------

function substring(str1, str2){
  return str1.includes(str2) || str2.includes(str1)
}

console.log(substring('hello', 'lo'))