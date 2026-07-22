export const generateEmail = (email, subject, body) => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

export const generateVCard = (firstName, lastName, phone, email, company) => {
  return `BEGIN:VCARD\nVERSION:3.0\nN:${lastName};${firstName}\nFN:${firstName} ${lastName}\nORG:${company}\nTEL;TYPE=CELL:${phone}\nEMAIL:${email}\nEND:VCARD`;
};

export const generateWhatsApp = (phone, text) => {
  const cleanPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
};

export const generateLocation = (lat, lng) => {
  return `geo:${lat},${lng}`;
};

export const generateEvent = (title, location, start, end) => {
  const formatTime = (timeStr) => {
    if (!timeStr) return '';
    // timeStr from datetime-local is YYYY-MM-DDTHH:mm
    return timeStr.replace(/[-:]/g, '') + '00Z'; 
  };
  return `BEGIN:VEVENT\nSUMMARY:${title}\nLOCATION:${location}\nDTSTART:${formatTime(start)}\nDTEND:${formatTime(end)}\nEND:VEVENT`;
};

export const generateAppStore = (url) => {
  return url; // Usually just a link tree or direct store link
};

export const generateWiFi = (ssid, password, type, hidden) => {
  return `WIFI:T:${type};S:${ssid};P:${password};H:${hidden ? 'true' : 'false'};;`;
};

// --- PIX PAYLOAD GENERATOR ---
function crc16(payload) {
  let crc = 0xFFFF;
  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) > 0) {
        crc = (crc << 1) ^ 0x1021;
      } else {
        crc = crc << 1;
      }
    }
  }
  return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, '0');
}

export const generatePix = (key, name, city, amount, txid = '***') => {
  const formatField = (id, value) => {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
  };

  const payloadKey = formatField('00', 'br.gov.bcb.pix') + formatField('01', key);
  const merchantAccountInfo = formatField('26', payloadKey);
  const merchantCategoryCode = formatField('52', '0000');
  const transactionCurrency = formatField('53', '986');
  
  let transactionAmount = '';
  if (amount) {
    transactionAmount = formatField('54', parseFloat(amount).toFixed(2));
  }
  
  const countryCode = formatField('58', 'BR');
  const merchantName = formatField('59', name || 'Nome');
  const merchantCity = formatField('60', city || 'Cidade');
  
  const additionalDataField = formatField('62', formatField('05', txid));

  const payload = [
    formatField('00', '01'), // Payload Format Indicator
    merchantAccountInfo,
    merchantCategoryCode,
    transactionCurrency,
    transactionAmount,
    countryCode,
    merchantName,
    merchantCity,
    additionalDataField,
    '6304' // CRC16 prefix
  ].join('');

  return payload + crc16(payload);
};
