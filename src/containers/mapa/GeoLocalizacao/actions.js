import {
  LISTAR_ANUNCIOS_MAPA
} from '../constants';

export const listarAnunciosMapa = (lat,lng) => {         
    return (      
    {
      type: LISTAR_ANUNCIOS_MAPA,
      lat,
      lng,
    });
  };