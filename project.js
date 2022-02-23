const form = document.querySelector("#film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


//tüm eventleri yükleme
 eventListeners();
 
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films =storage.GetFilmsFromStorage();
        UI.LoadAllFilms(films);
    });
    cardbody.addEventListener("click",deleteFilm)
    clear.addEventListener("click",clearAllFilms);

};

 function addFilm(e){
    
     const title = titleElement.value;
     const director = directorElement.value;
     const url = urlElement.value;
   
    

     if(title === "" || director === "" || url === "")
     {
         UI.displayMessages("boş yerler görüyoruuuummm!","danger");
     }
     else {
         //yeni film
        
         const newFilm = new Film(title,director,url);
         UI.addFilmToUI(newFilm);
        Storage.addFilmToStorage (newFilm);

         UI.displayMessages("sağol karseşş","success");
            }


UI.clearInputs(titleElement,urlElement,directorElement);

     
e.preventDefault();   
 }

 //film silme func
 function deleteFilm(e){
    
    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        
        UI.displayMessages("iyice sildik..","success");
    }
    }
    //tümünü temizleme funct
    function clearAllFilms(){
        if(confirm("hepsini silim mi ?")){
            UI.clearAllFilmsFromUI();
            Storage.clearAllFilmsFromStorage();
        }
        
    }