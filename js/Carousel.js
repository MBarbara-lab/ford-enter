class Carousel {
    constructor(content) {
        this.img = document.getElementById("carousel-img");
        this.link = document.getElementById("carousel-link");
        this.title = document.getElementById("carousel-title");
        this.content = content;
        this.index = 0;
    }

    uploadElement() {
        this.img.src = content[this.index].imageSrc;
        this.img.alt = content[this.index].imageAlt;
        this.link = "../lançamento";
        this.title.textContent = content[this.index].title;
    }

    dinamicIndex(condition, incremento) {
        if (this.index === condition) {
            this.index = 0;
            return;
        }
        incremento;
    }

    start(interval) {
        this.uploadElement();
        if (this.index === this.content.length - 1) {
            this.index = 0;
            return;
        }
        this.index++;

        const timerCarousel = setInterval(() => {
            this.uploadElement();
            if (this.index === this.content.length - 1) {
                this.index = 0;
                return;
            }
            this.index++;
        }, interval);
        

        const btnStop = document.querySelector(".btn-stop");
        btnStop.addEventListener("click", () => {
            clearInterval(timerCarousel);
            btnBack.style.display = "flex";
            btnNext.style.display = "flex";
            btnStop.style.display = "none";
        })
    }

    next() {
            if (this.index === this.content.length - 1) {
                this.index = 0;
                // return;
            } else {
                console.log(this.index);
                this.index++;
            }
            this.uploadElement();
        }

    back() {
            if (this.index === 0) {
                this.index = 2;
                // return;
            } else {
                console.log(this.index);
                this.index--;
            }
            this.uploadElement();
            
        }
}

const content = [
    {
        imageSrc: "../img/imagem_1.jpg",
        imageAlt: "Visão lateral dianteira de uma Ford Ranger Black escura em ambiente urbano",
        title: "Esta é a nova Ranger Ford 2022. Verifique novidades."
    },
    {
        imageSrc: "../img/imagem_2.jpg",
        imageAlt: "Um automóvel Ford Model T histórico rodeado por uma multidão",
        title: "Ford a nossa história"
    },
    {
        imageSrc: "../img/imagem_3.jpg",
        imageAlt: "Um Ford Bronco Sport moderno, visto de lado em terreno natural perto da água e vegetação.",
        title: "Nova Ford Bronco Sport 2022"
    }
]

const carousel = new Carousel(content);
carousel.start(2000);

const btnNext = document.querySelector(".btn-next");
btnNext.addEventListener("click", () => {
    carousel.next()
});

const btnBack = document.querySelector(".btn-back");
btnBack.addEventListener("click", () => {
    carousel.back()});


