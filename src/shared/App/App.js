import workArray from './constants';

generateAssocArray = (array) => {
    let accObj = {};
    let answerArray = [];
    const removeShortWords = /((^|\s)[а-я]{1,3}\s)|\-/g;
    const wordsArrExp = /\s* \s*/g;

    for ( let i=0; i<array.length; i++ ) {
        answerArray.push(array[i].answer)
    }

    console.log('answers: ', answerArray);
    

    for ( let i=0; i<array.length; i++ ) {
        array[i].question
        .toLowerCase()
        .replace(/[!@#$%^&«?»+,—*]/g, "")
        .replace(removeShortWords, "")
        .split(wordsArrExp)
        .filter(item => item)
        .forEach((item) => {
            console.log('accObj: ', accObj);
            console.log('item: ', item);
            console.log('accObj[item]: ', accObj[item]);
            !!accObj[item]
            ? accObj[item].push(i) : accObj[item] = [i]
            
        });
        // array[i].answer.split().forEach((item)=>{ accObj[item]=[i]});
        
    }
    // console.log(accObj);

    return Object.keys(accObj).map((item, index) => {
        return <pre dangerouslySetInnerHTML={{__html: item}} key={item + index} />
    });
        // .sort(/* Здесь можно наводить любой порядок, какой душе угодно*/)
        // .forEach(key => console.log(key, array[key]));

    // for ( let item of accObj) {
    //         <pre>
    //             {accObj[item]}
    //         </pre>
    // }

}
