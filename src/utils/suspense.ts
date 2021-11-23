import Http from "./http"

export function obterDados(url) {
    let result
    let status = 'pending'
    const promise = Http.get(url).then(res => {
        status = 'success'
        result = res
    }, err => {
        status = 'error'
        result = err
    })

    return {
        resultado() {
            if (status === 'pending') {
                throw promise
            } else if (status === 'error') {
                throw result
            } else {
                return result
            }
        }
    }
}