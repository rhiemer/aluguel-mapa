import {toastr} from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { arrayRemoveAll, change } from 'redux-form';
import { fromJS } from 'immutable';
import {v4 as gerarUuid} from "node-uuid/uuid";

import {listarAnunciosMapa} from '../../../logica/anuncios';
import {GEOLOCALIZACAO_FORM_MAPA,
        FIELD_FORM_GEOLOCALIZACAO_MAPA,
        FIELD_ALTERAR_LOCALIDADE_FILTRO,
        FIELD_CENTER_MAPA,
        FIELD_KEY_MAPA,
        FIELD_SHOW_BALLON_MAPA,
        FIELD_HOVERED_MAP_ROWINDEX,
        FIELD_HOVER_MAKER_INDEX
       } from './constants';
        

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
        console.error("Erro alterarLocalidadeFiltroSaga",err)
        toastr.error('Erro', 'Erro ao alterar a localidade do filtro.');
    }
}

export function* alterarPosicaoMapaSaga(data) {        
    try {                
        const mapaPosicao = data.localidade && data.localidade.mapaPosicao;        
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_CENTER_MAPA);
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_CENTER_MAPA,fromJS(mapaPosicao)));
    } catch (err) {
        console.error("Erro alterarPosicaoMapaSaga",err)
        toastr.error('Erro', 'Erro ao alterar o centro do mapa.');
    }
}

export function* alterarKeyMapaSaga(data) {        
    try {               
        const uuid = gerarUuid();               
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_KEY_MAPA);                
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_KEY_MAPA,fromJS(uuid)));
    } catch (err) {
        console.error("Erro alterarKeyMapaSaga",err)
        toastr.error('Erro', 'Erro ao alterar chave do mapa para atualização do mesmo.');
    }
}

export function* showBallonMapaSaga(data) {       
    try {              
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_SHOW_BALLON_MAPA);                
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_SHOW_BALLON_MAPA,fromJS(data.openBalloonIndex)));
    } catch (err) {
        console.error("Erro showBallonMapa",err)
        toastr.error('Erro', 'Erro ao indice do balão aberto.');
    }
}

export function* closeBallonMapaSaga(data) {       
    try {              
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_SHOW_BALLON_MAPA);                
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_SHOW_BALLON_MAPA,fromJS(-1)));
    } catch (err) {
        console.error("Erro showBallonMapa",err)
        toastr.error('Erro', 'Erro ao indice do balão aberto.');
    }
}

export function* changeHoveredMapRowIndex(data) {               
    try {              
        const hoveredMapRowIndex = data.hoveredMapRowIndex? data.hoveredMapRowIndex:data.hoverMarkerIndex;         
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_HOVERED_MAP_ROWINDEX);                
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_HOVERED_MAP_ROWINDEX,fromJS(hoveredMapRowIndex)));
    } catch (err) {
        console.error("Erro changeHoveredMapRowIndex",err)
        toastr.error('Erro', 'Erro ao alterar indice do balão selecionado.');
    }
}

export function* changeHoverMarkerIndex(data) {       
    try {              
        const hoverMarkerIndex = data.hoverMarkerIndex? data.hoverMarkerIndex:data.hoveredMapRowIndex;         
        arrayRemoveAll(GEOLOCALIZACAO_FORM_MAPA, FIELD_HOVER_MAKER_INDEX);                
        yield put(change(GEOLOCALIZACAO_FORM_MAPA, FIELD_HOVER_MAKER_INDEX,fromJS(hoverMarkerIndex)));
    } catch (err) {
        console.error("Erro changeHoverMarkerIndex",err)
        toastr.error('Erro', 'Erro ao alterar indice do item da lista selecionado.');
    }
}

