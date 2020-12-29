export default {
    watch: {
        '$route'(to, from) {
            let title = to.meta.title
            if(title) {
                document.title = 'Evaluacion Guillermo | '+title
            } else {
                document.title = 'Evaluacion Guillermo'
            }
        }
    }
}
