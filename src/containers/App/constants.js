/*
 *
 * App constants
 *
 */

export const DEFAULT_LOCALE = 'en';

export const BUSCA_PROJETOS_ACTION = 'app/BUSCA_PROJETOS_ACTION';
export const BUSCA_PARAMETROS_ACTION = 'app/BUSCA_PARAMETROS_ACTION';
export const BUSCA_FONTES_FINANCIAMENTO_ACTION = 'app/BUSCA_FONTES_FINANCIAMENTO_ACTION';
export const CRITICA_FONTES_FINANCIAMENTO_ACTION = 'app/CRITICA_FONTES_FINANCIAMENTO_ACTION';

export const ENVIA_SOLICITACAO_ACTION = 'app/ENVIA_SOLICITACAO_ACTION';
export const ADICIONA_PROJETO_ACTION = 'app/ADICIONA_PROJETO_ACTION';
export const EXCLUI_PROJETO_ACTION = 'app/EXCLUI_PROJETO_ACTION';
export const ATUALIZA_PROJETO_ACTION = 'app/ATUALIZA_PROJETO_ACTION';
export const ADICIONA_OBJETO_A_PROJETO_ACTION = 'app/ADICIONA_OBJETO_A_PROJETO_ACTION';
export const ATUALIZA_OBJETO_A_PROJETO_ACTION = 'app/ATUALIZA_OBJETO_A_PROJETO_ACTION';
export const EXCLUI_OBJETO_DE_PROJETO_ACTION = 'app/EXCLUI_OBJETO_DE_PROJETO_ACTION';
export const SUBMETE_OBJETO_PROJETO_ACTION = 'app/SUBMETE_OBJETO_PROJETO_ACTION';
export const CONCLUI_TAREFA_ACTION = 'app/CONCLUI_TAREFA_ACTION';
export const REHYDRATE = 'app/REHYDRATE';
export const INICIALIZA = 'app/INICIALIZA';
export const PERSISTE = 'app/PERSISTE';


const HOST = window.location.port !== '8080' ? 'localhost:8080' : window.location.host;
export const API_SERVER = `http://${HOST}`;
export const API_ROOT = `${API_SERVER}/sin-web-api/rest`;
export const API_PERSISTE_PROJETOS_URL = `${API_ROOT}/hash`;
export const API_BUSCA_PARAMENTROS_URL = `${API_ROOT}/tabelasAuxiliares/consulta`;
export const API_TAREFAS_URL = `${API_ROOT}/tarefas`;
export const API_ENVIA_SOLICITACAO_URL = `${API_ROOT}/solicitacoes`;
export const API_REGRAS_URL = `${API_SERVER}/sin-web-api/rest/rules`;
export const API_BUSCA_FONTES_FINANCIAMENTO = `${API_REGRAS_URL}/recuperar-fontes-financiamento`;
export const API_CRITICA_FONTES_FINANCIAMENTO = `${API_REGRAS_URL}/criticar-valores-fontes-financiamento`;

export const RULE_VALIDAR_PROJETO_MINIMO = 'validar-projeto-minimo';
