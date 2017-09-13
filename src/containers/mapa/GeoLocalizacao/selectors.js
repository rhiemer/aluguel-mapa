import {createSelector} from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { GEOLOCALIZACAO_FORM_MAPA,FIELD_FORM_GEOLOCALIZACAO_MAPA} from './constants';

const listarAnunciosMapaFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_FORM_GEOLOCALIZACAO_MAPA);

const listarAnunciosMapaSelector = createSelector(
    listarAnunciosMapaFormSelector,
    (listaAnuncios) => listaAnuncios && listaAnuncios.toJS()
  );

export {
     listarAnunciosMapaFormSelector,
     listarAnunciosMapaSelector
  };
