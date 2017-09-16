import {
  LISTAR_ANUNCIOS_MAPA,
  SHOW_BALLON_MAPA
} from '../constants';

export const listarAnunciosMapa = (lat,lng) => {         
    return (      
    {
      type: LISTAR_ANUNCIOS_MAPA,
      lat,
      lng,
    });
  };
  
  export const showBallonMapa = (openBalloonIndex) => {         
    return (      
    {
      type: SHOW_BALLON_MAPA,
      openBalloonIndex,
    });
  };  