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
    listaDischi : []
  },

  mounted : function (indici) {
      axios.get(infoDischi)
      .then(ritorno =>
        // fare uguale perche se pushavo mettevo array dentro array vuoto
        this.listaDischi = ritorno.data.response
      )
    console.log(this.listaDischi);
  }
})
