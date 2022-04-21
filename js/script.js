
// Consegna
// nome repo: vue-slider
// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
// Consigli del giorno:
// - regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
// - il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
// - oltre a Vue, ora abbiamo diversi strumenti in più nelle nostre tasche, che possono tornarci utili per svolgere l'esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda la struttura dei dati. Forse questa volta possiamo fare qualcosa di meglio di 3 array separati... sì, ma cosa? :faccia_pensosa:
// Buon lavoro e buon divertimento! :vue::muscolo::faccia_nerd:
//////////////////////////////////////////////////////////////////////////////////////////////////////
const app = new Vue({
    el: "#app",
    data:{
        slides: [
        {
            image: 'img/01.jpg',
            title: 'Svezia',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
            image: 'img/02.jpg',
            title: 'Svizzera',
            text: 'Lorem ipsum.',
        },
        {
            image: 'img/03.jpg',
            title: 'Gran Bretagna',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            image: 'img/04.jpg',
            title: 'Germania',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
        },
        {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
        }
        ],
    activeIndex: 0,
    intervalId: null
    },

// console.log(app);
    methods: {
        nextSlide() {
            // In versione ternaria => this.activeIndex = (this.activeIndex === 4) ? 0 : this.activeIndex +=1;
            if (this.activeIndex === 4) {
                this.activeIndex = 0;
            } else {
                this.activeIndex += 1;
            }
        },
        prevSlide() {
            if (this.activeIndex === 0) {
                this.activeIndex = 4;
            } else {
                this.activeIndex -= 1;
            }
        },
        autoScroll() {
            this.intervalId = setInterval(() => {
                this.nextSlide();
            }, 3000)
        },
        stopAutoScroll() {
            clearInterval(this.intervalId);
            this.intervalId = null;
        },
        // clickThumb() {
        //     if (this.activeIndex == 'active') {
        //         thumb.index == slides.index
        //     } 
        // }
    }


})