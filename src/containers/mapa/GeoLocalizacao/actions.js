import {
  LISTAR_ANUNCIOS_MAPA,
  SHOW_BALLON_MAPA,
  SELECIONAR_BALAO_MAPA_ANUNCIO,
  SELECIONAR_LINHA_LISTAGEM_ANUNCIO
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
  
  export const selecionarBalaoMapaAnuncio = (hoverMarkerIndex) => {         
    return (      
    {
      type: SELECIONAR_BALAO_MAPA_ANUNCIO,
      hoverMarkerIndex,
    });
  };
  
  export const selecionarLinhaListagemAnuncio = (hoverMarkerIndex) => {         
    return (      
    {
      type: SELECIONAR_LINHA_LISTAGEM_ANUNCIO,
      hoverMarkerIndex,
    });
  };
  
  