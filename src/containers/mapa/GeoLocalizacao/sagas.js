import {toastr} from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { arrayRemoveAll, change } from 'redux-form';
import { fromJS } from 'immutable';

import {listarAnunciosMapa} from '../../../logica/anuncios';
import {GEOLOCALIZACAO_FORM_MAPA,
        FIELD_FORM_GEOLOCALIZACAO_MAPA,
        FIELD_ALTERAR_LOCALIDADE_FILTRO} from './constants';

export function* listarAnunciosMapaSaga(data) {
  try {    
      console.log(`listarAnunciosMapaSaga=${JSON.stringify(data)}`)  
      arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA);
      yield put(change(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA,fromJS(listarAnunciosMapa(data.latitude,data.longitude))));
  } catch (err) {
      toastr.error('Erro','Erro ao listar os anuncios do mapa.');
  }
}

export function* alterarLocalidadeFiltroSaga(data) {
    try {
        console.log(`alterarLocalidadeFiltroSaga2=${JSON.stringify(data.localidade)}`)
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_ALTERAR_LOCALIDADE_FILTRO);
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_ALTERAR_LOCALIDADE_FILTRO,fromJS(data.localidade)));
    } catch (err) {
        toastr.error('Erro', 'Erro ao alterar a localidade do filtro.');
    }
}

