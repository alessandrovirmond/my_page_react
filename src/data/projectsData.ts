export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: 'virmond-chatbot',
    title: 'Virmond AI ChatBot',
    description: 'Aplicação Full-Stack de conversação integrada ao Google Gemini 2.5 Flash. Arquitetura Monorepo com autenticação segura via Clerk, API RESTful blindada e deploy automatizado.',
    techs: ['React', 'Vite', 'C# .NET 10', 'Docker', 'Clerk'],
    images: [
        '/assets/projects/virmond_ia/virmond_ia_01.png', 
        '/assets/projects/virmond_ia/virmond_ia_02.png', 
    ], 
    githubUrl: 'https://github.com/alessandrovirmond/Virmond-AI-ChatBot',
    liveUrl: 'https://virmond-chatbot-ia.vercel.app',
  },
  {
    id: 'team-draft-engine',
    title: 'Team Draft Engine',
    description: 'Plataforma inteligente para sorteio e balanceamento de times de futebol amador. Utiliza o padrão Strategy no backend para distribuir jogadores de forma justa, baseando-se em idade e posição em campo.',
    techs: ['Angular 17', 'SCSS', 'Java (Spring)', 'REST API'],
    images: [
      '/assets/projects/team_draft/team_draft.png',
        '/assets/projects/team_draft/team_draft_01.png',
    ],
    liveUrl: 'https://team-draft-engine-web.vercel.app',
    githubUrl: 'https://github.com/alessandrovirmond/Team-Draft-Engine',
  },
    {
    id: 'iot-lampadas',
    title: 'Orange Pi Automação',
    description: 'App e sistema embarcado para controle remoto de lâmpadas via MQTT para automação residencial.',
    techs: ['IoT', 'MQTT', 'Orange Pi'],
    images: [
        '/assets/projects/orange/orange_1.jpeg',
        '/assets/projects/orange/orange_2.jpeg',
    ],
    githubUrl: 'https://github.com/alessandrovirmond/App_controle_remoto_de_lampadas',
  },
 {
    id: 'tcc',
    title: 'Acessibility Audit (TCC)',
    description: 'Observatório de Acessibilidade dos Portais Municipais do RJ. Plataforma analítica com dashboard e relatórios.',
    techs: ['Acessibilidade', 'WCAG', 'Dashboard'],
    images: [
        '/assets/projects/observatorio/observatorio_1.png',
        '/assets/projects/observatorio/observatorio_2.png',
        '/assets/projects/observatorio/observatorio_3.png',
        '/assets/projects/observatorio/observatorio_4.png',
        '/assets/projects/observatorio/observatorio_5.png',
    ],
    githubUrl: 'https://github.com/alessandrovirmond/Acessibility_audit',
    liveUrl: 'https://observatorio.allquestions.eu/',
  },
  {
    id: 'emprestimos',
    title: 'Sistema de Empréstimos',
    description: 'Projeto Full Stack em TS e PHP para gestão de empréstimos, cálculo de parcelas e relatórios estatísticos.',
    techs: ['TypeScript', 'PHP', 'Vite', 'Playwright'],
    images: [
        '/assets/projects/emprestimos.png',
    ],
    githubUrl: 'https://github.com/alessandrovirmond/Projeto-Integrador-Emprestimos',
  },
  {
    id: 'alefood',
    title: 'AleFood',
    description: 'Site React de Restaurantes e seus pratos, integrado com API em Node rodando em docker.',
    techs: ['React', 'TypeScript', 'Node.js', 'Docker'],
    images: [
        '/assets/projects/alefood/alefood.png', 
    ], 
    githubUrl: 'https://github.com/alessandrovirmond/AleFood',
    liveUrl: 'https://ale-food.vercel.app/',
  },
  {
    id: 'aleroni',
    title: 'Aleroni Router',
    description: 'Site React para cardápio de restaurante, demonstrando domínio de navegação e rotas.',
    techs: ['React', 'React Router'],
    images: [
        '/assets/projects/aleroni/aleroni_01.png',
    ],
    githubUrl: 'https://github.com/alessandrovirmond/Aleroni-router',
    liveUrl: 'https://aleroni-router.vercel.app/',
  },

];