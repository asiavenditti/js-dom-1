/* Inseriamo in pagina l’immagine della lampadina spenta che trovate in allegato e accanto un bottone con la scritta “Accendi”.
Al click del bottone, la lampadina dovrà accendersi (dovremo quindi utilizzare l’immagine della lampadina accesa, sempre in allegato) */


// seleziono l'immagine in JS con l'ID

const image = document.getElementById('img_lamp');

// al click cambia la foto

document.querySelector('.btn').addEventListener('click', function () {

    image.src = 'img/yellow_lamp.png';
});

// BONUS
/*Facciamo accendi e spegni:
Al primo click la lampadina si accende e nel bottone compare la scritta "Spegni"
Al secondo click la lampadina si spegne e nel bottone compare la scritta "Accendi"
E così via... */

// seleziono sia l'immagine che il bottone 

const imageSwitch = document.getElementById('img_lamp');
const button = document.querySelector('.btn');

// al click cambia sia la foto che la scritta nel bottone
button.addEventListener('click', function () {

    // creo una condizione if/else 

    if (button.textContent.includes('Accendi')) {

        imageSwitch.src = 'img/yellow_lamp.png';
        button.textContent = 'Spegni';
    } else {
        imageSwitch.src = 'img/white_lamp.png';
        button.textContent = 'Accendi';
    }
});
