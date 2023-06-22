import { error } from 'console';

export async function load ({ fetch}){
    try{
        const url = 'https://zenquotes.io/api/random'
        const response = await fetch(url);
        const json = await response.json();
        if(!json || !json[0].a){
            throw error(500, 'Quate api not working')
        }
        return {quote: json[0].a }
    }catch(e){
        throw error(500, 'Error with the request.')
    }
}