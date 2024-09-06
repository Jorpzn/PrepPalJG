const flashcards = [
    { term: 'Abate', definition: 'v. to become less strong, or to make something less strong' },
    { term: 'Ostensible', definition: 'adj. appearing or claiming to be one thing when it is really something else' },
    { term: 'Abysmal', definition: 'adj. very bad' },
    { term: 'Beguile', definition: 'v, To charm, attract or interest someone typically to decieve'}
    // Add the rest of your words and definitions here...
];

let currentCard = 0;
let isFlipped = false;

const termElement = document.getElementById('flashcard-term');
const definitionElement = document.getElementById('flashcard-definition');

function displayCard(index) {
    const card = flashcards[index];
    termElement.textContent = card.term;
    definitionElement.textContent = card.definition;
    definitionElement.classList.add('hidden');
    isFlipped = false;
}

document.getElementById('flip-btn').addEventListener('click', () => {
    if (isFlipped) {
        definitionElement.classList.add('hidden');
        termElement.classList.remove('hidden');
    } else {
        definitionElement.classList.remove('hidden');
        termElement.classList.add('hidden');
    }
    isFlipped = !isFlipped;
});

document.getElementById('next-btn').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard(currentCard);
});

document.getElementById('prev-btn').addEventListener('click', () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    displayCard(currentCard);
});

displayCard(currentCard);

