import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="bg-pale-pink shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/fea9fa2d-da6b-44d5-b417-f002e466f385/logo-02scoam-1764162273974.webp" alt="Croch-Khady Logo" className="h-12" />
          <span className="text-2xl font-bold text-gray-800">Croch-Khady</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-800 font-medium">Accueil</Link>
          <Link to="/catalogue" className="text-gray-600 hover:text-gray-800 font-medium">Catalogue</Link>
          <Link to="/devis-personnalise">
            <Button className="bg-gray-800 text-white hover:bg-gray-700">Devis Personnalisé</Button>
          </Link>
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button can be added here */}
        </div>
      </div>
    </header>
  );
}