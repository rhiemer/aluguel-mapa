import {createSelector} from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import {
  HEADER_FORM_MAPA,
  FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER,
  FIELD_FORM_HEADER_MAPA_ALTERAR_LOCALIDADE_FILTRO
} from './constants';

const localidadeHeaderMapaFiltroFormSelector = (state) => formValueSelector(HEADER_FORM_MAPA)(state,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER);
const alterarLocalidadeMapaFiltroFormSelector = (state) => formValueSelector(HEADER_FORM_MAPA)(state,FIELD_FORM_HEADER_MAPA_ALTERAR_LOCALIDADE_FILTRO);

const localidadeHeaderMapSelector = createSelector(
    localidadeHeaderMapaFiltroFormSelector,
    (listaLocalidades) => listaLocalidades && listaLocalidades.toJS()
  );
  
const localidadeHeaderMapaFiltroFormSelector = (state) => formValueSelector(HEADER_FORM_MAPA)(state,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER);

const alterarLocalidadeMapaFiltroSelector = createSelector(
    alterarLocalidadeMapaFiltroFormSelector,
    (localidade) => localidade && localidade.toJS()
  );  
  

export {
    localidadeHeaderMapaFiltroFormSelector,
    localidadeHeaderMapSelector,
    alterarLocalidadeMapaFiltroFormSelector,
    alterarLocalidadeMapaFiltroSelector
  };
