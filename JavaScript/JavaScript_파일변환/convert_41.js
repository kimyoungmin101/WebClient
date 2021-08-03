let fs = require('fs');
let array = fs.readFileSync(__dirname+'/' + '41.md').toString().split("\n");
let i = -1;
let fn;
let wc;
let word, word2;
let result;

while(++i < array.length) {
    word = array[i].split(" ");
    if(word[0] == "#") fn = word[1];
    else continue;

    while(++i < array.length) {
        let word2 = array[i].split(" ");
        if(word2[0] == "```javascript"){
            result = 1;
            break;
        }
        else if(word2[0] == "```html"){
            result = 0;
            break;
        }
    }

    wc = "";
    while(++i < array.length) {
        word2 = array[i].split(" ");
        if(word2[0] == "```") break;
        wc += array[i] + "\n";
    }

    if(result == 1){
        fs.writeFileSync(__dirname+'/' + fn + '.js', wc);
    }
    else if(result == 0){
        fs.writeFileSync(__dirname+'/' + fn + '.html', wc);
    }
}
