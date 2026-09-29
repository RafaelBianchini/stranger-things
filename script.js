// ====== IDENTIDADE DO GRUPO: troquem aqui ======
const GRUPO = {
    nome: "Os Demogorgons",
    turma: "3B",
    integrantes: ["Rafael", "Maria B", "Alexandre", "Paolla"]
  };
  
  // ====== DADOS (personagens inventados, no universo de Stranger Things) ======
  const NOMES = ["Denise", "Bobby", "Kelly", "Hank", "Tina", "Walt", "Lucy", "Danny", "Rita", "Otis"];
  const SOBRENOMES = ["Harper", "Lowell", "Brennan", "Cooper", "Mills", "Reyes", "Callahan", "Pierce"];
  
  // Cada profissão tem faixa de idade, para o personagem fazer sentido
  const PAPEIS = [
    { t: "Aluno do clube de ciências", min: 12, max: 16 },
    { t: "Jogador de RPG do clube de fantasia", min: 13, max: 18 },
    { t: "Atendente da locadora de vídeo", min: 16, max: 24 },
    { t: "Salva-vidas da piscina municipal", min: 17, max: 25 },
    { t: "Xerife substituto", min: 25, max: 50 },
    { t: "Cientista do laboratório", min: 30, max: 60 },
    { t: "Radialista amador", min: 20, max: 45 },
    { t: "Entregador de jornais", min: 12, max: 17 }
  ];
  
  const LOCAIS = ["Centro de Hawkins", "Subúrbio de Hawkins", "Fazenda nos arredores", "Shopping Starcourt", "Perto da floresta", "Ao lado do laboratório"];
  const TRACOS = ["Leal", "Curioso", "Corajoso", "Sarcástico", "Estrategista", "Generoso", "Teimoso"];
  const DEFEITOS = ["Orgulhoso", "Impulsivo", "Desconfiado", "Distraído", "Ciumento", "Mentiroso compulsivo"];
  const HABILIDADES = ["Improvisa sob pressão", "Lê pessoas com facilidade", "Conserta rádios e walkie-talkies", "Faz qualquer um rir", "Resolve enigmas", "Nunca se perde na floresta"];
  const SEGREDOS = ["Escondeu um mapa da floresta", "Guarda um walkie-talkie que ninguém deveria ouvir", "Tem poderes que ainda não entende", "Já viu luzes estranhas no céu", "Mantém um diário de coisas que desaparecem"];
  const INVERTIDOS = [
    "Coberto de esporos, vaga por uma Hawkins escura e silenciosa.",
    "Perdeu a voz, mas ouve tudo o que o monstro sussurra.",
    "Virou guia dos que se perdem entre as árvores de raízes vivas.",
    "Ficou preso numa versão congelada da própria casa.",
    "Consegue abrir pequenas fendas entre os dois mundos."
  ];
  const ATRIBUTOS = ["Coragem", "Inteligência", "Carisma", "Sorte"];
  
  // Opções do avatar
  const PELES = ["#f5d0b0", "#e0ac82", "#b97a56", "#8a5a3c", "#5e3a24"];
  const CABELOS = ["#2b1b12", "#5a3b22", "#c9a04a", "#a63a1e", "#1a1a1a", "#8a8a8a"];
  const CAMISAS = ["#d7263d", "#2e86de", "#f2c230", "#3cb371", "#8e44ad", "#f0f0f0"];
  const BOCAS = ["M48 92 Q60 102 72 92", "M50 95 L70 95", "M48 96 Q60 88 72 96"];
  
  // ====== FUNÇÕES DE SORTEIO (mesma ideia do gerador de senhas) ======
  function sortear(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
  }
  function numero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function gerarSenha(tamanho, comSimbolos) {
    let caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (comSimbolos) caracteres += "!@#$%&*?";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
      senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }
    return senha;
  }
  
  // ====== AVATAR (desenhado em SVG com sorteio) ======
  function gerarAvatar() {
    const pele = sortear(PELES);
    const cabelo = sortear(CABELOS);
    const camisa = sortear(CAMISAS);
    const estilo = sortear(["curto", "longo", "cacheado", "careca"]);
    const acessorio = sortear(["nenhum", "oculos", "bandana", "bone"]);
  
    let atras = "";
    let frente = "";
    if (estilo === "longo") {
      atras = `<rect x="30" y="40" width="60" height="70" rx="24" fill="${cabelo}"/>`;
    }
    if (estilo === "curto" || estilo === "longo") {
      frente = `<path d="M32 62 Q32 28 60 28 Q88 28 88 62 Q76 44 60 44 Q44 44 32 62Z" fill="${cabelo}"/>`;
    }
    if (estilo === "cacheado") {
      frente = `<g fill="${cabelo}"><circle cx="38" cy="46" r="13"/><circle cx="52" cy="36" r="14"/><circle cx="68" cy="36" r="14"/><circle cx="82" cy="46" r="13"/></g>`;
    }
  
    let extra = "";
    if (acessorio === "oculos") {
      extra = `<g fill="none" stroke="#222" stroke-width="2"><circle cx="50" cy="66" r="8"/><circle cx="70" cy="66" r="8"/><line x1="58" y1="66" x2="62" y2="66"/></g>`;
    }
    if (acessorio === "bandana") {
      extra = `<rect x="32" y="46" width="56" height="8" rx="3" fill="#d7263d"/>`;
    }
    if (acessorio === "bone") {
      extra = `<path d="M32 52 Q60 18 88 52Z" fill="#2e86de"/><rect x="26" y="50" width="42" height="6" rx="3" fill="#2e86de"/>`;
    }
  
    return `<svg viewBox="0 0 120 140" role="img" aria-label="Avatar do personagem">
      <rect width="120" height="140" rx="12" fill="var(--linha)"/>
      ${atras}
      <path d="M20 140 Q20 106 60 106 Q100 106 100 140Z" fill="${camisa}"/>
      <rect x="52" y="88" width="16" height="22" fill="${pele}"/>
      <circle cx="60" cy="65" r="28" fill="${pele}"/>
      <circle cx="50" cy="66" r="3" fill="#222"/>
      <circle cx="70" cy="66" r="3" fill="#222"/>
      <path d="${sortear(BOCAS)}" fill="none" stroke="#222" stroke-width="2.5" stroke-linecap="round"/>
      ${frente}
      ${extra}
    </svg>`;
  }
  
  // ====== TELA ======
  const $ = (id) => document.getElementById(id);
  
  $("grupo").textContent = GRUPO.nome + " - " + GRUPO.turma;
  $("rodape").textContent = "Feito por " + GRUPO.integrantes.join(", ") + ".";
  
  function gerarPersonagem() {
    const papel = sortear(PAPEIS);
    const barras = ATRIBUTOS.map((nome) => {
      const v = numero(3, 10);
      return `<div class="barra"><span>${nome}</span><i style="--v:${v}"></i><b>${v}</b></div>`;
    }).join("");
  
    $("ficha").innerHTML = `
      <div class="avatar">${gerarAvatar()}</div>
      <h2>${sortear(NOMES)} ${sortear(SOBRENOMES)}</h2>
      <p class="sub">${numero(papel.min, papel.max)} anos, Hawkins, Indiana, 1984</p>
      <dl>
        <dt>Profissão</dt><dd>${papel.t}</dd>
        <dt>Onde vive</dt><dd>${sortear(LOCAIS)}</dd>
        <dt>Traço</dt><dd>${sortear(TRACOS)}</dd>
        <dt>Defeito</dt><dd>${sortear(DEFEITOS)}</dd>
        <dt>Habilidade</dt><dd>${sortear(HABILIDADES)}</dd>
        <dt>Segredo</dt><dd>${sortear(SEGREDOS)}</dd>
      </dl>
      ${barras}
      <div class="invertido">
        <h3>No Mundo Invertido</h3>
        <p>${sortear(INVERTIDOS)}</p>
      </div>`;
  
    $("senhaBox").hidden = false;
    atualizarSenha();
  }
  
  function atualizarSenha() {
    $("tam").textContent = $("tamanho").value;
    $("senha").textContent = gerarSenha(Number($("tamanho").value), $("simbolos").checked);
  }
  
  function alternarMundo() {
    const invertido = document.body.dataset.mundo !== "invertido";
    document.body.dataset.mundo = invertido ? "invertido" : "real";
    $("mundo").setAttribute("aria-pressed", invertido);
    $("mundo").textContent = invertido ? "Voltar para o mundo real" : "Entrar no Mundo Invertido";
  }
  
  $("gerar").addEventListener("click", gerarPersonagem);
  $("mundo").addEventListener("click", alternarMundo);
  $("novaSenha").addEventListener("click", atualizarSenha);
  $("tamanho").addEventListener("input", atualizarSenha);
  $("simbolos").addEventListener("change", atualizarSenha);
  $("copiar").addEventListener("click", () => {
    navigator.clipboard.writeText($("senha").textContent);
    $("copiar").textContent = "Senha copiada";
    setTimeout(() => ($("copiar").textContent = "Copiar senha"), 1500);
  });