function ativaLetra(elemento) {
  const arrTexto = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  arrTexto.forEach((letra, i) => {
    setTimeout(() => {
      elemento.innerHTML += letra;
    }, 75 * i);
  });
}

const titulo = document.querySelector(".digitando");
ativaLetra(titulo);

function insert(num) {
  let numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function clean() {
  document.getElementById("resultado").innerHTML = "";
}

function back() {
  let result = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = result.substring(
    0,
    result.length - 1
  );
}

function calcular() {
  let resultado = document.getElementById("resultado").innerHTML;
  if (resultado) {
    document.getElementById("resultado").innerHTML = eval(resultado);
  } else {
    /* document.getElementById("resultado").innerHTML =*/ clean();
  }
}

var startServices = document.querySelector(".fundo");
var calculadora = document.querySelector(".calculadora");
var isCalculadoraVisivel = false;

startServices.addEventListener("click", function () {
  if (isCalculadoraVisivel) {
    calculadora.style.display = "none";
    isCalculadoraVisivel = false;
  } else {
    calculadora.style.display = "block";
    isCalculadoraVisivel = true;
  }
});

function ativacaoMenu() {
  const ativaMenu = document.querySelector(".fa-bars");
  const navMenu = document.querySelector("header .navegacao-primaria");

  ativaMenu.addEventListener("click", () => {
    ativaMenu.classList.toggle("fa-x");
    navMenu.classList.toggle("ativado");
  });
}

ativacaoMenu();

function sobreMim() {
  const experiencia = document.querySelectorAll(".experience_content div");
  const botao = document.querySelectorAll(".experience_content ul li");
  const education = document.querySelectorAll(".education_content div");
  const botaoEducation = document.querySelectorAll(".education_content ul li");

  experiencia[0].classList.add("ativo");
  botao[0].classList.add("ativo");
  education[0].classList.add("ativo");
  botaoEducation[0].classList.add("ativo");

  function slideShow(index) {
    experiencia.forEach((divisao) => {
      divisao.classList.remove("ativo");
    });
    botao.forEach((item) => {
      item.classList.remove("ativo");
    });
    experiencia[index].classList.add("ativo");
    botao[index].classList.add("ativo");
  }

  function slideShow2(index) {
    education.forEach((divisao) => {
      divisao.classList.remove("ativo");
    });
    botaoEducation.forEach((item) => {
      item.classList.remove("ativo");
    });
    education[index].classList.add("ativo");
    botaoEducation[index].classList.add("ativo");
  }

  botao.forEach((event, index) => {
    event.addEventListener("click", () => {
      slideShow(index);
    });
  });

  botaoEducation.forEach((div, index) => {
    div.addEventListener("click", () => {
      slideShow2(index);
    });
  });
}
sobreMim();

const listaALL = document.querySelectorAll(".projects_armazenamento ul li");
const buttonGeral = document.querySelectorAll(".project_navegacao li");
const buttonALL = document.querySelector(".project_models .all");

listaALL.forEach((item) => {
  item.classList.add("ativo");
});

function removeClick(index) {
  buttonGeral.forEach((item) => {
    item.classList.remove("ativo");
  });
  buttonGeral[index].classList.add("ativo");
}

buttonGeral.forEach((event, index) => {
  event.addEventListener("click", () => {
    removeClick(index);
  });
});

function showLista(lista, buttom = "all") {
  lista.forEach((item) => {
    item.classList.remove("ativo");
  });

  if (buttom == "design") {
    lista[0].classList.add("ativo");
    lista[1].classList.add("ativo");
  }
  if (buttom == "graphic") {
    lista[2].classList.add("ativo");
    lista[3].classList.add("ativo");
  }

  if (buttom == "website") {
    lista[4].classList.add("ativo");
    lista[5].classList.add("ativo");
    lista[6].classList.add("ativo");
    lista[7].classList.add("ativo");
  }

  if (buttom == "all") {
    lista[0].classList.add("ativo");
    lista[1].classList.add("ativo");
    lista[2].classList.add("ativo");
    lista[3].classList.add("ativo");
    lista[4].classList.add("ativo");
    lista[5].classList.add("ativo");
    lista[6].classList.add("ativo");
    lista[7].classList.add("ativo");
  }
}

buttonGeral.forEach((item) => {
  item.addEventListener("click", (e) => {
    let currentButton = e.target;
    if (currentButton.classList.contains("all")) {
      showLista(listaALL);
    }
    if (currentButton.classList.contains("design")) {
      showLista(listaALL, "design");
    }

    if (currentButton.classList.contains("graphic")) {
      showLista(listaALL, "graphic");
    }

    if (currentButton.classList.contains("website")) {
      showLista(listaALL, "website");
    }

    if (currentButton.classList.contains("all")) {
      showLista(listaALL, "all");
    }
  });
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// Seletor dos links no topo
const linksTopo = document.querySelectorAll(".link-topo");

// Função para lidar com o clique nos links
function lidarComClique(event) {
  event.preventDefault(); // Evitar comportamento padrão do clique

  // Obter o destino do link
  const destino = this.getAttribute("href");

  // Verificar se o destino existe
  if (destino) {
    // Obter a posição do destino na página
    const posicaoDestino = document.querySelector(destino).offsetTop;

    // Rolagem suave para o destino
    window.scrollTo({
      top: posicaoDestino,
      behavior: "smooth",
    });
  }
}

// Adicionar o ouvinte de clique para cada link
linksTopo.forEach((link) => {
  link.addEventListener("click", lidarComClique);
});
