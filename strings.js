 //1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
 // careful not to uppercase the i in the word pair
 var sentence = 'When i went to the mall i bought a pair of shoes.';

 function findI(sentence) {
     var splitter = sentence.split(' ')
     var newSentence = []
     for (var index = 0; index < splitter.length; index++) {
         var eyeFinder = splitter[index];
         if (eyeFinder.length < 2) {
             eyeFinder = eyeFinder.replace('i', "I")
         }
         newSentence.push(eyeFinder)

     }
     console.log(newSentence)
 }

 findI(sentence)

 //2. The history of JavaScript is interesting but how many times does the letter a appear? 
 //Find a way to count both upper and lower case A's

 var jsHistory = `JavaScript, not to be confused with Java, was created in 10 days in May 1995 
 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as 
 JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape.
  In September of 1995 the name was changed to LiveScript, then in December of the same year, upon 
  receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a 
  marketing move at the time, with Java being very popular around then.`


 function countA(phrase) {
     var splitter = phrase.split('')
     var bigA = 0
     var littleA = 0
     // console.log(splitter)
     for (let char of splitter) {

         if (splitter[char] === 'a') {
             littleA++
         }

         if (splitter[char] === 'A') {
             bigA++
         }

     }

     console.log(" there are " + bigA + " captial A's and there are " + littleA + " lowercase a's")

 }

 countA(jsHistory)

 //3. Given the following sentence: Uppercase the word scream each time it appears in the sentence

 var text = 'I scream, you scream, we all scream for icecream';


 function screamer(text) {

     var arr = text.split(' ')

     var newSentence = arr.map(function (x) {
         return x.replace('scream', 'Scream')
     })


     for (var i = 0; i < arr.length; i++) {
         arr[i] = arr[i].replace('scream', 'Scream');
     }


     console.log("method 1 with map " + newSentence)
     console.log("method 2 with regular for loop  " + arr)
 }

 screamer(text)