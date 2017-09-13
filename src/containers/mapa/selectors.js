import {createSelector} from 'reselect';
import { formValueSelector } from 'redux-form/immutable';
import { SELECTOR_GLOBAL_MAPA,         
         SELECTOR_LOCALIDADE_FILTRO
        } from './constants';

const selectGlobalMapa = (state) => state.get(SELECTOR_GLOBAL_MAPA);
const selectLocalidadeFiltro = (state) => state.getIn([SELECTOR_GLOBAL_MAPA,SELECTOR_LOCALIDADE_FILTRO]);

export {
    selectGlobalMapa,
    selectLocalidadeFiltro
  };

