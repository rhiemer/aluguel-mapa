import {toastr} from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { arrayRemoveAll, change } from 'redux-form';
import { fromJS } from 'immutable';
import { cancel,take, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA} from './constants';
import { LISTAR_ANUNCIOS_MAPA} from '../constants';
import {listarAnunciosMapa} from '../../../logica/anuncios';

function* listarAnunciosMapaSaga(data) {
  try {      
      arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA);
      yield put(change(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA,fromJS(listarAnunciosMapa(data.latitude,data.longitude))));
  } catch (err) {
      toastr.error('Erro','Erro ao listar os anuncios do mapa.');
  }
}

export function* defaultSaga() {   
  const listarAnunciosMapa = yield takeLatest(LISTAR_ANUNCIOS_MAPA,listarAnunciosMapaSaga);
  yield take(LOCATION_CHANGE);  
  yield cancel(listarAnunciosMapa);
  return;
}

export default [
  defaultSaga,
];
