export default {
    components: {
        TopBar: () => import(
            /*webpackChunkName: "TopBar"*/
            '../../components/topbar/template.vue'
        )
    }
}
