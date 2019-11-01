// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// const headerDiv = document.querySelector(".header");

// data.map(element2 => {
//   const e = headerDiv.append(
//     createHeader(element2.date, element2.title, element2.temp)
//   );
//   return e;
// });

function createHeader(date, title, temp) {
  const create = element => document.createElement(element);
  const header = create("div");
  const pageDate = create("span");
  const pageTitle = create("h1");
  const pageTemp = create("span");

  header.classList.add("header");
  pageDate.classList.add("date");
  pageTemp.classList.add("temp");

  pageDate.textContent = date;
  pageTitle.textContent = title;
  pageTemp.textContent = temp;

  const headerContainer = document.querySelector(".header-container");

  header.append(pageDate, pageTitle, pageTemp);
  headerContainer.append(header);
  return header;
}

// function createArticle(title, date, para1, para2, para3) {
//     const create = element => document.createElement(element);
//     const article = create("div");
//     const articleTitle = create("h2");
//     const articleDate = create("p");
//     const articlePara1 = create("p");
//     const articlePara2 = create("p");
//     const articlePara3 = create("p");
//     const buttonOpen = create("span");

//     article.append(
//       articleTitle,
//       articleDate,
//       articlePara1,
//       articlePara2,
//       articlePara3,
//       buttonOpen
//     );

//     article.classList.add("article");
//     articleDate.classList.add("date");
//     buttonOpen.classList.add("expandButton");

//     articleTitle.textContent = title;
//     articleDate.textContent = date;
//     articlePara1.textContent = para1;
//     articlePara2.textContent = para2;
//     articlePara3.textContent = para3;

//     article.addEventListener("click", () => {
//       article.classList.toggle("article-open");
//       buttonOpen.classList.toggle("expandButton");
//     });

//     return article;
//   }
