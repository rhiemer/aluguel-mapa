import {createSelector} from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { GEOLOCALIZACAO_FORM_MAPA,
         FIELD_FORM_GEOLOCALIZACAO_MAPA,
         FIELD_ALTERAR_LOCALIDADE_FILTRO,
         FIELD_CENTER_MAPA,
         FIELD_KEY_MAPA,
         FIELD_SHOW_BALLON_MAPA,
         FIELD_HOVERED_MAP_ROWINDEX,
         FIELD_HOVER_MAKER_INDEX
        } from './constants';

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

const alterarCenterMapaFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_CENTER_MAPA);
const alterarCenterMapaSelector = createSelector(
      alterarCenterMapaFormSelector,
      (center) => center && center.toJS()
);

const alterarKeyMapaFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_KEY_MAPA);
const alterarKeyMapaSelector = createSelector(
      alterarKeyMapaFormSelector,
      (key) => key
);

const showBallonMapaFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_SHOW_BALLON_MAPA);
const showBallonMapaSelector = createSelector(
      showBallonMapaFormSelector,
      (openBalloonIndex) => openBalloonIndex
); 

const hoveredMapRowIndexFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_HOVERED_MAP_ROWINDEX);
const hoveredMapRowIndexSelector = createSelector(
      hoveredMapRowIndexFormSelector,
      (hoveredMapRowIndex) => hoveredMapRowIndex
);

const hoverMarkerIndexFormSelector = (state) => formValueSelector(GEOLOCALIZACAO_FORM_MAPA)(state,FIELD_HOVER_MAKER_INDEX);
const hoverMarkerIndexSelector = createSelector(
      hoverMarkerIndexFormSelector,
      (hoverMarkerIndex) => hoverMarkerIndex
);

export {
     listarAnunciosMapaFormSelector,
     listarAnunciosMapaSelector,
     alterarLocalidadeMapaFiltroFormSelector,
     alterarLocalidadeMapaFiltroSelector,
     alterarCenterMapaFormSelector,
     alterarCenterMapaSelector,
     alterarKeyMapaFormSelector,
     alterarKeyMapaSelector,
     showBallonMapaFormSelector,
     showBallonMapaSelector,
     hoveredMapRowIndexFormSelector,
     hoveredMapRowIndexSelector,
     hoverMarkerIndexFormSelector,
     hoverMarkerIndexSelector         
  };
