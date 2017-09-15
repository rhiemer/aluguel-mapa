import genMarkersData from '../fake/anuncios';

/**
 * Busca localidades numa api de localiade a partir de uma string como filtro
 */
export function listarAnunciosMapa(latitude,longitude) {
    try {                
        const data = genMarkersData(latitude,longitude)                   
        return data;        
    } catch (err) {
        console.error("Erro listarAnunciosMapa",err)
    }    
}  