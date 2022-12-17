function selecionarPrato(prato) {
  let pratoSelecionado = document.querySelector(".pratos .escolhido");

  if (!!pratoSelecionado) {
    pratoSelecionado.classList.remove("escolhido");
  }

  prato.classList.add("escolhido");
  verificarSelecao();
}

function selecionarBebidas(bebida) {
  let bebidaSelecionada = document.querySelector(".bebidas .escolhido");

  if (!!bebidaSelecionada) {
    bebidaSelecionada.classList.remove("escolhido");
  }

  bebida.classList.add("escolhido");
  verificarSelecao();
}

function selecionarSobremesas(sobremesa) {
  let sobremesaSelecionada = document.querySelector(".sobremesas .escolhido");

  if (!!sobremesaSelecionada) {
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
  let pratoSelecionado = document.querySelector(".pratos .escolhido");
  let bebidaSelecionada = document.querySelector(".bebidas .escolhido");
  let sobremesaSelecionada = document.querySelector(".sobremesas .escolhido");

  let nomePratoSelecionado =
    pratoSelecionado.querySelector(".nome-item").innerHTML;
  let nomeBebidaSelecionada =
    bebidaSelecionada.querySelector(".nome-item").innerHTML;
  let nomeSobremesaSelecionada =
    sobremesaSelecionada.querySelector(".nome-item").innerHTML;

  let precoPratoSelecionado = pratoSelecionado
    .querySelector(".valor")
    .innerHTML.replace("R$", "")
    .replace(",", ".");
  let precoBebidaSelecionada = bebidaSelecionada
    .querySelector(".valor")
    .innerHTML.replace("R$", "")
    .replace(",", ".");
  let precoSobremesaSelecionada = sobremesaSelecionada
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
      encodeURIComponent(`Olá, gostaria de fazer o pedido:
        - Prato: ${nomePratoSelecionado}
        - Bebida: ${nomeBebidaSelecionada}
        - Sobremesa: ${nomeSobremesaSelecionada}
        Total: R$ ${precoTotal}`)
  );
}
