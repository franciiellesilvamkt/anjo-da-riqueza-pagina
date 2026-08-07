import { Affirmation, DayProgram, FormulaStep } from '../types';

export const AFFIRMATIONS_DATA: Affirmation[] = [
  {
    id: 'm1',
    title: 'Ancoragem Matinal da Abundância',
    period: 'morning',
    focus: 'Despertar a frequência da riqueza ao acordar',
    text: 'Eu me levanto hoje sabendo que o universo é abundante e que novas oportunidades de gerar R$ 1.000 por semana fluem livremente em minha direção. Minha mente está desperta, clara e alinhada com a prosperidade divina.',
    audioDuration: '4:15 min',
    freq: '528 Hz - Frequência dos Milagres'
  },
  {
    id: 'm2',
    title: 'Abertura para o Fluxo do Dinheiro',
    period: 'morning',
    focus: 'Eliminar a rigidez financeira matinal',
    text: 'Eu recebo o dinheiro com gratidão e sem culpa. O dinheiro é uma energia sagrada de troca que amplia meu bem-estar e o da minha família. Hoje eu sou um ímã irresistível para ganhos honestos e abundantes.',
    audioDuration: '3:50 min',
    freq: '528 Hz - Frequência dos Milagres'
  },
  {
    id: 'd1',
    title: 'Escudo contra a Escassez no Trabalho',
    period: 'day',
    focus: 'Manter a vibração elevada em decisões diárias',
    text: 'Diante de qualquer boleto ou desafio financeiro, eu permaneço em paz. Minha mente enxerga soluções onde outros vêm obstáculos. Cada ação que realizo hoje multiplica minha renda e fortalece minha liberdade.',
    audioDuration: '5:00 min',
    freq: '432 Hz - Sintonia Cósmica'
  },
  {
    id: 'd2',
    title: 'Ativação do Projeto de R$ 1.000/semana',
    period: 'day',
    focus: 'Clareza de ação e decisões prontas',
    text: 'Eu mereço ser remunerado com generosidade pelos meus talentos. O valor de R$ 1.000 por semana é apenas o começo da minha nova realidade financeira. Eu decido, executo e colho com confiança.',
    audioDuration: '4:30 min',
    freq: '432 Hz - Sintonia Cósmica'
  },
  {
    id: 'n1',
    title: 'Programação do Subconsciente Noturno',
    period: 'night',
    focus: 'Limpeza de crenças limitantes durante o sono',
    text: 'Enquanto meu corpo repousa, meu subconsciente reorganiza minhas crenças para a riqueza. Eu libero toda ansiedade e medo do amanhã. Eu durmo em paz e acordo em prosperidade.',
    audioDuration: '6:20 min',
    freq: '639 Hz - Harmonia e Conexão'
  },
  {
    id: 'n2',
    title: 'Selo de Gratidão do Anjo da Riqueza',
    period: 'night',
    focus: 'Fixação dos resultados do dia',
    text: 'Agradeço por todas as bençãos financeiras que já recebi e pelas que estão a caminho. O Anjo da Riqueza guarda minha mente e multiplica minhas fontes de receita.',
    audioDuration: '5:10 min',
    freq: '639 Hz - Harmonia e Conexão'
  }
];

export const INITIAL_21_DAYS: DayProgram[] = [
  {
    day: 1,
    title: 'Quebrando o Gelo da Escassez',
    focus: 'Reconhecer e listar seus pensamentos automáticos sobre dinheiro.',
    affirmation: 'Eu reconheço minhas antigas travas financeiras e as desligo com amor.',
    exercise: 'Anote em um papel 3 frases negativas que você costuma dizer sobre dinheiro e jogue fora.',
    completed: false,
    unlocked: true
  },
  {
    day: 2,
    title: 'O Anjo da Riqueza Desperta',
    focus: 'Introduzir a vibração da gratidão adiantada.',
    affirmation: 'Eu agradeço antecipadamente pelos R$ 1.000 que manifestarei esta semana.',
    exercise: 'Ouça o áudio matinal de 528Hz por 4 minutos sem interrupções.',
    completed: false,
    unlocked: false
  },
  {
    day: 3,
    title: 'Desarmando a Culpa do Dinheiro',
    focus: 'Entender que querer dinheiro é um direito divino e ético.',
    affirmation: 'Ter dinheiro me permite ajudar mais pessoas e viver com dignidade.',
    exercise: 'Repita 7 vezes em voz alta: "É seguro e abençoado ser próspero(a)".',
    completed: false,
    unlocked: false
  },
  {
    day: 4,
    title: 'Limpando o Filtro das Oportunidades',
    focus: 'Perceber fontes de renda escondidas ao seu redor.',
    affirmation: 'Minha mente enxerga oportunidades lucrativas em todos os lugares.',
    exercise: 'Listar 3 habilidades ou bens que você possui e podem gerar renda extra.',
    completed: false,
    unlocked: false
  },
  {
    day: 5,
    title: 'A Regra das 24 Horas de Ação',
    focus: 'Transmuta intenção em gesto prático.',
    affirmation: 'Eu sou rápido em agir quando a intuição de riqueza me chama.',
    exercise: 'Tome 1 pequena decisão financeira represada hoje (ex: renegociar algo ou vender algo).',
    completed: false,
    unlocked: false
  },
  {
    day: 6,
    title: 'Transmutando o Medo de Faltar',
    focus: 'Trocar escassez por fluxo contínuo.',
    affirmation: 'O dinheiro vai e volta fortalecido. O reservatório da vida é inesgotável.',
    exercise: 'Pague uma conta ou compromisso com um sorriso sincero de gratidão.',
    completed: false,
    unlocked: false
  },
  {
    day: 7,
    title: 'Primeiro Marco: O Ciclo da Riqueza',
    focus: 'Consolidação da 1ª semana de reprogramação.',
    affirmation: 'Minha mente reconfigurada já pensa como uma mente próspera.',
    exercise: 'Realize o Ritual de Ativação completo do Anjo da Riqueza.',
    completed: false,
    unlocked: false
  },
  {
    day: 8,
    title: 'A Fórmula da Projeção de R$ 1.000',
    focus: 'Detalhamento do alvo financeiro semanal.',
    affirmation: 'R$ 1.000 por semana é um valor natural e acessível para a minha mente.',
    exercise: 'Escreva R$ 1.000 em um cartão e coloque na sua carteira.',
    completed: false,
    unlocked: false
  },
  {
    day: 9,
    title: 'Dissolvendo Padrões Familiares',
    focus: 'Acutar votos de pobreza herdados dos antepassados.',
    affirmation: 'Eu honro meus pais sendo feliz, livre e financeiramente abundante.',
    exercise: 'Declare em voz alta sua alforria de velhas crenças familiares de escassez.',
    completed: false,
    unlocked: false
  },
  {
    day: 10,
    title: 'Conexão com o Áudio Noturno',
    focus: 'Aprofundamento na reprogramação Delta durante o sono.',
    affirmation: 'Enquanto durmo, o Anjo da Riqueza alinha meu destino com a abundância.',
    exercise: 'Deite com o fone de ouvido na frequência de 639Hz até adormecer.',
    completed: false,
    unlocked: false
  },
  {
    day: 11,
    title: 'O Ímã dos Clientes e Vendas',
    focus: 'Atrair contatos, negócios e facilidades.',
    affirmation: 'Pessoas certas chegam até mim dispostas a trocar valor por meu trabalho.',
    exercise: 'Envie uma mensagem profissional ou proposta com postura de autoridade.',
    completed: false,
    unlocked: false
  },
  {
    day: 12,
    title: 'Ação sem Hesitação',
    focus: 'Superar o perfeccionismo paralisante.',
    affirmation: 'Eu não preciso de perfeição, apenas de ritmo e intenção próspera.',
    exercise: 'Finalize uma tarefa pendente há mais de 3 dias em menos de 30 minutos.',
    completed: false,
    unlocked: false
  },
  {
    day: 13,
    title: 'Abertura para o Extraordinário',
    focus: 'Receber ganhos inesperados e presentes do universo.',
    affirmation: 'Eu aceito surpresas financeiras positivas de fontes conhecidas e desconhecidas.',
    exercise: 'Mentalize 3 portas de entrada de dinheiro se abrindo no seu dia.',
    completed: false,
    unlocked: false
  },
  {
    day: 14,
    title: 'Segundo Marco: A Mente Sem Amarras',
    focus: 'Celebrar a metade da jornada de 21 dias.',
    affirmation: 'Eu sou o arquiteto da minha nova riqueza consciente.',
    exercise: 'Anote no diário os pequenos milagres ou coincidências dos últimos 14 dias.',
    completed: false,
    unlocked: false
  },
  {
    day: 15,
    title: 'Ancoragem dos Códigos de Reforço',
    focus: 'Intensificação da carga vibracional.',
    affirmation: 'Minha frequência de prosperidade é inabalável e constante.',
    exercise: 'Use as afirmações aceleradas dos Códigos de Reforço.',
    completed: false,
    unlocked: false
  },
  {
    day: 16,
    title: 'Magnetismo do Merecimento',
    focus: 'Sentir-se digno de viver em ambientes de luxo e paz.',
    affirmation: 'Eu pertenço aos lugares de abundância, elegância e plenitude.',
    exercise: 'Visite um lugar agradável e absorva a sensação de conforto sem ansiedade.',
    completed: false,
    unlocked: false
  },
  {
    day: 17,
    title: 'A Eliminação do Diálogo de Reclamação',
    focus: 'Jejum de 24 horas sem reclamar de preços ou contas.',
    affirmation: 'Minha boca só pronuncia palavras de benção, crescimento e fartura.',
    exercise: 'Substitua o verbo "tá caro" por "estou expandindo minha renda para ter isso".',
    completed: false,
    unlocked: false
  },
  {
    day: 18,
    title: 'Construção da Reserva da Prosperidade',
    focus: 'A energia de reter o dinheiro com sabedoria.',
    affirmation: 'Eu guardo e multiplico meu patrimônio com serenidade e inteligência.',
    exercise: 'Separe qualquer quantia simbólica hoje em uma conta exclusiva da riqueza.',
    completed: false,
    unlocked: false
  },
  {
    day: 19,
    title: 'Geração de Valor Exponencial',
    focus: 'Aumentar a utilidade e impacto no que você produz.',
    affirmation: 'Quanto mais sirvo bem ao mundo, mais a riqueza flui naturalmente.',
    exercise: 'Faça um elogio sincero ou entregue mais do que foi pedido em um trabalho.',
    completed: false,
    unlocked: false
  },
  {
    day: 20,
    title: 'A Certeza da Manifestação',
    focus: 'Sintonizar no sentimento de missão cumprida.',
    affirmation: 'O valor de R$ 1.000 por semana já é meu padrão de vida habitual.',
    exercise: 'Sinta a alegria e alívio no peito como se os R$ 1.000 estivessem na sua conta.',
    completed: false,
    unlocked: false
  },
  {
    day: 21,
    title: 'O Portal Aberto da Prosperidade Perpétua',
    focus: 'Formatura dos 21 dias e manutenção vitalícia do hábito.',
    affirmation: 'Eu reprogramar minha mente com sucesso. O Anjo da Riqueza habita em mim!',
    exercise: 'Faça a declaração final de libertação e compartilhe sua história de superação.',
    completed: false,
    unlocked: false
  }
];

export const MAIN_TAKEAWAYS: FormulaStep[] = [
  {
    number: 'I',
    title: 'A Fórmula das 5 Etapas',
    description: 'A fórmula de manifestação viral de Jordan que funciona como um relógio, todas as vezes, alinhando intenção, palavra e ação.'
  },
  {
    number: 'II',
    title: 'O Projeto Exato de R$ 1 Mil Reais',
    description: 'O método exato usado para manifestar até R$ 30 mil em 30 dias — simplificado para você garantir seus primeiros R$ 1.000 por semana.'
  },
  {
    number: 'III',
    title: 'Método da Crença Limitante',
    description: 'Uma maneira comprovada de descobrir e eliminar cirurgicamente os bloqueios financeiros escondidos no seu subconsciente.'
  },
  {
    number: 'IV',
    title: 'Aja Dentro de 24 Horas',
    description: 'Medidas práticas e simples que você pode começar a aplicar literalmente no mesmo dia em que ingressar.'
  }
];

export const BOOSTER_CODES = [
  {
    id: 'b1',
    code: 'CÓDIGO #777 - ATIVAÇÃO DE EMERGÊNCIA',
    description: 'Para ser lido em momentos de imprevistos financeiros ou aperto no orçamento.',
    affirmation: 'Eu cancelo agora qualquer projeção de falta. O universo supre todas as minhas necessidades instantaneamente com milagres de abundância.'
  },
  {
    id: 'b2',
    code: 'CÓDIGO #888 - MULTIPLICADOR DE ENTRADAS',
    description: 'Para ser pronunciado antes de abrir seu banco, carteira ou canal de vendas.',
    affirmation: 'Cada centavo que sai da minha mão retorna multiplicado por 10. Minhas contas correntes recebem depósitos constantes e legítimos.'
  },
  {
    id: 'b3',
    code: 'CÓDIGO #999 - ABERTURA DE PORTAS FECHADAS',
    description: 'Para destravar negociações estagnadas, contratos orçados ou clientes hesitantes.',
    affirmation: 'As barreiras invisíveis caem agora. As decisões favoráveis ao meu progresso financeiro são assinadas e liberadas hoje.'
  }
];

export const FAQS = [
  {
    question: 'Como recebo o acesso ao Método do Anjo da Riqueza?',
    answer: 'O acesso é 100% imediato! Assim que seu pagamento de R$ 17,00 for aprovado, você recebe instantaneamente os dados no seu e-mail e pode acessar nossa plataforma interativa em qualquer celular, tablet ou computador.'
  },
  {
    question: 'Preciso dedicar quantas horas por dia?',
    answer: 'Apenas 5 a 10 minutos por dia! As afirmações e áudios guiados foram projetados para se encaixarem perfeitamente na sua rotina matinal ou no momento antes de dormir.'
  },
  {
    question: 'E se eu nunca tiver feito afirmações ou lei da atração antes?',
    answer: 'Não se preocupe! O Guia de 21 Dias pega você pela mão com um passo a passo prático, áudios guiados prontos e o nosso assistente de IA que personaliza as afirmações para a sua realidade.'
  },
  {
    question: 'O que acontece se eu não gostar?',
    answer: 'Você conta com nossa Garantia Incondicional de 7 Dias. Se por qualquer motivo sentir que o método não é para você, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro sem perguntas.'
  }
];
