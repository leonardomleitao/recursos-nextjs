export function formatarDataHora(data: Date | string, longo: boolean = false): string {
    const lingua = "pt-BR"
    const config: any = {
        day: 'numeric',
        month: longo ? 'long' : 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }

    if (!(data as Date)?.toLocaleDateString) {
        return new Date((data as string))?.toLocaleDateString?.(lingua, config)
    } else {
        return (data as Date)?.toLocaleDateString?.(lingua, config)
    }
}