import { useState, useEffect } from 'react';
import { ExternalLink, FileText, MessageCircle, Briefcase } from 'lucide-react';
import { Link } from 'react-scroll';
import { useLanguage } from '../contexts/LanguageContext';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.03c3.15-.38 6.5-1.54 6.5-7.17A5.1 5.1 0 0 0 19 4.3a5.2 5.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a11.5 11.5 0 0 0-6 0C6.9 1.1 5.8 1.4 5.8 1.4a5.2 5.2 0 0 0-.1 3.2 5.1 5.1 0 0 0-1.5 3.5c0 5.61 3.33 6.78 6.47 7.15a4.8 4.8 0 0 0-1 2.87V22" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Hero({ onOpenResume }) {
  const { t } = useLanguage();
  const roles = t('hero.roles');
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [githubRepos, setGithubRepos] = useState(null);

  useEffect(() => {
    let timeout;
    const fullText = roles[roleIndex] || "Desenvolvedor";

    const handleType = () => {
      if (!isDeleting && currentText === fullText) {
        timeout = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % (roles.length || 1));
        setTypingSpeed(150); 
      } else {
        const nextText = isDeleting 
          ? fullText.substring(0, currentText.length - 1)
          : fullText.substring(0, currentText.length + 1);
          
        setCurrentText(nextText);
        setTypingSpeed(isDeleting ? 50 : 150);
        timeout = setTimeout(handleType, typingSpeed);
      }
    };

    timeout = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex, typingSpeed, roles]);

  useEffect(() => {
    const fetchGithub = async () => {
      try {
        const githubUser = import.meta.env.VITE_GITHUB_LINK?.split('/').pop() || 'RafaelParoni';
        const res = await fetch(`https://api.github.com/users/${githubUser}`);
        const data = await res.json();
        if (data.public_repos !== undefined) {
          setGithubRepos(data.public_repos);
        }
      } catch (error) {
        console.error('Erro ao buscar API do Github:', error);
      }
    };
    fetchGithub();
  }, []);

  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';
  const githubLink = import.meta.env.VITE_GITHUB_LINK || '#';
  const paroniSystemLink = import.meta.env.VITE_PARONI_SYSTEM_LINK || '#';

  const formatWhatsappLink = () => {
    return `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`;
  };

  return (
    <section id="sobre" className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <p className="greeting text-gradient">{t('hero.greeting')}</p>
          <h1 className="title">Rafael Paroni</h1>
          
          <h3 className="subtitle">
            {t('hero.rolePrefix')} <span className="typewriter-text text-gradient">{currentText}</span>
          </h3>
          
          <p className="description">
            {t('hero.description')}
            <br />
            {t('hero.creatorOf') || 'E criador do '}
            <a 
              href={paroniSystemLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="paroni-link text-gradient"
            >
              Paroni System <ExternalLink size={16} />
            </a>.
          </p>
          
          <div className="btn-group" style={{ marginBottom: '1rem' }}>
            <button onClick={onOpenResume} className="btn btn-primary">
              <FileText size={20} />
              {t('hero.resumeBtn')}
            </button>
            
            <Link to="trabalhos" smooth={true} duration={500} offset={-70} className="btn btn-outline" style={{ cursor: 'pointer' }}>
              <Briefcase size={20} />
              {t('hero.worksBtn')}
            </Link>
          </div>

          <div className="btn-group">
            <a 
              href={formatWhatsappLink()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <MessageCircle size={20} />
              Whatsapp
            </a>
            
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline"
            >
              <GithubIcon size={20} />
              Github 
              {githubRepos !== null && (
                <span style={{ fontSize: '0.85rem', marginLeft: '6px', opacity: 0.8 }}>
                  ({githubRepos} {t('hero.githubProjects')})
                </span>
              )}
            </a>
          </div>
        </div>
        
        <div className="hero-image-container">
          <img 
            src="/aboutImg.png" 
            alt="Rafael Paroni" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
}
