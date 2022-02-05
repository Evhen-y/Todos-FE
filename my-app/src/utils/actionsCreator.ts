import { Interface } from "readline"
import {TYPES} from "./actionsTypeCreator"

interface IActions {
    [key : string] : {[key: string] : (payload: Object,  options? : Object, cb?: ()=> void) => Object};
}


export const actionsCreator = (aType: string []) : IActions=> {
    const response : IActions= {}
    aType.forEach((at) => {
        response[at] = {}
        TYPES.forEach((t) =>{
            response[at][t] = (payload: Object, options?: Object, cb?: ()=> void) =>( {
                type:`${at}_${t}`,
                payload,
                options,
                cb
            })
        
        })
    }) 
    return response
}

