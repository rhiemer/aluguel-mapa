import {
  LISTAR_ANUNCIOS_MAPA
} from '../constants';

export const listarAnunciosMapa = (latitude,longitude) => {         
    return (      
    {
      type: LISTAR_ANUNCIOS_MAPA,
      latitude,
      longitude,
    });
  };