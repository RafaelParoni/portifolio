import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { 
  generateEmail, 
  generateVCard, 
  generateWhatsApp, 
  generateLocation, 
  generateEvent, 
  generateAppStore, 
  generateWiFi, 
  generatePix 
} from '../utils/qrCodeFormats';

export default function QRCodeGenerator({ lang }) {
  const [type, setType] = useState('url');
  const [finalContent, setFinalContent] = useState('https://rafaelparoni.vercel.app');
  const [logoUrl, setLogoUrl] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    url: 'https://rafaelparoni.vercel.app',
    text: '',
    emailTo: '',
    emailSubject: '',
    emailBody: '',
    vcardFirst: '',
    vcardLast: '',
    vcardPhone: '',
    vcardEmail: '',
    vcardCompany: '',
    waPhone: '',
    waText: '',
    locLat: '',
    locLng: '',
    pixKey: '',
    pixName: '',
    pixCity: '',
    pixAmount: '',
    eventTitle: '',
    eventLoc: '',
    eventStart: '',
    eventEnd: '',
    appUrl: '',
    wifiSsid: '',
    wifiPass: '',
    wifiType: 'WPA',
    wifiHidden: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Update finalContent whenever formData or type changes
  useEffect(() => {
    let content = '';
    switch (type) {
      case 'url': content = formData.url; break;
      case 'text': content = formData.text; break;
      case 'email': content = generateEmail(formData.emailTo, formData.emailSubject, formData.emailBody); break;
      case 'vcard': content = generateVCard(formData.vcardFirst, formData.vcardLast, formData.vcardPhone, formData.vcardEmail, formData.vcardCompany); break;
      case 'whatsapp': content = generateWhatsApp(formData.waPhone, formData.waText); break;
      case 'location': content = generateLocation(formData.locLat, formData.locLng); break;
      case 'event': content = generateEvent(formData.eventTitle, formData.eventLoc, formData.eventStart, formData.eventEnd); break;
      case 'appstore': content = generateAppStore(formData.appUrl); break;
      case 'wifi': content = generateWiFi(formData.wifiSsid, formData.wifiPass, formData.wifiType, formData.wifiHidden); break;
      case 'pix': content = generatePix(formData.pixKey, formData.pixName, formData.pixCity, formData.pixAmount); break;
      default: content = formData.url;
    }
    setFinalContent(content);
  }, [type, formData]);

  // Translations
  const translations = {
    pt: {
      type: "Tipo do QR Code",
      upload: "Logo no Centro (Opcional)",
      uploadPlaceholder: "Nenhuma imagem",
      btnUpload: "Escolher Imagem",
      btnDownload: "Baixar QR Code",
      types: {
        url: "URL (Link)",
        text: "Texto",
        email: "E-mail",
        vcard: "VCard (Contato)",
        whatsapp: "WhatsApp / SMS",
        location: "Localização",
        pix: "Pagamento Pix",
        event: "Evento (iCal)",
        appstore: "App Store / Play Store",
        wifi: "Rede Wi-Fi"
      }
    },
    en: {
      type: "QR Code Type",
      upload: "Center Logo (Optional)",
      uploadPlaceholder: "No image",
      btnUpload: "Choose Image",
      btnDownload: "Download QR Code",
      types: {
        url: "URL (Link)",
        text: "Text",
        email: "Email",
        vcard: "VCard (Contact)",
        whatsapp: "WhatsApp / SMS",
        location: "Location",
        pix: "Pix Payment",
        event: "Event (iCal)",
        appstore: "App Store / Play Store",
        wifi: "Wi-Fi Network"
      }
    },
    es: {
      type: "Tipo de QR Code",
      upload: "Logo Central (Opcional)",
      uploadPlaceholder: "Ninguna imagen",
      btnUpload: "Elegir Imagen",
      btnDownload: "Descargar QR Code",
      types: {
        url: "URL (Enlace)",
        text: "Texto",
        email: "Correo",
        vcard: "VCard (Contacto)",
        whatsapp: "WhatsApp / SMS",
        location: "Ubicación",
        pix: "Pago Pix",
        event: "Evento (iCal)",
        appstore: "App Store / Play Store",
        wifi: "Red Wi-Fi"
      }
    }
  };

  const t = translations[lang] || translations['pt'];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setLogoUrl(url);
    }
  };

  const handleDownload = () => {
    const canvas = document.getElementById("qr-code-canvas");
    if (!canvas) return;
    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    // Pega o nome do tipo atual, remove caracteres especiais e usa no arquivo
    const typeName = type.toUpperCase();
    downloadLink.download = `${typeName}-QR-CUSTOM.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="glass qr-card animate-fade-in">
      <div className="qr-preview-col">
        <div className="qr-container">
          <QRCodeCanvas 
            id="qr-code-canvas"
            value={finalContent || ' '}
            size={250}
            bgColor={"#ffffff"}
            fgColor={"#000000"}
            level={"H"}
            includeMargin={true}
            imageSettings={
              logoUrl
                ? { src: logoUrl, x: undefined, y: undefined, height: 50, width: 50, excavate: true }
                : undefined
            }
          />
        </div>
      </div>

      <div className="qr-controls-col">
        <div className="form-group">
          <label>{t.type}</label>
          <select className="styled-input" value={type} onChange={(e) => setType(e.target.value)}>
            {Object.entries(t.types).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>

        {/* Formulários Dinâmicos baseados no tipo */}
        {type === 'url' && (
          <div className="form-group">
            <label>URL</label>
            <input type="url" name="url" className="styled-input" value={formData.url} onChange={handleChange} placeholder="https://..." />
          </div>
        )}

        {type === 'text' && (
          <div className="form-group">
            <label>{t.types.text}</label>
            <textarea name="text" className="styled-input" rows="3" value={formData.text} onChange={handleChange} placeholder="..." />
          </div>
        )}

        {type === 'email' && (
          <>
            <div className="form-group">
              <label>E-mail (Destinatário)</label>
              <input type="email" name="emailTo" className="styled-input" value={formData.emailTo} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Assunto</label>
              <input type="text" name="emailSubject" className="styled-input" value={formData.emailSubject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mensagem</label>
              <textarea name="emailBody" className="styled-input" rows="3" value={formData.emailBody} onChange={handleChange} />
            </div>
          </>
        )}

        {type === 'vcard' && (
          <>
            <div style={{display: 'flex', gap: '1rem'}}>
              <div className="form-group" style={{flex: 1}}>
                <label>Nome</label>
                <input type="text" name="vcardFirst" className="styled-input" value={formData.vcardFirst} onChange={handleChange} />
              </div>
              <div className="form-group" style={{flex: 1}}>
                <label>Sobrenome</label>
                <input type="text" name="vcardLast" className="styled-input" value={formData.vcardLast} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input type="tel" name="vcardPhone" className="styled-input" value={formData.vcardPhone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>E-mail</label>
              <input type="email" name="vcardEmail" className="styled-input" value={formData.vcardEmail} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Empresa</label>
              <input type="text" name="vcardCompany" className="styled-input" value={formData.vcardCompany} onChange={handleChange} />
            </div>
          </>
        )}

        {type === 'whatsapp' && (
          <>
            <div className="form-group">
              <label>Número (com DDI ex: 5511999999999)</label>
              <input type="tel" name="waPhone" className="styled-input" value={formData.waPhone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Mensagem</label>
              <textarea name="waText" className="styled-input" rows="2" value={formData.waText} onChange={handleChange} />
            </div>
          </>
        )}

        {type === 'location' && (
          <>
            <div className="form-group">
              <label>Latitude</label>
              <input type="text" name="locLat" className="styled-input" value={formData.locLat} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Longitude</label>
              <input type="text" name="locLng" className="styled-input" value={formData.locLng} onChange={handleChange} />
            </div>
          </>
        )}

        {type === 'pix' && (
          <>
            <div className="form-group">
              <label>Chave Pix</label>
              <input type="text" name="pixKey" className="styled-input" value={formData.pixKey} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Nome do Recebedor</label>
              <input type="text" name="pixName" className="styled-input" value={formData.pixName} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Cidade</label>
              <input type="text" name="pixCity" className="styled-input" value={formData.pixCity} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Valor (Opcional)</label>
              <input type="number" step="0.01" name="pixAmount" className="styled-input" value={formData.pixAmount} onChange={handleChange} placeholder="0.00" />
            </div>
          </>
        )}

        {type === 'event' && (
          <>
            <div className="form-group">
              <label>Título do Evento</label>
              <input type="text" name="eventTitle" className="styled-input" value={formData.eventTitle} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Local</label>
              <input type="text" name="eventLoc" className="styled-input" value={formData.eventLoc} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Início</label>
              <input type="datetime-local" name="eventStart" className="styled-input" value={formData.eventStart} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Fim</label>
              <input type="datetime-local" name="eventEnd" className="styled-input" value={formData.eventEnd} onChange={handleChange} />
            </div>
          </>
        )}

        {type === 'appstore' && (
          <div className="form-group">
            <label>Link do App</label>
            <input type="url" name="appUrl" className="styled-input" value={formData.appUrl} onChange={handleChange} placeholder="https://play.google.com/..." />
          </div>
        )}

        {type === 'wifi' && (
          <>
            <div className="form-group">
              <label>Nome da Rede (SSID)</label>
              <input type="text" name="wifiSsid" className="styled-input" value={formData.wifiSsid} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Senha</label>
              <input type="password" name="wifiPass" className="styled-input" value={formData.wifiPass} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Segurança</label>
              <select name="wifiType" className="styled-input" value={formData.wifiType} onChange={handleChange}>
                <option value="WPA">WPA/WPA2</option>
                <option value="WEP">WEP</option>
                <option value="nopass">Nenhuma</option>
              </select>
            </div>
            <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center' }}>
              <input type="checkbox" name="wifiHidden" checked={formData.wifiHidden} onChange={handleChange} />
              <label style={{ margin: 0, marginLeft: '0.5rem' }}>Rede Oculta</label>
            </div>
          </>
        )}


        <div className="form-group" style={{ marginTop: '1rem', borderTop: '1px solid var(--border-color)', paddingTop: '1.5rem' }}>
          <label>{t.upload}</label>
          <div className="file-input-wrapper">
            <button className="btn-secondary">{t.btnUpload}</button>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
          {logoUrl && (
            <button className="btn-text-danger mt-2" onClick={() => setLogoUrl('')}>
              Remover Imagem
            </button>
          )}
          
          <button 
            className="btn-secondary mt-2" 
            style={{ marginTop: '1.5rem', background: 'var(--gradient-brand)', color: 'white', border: 'none' }}
            onClick={handleDownload}
          >
            {t.btnDownload}
          </button>
        </div>

      </div>
    </div>
  );
}
