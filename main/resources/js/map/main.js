// Vue.component('maparea-component', require('./../components/map/MapareaComponent.vue').default);
const files = require.context('./../components/map/', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

const app = new Vue({
    el: '#app',
});
