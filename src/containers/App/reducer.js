/*
 *
 * Global reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADICIONA_PROJETO_ACTION,
  EXCLUI_PROJETO_ACTION,
  ATUALIZA_PROJETO_ACTION,
  ADICIONA_OBJETO_A_PROJETO_ACTION,
  ATUALIZA_OBJETO_A_PROJETO_ACTION,
  EXCLUI_OBJETO_DE_PROJETO_ACTION,
  REHYDRATE,
} from './constants';

// TODO normalizar projetos, criando ramo objetos e guardando id
export const initialState = fromJS(
  {
    projetos: { },
    parametros: { },
    tarefas: [],
    moverServicoParametos: {
      origemDerivacao: [
        { id: '1', nome: 'Obra Literária' },
        { id: '2', nome: 'Obra Audiovisual' },
        { id: '3', nome: 'Obra Fonográfica' },
        { id: '4', nome: 'Formato de Obra Audiovisual' },
        { id: '5', nome: 'Jogos Eletrônicos' },
        { id: '6', nome: 'Outros' },
      ],
      suportesCopia: [
        { id: 1, nome: 'Película Cinematográfica com bitola de 16mm' },
        { id: 2, nome: 'Película Cinematográfica com Bitola de 35mm' },
        { id: 3, nome: 'Suporte e Sistema Digital de Alta Definição' },
      ],
      suporteCaptacao: [
        { id: '25mm', nome: '25mm' },
        { id: '16mm', nome: '16mm' },
        { id: 'super16mm', nome: 'Super 16mm' },
        { id: 'beatSp', nome: 'Beta SP' },
        { id: 'betaDigital', nome: 'Beta Digital' },
        { id: 'hd', nome: 'HD' },
        { id: 'dvcam', nome: 'Dvcam' },
        { id: 'h8', nome: 'H8' },
        { id: 'outros', nome: 'Outros' },
      ],
      componenteEquipe: [
        { id: 1, nome: 'Argumentista' },
        { id: 2, nome: 'Diretor' },
        { id: 3, nome: 'Líder do Núcleo Criativo' },
        { id: 4, nome: 'Roteirista' },
      ],
      cenariosRetorno: [
        { segmento: 'Salas de Cinema', comissaoRoyalties: 'Comissão de Distribuição', porcentagem: 0.0, indices: 'Público', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
        { segmento: 'Vídeo domético - Venda', comissaoRoyalties: 'Royalties - Produtor', porcentagem: 0.0, indices: 'Quantidade', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
        { segmento: 'Vídeo Doméstico - Locação', comissaoRoyalties: 'Royalties - Produtor', porcentagem: 0.0, indices: 'Quantidade', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
        { segmento: 'TV Fechada - PPV', comissaoRoyalties: 'Comissão de Distribuição', porcentagem: 0.0, indices: 'Receita Bruta(R$)', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
        { segmento: 'TV Aberta', comissaoRoyalties: 'Comissão de Distribuição', porcentagem: 0.0, indices: 'Receita Bruta(R$)', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
        { segmento: 'VOD - Mídias Digitais', comissaoRoyalties: 'Comissão de Distribuição', porcentagem: 0.0, indices: 'Receita Bruta(R$)', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
        { segmento: 'Internacional', comissaoRoyalties: 'Comissão de Venda', porcentagem: 0.0, indices: 'Receita Bruta(R$)', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
        { segmento: 'Licenciamento', comissaoRoyalties: 'Royalties - Produtor', porcentagem: 0.0, indices: 'Receita Bruta(R$)', cenarioPessimista: 0.0, cenarioRealista: 0.0, cenarioOtimista: 0.0 },
      ],
    },
  });


function GlobalReducer(state = initialState, action) {
  switch (action.type) {
    case ADICIONA_PROJETO_ACTION:
    case ATUALIZA_PROJETO_ACTION:
      return state.updateIn(['projetos', action.idProjeto], () => action.projeto.set('fontes', state.getIn(['parametros', 'fontes'])));
    case EXCLUI_PROJETO_ACTION:
      return state.deleteIn(['projetos', action.idProjeto]);

    case ADICIONA_OBJETO_A_PROJETO_ACTION:
      return state.updateIn(['projetos', action.idProjeto, 'objetos'], (objetos) => objetos.push(action.objeto));

    case ATUALIZA_OBJETO_A_PROJETO_ACTION:
      return state.updateIn(['projetos', action.idProjeto, 'objetos'], (objetos) =>
        objetos.map((objeto) => {
          if (objeto.get('id') === action.idObjeto) {
            return action.objeto;
          }
          return objeto;
        })
      );

    case EXCLUI_OBJETO_DE_PROJETO_ACTION:
      return state.setIn(['projetos', action.idProjeto, 'objetos'],
        state.getIn(['projetos', action.idProjeto, 'objetos']).filter((objeto) => objeto.get('id') !== action.idObjeto)
        );

    case REHYDRATE:
      if (action.payload.get('global').has('projetos')) {
        return state.set('projetos', action.payload.get('global').get('projetos'));
      }
      if (action.payload.get('global').has('parametros')) {
        return state.set('parametros', action.payload.get('global').get('parametros'));
      }
      if (action.payload.get('global').has('tarefas')) {
        return state.set('tarefas', action.payload.get('global').get('tarefas'));
      }
      return state;

    default:
      return state;
  }
}

export default GlobalReducer;
