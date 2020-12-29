
export default {
    components: {
        LoginForm: () => import(
            /*webpackChunkName: "LoginForm" */
            '../../components/login-form/template.vue'
        ),
        RegisterForm: () => import(
            /*webpackChunkName: "RegisterForm" */
            '../../components/register-form/template.vue'
        )
    },
    data() {
        return  {

        }
    },
    methods: {
    }
}
