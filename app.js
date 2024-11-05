const myquotes = 
[
    // Verse Zero
   "  Psalm 23:1 The Lord is my shepherd; I shall not want.",
    // Verse One
   "  John 3:16 For God so loved the world, that He gave His only Son, that whoever believes in Him should not perish but have eternal life.",
    // Verse Two
  " . Romans 8:28 And we know that in all things God works for the good of those who love Him, who have been called according to His purpose.",
     // Verse Three
" Isaiah 40:31 But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
 // Verse four
  " Philippians 4:13 I can do all things through Christ who strengthens me.",
//   Verse 5
" Jeremiah 29:11 For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you a hope and a future.",
//   Verse 6
" Matthew 11:28 Come to me, all you who are weary and burdened, and I will give you rest.",
// Verse 7
"Proverbs 3:5-6 Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight.",


]

const quotes = document.getElementById('quotes');
const generate = document.getElementById('generate');

// add even listener to button

generate.addEventListener('click', function() {
  for (let i = 0; i < myquotes.length; i++); {
// Getting random quote
const randomQuote = getRandomQuote();
console.log(randomQuote);

 // Update the text content of the HTML element
 quotes.textContent = randomQuote;

  }

})

function getRandomQuote() {
     // Generate a random index to get a random quote
     const randomIndex = Math.floor (Math.random() * myquotes.length) ;
     return myquotes[randomIndex];
}