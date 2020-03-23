//********* Link para usar a font League Spartan *********
//********* Importada de https://github.com/KyleAMathews/typefaces/tree/master/packages/league-spartan*********
require('typeface-league-spartan')
//********* Link para usar o ficheiro main.scss *********
import './assets/styles/main.scss'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {


  //********* Link para usar a font Libre Baskerville *********
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Libre+Baskerville:400,700&display=swap'
  })
  Vue.component('Layout', DefaultLayout)
}
