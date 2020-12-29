let user = document.head.querySelector('meta[name="user"]')
if(user.content){
    let currentUser = JSON.parse(user.content);
}

let metaToken = document.head.querySelector('meta[name="csrf-token"]');
let token = {"_token": metaToken.content};
export default {
    data() {
        return {
        }
    },
    computed: {
        user() {
            if(user.content == ""){
                return null;
            }else{
                return JSON.parse(user.content);
            }
        },
    },
    methods: {
        async logout() {
            let url =  "/logout"
            await axios.post(url, token)
            location.href = "/";
        },
    }
}
