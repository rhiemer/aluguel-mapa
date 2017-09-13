import {toastr} from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { arrayRemoveAll, change } from 'redux-form';
import { fromJS } from 'immutable';
import { cancel,take, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {listarLocalidadeHeader} from '../../logica/localidades';
import {listarAnunciosMapa} from '../../logica/anuncios';
import { MAPA_LISTAR_LOCALIDADE_HEADER,         
         LISTAR_ANUNCIOS_MAPA
        } from './constants';
import {HEADER_FORM_MAPA,
        FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER} from '../mapa/FiltroMapa/constants';
import {GEOLOCALIZACAO_FORM_MAPA,
        FIELD_FORM_GEOLOCALIZACAO_MAPA} from '../mapa/GeoLocalizacao/constants';

function* listarLocalidadeHeaderSaga(data) {
  try {
      arrayRemoveAll(HEADER_FORM_MAPA,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER);
      yield put(change(HEADER_FORM_MAPA,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER,fromJS(listarLocalidadeHeader(data.filtro))));
  } catch (err) {
      toastr.error('Erro', 'Erro ao listar as localidades do header do mapa.');
  }
}

function* listarAnunciosMapaSaga(data) {
  try {      
      arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA);
      yield put(change(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA,fromJS(listarAnunciosMapa(data.latitude,data.longitude))));
  } catch (err) {
      toastr.error('Erro','Erro ao listar os anuncios do mapa.');
  }
}

export function* defaultSaga() {
  const listarLocalidadeHeaderWatcher = yield takeLatest(MAPA_LISTAR_LOCALIDADE_HEADER,listarLocalidadeHeaderSaga); 
  const listarAnunciosMapa = yield takeLatest(LISTAR_ANUNCIOS_MAPA,listarAnunciosMapaSaga); 
  yield take(LOCATION_CHANGE);
  yield cancel(listarLocalidadeHeaderWatcher);
  yield cancel(listarAnunciosMapa);  
  return;
}

export default [
  defaultSaga,
];
