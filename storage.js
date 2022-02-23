class Storage {
    constructor() {
    }
    static addFilmToStorage(newFilm) {
        let films = this.GetFilmsFromStorage();
        films.push(newFilm);
        localStorage.setItem("films", JSON.stringify(films));
    }
    static GetFilmsFromStorage() {
        let films;
        if (localStorage.getItem("films") === null) {
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));


        }
        return films;
    }
    static deleteFilmFromStorage(filmTitle) {
        let films = this.GetFilmsFromStorage();
        films.forEach(function (film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);

            }
        });
        localStorage.setItem("films", JSON.stringify(films));

    }
    static clearAllFilmsFromStorage() {

        localStorage.removeItem("films");
    }
}
