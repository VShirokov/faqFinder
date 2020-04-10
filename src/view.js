import generateAssocArray from './controller';
import { workArray } from './data';

const input = document.querySelector('.input');
const list = document.querySelector('.list');
const accArray = generateAssocArray(workArray);
let cache = [];

const clearCache = () => list.innerHTML = '';

const createAndAppendText = (text, node) => {
    const li = document.createElement('li');
    li.textContent = text;

    return list.append(li);

}
const renderList = (array) => {
    clearCache();
    array.map((item)=> {
        createAndAppendText(workArray[item].question)
    })
};

const addIteminCache = (objectKey) => {
    accArray[objectKey].map((finalyIndex) => {
        if (cache.includes(finalyIndex)) return null;
        cache.push(finalyIndex);
    });
}

const changeInput = e => {
    const input = e.target.value;
    const len = input.length;

    if (len > 2) {
        Object.keys(accArray).map((objectKey) => {            
            if (objectKey.indexOf(input) !== -1) {
                addIteminCache(objectKey);             
            }
        });
    } else if (len === 0) {
        clearCache();
        cache = [];
    }
    renderList(cache);
};

input.addEventListener('input', changeInput);
