

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
    id: 'alefood',
    title: 'AleFood',
    description: 'Site React de Restaurantes e seus pratos, integrado com API em Node rodando em docker.',
    techs: ['React', 'TypeScript', 'Node.js', 'Docker'],
    images: [
        '/assets/projects/alefood-1.png', 
        '/assets/projects/alefood-2.png'
    ], 
    githubUrl: 'https://github.com/alessandrovirmond/AleFood',
    liveUrl: 'https://ale-food.vercel.app/',
  },
  {
    id: 'tcc',
    title: 'Acessibility Audit (TCC)',
    description: 'Observatório de Acessibilidade dos Portais Municipais do RJ. Plataforma analítica com dashboard e relatórios.',
    techs: ['Acessibilidade', 'WCAG', 'Dashboard'],
    images: [
        '/assets/projects/observatorio_1.png',
        '/assets/projects/observatorio_2.png',
        '/assets/projects/observatorio_3.png',
        '/assets/projects/observatorio_4.png',
        '/assets/projects/observatorio_5.png',
    ],
    githubUrl: 'https://github.com/alessandrovirmond/Acessibility_audit',
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
    id: 'aleroni',
    title: 'Aleroni Router',
    description: 'Site React para cardápio de restaurante, demonstrando domínio de navegação e rotas.',
    techs: ['React', 'React Router'],
    images: [
        '/assets/projects/aleroni.png',
    ],
    githubUrl: 'https://github.com/alessandrovirmond/Aleroni-router',
    liveUrl: 'https://aleroni-router.vercel.app/',
  },
  {
    id: 'iot-lampadas',
    title: 'Orange Pi Automação',
    description: 'App e sistema embarcado para controle remoto de lâmpadas via MQTT para automação residencial.',
    techs: ['IoT', 'MQTT', 'Orange Pi'],
    images: [
        '/assets/projects/orange_1.jpeg',
        '/assets/projects/orange_2.jpeg',
    ],
    githubUrl: 'https://github.com/alessandrovirmond/App_controle_remoto_de_lampadas',
  }
];