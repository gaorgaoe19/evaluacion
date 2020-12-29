

const auth = (to, from, next) => {
    let user = document.head.querySelector('meta[name="user"]')
    if(user.content != "") {
        next()
    } else {
        next({
            name: 'auth'
        })
    }
}

export default auth
