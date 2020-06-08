// efb45f37c5426f74b8c24d8b31a3e582

let ville = 'Arras';
recevoirTemperature(ville);


let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => {

    ville = prompt('quelle ville souhaitez vous voir ?');
    recevoirTemperature(ville);
});


function recevoirTemperature() {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';


    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;



                console.log(reponse);
            } else {
                alert('Un problème est intervenu, merci de revenir plus tard.');
            }
        }
    }
}