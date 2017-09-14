import {createSelector} from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA,FIELD_ALTERAR_LOCALIDADE_FILTRO} from './constants';

const listarAnunciosMapaFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_FORM_GEOLOCALIZACAO_MAPA);
const listarAnunciosMapaSelector = createSelector(
    listarAnunciosMapaFormSelector,
    (listaAnuncios) => listaAnuncios && listaAnuncios.toJS()
  );
  
const alterarLocalidadeMapaFiltroFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_ALTERAR_LOCALIDADE_FILTRO);
const alterarLocalidadeMapaFiltroSelector = createSelector(
      alterarLocalidadeMapaFiltroFormSelector,
      (localidade) => localidade && localidade.toJS()
);   

export {
     listarAnunciosMapaFormSelector,
     listarAnunciosMapaSelector,
     alterarLocalidadeMapaFiltroFormSelector,
     alterarLocalidadeMapaFiltroSelector
  };
