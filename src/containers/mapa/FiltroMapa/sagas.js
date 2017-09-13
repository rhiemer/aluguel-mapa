import {toastr} from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { arrayRemoveAll, change } from 'redux-form';
import { fromJS } from 'immutable';
import { cancel,take, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {listarLocalidadeHeader} from '../../logica/localidades';
import { MAPA_LISTAR_LOCALIDADE_HEADER,
         HEADER_FORM_MAPA,
         FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER} from './constants';

export function* listarLocalidadeHeaderSaga(data) {
  try {
      arrayRemoveAll(HEADER_FORM_MAPA,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER);
      yield put(change(HEADER_FORM_MAPA,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER,fromJS(listarLocalidadeHeader(data.filtro))));
  } catch (err) {
      toastr.error('Erro', 'Erro ao listar as localidades do header do mapa.');
  }
}



