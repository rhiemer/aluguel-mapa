import {toastr} from 'react-redux-toastr';
import {put} from 'redux-saga/effects';
import {arrayRemoveAll, change} from 'redux-form';
import {fromJS} from 'immutable';

import {listarLocalidadeHeader} from '../../../logica/localidades';
import {HEADER_FORM_MAPA, 
        FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER, 
        FIELD_FORM_HEADER_MAPA_ALTERAR_LOCALIDADE_FILTRO} from './constants';

export function * listarLocalidadeHeaderSaga(data) {
    try {
        arrayRemoveAll(HEADER_FORM_MAPA, FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER);
        yield put(change(HEADER_FORM_MAPA, FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER, fromJS(listarLocalidadeHeader(data.filtro))));
    } catch (err) {
        toastr.error('Erro', 'Erro ao listar as localidades do header do mapa.');
    }
}

export function * alterarLocalidadeFiltroSaga(data) {
    try {
        console.log(`alterarLocalidadeFiltroSaga1=${JSON.stringify(data.localidade)}`)
        arrayRemoveAll(HEADER_FORM_MAPA, FIELD_FORM_HEADER_MAPA_ALTERAR_LOCALIDADE_FILTRO);
        yield put(change(HEADER_FORM_MAPA, FIELD_FORM_HEADER_MAPA_ALTERAR_LOCALIDADE_FILTRO,fromJS(data.localidade)));
    } catch (err) {
        toastr.error('Erro', 'Erro ao alterar a localidade do filtro.');
    }
}
