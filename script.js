async function importAkita() {
    const box = document.getElementById("textBox");
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dog = await response.json();
    let imageAkita = await dog.message;

    const image = document.getElementById("imageDog");
    image.style.height = "380px";
    image.src = imageAkita;

    box.appendChild(image);
}

function anotherDog() {
    const buttonDog = document.getElementById("anotherDog");
    buttonDog.addEventListener("click", () => {
        importAkita();
    })
}

// importAkita();
// anotherDog();

function imageDogs() {
    const buttonDog = document.getElementById("anotherDog");
    const resultado = document.getElementById("textBox")

    function loadImage() {
        resultado.innerHTML = ''
        fetch("https://dog.ceo/api/breeds/image/random/5")
            .then(res => {return res.json() } )
            .then(data => data.message.map((foto) => {
                resultado.innerHTML += `<img src=${foto} style=" height: 200px;"/>`}))
            .catch(error => console.log(error))
    }

    loadImage();

    buttonDog.addEventListener("click", () => {

        loadImage();

    })
}

imageDogs()