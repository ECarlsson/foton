import React from 'react';
import facebook from './facebook.svg';

export default function Footer() {
  return (
    <footer>
      <div>
        Om du vill använda bilder eller vill få bilder borttagna, kontakta oss via <a href="mailto:foton@ftek.se">mailto:foton@ftek.se</a> eller via vår <a href="https://www.facebook.com/FotonChalmers/" target="_blank" rel="noopener noreferrer">facebooksida</a>.
      </div>
      <div>
        <a href="https://www.facebook.com/FotonChalmers/" target="_blank" rel="noopener noreferrer" className="logo logo-facebook">
          <img src={facebook} alt="Besök oss på Facebook" />
        </a>
      </div>
      <div>
        <a href="https://github.com/ECarlsson/foton" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://github.com/ECarlsson/foton/blob/master/readme.md#api" target="_blank" rel="noopener noreferrer">API</a>
      </div>
      <div>&copy; {(new Date()).getFullYear()} Fysikteknologsektionen</div>
    </footer>
  );
}