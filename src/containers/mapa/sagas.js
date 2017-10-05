import { cancel,take,takeLatest,fork,all,takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {listarLocalidadeHeaderSaga,alterarLocalidadeFiltroSaga} from './FiltroMapa/sagas'
import {listarAnunciosMapaSaga,
        alterarLocalidadeFiltroSaga as alterarLocalidadeFiltroSagaGeoLocalizacao,
        alterarPosicaoMapaSaga,
        alterarKeyMapaSaga,
        showBallonMapaSaga,
        closeBallonMapaSaga,
        changeHoveredMapRowIndex,
        changeHoverMarkerIndex
       } from './GeoLocalizacao/sagas'

import { MAPA_LISTAR_LOCALIDADE_HEADER,
         MAPA_ALTERAR_LOCALIDADE_FILTRO,         
         MAPA_REFRESH_LOCALIDADE_FILTRO,
         LISTAR_ANUNCIOS_MAPA,  
         SHOW_BALLON_MAPA,
         CLOSE_BALLON_MAPA,
         SELECIONAR_LINHA_LISTAGEM_ANUNCIO,
         SELECIONAR_BALAO_MAPA_ANUNCIO      
        } from './constants'
        
export function* defaultSaga() {
  const listarLocalidadeHeaderWatcher = yield takeLatest(MAPA_LISTAR_LOCALIDADE_HEADER,listarLocalidadeHeaderSaga);  
  const listarAnunciosWatcher = yield takeLatest(LISTAR_ANUNCIOS_MAPA,listarAnunciosMapaSaga);   
  const showBallonMapaWatcher =  yield takeLatest(SHOW_BALLON_MAPA,showBallonMapaSaga);                                                                                                     
  const closeBallonMapaWatcher = yield takeLatest(CLOSE_BALLON_MAPA,closeBallonMapaSaga); 
  
  const composeFilterListarAnuncioWatcher = yield all([   
                                                          takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,closeBallonMapaSaga),
                                                          takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,alterarLocalidadeFiltroSaga),
                                                          takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,alterarLocalidadeFiltroSagaGeoLocalizacao),
                                                          takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,listarAnunciosMapaSaga),
                                                          takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,alterarPosicaoMapaSaga)                                                                                                                  
                                                      ]); 
  const composeRefreshLocalidadeFiltro = yield all([   
                                                       takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,closeBallonMapaSaga),
                                                       takeEvery(MAPA_REFRESH_LOCALIDADE_FILTRO,alterarLocalidadeFiltroSaga),
                                                       takeEvery(MAPA_REFRESH_LOCALIDADE_FILTRO,alterarLocalidadeFiltroSagaGeoLocalizacao),
                                                       takeEvery(MAPA_REFRESH_LOCALIDADE_FILTRO,listarAnunciosMapaSaga),
                                                       takeEvery(MAPA_REFRESH_LOCALIDADE_FILTRO,alterarPosicaoMapaSaga), 
                                                       takeEvery(MAPA_REFRESH_LOCALIDADE_FILTRO,alterarKeyMapaSaga),                                                                                                                 
                                                      ]);
  
  const composeSelecionarLinhaListagemAnuncio = yield all([   
                                                      takeEvery(SELECIONAR_LINHA_LISTAGEM_ANUNCIO,changeHoveredMapRowIndex),
                                                      takeEvery(SELECIONAR_LINHA_LISTAGEM_ANUNCIO,changeHoverMarkerIndex)
                                                  ]);

  const composeSelecionarBalaoMapaAnuncio = yield all([   
    takeEvery(SELECIONAR_BALAO_MAPA_ANUNCIO,changeHoverMarkerIndex),
    takeEvery(SELECIONAR_BALAO_MAPA_ANUNCIO,changeHoveredMapRowIndex),
  ]);                                                   
  
                                                      
  yield take(LOCATION_CHANGE);
  yield cancel(listarLocalidadeHeaderWatcher);
  yield cancel(listarAnunciosWatcher);
  yield cancel(composeFilterListarAnuncioWatcher); 
  yield cancel(composeRefreshLocalidadeFiltro)
  yield cancel(showBallonMapaWatcher);
  yield cancel(closeBallonMapaWatcher); 
  yield cancel(composeSelecionarLinhaListagemAnuncio); 
  yield cancel(composeSelecionarBalaoMapaAnuncio); 
  return;
}

export default [
  defaultSaga,
];
