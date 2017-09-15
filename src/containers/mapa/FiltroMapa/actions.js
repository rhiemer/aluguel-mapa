import {
    MAPA_LISTAR_LOCALIDADE_HEADER,MAPA_ALTERAR_LOCALIDADE_FILTRO,MAPA_REFRESH_LOCALIDADE_FILTRO
} from '../constants';

export const listarLocalidadeHeader = (filtro) => {          
    return (
    {
      type: MAPA_LISTAR_LOCALIDADE_HEADER,
      filtro,
    });
  };
  
export const alterarLocalidadeFiltro = (localidade) => {          
    return (
    {
      type: MAPA_ALTERAR_LOCALIDADE_FILTRO,
      localidade,
    });
  };  

export const refreshLocalidadeFiltro = (localidade) => {          
    return (
    {
      type: MAPA_REFRESH_LOCALIDADE_FILTRO,
      localidade,
    });
  }; 
