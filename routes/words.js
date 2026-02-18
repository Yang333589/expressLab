const express = require ('express');
const router = express.Router();
const {readFile, writeFile} = require('fs').promises;

readFile

router.get('/', (req,res) =>{
    res.send ('Word Home Page');
});
router.get('/wotd', async (req,res) =>{
    let wordArray = await getWordFromDictionary();
    let [word, part, def] = wordArray;
    res.render('wotd', {word:word, part:part, def:def});
});

module.exports = router;

let getWordFromDictionary = async () =>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let ranNum = parseIn(Math.random() * lines.length);
        let ranLine = lines[ranNum];
        let wordArray = ranLine.split('\t');
        console.log(wordArray);
        return wordArray;
    }
    catch(err){
        console.log("There was an error: ", err);
    }
}