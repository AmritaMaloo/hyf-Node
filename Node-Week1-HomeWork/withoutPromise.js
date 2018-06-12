const fs = require('fs');

const start = new Date();

const text1 = fs.readFileSync('file_1.txt');
const text2 = fs.readFileSync('file_2.txt');
const text3 = fs.readFileSync('file_3.txt');
const text4 = fs.readFileSync('file_4.txt');

const filesConcat = text1 + " " + text2 + " " + text3 + " " + text4;
   
    const arrayOfWords = filesConcat.toLowerCase().split(/[^a-zA-Z0-9]/).filter(s => s.length > 0);
    let tempArray = [];
    let countArray = [];
    
    for(const word of arrayOfWords) {
        let count = 0;
        if(tempArray.includes(word))
        {
            countArray[tempArray.indexOf(word)]++;
            
        }  else {
            count++;
            countArray.push(count);
            tempArray.push(word);
        }  
            
    }
   
   for(let i = 0; i < tempArray.length, i < countArray.length; i++){
       console.log(tempArray[i] + " " + countArray[i] + " " + "time(s).");
   }
   const end = new Date();
   console.log("total execution time", end - start);

