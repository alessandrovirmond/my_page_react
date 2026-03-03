import { useEffect, useRef } from 'react';
import './Home.css';

function Home(){
    const carrosselRef = useRef(null);

  useEffect(() => {
    const carrossel = carrosselRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (!carrossel) return;
      
      const step = carrossel.clientWidth; 
      const maxScroll = carrossel.scrollWidth - step; 
      
      scrollAmount += step;

      if (scrollAmount > maxScroll) {
          scrollAmount = 0;
      }

      carrossel.scrollTo({
          top: 0,
          left: scrollAmount,
          behavior: "smooth"
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <header>
          <img src="/assets/foto-1.png" alt="Alessandro Virmond" className="profile-photo" />
          
          <div className="header-info">
              <div className="header-title-wrapper">
                <h1>Alessandro Virmond</h1>
                <img src="/assets/logo.png" alt="Logo AV" className="header-logo" />
              </div>
              <div className="subtitle">Desenvolvedor de Software</div>
              <div className="contact-info">
                  <a href="https://maps.google.com/?q=Nova+Friburgo,+RJ" target="_blank" rel="noreferrer"><i className="fas fa-map-marker-alt"></i> Nova Friburgo, RJ</a>
                  <span>•</span>
                  <a href="https://wa.me/5521976807551" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i> (21) 97680-7551</a>
                  <span>•</span>
                  <a href="mailto:avirmond2000@gmail.com"><i className="fas fa-envelope"></i> avirmond2000@gmail.com</a>
              </div>
              <div className="contact-info" style={{ marginTop: '10px' }}>
                  <a href="https://linkedin.com/in/alessandrovirmond" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a>
                  <span>•</span>
                  <a href="https://github.com/alessandrovirmond" target="_blank" rel="noreferrer"><i className="fab fa-github"></i> GitHub</a>
                  <span>•</span>
                  <a href="https://vercel.com/alessandrovirmonds-projects" target="_blank" rel="noreferrer"><i className="fas fa-globe"></i> Vercel</a>
                  <span>•</span>
                  <a href="https://instagram.com/alessandrovirmond" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
              </div>
          </div>
      </header>

      <section>
          <h2>Resumo Profissional</h2>
          
          <ul className="quick-bio">
              <li>🎓 <strong>Bacharel em Sistemas de Informação</strong> - CEFET-RJ</li>
              <li>💼 <strong>Desenvolvedor Flutter</strong> na RFID Brasil</li>
          </ul>

          <p className="about-text">
              Atuo na criação de soluções multiplataforma (Web, Mobile e Desktop) com <strong>Flutter</strong> e <strong>React</strong>. Foco na construção de aplicações robustas, aplicando princípios de Clean Code e arquitetura escalável para garantir alta manutenibilidade. Profissional colaborativo, com facilidade para atuar em times ágeis e resolver problemas complexos, visando sempre a entrega de valor e a excelência na experiência do usuário.
          </p>

          <div className="tech-icons">
              <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginRight: '5px' }}>Principais Tecnologias:</span>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" width="30" height="30" alt="Flutter" title="Flutter" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="30" height="30" alt="React" title="React" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" width="30" height="30" alt="Angular" title="Angular" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" width="30" height="30" alt="Vue.js" title="Vue.js" />
          </div>
      </section>

      <section className="hobbies-section">
          <h2>Além do Código</h2>
          
          <div className="hobbies-container">
              <div className="hobbies-list-wrapper">
                  <p className="about-text" style={{ marginBottom: '15px' }}>
                      Acredito que um bom profissional é feito de boas vivências. Quando não estou "codando", é aqui que você me encontra:
                  </p>
                  <ul className="hobbies-list">
                      <li>⭐ Botafoguense apaixonado</li>
                      <li>⚽ Peladeiro</li>
                      <li>🎮 Fifeiro de plantão</li>
                      <li>🏖️ Amante de uma boa praia</li>
                      <li>🏋️‍♂️ Em busca do shape na musculação</li>
                      <li>🎤 Freestyleiro no rap</li>
                      <li>🧠 Apaixonado por aprender</li>
                  </ul>
              </div>

              <div className="photo-carrousel-wrapper">
                  <div className="photo-gallery" ref={carrosselRef}>
                      <img src="/assets/foto-7.jpeg" alt="Foto 3" />
                      <img src="/assets/foto-3.jpeg" alt="Foto 2" />
                      <img src="/assets/foto-5.jpeg" alt="Foto 4" />
                      <img src="/assets/foto-2.jpeg" alt="Foto 1" />
                      <img src="/assets/foto-6.jpeg" alt="Foto 5" />
                  </div>
              </div>
          </div>
      </section>

      <section>
          <h2>Competências Técnicas</h2>
          <div className="skills-grid">
              <div className="skill-category">
                  <h3>Mobile & Cross-Platform</h3>
                  <div className="tags">
                      <span className="tag">Flutter</span>
                      <span className="tag">Dart</span>
                      <span className="tag">Riverpod</span>
                      <span className="tag">BLoC</span>
                      <span className="tag">Clean Architecture</span>
                      <span className="tag">Method Channels</span>
                      <span className="tag">Offline-First</span>
                  </div>
              </div>
              <div className="skill-category">
                  <h3>Front-End Web</h3>
                  <div className="tags">
                      <span className="tag">React.js</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">Next.js</span>
                      <span className="tag">Redux Toolkit</span>
                      <span className="tag">Context API</span>
                      <span className="tag">Tailwind CSS</span>
                  </div>
              </div>
              <div className="skill-category">
                  <h3>Back-End & Integração</h3>
                  <div className="tags">
                      <span className="tag">Node.js</span>
                      <span className="tag">RESTful APIs</span>
                      <span className="tag">WebSockets</span>
                      <span className="tag">MQTT</span>
                      <span className="tag">SQL</span>
                      <span className="tag">SSO / JWT</span>
                  </div>
              </div>
              <div className="skill-category">
                  <h3>DevOps & Qualidade</h3>
                  <div className="tags">
                      <span className="tag">Git Flow</span>
                      <span className="tag">TDD</span>
                      <span className="tag">CI/CD</span>
                      <span className="tag">Docker</span>
                      <span className="tag">Figma</span>
                  </div>
              </div>
          </div>
      </section>

      <section>
          <h2>Experiência Profissional</h2>
          
          <div className="experience-item">
              <div className="job-header">
                  <div className="job-title">Desenvolvedor de Software <span className="job-company">| RFID Brasil</span></div>
                  <div className="job-date">Novembro 2023 – Atual</div>
              </div>
              <ul className="experience-list">
                  <li>Desenvolvimento end-to-end de soluções multiplataforma (Web, Windows e Android) utilizando Flutter, garantindo alta performance e fidelidade de UI/UX.</li>
                  <li>Engenharia de plugins customizados para comunicação direta com hardware (leitores RFID), utilizando Method Channels para integração nativa.</li>
                  <li>Implementação de estratégia Offline-First robusta, com sincronização automática de dados (Sync) entre banco local e nuvem para operação em áreas sem conectividade.</li>
                  <li>Desenvolvimento de arquitetura para sistemas IoT escaláveis, utilizando protocolos de comunicação em tempo real (MQTT e WebSockets).</li>
                  <li>Criação de dashboards gerenciais interativos e módulos de relatórios para suporte à decisão estratégica.</li>
              </ul>
          </div>

          <div className="experience-item">
              <div className="job-header">
                  <div className="job-title">Estágio em Desenvolvimento de Software <span className="job-company">| RFID Brasil</span></div>
                  <div className="job-date">Maio 2023 – Outubro 2023</div>
              </div>
              <ul className="experience-list">
                  <li>Atuação na modernização e refatoração de código legado, aplicando princípios de SOLID e Clean Code para reduzir a dívida técnica e facilitar manutenções futuras.</li>
                  <li>Desenvolvimento de componentes de interface (UI) responsivos e reutilizáveis, garantindo consistência visual e boa usabilidade (UX) em diferentes dispositivos.</li>
                  <li>Diagnóstico e resolução ágil de bugs em ambiente de produção e homologação.</li>
                  <li>Elaboração de documentação técnica e realização de treinamentos para capacitação de usuários finais no uso do sistema.</li>
              </ul>
          </div>
      </section>

      <section>
          <h2>Projetos em Destaque</h2>
          <div className="project-item">
              <div className="job-header">
                  <div className="job-title">Climapp</div>
                  <div className="job-date">React Native & Expo</div>
              </div>
              <p className="about-text">Aplicativo mobile focado na consulta e previsão do tempo, desenvolvido com o ecossistema React Native, aplicando consumo de APIs e gestão de estado moderna.</p>
          </div>
          <div className="project-item">
              <div className="job-header">
                  <div className="job-title">RFID Fácil</div>
                  <div className="job-date"><a href="http://rfidfacil.com" target="_blank" rel="noreferrer">rfidfacil.com</a></div>
              </div>
              <p className="about-text">Aplicação web voltada para soluções e gestão no ecossistema de identificação por radiofrequência, focando em usabilidade e performance web.</p>
          </div>
      </section>

      <section>
          <h2>Formação e Certificações</h2>
          
          <div className="experience-item">
              <div className="job-header" style={{ marginBottom: '5px' }}>
                  <div className="job-title">Bacharelado em Sistemas de Informação</div>
                  <div className="job-date">Conclusão: Julho 2025</div>
              </div>
              <div className="job-company">CEFET-RJ – Centro Federal de Educação Tecnológica Celso Suckow da Fonseca</div>
          </div>

          <div className="experience-item">
              <div className="job-header" style={{ marginBottom: '5px' }}>
                  <div className="job-title">Ensino Médio / Fundamental Completo</div>
                  <div className="job-date">Março 2012 – Dezembro 2019</div>
              </div>
              <div className="job-company">Colégio Pedro II – Campus Humaitá II</div>
          </div>

          <div>
              <div className="job-title" style={{ marginTop: '15px', marginBottom: '5px' }}>Certificações</div>
              <ul>
                  <li><strong>Scrum Fundamentals Certified (SFC)</strong> – SCRUMstudy</li>
                  <li><strong>Formação Iniciante em Programação</strong> – Alura</li>
              </ul>
          </div>
      </section>

      <footer>
          <div className="footer-content">
            <img src="/assets/logo.png" alt="Logo AV" className="footer-logo" />
            <p>© 2026 Alessandro Virmond. Desenvolvido com código limpo.</p>
          </div>
      </footer>
    </div>
  );
}

export default Home;