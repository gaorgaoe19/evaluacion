export default {
    data() {
        return {
            busy: false,
            password: null,
            email: null,
            errors: {
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
        async login() {
            this.busy = true
            this.errors.email.status = false
            this.errors.password.status = false
            let data =  {
                password: this.password,
                email: this.email,
            }
            try {
                let res = await axios.post('login', data);
                let msg = res.data.message
                notify.success(msg)
                setTimeout(() => {
                    window.location = '/home'
                }, 1000)
            } catch (err) {
                this.password = null
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
