const fs = require('fs');
const util = require('util');

const readFileP = util.promisify(fs.readFile);

const file1_Promise = readFileP('file_1.txt');
const file2_Promise = readFileP('file_2.txt');
const file3_Promise = readFileP('file_3.txt');
const file4_Promise = readFileP('file_4.txt');

const start = new Date();

Promise.all([file1_Promise, file2_Promise, file3_Promise, file4_Promise]).then((data) => {
    //const filesConcat = data[0] + " " + data[1] + " " + data[2] + " " + data[3];
    const filesConcat = data.join(" ");
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
   
   for(let i = 0; i < tempArray.length; i++){
       console.log(tempArray[i] + " " + countArray[i] + " " + "time(s).");
   }
   const end = new Date();
   console.log("total execution time", end - start);
}).catch((err) => {
    if(err) throw err;
});
