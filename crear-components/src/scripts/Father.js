import Son from '../components/Son.vue';

export default {
    name: 'Father',
    components: {
        Son
    },
    data() {
        return {
            message: 'Sóc el pare'
        }
    }
}