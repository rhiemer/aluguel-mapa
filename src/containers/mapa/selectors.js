import {createSelector} from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import {
  HEADER_FORM_MAPA,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER
} from './constants';

const localidadeHeaderMapaFiltroFormSelector = (state) => formValueSelector(HEADER_FORM_MAPA)(state,FIELD_FORM_HEADER_MAPA_LISTAR_LOCALIDADE_HEADER);

const localidadeHeaderMapSelector = createSelector(
    localidadeHeaderMapaFiltroFormSelector,
    (listaLocalidades) => listaLocalidades && listaLocalidades.toJS()
  );

export {
    localidadeHeaderMapaFiltroFormSelector,
    localidadeHeaderMapSelector
  };
