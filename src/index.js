module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 !== 0) return false;
  let checkedIndex = [];

  for (let i = 0; i < bracketsConfig.length; i++) {     //проход по массиву скобок
    for(let j = 0; j < str.length; j++) {               //проход по строке, поиск первой закрывающейся скобки
      
      if(str[j] == bracketsConfig[i][1]                 //нашли закрывающую скобку или открывающую, если они одинаковые
         && checkedIndex.indexOf(j) == -1) {            //и скобка по индексу еще не проверялась
        checkedIndex.push(j);

        if(bracketsConfig[i][0] != bracketsConfig[i][1]) { //если скобки разные
          for(let k = j - 1; k >= 0; k--) {             //идем обратно в поиске открывающей скобки

            if(str[k] == bracketsConfig[i][0]           //нашли открывающую скобку
               && checkedIndex.indexOf(k) == -1) {      //и скобка по индексу еще не проверялась
              checkedIndex.push(k);
              
              if((j - k) % 2 == 0) return false;        //если внутри нечетное количество скобок, то возврат false
              break;                                    //выход из цикла
            } else if (k == 0) return false;            //если не нашли окрывающую скобку, то возврат false
          }
        } else {                                        //иначе, если скобки одинаоквые
          for(let k = j + 1; k < str.length; k++) {     //идем дальше в поиске закрывающей скобки
            if(str[k] == bracketsConfig[i][0]           //нашли закрывающую скобку
               && checkedIndex.indexOf(k) == -1) {      //и скобка по индексу еще не проверялась
              checkedIndex.push(k);
              if((j - k) % 2 == 0) return false;        //если внутри нечетное количество скобок, то возврат false
              break;                                    //выход из цикла
            } else if (k == str.length) return false;  //если не нашли окрывающую скобку, то возврат false
          }
        }
      }
    }
  }

  return true;
}
