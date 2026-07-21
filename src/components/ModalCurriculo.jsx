import { X } from 'lucide-react';

export default function ModalCurriculo({ isOpen, onClose }) {
  if (!isOpen) return null;

  const pdfUrl = import.meta.env.VITE_RESUME_PDF_PATH || '/Currículo - Rafael Paroni.pdf';

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600 }}>Currículo - Rafael Paroni</h3>
          <button className="modal-close" onClick={onClose} aria-label="Fechar Modal">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <iframe 
            src={`${pdfUrl}#view=FitH`} 
            title="Currículo"
            frameBorder="0"
          >
            Seu navegador não suporta visualização de PDF. 
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">Baixe o PDF para ver.</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}
