(function() {
    function apagarCookie(name) {
        const pathBits = location.pathname.split('/')
        let pathCurrent = ' path='
        document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;'
    
        for (let i = 0; i < pathBits.length; i++) {
            pathCurrent += ((pathCurrent.substr(-1) != '/') ? '/' : '') + pathBits[i]
            document.cookie = name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT;' + pathCurrent + ';'
        }
    }
    apagarCookie('modelo-pagina-checkout')
})()