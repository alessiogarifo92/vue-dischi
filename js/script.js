// Facciamo una chiamata ajax all’api di boolean al seguente indirizzo.
// https://flynn.boolean.careers/exercises/api/array/music
// L’api ci restituirà una decina di dischi musicali che dovremo stampare a schermo con Vue.
// Concentratevi sulla parte JS,
// per la grafica avete come ref lo screeshot,
// ma i dettagli lasciateli per la fine.
const infoDischi = "https://flynn.boolean.careers/exercises/api/array/music";

var app = new Vue ({
  el : '#app',
  data : {
    generiMusic : 'tutti',
    listaDischi : []
  },

  mounted : function () {
      axios.get(infoDischi)
      .then(ritorno =>
        // fare uguale perche se pushavo mettevo array dentro array vuoto
        this.listaDischi = ritorno.data.response
      )
    console.log(this.listaDischi);
  },

  ////////////////////BONUS///////////////////////
  methods: {
    selezGenere (){
      axios.get(infoDischi)
      .then(ritorno =>{
        // variabile d appoggio
        let listaAttivi = ritorno.data.response
        // se generiMusic diverso da quello di partenza cioe 'tutti' allora filtriamo lista e tiriamo fuori soli genre uguali che diventeranno nuova listaDischi
        if (this.generiMusic !== 'tutti') {
          listaAttivi= listaAttivi.filter( element => element.genre.toLowerCase() === this.generiMusic );
          this.listaDischi = listaAttivi;
        } else { //altrimenti 
          this.listaDischi = ritorno.data.response
        }
      })
    }
  }
})
