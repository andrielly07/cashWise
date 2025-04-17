// App.jsx
import './index.css';
import { useState, useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedin, FaXTwitter, FaYoutube, FaCircle, FaRegCircle } from "react-icons/fa6";

const carouselItems = [
  {
    title: "Missão",
    text: "Nossa missão é proporcionar educação financeira acessível e envolvente para jovens e pré-adolescentes, incentivando hábitos saudáveis de consumo e poupança desde cedo.",
  },
  {
    title: "Visão",
    text: "Ser a principal plataforma de gestão financeira para jovens na América Latina, reconhecida por sua abordagem educativa, criativa e inclusiva.",
  },
  {
    title: "Valores",
    text: "Acreditamos na educação, na transparência e no poder da tecnologia como ferramentas de transformação financeira e social. Respeito, inclusão e inovação guiam tudo o que fazemos.",
  },
];

function CarouselInfo() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="carousel">
      <div className="carousel-texto">
        <h2>{carouselItems[index].title}</h2>
        <p>{carouselItems[index].text}</p>
        <div className="carousel-indicadores">
          {carouselItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {index === i ? <FaCircle /> : <FaRegCircle />}
            </button>
          ))}
        </div>
      </div>
      <div className="carousel-imagem">
        <img src="/Logo-Completa.png" alt="Logo CashWise" />
      </div>
    </section>
  );
}

function App() {
  const [menuAberto, setMenuAberto] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function fecharMenuAoClicarFora(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuAberto(false);
      }
    }
    document.addEventListener('mousedown', fecharMenuAoClicarFora);
    return () => document.removeEventListener('mousedown', fecharMenuAoClicarFora);
  }, []);

  const equipe = [
    {
      nome: 'Andrielly de Carvalho Lucio',
      cargo: 'Desenvolvedora',
      descricao: 'Andrielly ajudou na formação da página de Produtos e Serviços',
      foto: 'Andrielly.jpeg'
    },
    {
      nome: 'Diego Santos Bezerra',
      cargo: 'Desenvolvedor',
      descricao: 'Ajudou na identidade visual',
      foto: 'Diego.jpeg'
    },
    {
      nome: 'Isaac Tavares Freire',
      cargo: 'Desenvolvedor',
      descricao: 'Isaac ajudou na página Sobre Nós',
      foto: 'Isaac.jpeg'
    },
    {
      nome: 'Juciléia da Silva Quinto',
      cargo: 'Desenvolvedora',
      descricao: 'Juciléia ajudou na criação da página Início',
      foto: 'Jucileia.jpeg'
    },
    {
      nome: 'Maria Eduarda Antunes da Silva Sousa',
      cargo: 'Desenvolvedora',
      descricao: 'Ajudou na Identidade visual',
      foto: 'Maria.jpeg'
    },
    {
      nome: 'Marina Araújo Alves',
      cargo: 'Desenvolvedora',
      descricao: 'Marina ajudou na parte Contatos',
      foto: 'Marina.jpeg'
    }
  ];

  return (
    <div className="sobre-nos">
      <header className="topo-cashwise">
        <div className="lado-esquerdo">
          <img src="/logocash.png" alt="Logo CashWise" className="logo-cash" />
        </div>
        <div className="icones-direita">
          <nav className="menu-navegacao">
            <a href="#inicio" className="link-menu">Página Inicial</a>
            <a href="#sobre-nos" className="link-menu">Sobre Nós</a>
            <a href="#produtos" className="link-menu">Produtos e Serviços</a>
            <a href="#contato" className="link-menu">Contato</a>
          </nav>
          <svg xmlns="http://www.w3.org/2000/svg" className="icone-svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <div className="menu-pontinhos" ref={menuRef}>
            <button
              onClick={() => setMenuAberto(!menuAberto)}
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="icone-svg" viewBox="0 0 24 24" fill="white">
                <circle cx="5" cy="12" r="2" />
                <circle cx="12" cy="12" r="2" />
                <circle cx="19" cy="12" r="2" />
              </svg>
            </button>
            <div className={`menu-suspenso ${menuAberto ? 'mostrar' : ''}`}>
              <a href="#intro">Início</a>
              <a href="#equipe">Conhecendo a Sociedade</a>
              <a href="#info">Mais Informações</a>
            </div>
          </div>
        </div>
      </header>

      <section className="intro" id="intro">
        <div className="intro-conteudo">
          <div className="intro-header">
            <div className="bolinha-i">i</div>
            <span className="intro-titulo">Sobre Nós</span>
          </div>
          <h1 className="intro-titulo-principal">
            Educando para um Futuro<br />
            Financeiro Brilhante
          </h1>
          <p className="intro-subtitulo">
            O CashWise nasceu com o propósito de transformar a maneira como jovens e pré-adolescentes lidam com o dinheiro. Acreditamos que a educação financeira deve começar cedo — e de forma leve, prática e divertida. <br /><br />
            A plataforma foi criada para tornar o aprendizado sobre finanças mais acessível, visual e envolvente. Com o CashWise, o usuário pode acompanhar seus gastos, organizar metas e entender como as decisões de hoje influenciam o amanhã. Nosso objetivo é formar uma geração mais consciente, preparada para lidar com o dinheiro com responsabilidade e inteligência.
          </p>
          <button className="botao-scroll" onClick={() => {
            const equipeSection = document.getElementById('equipe');
            if (equipeSection) {
              equipeSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Conheça o Time
          </button>
        </div>
      </section>

      <CarouselInfo />

      <section className="equipe" id="equipe">
        <br />
        <div className="linha-titulo">
          <div className="linha-decorativa esquerda"></div>
          <span className="texto-sociedade">Conhecendo a<br />Sociedade</span>
          <div className="linha-decorativa direita"></div>
        </div>

        {equipe.map((membro, index) => (
          <div className="membro-linha" key={index}>
            <img src={`/${membro.foto}`} alt={`Foto de ${membro.nome}`} className="membro-foto" />
            <div className="membro-info">
              <h3>{membro.nome}</h3>
              <p className="cargo">{membro.cargo}</p>
              <p className="descricao">{membro.descricao}</p>
            </div>
          </div>
        ))}
      </section>

      <footer className="footer" id="info">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li>Home</li>
              <li>Blog</li>
              <li>CashWise News</li>
              <li>Carreiras</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>CashWise</h4>
            <ul>
              <li>Sobre Nós</li>
              <li>Ajuda</li>
              <li>Contato</li>
              <li>Política de Privacidade</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Produtos</h4>
            <ul>
              <li>Planejamento Financeiro</li>
              <li>Gestão de Gastos</li>
              <li>Educação Financeira</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <strong><img src="/locash-rodape.png" alt="Logo CashWise" className="logo-cash-rodape" /></strong>
            <p>
              © 2025 CashWise Tecnologia Financeira LTDA. CNPJ: 00.000.000/0001-00<br />
              Rua da Virgínia Ferni, 123 - São Paulo, SP - 01234-000
            </p>
          </div>
          <div className="footer-icons">
            <FaInstagram />
            <FaLinkedin />
            <FaXTwitter />
            <FaYoutube />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;