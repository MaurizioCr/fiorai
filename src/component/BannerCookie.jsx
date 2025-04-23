import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(
    localStorage.getItem('cookieConsent') === 'true'
  );

  useEffect(() => {
    if (accepted) {
      localStorage.setItem('cookieConsent', 'true');
    }
  }, [accepted]);

  if (accepted) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#f1f1f1',
      padding: '1rem',
      textAlign: 'center',
      zIndex: 9999
    }}>
      <p style={{ marginBottom: '0.5rem' }}>
        Utilizziamo cookie per migliorare l’esperienza sul sito. <a href="/cookie-policy">Scopri di più</a>
      </p>
      <button
        onClick={() => setAccepted(true)}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#4CAF50',
          color: '#fff',
          border: 'none',
          borderRadius: '5px'
        }}
      >
        Accetto
      </button>
    </div>
  );
}
