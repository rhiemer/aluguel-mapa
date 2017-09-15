import {toastr} from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { arrayRemoveAll, change } from 'redux-form';
import { fromJS } from 'immutable';

import {listarAnunciosMapa} from '../../../logica/anuncios';
import {GEOLOCALIZACAO_FORM_MAPA,
        FIELD_FORM_GEOLOCALIZACAO_MAPA,
        FIELD_ALTERAR_LOCALIDADE_FILTRO,
        FIELD_CENTER_MAPA} from './constants';

export function* listarAnunciosMapaSaga(data) {  
  const {lat,lng} = data.localidade?data.localidade.mapaPosicao.center:data;
  try {    
      arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA);
      yield put(change(GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA,fromJS(listarAnunciosMapa(lat,lng))));
  } catch (err) {
      toastr.error('Erro','Erro ao listar os anuncios do mapa.');
  }
}

export function* alterarLocalidadeFiltroSaga(data) {
    try {
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_ALTERAR_LOCALIDADE_FILTRO);
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_ALTERAR_LOCALIDADE_FILTRO,fromJS(data.localidade)));
    } catch (err) {
        toastr.error('Erro', 'Erro ao alterar a localidade do filtro.');
    }
}

export function* alterarPosicaoMapaSaga(data) {        
    try {                
        const mapaPosicao = data.localidade && data.localidade.mapaPosicao;
        console.log(`alterarPosicaoMapaSaga=${JSON.stringify(mapaPosicao)}`)
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_CENTER_MAPA);
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_CENTER_MAPA,fromJS(mapaPosicao)));
    } catch (err) {
        toastr.error('Erro', 'Erro ao alterar o centro do mapa.');
    }
}

