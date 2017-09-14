import { cancel,take,takeLatest,fork,all,takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {listarLocalidadeHeaderSaga,alterarLocalidadeFiltroSaga} from './FiltroMapa/sagas'
import {listarAnunciosMapaSaga,alterarLocalidadeFiltroSaga as alterarLocalidadeFiltroSagaGeoLocalizacao} from './GeoLocalizacao/sagas'

import { MAPA_LISTAR_LOCALIDADE_HEADER,
         MAPA_ALTERAR_LOCALIDADE_FILTRO,         
         LISTAR_ANUNCIOS_MAPA
        } from './constants'
        
export function* defaultSaga() {
  const listarLocalidadeHeaderWatcher = yield takeLatest(MAPA_LISTAR_LOCALIDADE_HEADER,listarLocalidadeHeaderSaga);  
  const listarAnunciosWatcher = yield takeLatest(LISTAR_ANUNCIOS_MAPA,listarAnunciosMapaSaga); 
  const composeFilterListarAnuncioWatcher = yield all([   takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,alterarLocalidadeFiltroSaga),
                                                          takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,alterarLocalidadeFiltroSagaGeoLocalizacao),
                                                          takeEvery(MAPA_ALTERAR_LOCALIDADE_FILTRO,listarAnunciosMapaSaga),                                                        
                                                      ]); 
  yield take(LOCATION_CHANGE);
  yield cancel(listarLocalidadeHeaderWatcher);
  yield cancel(listarAnunciosWatcher);
  yield cancel(composeFilterListarAnuncioWatcher); 
  return;
}

export default [
  defaultSaga,
];
