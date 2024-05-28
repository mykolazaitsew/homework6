const task1 = (str) => {
    if (str.length === 0) {
        return '';
    }
    return str[0] + str[0] + task1(str.slice(1));
};




console.log(task1('hello'));
