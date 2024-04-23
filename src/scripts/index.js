import { applyInputRangeStyle } from "./inputRange.js";
import {listadeálbuns } from "./albumsDataBase.js";
import {renderDarkMode} from "./theme.js";
import { fetchMusic } from "./api.js";

let arrayMusic = [];

function creatCardMusic(list){
    const liMusic = document.createElement("li");
    const imgMusic = document.createElement("img");
    const h4Music = document.createElement("h4");
    const divMusic = document.createElement("div");
    const spanMusicBand = document.createElement("span");
    const spanMusicGenre = document.createElement("span");
    const divPrice = document.createElement("div");
    const spanPrice = document.createElement("span");
    const btnCard = document.createElement("button");

    // Hierarquia 

    liMusic.append(imgMusic, h4Music, divMusic, divPrice);
    divMusic.append(spanMusicBand, spanMusicGenre);
    divPrice.append(spanPrice, btnCard);


    imgMusic.src = list.img;
    imgMusic.alt = `Imagem do album ${list.title}`;
    h4Music.innerText = list.title;
    spanMusicBand.innerText = list.band;
    spanPrice.innerText = `R$ ${list.price}`;
    spanMusicGenre.innerText = list.genre;
    btnCard.innerText = `Comprar`;

    // Adicionando Classes 

    liMusic.classList.add("card");
    imgMusic.classList.add("card_img");
    h4Music.classList.add("card_title_album");
    divMusic.classList.add("div_card");
    spanMusicBand.classList.add("card_name_band");
    spanMusicGenre.classList.add("card_genre");
    divPrice.classList.add("div_price");
    spanPrice.classList.add("card_price");
    btnCard.classList.add("card-btn");

    return liMusic;
  }


  function renderCards(listMusic){
    const ulMusicList = document.querySelector(".list_card");
    ulMusicList.innerHTML = "";

    listMusic.forEach((list, index) => {
        const musicCard = creatCardMusic(list);
        ulMusicList.append(musicCard);
    })
  };

  

  function filterPrice(listMusic){
    const filterForm = document.querySelector(".filter_form");
    const spanFilter = document.querySelector(".color_price");
    const filterInput = document.querySelector(".filter");

    filterForm.addEventListener(`input`, (event) =>{

      const currentInputValue = event.target.valueAsNumber;
      spanFilter.innerText = currentInputValue.toFixed(2);

      const filterMusic = listMusic.filter((item) => {
        return (
          parseInt(item.price) <= currentInputValue
        );
      });
      renderCards(filterMusic)
    });
  
  }



async function routine(){
    renderDarkMode();
    arrayMusic = await fetchMusic();
    console.log(arrayMusic)
    applyInputRangeStyle();
    creatCardMusic(arrayMusic);
    renderCards(arrayMusic);
    filterPrice(arrayMusic);
}

routine();
