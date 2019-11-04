// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(function(response) {
    // handle success
    console.log(response);
    Object.keys(response.data.articles).forEach(key => {
      response.data.articles[key].forEach(article => {
        // code to create card for article
        createCard(article);
      });
    });
  })
  .catch(function(error) {
    // handle error
    console.log(error);
  })
  .finally(function() {
    // always executed
  });

function createCard(article) {
  const create = element => document.createElement(element);
  const card = create("div");
  const cardHeadline = create("div");
  const cardAuthor = create("div");
  const cardImgContainer = create("div");
  const cardImg = create("imgsrc");
  const cardSpan = create("span");

  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgContainer.classList.add("img-container");

  cardHeadline.textContent = article.headline;
  cardAuthor.textContent = article.author;
  cardImgContainer.textContent = article.imgContainer;
  cardImg.textContent = article.img;
  cardSpan.textContent = article.span;

  const cardsContainer = document.querySelector(".cards-container");

  card.append(cardHeadline, cardAuthor, cardImg);
  cardsContainer.append(card);

  return card;
}
