import DefaultLayout from '../_default/template.vue'
import DashLayout from '../_dash/template.vue'


const layouts = {
    default: DefaultLayout,
    dash: DashLayout,
}

export default {

    layouts: layouts,

    components: layouts,

    default: 'default',

    computed: {

        layout() {
            return this.layouts[this.current];
        },

        layouts() {
            return this.$options.layouts;
        },

        current() {
            return this.$route.meta.layout
                ? this.$route.meta.layout
                : this.$options.client;
        },
    },

}
