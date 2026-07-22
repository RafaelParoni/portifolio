import { useRef, useState, useEffect } from 'react';
import { Code, Bot, Layout, ArrowRight, ChevronLeft, ChevronRight, Users, Server } from 'lucide-react';
import trabalhosData from '../data/trabalhos.json';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap = {
  Code,
  Bot,
  'Front-end': Layout,
  'Back-end': Server,
  Group: Users,
};

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.54 6.5-7.17A5.1 5.1 0 0 0 19 4.3a5.2 5.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C6.9 1.1 5.8 1.4 5.8 1.4a5.2 5.2 0 0 0-.1 3.2 5.1 5.1 0 0 0-1.5 3.5c0 5.61 3.33 6.78 6.47 7.15a4.8 4.8 0 0 0-1 2.87V22" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Trabalhos() {
  const { lang, t } = useLanguage();

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollingTimeout = useRef(null);

  // Ordena por prioridade (maior primeiro)
  const projetos = [...trabalhosData].sort((a, b) => b.prioridade - a.prioridade);

  const checkButtons = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeftBtn(scrollLeft > 0);
    setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 2); // -2 to avoid float rounding issues
  };

  useEffect(() => {
    checkButtons();
    window.addEventListener('resize', checkButtons);
    return () => window.removeEventListener('resize', checkButtons);
  }, []);

  const handleScroll = () => {
    checkButtons();
    setIsScrolling(true);
    if (scrollingTimeout.current) clearTimeout(scrollingTimeout.current);
    scrollingTimeout.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const scrollByAmount = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // velocidade do arraste
    if (Math.abs(walk) > 5) {
      scrollRef.current.classList.add('is-drag-moving'); // Usado para bloquear o clique
    }
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleClickCapture = (e) => {
    if (scrollRef.current && scrollRef.current.classList.contains('is-drag-moving')) {
      e.stopPropagation();
      e.preventDefault();
      scrollRef.current.classList.remove('is-drag-moving');
    }
  };

  return (
    <section id="trabalhos" className="trabalhos-section">
      <div className="section-container">
        <h2 className="section-title">
          {t('works.titlePrefix')} <span className="text-gradient">{t('works.titleHighlight')}</span>
        </h2>

        <div className="trabalhos-carousel">
          {showLeftBtn && (
            <button className="scroll-btn left" onClick={() => scrollByAmount(-380)}>
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="trabalhos-grid-wrapper">
            <div
              className={`trabalhos-grid ${isDragging ? 'dragging' : ''} ${isScrolling ? 'scrolling' : ''}`}
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onClickCapture={handleClickCapture}
            >
              {projetos.map((projeto) => {
                const iconNames = projeto.icon ? projeto.icon.split('/') : ['Code'];
                const IconComponents = iconNames.map(name => iconMap[name.trim()] || Code);

                const descricao = typeof projeto.descricao === 'object'
                  ? (projeto.descricao[lang] || projeto.descricao.pt)
                  : projeto.descricao;

                return (
                  <div key={projeto.id} className={`trabalho-card ${projeto.destaque ? 'destaque' : ''}`}>
                    <div className="card-header">
                      <div className="icon-container text-gradient" style={{ display: 'flex', gap: '8px' }}>
                        {IconComponents.map((IconComp, idx) => (
                          <IconComp key={idx} size={28} />
                        ))}
                      </div>
                      {projeto.destaque && <span className="badge-destaque">{t('works.badgeHighlight')}</span>}
                    </div>

                    <h3 className="card-title">{projeto.nome}</h3>
                    <p className="card-desc">{descricao}</p>

                    <div className="card-tags">
                      {projeto.tags?.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="card-actions">
                      {projeto.link && (
                        <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="card-link text-gradient">
                          {t('works.siteBtn')} <ArrowRight size={16} />
                        </a>
                      )}
                      {projeto.github && (
                        <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="card-link">
                          {t('works.repoBtn')}
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {showRightBtn && (
            <button className="scroll-btn right" onClick={() => scrollByAmount(380)}>
              <ChevronRight size={24} />
            </button>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <a
            href={import.meta.env.VITE_GITHUB_LINK || 'https://github.com/RafaelParoni'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <GithubIcon size={20} />
            {t('works.seeAllProjects')}
          </a>
        </div>
      </div>
    </section>
  );
}
