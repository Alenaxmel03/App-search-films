let movieList = null;
let inputSearch = null;
let triggerMode = false;

 const createStyle = () => {
   const headStyle = document.createElement("style");
   headStyle.innerHTML = `
    * {
    box-sizing: border-box;
  }
  
  body{
      margin: 0;
      background-color: #000;
  }
  h1{
      color: #fff;
      font-family: Arial, Helvetica, sans-serif;
      margin-left: 10px;
  }
  .wrapper{
      padding: 20px;
  }
  
  .movies {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  
  .movie{
      display: flex;
      align-content: center;
      justify-content: center;
  }
  
  .movie__image{
      width: 100%;
      object-fit: cover;
  }
  .search{
      display: flex;
      align-items: center;
      background-color: #343434;
      margin-bottom: 30px;
      padding: 10px;
      color: #fff;
  }
  .blockCheck{
      font-size: 25px;
      order: 2;
  }
  
  .blockCheck{
      display: flex;
      align-items: center;
      order: 2;
  }
  
  .search__label-input{
      margin-bottom: 7px;
      display: block;
  }
  
  .search__input{
      background-color: #000;
      color: #fff;
      order: 1;
      padding: 10px 15px;
      width: 400px;
      display: block;
      border: 1px solid#ced4da;
      border-radius: 4px;
  }
  .search__input:focus{
     outline: none;
  }
  .search__checkbox{
      margin-left: 20px;
  }
  .search__label-checkbox{
      font-family:Arial, Helvetica, sans-serif;
      font-size: 14px;
      display: block;
      margin-left: 5px;
  }
  @media(max-width: 560px){
      h1{
          text-align: center;
      }
      .search{
          flex-wrap: wrap;
      }
      .blockCheck{
          margin-top: 10px;
      }
  }  `;

   document.head.appendChild(headStyle);
 };

const triggerModeHandler = () => {
    triggerMode = !triggerMode;
}

const createHeader = (container) => {
  const header = document.createElement("h1");
  header.innerText = "Приложение для поиска фильмов";
  container.append(header);
};

const setAttribute = (el, attrs) => {
  for (let key in attrs) {
    if (key !== "innerText") {
      el.setAttribute(key, attrs[key]);
    } else {
      el.innerText = attrs[key];
    }
  }
};

const createSerachBox = (container) => {
  const searchBox = document.createElement("div");
  const blockCheck = document.createElement("div");

  const input = document.createElement("input");
  const labelForInput = document.createElement("label");

  const checkbox = document.createElement("input");
  const labelForCheckbox = document.createElement("label");

  searchBox.setAttribute("class", "search");
  blockCheck.setAttribute("class", "blockCheck");

  setAttribute(input, {
    class: "search__input",
    id: "search",
    type: "text",
    placeholder: "Начните вводить название фильма (например, Iron Man...)",
  });

  setAttribute(checkbox, {
    class: "search__checkbox",
    id: "checkbox",
    type: "checkbox",
  });
  checkbox.addEventListener('click',triggerModeHandler);
  setAttribute(labelForCheckbox, {
    class: "search__label-checkbox",
    for: "checkbox",
    innerText: "Добавлять фильмы к существующему списку",
  });
  blockCheck.append(checkbox, labelForCheckbox);
  searchBox.append(blockCheck);
  searchBox.append( input);
  container.append(searchBox);
};

const createMarkup = () => {
  const container = document.createElement("div");
  const movies = document.createElement("div");

  container.classList.add("container");

  createHeader(container);
  createSerachBox(container);

  movies.classList.add("movies");

  container.append(movies);
  document.body.prepend(container);

  movieList = document.querySelector(".movies");
  inputSearch = document.querySelector('#search')
};

const addMovieToList = (movie) => {
  const item = document.createElement("div");
  const img = document.createElement("img");

  item.classList.add("movie");

  img.src = movie.Poster;

  img.classList.add("movie__image");

  item.append(img);

  movieList.append(item);
  console.log(movie);
};

const clearMovieMarkup = () => movieList && (movieList.innerHTML = '')

const delay = (() => {
    let timer = 0;
    return (cb, ms) => {
        clearTimeout(timer)
        timer = setTimeout(cb, ms)

    }

})();

createMarkup();
createStyle();
