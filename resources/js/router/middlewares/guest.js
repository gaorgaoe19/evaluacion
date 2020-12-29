const guest = (to, from, next) => {
    let user = document.head.querySelector('meta[name="user"]')
    if(user.content == "") {
        next()
    } else {
        next({
            name: 'home'
        })
    }
}

export default guest
