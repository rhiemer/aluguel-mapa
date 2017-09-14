import pesquisaLocalidadesHeader from '../database/pesquisaLocalidadesHeader.json';

/**
 * Busca localidades numa api de localiade a partir de uma string como filtro
 */
export function listarLocalidadeHeader(filtro) {
    try {
        if (filtro === "") {
            return []            
        }
        const filteredData = pesquisaLocalidadesHeader.filter(function (data) {
            return data.titulo.toLowerCase().includes(filtro.toLowerCase()) || 
                   data.complemento.toLowerCase().includes(filtro.toLowerCase())
        });           
        return filteredData;        
    } catch (err) {
        console.error("Erro listarLocalidadeHeader",err)
    }    
}

