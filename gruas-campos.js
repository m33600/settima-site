// Vocabulário do painel de fabricação: as 5 linhas de cada unidade (grua em construção)
// e o que o teclado oferece. Compartilhado por dweet-local-gruas.html (painel) e
// dweet-local-gruas-teclado.html. Os ids são o contrato com a futura API do ERP:
// hoje o texto digitado sobe para o dweet-local; depois o ERP passa a consumir os mesmos campos.
//   tipo 'opcoes' = botões de texto pronto; tipo 'texto' = campo livre (max = caracteres).
//   alerta = valores que ganham vídeo inverso no painel (destaque por tipografia, não por cor).
window.GRUAS = {
  API: 'https://dweet.settima.com.br',
  TOTAL: 30,
  coisa: (n) => `settima-dweetlocal-grua-${n}`,
  CAMPOS: [
    { id: 'etapa', rotulo: 'ETAPA', tipo: 'opcoes',
      opcoes: ['CORTE', 'USINAGEM', 'SOLDA', 'PINTURA', 'MONTAGEM', 'ELÉTRICA', 'TESTE', 'EXPEDIÇÃO'] },
    { id: 'situacao', rotulo: 'SITUAÇÃO', tipo: 'opcoes',
      opcoes: ['EM ANDAMENTO', 'AGUARD. MATERIAL', 'PARADA', 'RETRABALHO', 'CONCLUÍDA'],
      alerta: ['AGUARD. MATERIAL', 'PARADA', 'RETRABALHO'] },
    { id: 'op', rotulo: 'OP', tipo: 'texto', max: 16, dica: 'nº da ordem / pedido' },
    { id: 'operador', rotulo: 'OPERADOR', tipo: 'texto', max: 16, dica: 'quem está na peça' },
    { id: 'nota', rotulo: 'NOTA', tipo: 'texto', max: 28, dica: 'recado curto p/ o ERP' },
  ],
};
