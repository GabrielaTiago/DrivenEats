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

function formatarPreco(valor) {
  let preco = valor
    .querySelector(".valor")
    .innerHTML.replace("R$", "")
    .replace(",", ".");

  preco = (Number(preco) * 100) / 100;

  return preco;
}

function fechandoPedido() {
  let pedido = {};
  let pratoSelecionado = document.querySelector(".pratos .escolhido");
  let bebidaSelecionada = document.querySelector(".bebidas .escolhido");
  let sobremesaSelecionada = document.querySelector(".sobremesas .escolhido");

  const nomePrato = pratoSelecionado.querySelector(".nome-item").innerHTML;
  const nomeBebida = bebidaSelecionada.querySelector(".nome-item").innerHTML;
  const nomeSobremesa =
    sobremesaSelecionada.querySelector(".nome-item").innerHTML;

  const precoPrato = formatarPreco(pratoSelecionado);
  const precoBebida = formatarPreco(bebidaSelecionada);
  const precoSobremesa = formatarPreco(sobremesaSelecionada);

  const precoTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);

  pedido = {
    nomePrato,
    nomeBebida,
    nomeSobremesa,
    precoPrato,
    precoBebida,
    precoSobremesa,
    precoTotal,
  };

  return pedido;
}

function confirmaPedido() {
  document
    .querySelector(".tela-de-confirmacao")
    .classList.remove("nenhuma-selecao");

  monstraItensDoPedido();
}

function monstraItensDoPedido() {
  const {
    nomePrato,
    nomeBebida,
    nomeSobremesa,
    precoPrato,
    precoBebida,
    precoSobremesa,
    precoTotal,
  } = fechandoPedido();

  const itensDoPedido = document.querySelector(".itens-confirmacao");
  itensDoPedido.innerHTML = `
    <li class="item">
      <h6 class="nome">${nomePrato}</h6>
      <h6 class="preco">${precoPrato.toFixed(2)}</h6>
    </li>
    <li class="item">
    <h6 class="nome">${nomeBebida}</h6>
    <h6 class="preco">${precoBebida.toFixed(2)}</h6>
    </li>
    <li class="item">
    <h6 class="nome">${nomeSobremesa}</h6>
    <h6 class="preco">${precoSobremesa.toFixed(2)}</h6>
    </li>
    <li class="item total">
      <h5 class="total-texto">TOTAL</h5>
      <h5 class="total-valor">R$ ${precoTotal}</h5>
    </li>
  `;
}

function enviaPedido() {
  const { nomePrato, nomeBebida, nomeSobremesa, precoTotal } = fechandoPedido();

  const mensagemDoPedido = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${nomePrato} \n
    - Bebida: ${nomeBebida} \n
    - Sobremesa: ${nomeSobremesa} \n
    Total: R$ ${precoTotal}`;

  const linkWhatsApp = `https://wa.me/5562991769161?text=${encodeURIComponent(
    mensagemDoPedido
  )}`;

  window.open(linkWhatsApp);
}

function cancelaPedido() {
  document
    .querySelector(".tela-de-confirmacao")
    .classList.add("nenhuma-selecao");

  let itensEscolhidos = document.querySelectorAll(".escolhido");

  itensEscolhidos.forEach(item => {
    item.classList.remove("escolhido");
  });
}
