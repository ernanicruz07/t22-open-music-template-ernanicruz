export function renderDarkMode(){
    const darkModeButton = document.querySelector(`.header_theme-btn`);
    const html = document.querySelector(`html`);

    const darkMode = localStorage.getItem(`@openmusic:theme`);

    if(darkMode){
        html.classList.add(`dark-mode`);
        darkModeButton.classList.add("header_theme-btn--sun");
    }

    darkModeButton.addEventListener(`click`, (event) => {

        darkModeButton.classList.toggle(`header_theme-btn--sun`);

        html.classList.toggle(`dark-mode`);

        html.classList.contains(`dark-mode`)
        ?localStorage.setItem(`@openmusic:theme`, `dark`)
        :localStorage.removeItem(`@openmusic:theme`)

    });
}