class UI {
    constructor() {
    }
    static addFilmToUI(newFilm) {
        // <!-- <tr>
        //  <td><img src="" class="img-fluid img-thumbnail"></td>
        //  <td></td>
        //  <td></td>
        // <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        //  </tr> -->
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
    <tr>
     <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
     <td>${newFilm.title}</td>
     <td>${newFilm.director}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr>`;
    }
    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }
    //danger ve success mesajları için 
    static displayMessages(message, type) {
        const cardbody = document.querySelector(".card-body");
        const div = document.createElement("div");

        div.className = `alert alert-${type}`;
        div.textContent = message;
        cardbody.appendChild(div);
        setTimeout(function () { div.remove(); }, 1000);
    }
    static LoadAllFilms(films) {
        const filmList = document.getElementById("films");
        films.forEach(film => {
            filmList.innerHTML += `
        <tr>
     <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
     <td>${film.title}</td>
     <td>${film.director}</td>
     <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`;
        });
    }
    static deleteFilmFromUI(element) {
        element.parentElement.parentElement.remove();
    }
    static clearAllFilmsFromUI() {
        const allfilms = document.getElementById("films");
        // allfilms.innerHTML = ""; boyle de olur ama bu yöntem yavaş
        while (allfilms.firstElementChild !== null) {
            allfilms.firstElementChild.remove();
        }
    }
}
