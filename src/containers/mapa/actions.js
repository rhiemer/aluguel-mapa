import {
    MAPA_LISTAR_LOCALIDADE_HEADER
} from './constants';

export const listarLocalidadeHeader = (filtro) => {          
    return (
    {
      type: MAPA_LISTAR_LOCALIDADE_HEADER,
      filtro,
    });
  };

