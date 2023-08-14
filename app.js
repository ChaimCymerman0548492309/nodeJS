import { log } from 'console';
import fs from 'fs';
import _ from 'lodash';



export function readTextFile(filename){
    fs.readFile(filename,'utf-8',(err, data) => {
        if (err) throw new Error('An error occurred: ' + err.message);

        console.log(data);
    })
}

readTextFile('./randomText.txt');

export function contTextFile(filename){
    fs.readFile(filename,'utf-8',(err, data) => {
        if (err) throw new Error('An error occurred: ' + err.message);

        console.log(_.words(data).length);
    })
}

contTextFile('./randomText.txt');

export function reversTextFile(filename){
    fs.readFile(filename,'utf-8',(err, data) => {
        if (err) throw Error;
        console.log([...data].reverse().join(''));
    })
}
reversTextFile('./randomText.txt');


export function uniqItemsTextFile(filename){
    fs.readFile(filename,'utf-8',(err, data) => {
        if (err) throw Error;
        let gfg1 = _.words(data);
        let gfg = _.uniq(gfg1);
        console.log(gfg);
    })
}
uniqItemsTextFile('./randomText.txt');


export function uniqItemsTextFileAmount(filename){
    fs.readFile(filename,'utf-8',(err, data) => {
        if (err) throw Error;
        let gfg1 = _.words(data);
        let gfg = _.uniq(gfg1);
        let amount = gfg.length
        console.log(amount);
    })
}
uniqItemsTextFileAmount('./randomText.txt');




export function uniqItemsTextFileAper(filename) {
    fs.readFile(filename, 'utf-8', (err, data) => {
        console.error('An error occurred:', err);

        let wordArray = _.words(data) + '/n';
        let uniqueWords = _.uniq(wordArray);
        let uniqueWordsFilter = uniqueWords.filter(word => word.length>5);
        console.log(uniqueWordsFilter)
        let upperCaseWords = uniqueWordsFilter.map(word => word.toUpperCase());
        console.log(upperCaseWords)
        fs.appendFile('text111.txt', String(upperCaseWords), (err) => {
            if (err) throw new Error('An error occurred: ');
            console.log('The file has been saved!');
        });
});
    
}

uniqItemsTextFileAper('./randomText.txt');



