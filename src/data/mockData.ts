export const mockUser = {
  id: 1,
  nome: "Maria Silva",
  email: "maria.silva@email.com",
  avatar: null,
  nivelAtual: 3,
  xpAtual: 840,
  xpProximoNivel: 1000,
  horasCompletadas: 68,
  horasTotais: 180,
  progressoGeral: 38,
  taxaAcerto: 78,
  simulacoesCompletas: 8,
  casosEstudados: 3,
};

export const mockModulos = [
  {
    id: 1,
    titulo: "Fundamentos Tecnológicos",
    icone: "📘",
    cor: "primary" as const,
    progresso: 75,
    horasCompletadas: 45,
    horasTotais: 60,
    aulas: [
      { id: 1, titulo: "Introdução à IA", concluida: true, duracao: "2h", atual: false, bloqueada: false },
      { id: 2, titulo: "Segurança Digital", concluida: true, duracao: "3h", atual: false, bloqueada: false },
      { id: 3, titulo: "Plataformas Digitais", concluida: false, duracao: "2.5h", atual: true, bloqueada: false },
      { id: 4, titulo: "Internet das Coisas", concluida: false, duracao: "2h", atual: false, bloqueada: true },
    ],
    desbloqueado: true,
  },
  {
    id: 2,
    titulo: "Comunicação e Pedagogia",
    icone: "👥",
    cor: "secondary" as const,
    progresso: 25,
    horasCompletadas: 20,
    horasTotais: 80,
    aulas: [
      { id: 1, titulo: "Comunicação Clara", concluida: true, duracao: "4h", atual: false, bloqueada: false },
      { id: 2, titulo: "Pedagogia de Adultos", concluida: false, duracao: "5h", atual: true, bloqueada: false },
      { id: 3, titulo: "Empatia Tecnológica", concluida: false, duracao: "3h", atual: false, bloqueada: true },
    ],
    desbloqueado: true,
  },
  {
    id: 3,
    titulo: "Prática Social e Ética",
    icone: "🏆",
    cor: "accent" as const,
    progresso: 7,
    horasCompletadas: 3,
    horasTotais: 40,
    aulas: [
      { id: 1, titulo: "Ética Digital", concluida: false, duracao: "3h", atual: false, bloqueada: true },
      { id: 2, titulo: "Inclusão Social", concluida: false, duracao: "4h", atual: false, bloqueada: true },
    ],
    desbloqueado: false,
    requisito: "Complete o Módulo 2 primeiro",
  },
];

export const mockCasosReais = [
  {
    id: 1,
    titulo: "Telemedicina para Dona Ana",
    icone: "🏥",
    tags: ["Saúde", "Idosos"],
    dificuldade: 3,
    descricao: "Dona Ana, 72 anos, precisa fazer consulta remota mas nunca usou videochamada...",
    publico: "Idosos",
    tecnologia: "Saúde",
    concluido: false,
  },
  {
    id: 2,
    titulo: "Pix para Empreendedora",
    icone: "💰",
    tags: ["Bancário", "Trabalho"],
    dificuldade: 2,
    descricao: "Ana Paula precisa receber pagamentos por Pix mas tem medo de golpes...",
    publico: "Empreendedores",
    tecnologia: "Bancário",
    concluido: true,
  },
  {
    id: 3,
    titulo: "WhatsApp para Agricultor",
    icone: "🌾",
    tags: ["Rural", "Comunicação"],
    dificuldade: 2,
    descricao: "Sr. José precisa vender produtos pelo WhatsApp mas não sabe usar...",
    publico: "Rural",
    tecnologia: "Comunicação",
    concluido: false,
  },
];

export const mockGlossario = [
  {
    id: 1,
    termo: "Machine Learning",
    icone: "🧠",
    categoria: "IA e Algoritmos",
    definicaoTecnica: "Sistema de IA que aprende padrões através da análise de grandes volumes de dados, sem programação explícita.",
    traducaoSimples: "É quando o computador aprende sozinho, observando muitos exemplos - igual uma criança que aprende o que é um cachorro vendo várias fotos diferentes.",
    analogia: "Imagine que você está ensinando uma criança a reconhecer frutas. Você mostra 100 fotos de maçãs. Depois, ela reconhece qualquer maçã nova. O computador faz igual!",
    quandoUsar: ["Explicando recomendações da Netflix", "Filtro de spam de email", "Reconhecimento facial"],
    evitar: ["Com quem nunca viu computador", "Sem explicar IA antes"],
    cuidados: "Pessoas têm medo de IA. Reforce que é ferramenta controlada por humanos!",
  },
  {
    id: 2,
    termo: "Criptografia",
    icone: "🔒",
    categoria: "Segurança Digital",
    definicaoTecnica: "Técnica de codificação de informações que torna dados ilegíveis para pessoas não autorizadas.",
    traducaoSimples: "É como escrever uma carta em código secreto que só quem tem a chave consegue ler.",
    analogia: "Pense num cofre: você pode ver o cofre, mas só quem tem a senha abre. A criptografia é a senha digital dos seus dados.",
    quandoUsar: ["Explicando segurança do Pix", "Por que senha precisa ser forte", "Privacidade no WhatsApp"],
    evitar: ["Usar palavras como 'algoritmo' junto", "Entrar em detalhes matemáticos"],
    cuidados: "Muita gente acha que 'nada é seguro'. Mostre exemplos práticos de proteção.",
  },
  {
    id: 3,
    termo: "Cloud Computing",
    icone: "☁️",
    categoria: "Infraestrutura",
    definicaoTecnica: "Modelo de computação que permite acesso remoto a recursos computacionais através da internet.",
    traducaoSimples: "É guardar suas fotos e arquivos na internet em vez de no celular, como se fosse um armário virtual que você acessa de qualquer lugar.",
    analogia: "É como ter um depósito fora de casa. Você não precisa guardar tudo em casa, pode colocar no depósito e buscar quando precisar.",
    quandoUsar: ["Google Fotos", "WhatsApp backup", "Google Drive"],
    evitar: ["Sem explicar internet antes", "Pessoas com internet limitada"],
    cuidados: "Explique que precisa internet para acessar.",
  },
];

export const mockCenarios = [
  {
    id: 1,
    titulo: "Dona Maria e o Pix",
    icone: "👵",
    publico: "Idosos",
    tecnologia: "Bancário",
    dificuldade: 2,
    status: "novo",
    contexto: `Dona Maria tem 68 anos e sempre pagou contas pessoalmente no banco. Seu filho instalou o app do banco e insiste que ela use o Pix.

Maria está com medo de:
• Apertar errado e perder dinheiro
• Cair em golpe
• Não conseguir sozinha

Seu neto tentou explicar usando "chave Pix", "QR Code"... Ela ficou mais confusa! 😰`,
    missao: `Explique para Dona Maria:

1. O que é Pix (sem jargões)
2. Como é seguro
3. Primeiros passos

Use linguagem MUITO simples e seja empático com o medo dela.`,
    dica: "Compare o Pix com algo que ela já conhece, como entregar dinheiro na mão de alguém, mas pelo celular.",
    respostaModelo: `Dona Maria, o Pix é como a senhora entregar dinheiro na mão de alguém, mas pelo celular. É tão seguro quanto ir ao banco, mas mais rápido!

O banco criou esse jeito novo porque muita gente pediu. A senhora não vai perder dinheiro, porque antes de enviar, o celular sempre pergunta: "Tem certeza?"

Vou ensinar devagarinho, e a gente vai fazer juntos, pode ser? Primeiro só vamos olhar o aplicativo, sem apertar nada. Depois, quando a senhora se sentir segura, a gente faz um Pix pequenininho, de R$ 1, pra senhora ver como funciona.

O banco também tem uma central de ajuda que a senhora pode ligar sempre que quiser. Quer anotar o número?`,
    criteriosAvaliacao: {
      linguagemSimples: 30,
      empatia: 25,
      analogias: 20,
      passoAPasso: 15,
      seguranca: 10,
    },
  },
  {
    id: 2,
    titulo: "Sr. João e a Telemedicina",
    icone: "🏥",
    publico: "Idosos",
    tecnologia: "Saúde",
    dificuldade: 3,
    status: "em_andamento",
    contexto: `Sr. João, 72 anos, mora em zona rural e precisa fazer acompanhamento pós-operatório por telemedicina. Ele nunca usou videochamada e fica nervoso com tecnologia.

O médico marcou consulta pelo Google Meet, mas João não sabe nem o que é isso. Ele tem um celular Android básico que o filho deu.`,
    missao: `Prepare Sr. João para a consulta:

1. Explique o que é telemedicina
2. Ensine a usar o Google Meet
3. Tranquilize quanto à privacidade
4. Dê dicas para o dia da consulta`,
    dica: "Lembre-se que ele está em zona rural - internet pode ser instável. Prepare um plano B.",
    respostaModelo: `Sr. João, telemedicina é como se o senhor estivesse no consultório, mas o doutor está na cidade. O senhor vai ver ele na tela do celular e ele vai ver o senhor também.

É seguro, viu? Só o senhor e o médico vão estar na conversa, igual numa consulta normal. Ninguém mais consegue ver ou ouvir.

Vou fazer o seguinte: dois dias antes da consulta, eu venho aqui e a gente treina. Vamos fazer uma videochamada de teste, pra o senhor ver como é. Aí no dia, o senhor já sabe o que vai acontecer!

No dia da consulta:
• Deixe o celular carregado
• Fique num lugar com luz boa
• Se a internet cair, eu ligo pro consultório e remarco
• Prepare suas perguntas antes

Tudo bem assim?`,
    criteriosAvaliacao: {
      clareza: 25,
      preparacao: 25,
      empatia: 20,
      planoB: 20,
      tranquilizacao: 10,
    },
  },
];

export const mockBadges = [
  { id: 1, nome: "Primeiro Login", icone: "🌟", desbloqueado: true, descricao: "Bem-vindo à TCT Academy!" },
  { id: 2, nome: "10 Simulações", icone: "🥉", desbloqueado: true, descricao: "Completou 10 simulações" },
  { id: 3, nome: "50 Termos Estudados", icone: "📚", desbloqueado: true, descricao: "Dominou 50 termos técnicos" },
  { id: 4, nome: "20 Simulações", icone: "🥈", desbloqueado: false, descricao: "Complete 20 simulações" },
  { id: 5, nome: "50 Simulações", icone: "🥇", desbloqueado: false, descricao: "Complete 50 simulações" },
  { id: 6, nome: "Módulo 1 Completo", icone: "🎯", desbloqueado: false, descricao: "Finalize o Módulo 1" },
  { id: 7, nome: "Comunicador Empático", icone: "💬", desbloqueado: true, descricao: "Pontuação alta em empatia" },
  { id: 8, nome: "Tradutor Estrela", icone: "⭐", desbloqueado: false, descricao: "Nota 90+ em 10 simulações" },
  { id: 9, nome: "Certificado Final", icone: "🏆", desbloqueado: false, descricao: "Complete toda a formação" },
];

export const mockEventos = [
  {
    id: 1,
    titulo: "Webinar: Ensinando Pix para Idosos",
    data: "18/10",
    hora: "19h",
    tipo: "webinar",
  },
  {
    id: 2,
    titulo: "Prazo: Caso Real #3",
    data: "20/10",
    tipo: "prazo",
  },
];
