import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

const NOME_COOKIE = 'modelo-pagina-checkout'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const opcao = req.cookies[NOME_COOKIE] || (Math.random() > 0.5 ? 'a' : 'b')
    const res = NextResponse.rewrite(`/mid/ab/${opcao}`)

    if (!req.cookies[NOME_COOKIE]) {
        res.cookie(NOME_COOKIE, opcao)
    }
    return res
}