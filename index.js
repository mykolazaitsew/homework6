const task1 = (str) => {
    if (str.length === 0) {
        return '';
    }
    return str[0] + str[0] + task1(str.slice(1));
};


const task2 = (str, length, symbol, toLeft) => {
    
}


const task3 = (str, separator) => {
    const splitStr = str.split(separator); 
    const bigbukva = (i) => {
      let camel = "";
      for (let j = 1; j < splitStr.at(1).length; j++) {
        camel = `${camel}${splitStr.at(i).at(j)}`;
      }
      return `${splitStr.at(i).at(0).toUpperCase()}${camel}`;
    };
    let camel = "";
    for (let i = 1; i < splitStr.length; i++) {
        camel = `${camel}${bigbukva(i)}`;
    }
   return`${splitStr.at(0)}${camel}`
  };

console.log(task1('hello'));
console.log(task3('hello world kolya', ' '));
