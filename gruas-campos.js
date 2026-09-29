// Vocabulário do painel de fabricação: as 5 linhas de cada unidade (grua em construção)
// e o que o teclado oferece. Compartilhado por dweet-local-gruas.html (painel) e
// dweet-local-gruas-teclado.html. Os ids são o contrato com a futura API do ERP:
// hoje o texto digitado sobe para o dweet-local; depois o ERP passa a consumir os mesmos campos.
//   tipo 'opcoes' = botões de texto pronto; tipo 'texto' = campo livre (max = caracteres).
//   cores = valor -> cor (verde|amarelo|vermelho) mostrada como marcador ao lado do texto; o texto
//   continua sendo a informação principal. Quem não está na lista fica sem cor (é o normal).
//   Status inspirados no ciclo de vida de ordens do ISA-95 (a norma não define cores; as cores
//   são escolha nossa). O MOTIVO de uma espera vai na NOTA.
window.GRUAS = {
  API: 'https://dweet.settima.com.br',
  TOTAL: 30,
  // títulos dos cartões (campos n1..n30) ficam nesta coisa, TRANCADA no servidor: todos leem,
  // só quem entra com a senha grava. Título vazio = padrão "GRUA nn".
  CONFIG: 'settima-dweetlocal-gruas-config',
  TITULO_MAX: 24,
  coisa: (n) => `settima-dweetlocal-grua-${n}`,
  CAMPOS: [
    { id: 'etapa', rotulo: 'ETAPA', tipo: 'opcoes',
      opcoes: ['CORTE', 'USINAGEM', 'SOLDA', 'PINTURA', 'MONTAGEM', 'ELÉTRICA', 'TESTE', 'EXPEDIÇÃO'] },
    { id: 'situacao', rotulo: 'SITUAÇÃO', tipo: 'opcoes',
      opcoes: ['PLANEJADA', 'LIBERADA', 'EM EXECUÇÃO', 'EM ESPERA', 'CONCLUÍDA', 'CANCELADA'],
      cores: { 'EM ESPERA': 'amarelo', 'CONCLUÍDA': 'verde', 'CANCELADA': 'vermelho' } },
    { id: 'op', rotulo: 'OP', tipo: 'texto', max: 16, dica: 'nº da ordem / pedido' },
    { id: 'operador', rotulo: 'OPERADOR', tipo: 'texto', max: 16, dica: 'quem está na peça' },
    { id: 'nota', rotulo: 'NOTA', tipo: 'texto', max: 28, dica: 'motivo da espera / recado' },
  ],
};
