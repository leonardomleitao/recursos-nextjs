import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const random = Math.random()

    if(random < 0.4) {
        return NextResponse.next()
    } else if(random < 0.8) {
        return NextResponse.rewrite('/codigo/midSimples')
    } else {
        return new Response('Exemplo de middleware!')
    }
}