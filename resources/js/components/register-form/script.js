export default {
    data() {
        return {
            busy: false,
            password: null,
            email: null,
            name: null,
            password_confirmation: null,
            errors: {
                name: {
                    status: false,
                    msg: null
                },
                password: {
                    status: false,
                    msg: null
                },
                email: {
                    status: false,
                    msg: null
                }
            }
        }
    },
    methods: {
        async register() {
            this.busy = true
            this.errors.email.status = false
            this.errors.password.status = false
            this.errors.name.status = false
            let data =  {
                password: this.password,
                password_confirmation: this.password_confirmation,
                name: this.name,
                email: this.email,
            }
            try {
                let res = await axios.post('register', data);
                let msg = res.data.message
                notify.success(msg)
                setTimeout(() => {
                    window.location = '/home'
                }, 1000)
            } catch (err) {
                this.password = null
                this.password_confirmation = null
                if(err.response.data.errors) {
                    let list = err.response.data.errors
                    for(let e in list) {
                        this.errors[e].status = true
                        this.errors[e].msg = list[e][0]

                    }
                } else {
                    notify.error(err.response.data.message)
                }
                this.busy = false
            }
        }
    }
}
