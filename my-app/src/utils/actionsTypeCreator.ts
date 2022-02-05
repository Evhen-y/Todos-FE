export const TYPES = ['REQUEST', 'SUCCESS', 'FAILURE' ]

export interface IActionsTypes{
    [key: string] : {[key: string] : string}
}

export const createActionsTypes = (aTypes : string[], ): IActionsTypes => {
    const response:any = {}
    aTypes.forEach( (at) => {
        response[at]={}
        TYPES.forEach((t) => {
            response[at][t] = `${at}_${t}`
        } )
        
    });
    return response
}