// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   app:{
        head: {
        title: 'my title',
        meta:
            [
                { charset: 'utf-8' },
               
            ],
        
        script: [
            {
                src:"_nuxt/assets/js/bundle.js?ver=2.7.0"
            }, 
            {
                src:"_nuxt/assets/js/scripts.js?ver=2.7.0"
            },
            {
                src:"_nuxt/assets/js/charts/chart-ecommerce.js?ver=2.7.0"
            },

        ],

        link: [
            {
                rel:"shortcut icon",
                href:"_nuxt/assets/images/favicon.png"
            }, 
            {
                rel:"stylesheet",
                href:"_nuxt/assets/css/dashlite.css?ver=2.7.0"
            },
            {
                rel:"stylesheet",
                href:"_nuxt/assets/css/theme.css?ver=2.7.0"
            },

        ], 

        }
   }
})
