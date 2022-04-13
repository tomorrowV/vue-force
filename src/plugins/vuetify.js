import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);


export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#e20074',
                secondary: '#161620',
                accent: '#3ea2fb',
                error: '#dc3545',
                petrol: '#17a499',
                background: '#ffffff',
            },
            dark: {
                primary: "#ffffff",
                secondary: '#161620',
                accent: '#FEDD00',
                background: '#23222C',
            }
        },
        options: {
            customProperties: true
        },
        dark: true,
    },

})