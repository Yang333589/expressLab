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


//Displays all the words in allwords.txt
router.get('/allwords', async (req,res)=>{
    const data = await readFile('resources/allwords.txt', 'utf8');
    let lines = data.split('\n');
    let allWord = "";
    for (let i = 0; i < lines.length; i++){
        let wordArray = lines[i].split('\t');
        let [word, part, def] = wordArray;
        allWord = allWord + word + " - " + part + "\n\t" + def + "\n\n";
    }
    res.render('allwords', {allWord:allWord});
    
});

module.exports = router;

let getWordFromDictionary = async () =>{
    try{
        const data = await readFile('resources/allwords.txt', 'utf8');
        let lines = data.split('\n');
        let ranNum = parseInt(Math.random() * lines.length);
        let ranLine = lines[ranNum];
        let wordArray = ranLine.split('\t');
        console.log(wordArray);
        return wordArray;
    }
    catch(err){
        console.log("There was an error: ", err);
    }
}
