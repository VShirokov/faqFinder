const generateAssocArray = (array) => {
    let accObj = {};
    let answerArray = [];
    const removeShortWords = /((^|\s)[а-я]{1,3}\s)|\-/g;
    const wordsArrExp = /\s* \s*/g;

    for ( let i=0; i<array.length; i++ ) {
        answerArray.push(array[i].answer)
    }

    for ( let i=0; i<array.length; i++ ) {
        array[i].question
        .toLowerCase()
        .replace(/[!@#$%^&«?»+,—*]/g, "")
        .replace(removeShortWords, " ")
        .split(wordsArrExp)
        .filter(item => item)
        .forEach((item) => {
            !!accObj[item]
            ? accObj[item].push(i) : accObj[item] = [i]
            
        });
    }

    return accObj;
}

export default generateAssocArray;
