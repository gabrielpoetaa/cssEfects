const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting)
    // if(entry.isIntersecting) observer.unobserve(entry.target)
  });
},{
  threshold: 1,
  // rootMargin: '100px'
  // root: ''
}
);

cards.forEach(card =>{
  observer.observe(card)

})




// let cardsKey = Object.entries(cards)

// console.log(cards)


// let newCards = cardsKey.map((card) => {
//   return card
// })

// console.log(newCards)
