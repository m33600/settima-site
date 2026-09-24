# settima-site

Homepage da **Settima Mecatrônica** — servida em `settima.com.br` pelo GitHub Pages.

A abertura é uma demonstração do painel de postos e teclado web (o mesmo usado para
sinalizar as fitas de LED de status da fábrica, repositório
[`fita-status`](https://github.com/m33600/fita-status)), mas **desligada de qualquer
fita real**: 6 postos genéricos ("Posto 1"…"Posto 6"), cada um com uma "coisa" fixa e
pública no dweet.cc (`settima-home-posto-1` … `-6`).

- `index.html` (o painel) só **lê** essas coisas a cada poucos segundos e mostra a
  lâmpada, o QR code (gerado no navegador com `qrcodegen.js`, vendorizado aqui como no
  `fita-status`) e um link para o teclado daquele posto.
- `teclado.html` é quem **escreve**: abre a partir do QR (ou do clique no cartão),
  mostra os 4 botões (Verde/Amarelo/Vermelho/Apagar) e grava a cor no dweet.cc daquele
  posto.

Não existe fita, ESP32 nem vínculo nenhum com o painel real da fábrica — só o
dweet.cc como relé entre o painel e os teclados, como pedido. Os nomes das 6 coisas
são fixos, públicos e sem segredo nenhum de propósito (ao contrário de uma fita real,
aqui não há hardware para proteger): qualquer visitante pode abrir o teclado de
qualquer posto e mudar a cor, e todo mundo com o painel aberto vê em poucos segundos.
É um brinquedo público — o pior que alguém de fora consegue fazer é deixar uma
lâmpada acesa na cor errada, e o dweet.cc apaga cada coisa sozinho depois de 24 h sem
uso.

A cena anterior (animação do painel anti-colisão do HFORT 4.0) foi guardada em
`anticolisao-grua.html`, sem link em nenhuma página — volta ao ar depois (previsto
para outubro/2026), quando ganhar controles interativos de novo.

Repositório público porque o GitHub Pages exige plano pago para servir a partir de
repositório privado. O conteúdo é institucional; não há segredo aqui.

O acervo técnico continua no Google Sites, linkado no rodapé.
