function selecionarPrato(prato) {
  let pratoSelecionado = document.querySelector(
    ".itens-rolagem-pratos .escolhido"
  );

  if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("escolhido");
  }
  prato.classList.add("escolhido");
  verificarSelecao();
}

function selecionarBebidas(bebida) {
  let bebidaSelecionada = document.querySelector(
    ".itens-rolagem-bebidas .escolhido"
  );

  if (bebidaSelecionada !== null) {
    bebidaSelecionada.classList.remove("escolhido");
  }
  bebida.classList.add("escolhido");
  verificarSelecao();
}

function selecionarSobremesas(sobremesa) {
  let sobremesaSelecionada = document.querySelector(
    ".itens-rolagem-sobremesas .escolhido"
  );

  if (sobremesaSelecionada !== null) {
    sobremesaSelecionada.classList.remove("escolhido");
  }
  sobremesa.classList.add("escolhido");
  verificarSelecao();
}

function verificarSelecao() {
  const verifica = document.querySelectorAll(".escolhido").length;
  const footer = document.querySelector("footer");

  if (verifica === 3) {
    footer.firstElementChild.classList.add("escondido");
    footer.lastElementChild.classList.remove("escondido");
  }
}

function fechandoPedido() {
  let localPratoSelecionado = document.querySelector(
    ".itens-rolagem-pratos .escolhido"
  );
  let localBebidaSelecionada = document.querySelector(
    ".itens-rolagem-bebidas .escolhido"
  );
  let localSobremesaSelecionada = document.querySelector(
    ".itens-rolagem-sobremesas .escolhido"
  );

  let nomePratoSelecionado =
    localPratoSelecionado.querySelector(".nome-item").innerHTML;
  let nomeBebidaSelecionada =
    localBebidaSelecionada.querySelector(".nome-item").innerHTML;
  let nomeSobremesaSelecionada =
    localSobremesaSelecionada.querySelector(".nome-item").innerHTML;

  let precoPratoSelecionado = localPratoSelecionado
    .querySelector(".valor")
    .innerHTML.replace("R$", "")
    .replace(",", ".");
  let precoBebidaSelecionada = localBebidaSelecionada
    .querySelector(".valor")
    .innerHTML.replace("R$", "")
    .replace(",", ".");
  let precoSobremesaSelecionada = localSobremesaSelecionada
    .querySelector(".valor")
    .innerHTML.replace("R$", "")
    .replace(",", ".");

  let precoTotal = (
    Number(precoPratoSelecionado) +
    Number(precoBebidaSelecionada) +
    Number(precoSobremesaSelecionada)
  ).toFixed(2);

  window.open(
    "https://wa.me/5562991769161?text=" +
      encodeURIComponent(
        `Olá, gostaria de fazer o pedido:
            - Prato: ${nomePratoSelecionado}
            - Bebida: ${nomeBebidaSelecionada}
            - Sobremesa: ${nomeSobremesaSelecionada}
        Total: R$ ${precoTotal}`
      )
  );
}
