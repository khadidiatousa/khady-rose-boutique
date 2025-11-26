import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';

const products = [
  {
    name: 'Sac à main de luxe',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fea9fa2d-da6b-44d5-b417-f002e466f385/product1-38ur2ex-1764162288983.webp',
    price: '120 €',
  },
  {
    name: 'Ensemble Bébé Douceur',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fea9fa2d-da6b-44d5-b417-f002e466f385/product2-c6r2mnw-1764162297198.webp',
    price: '75 €',
  },
  {
    name: 'Robe d\'été Bohème',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/fea9fa2d-da6b-44d5-b417-f002e466f385/product3-a1hn74f-1764162303704.webp',
    price: '150 €',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[60vh] text-white"
        style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/fea9fa2d-da6b-44d5-b417-f002e466f385/hero-banner-whtuytb-1764162282031.webp')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">L'Art du Crochet, Fait Main avec Amour</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">Découvrez des créations uniques et personnalisées qui racontent une histoire.</p>
          <Link to="/catalogue">
            <Button size="lg" className="bg-pale-pink text-gray-800 hover:bg-pink-100">Voir nos créations</Button>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nos Créations Populaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.name} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-gray-800">{product.name}</CardTitle>
                </CardContent>
                <CardFooter className="flex justify-between items-center p-6 bg-gray-50">
                  <span className="text-lg font-bold text-gray-800">{product.price}</span>
                  <Button variant="outline">Voir le produit</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/catalogue">
              <Button size="lg" className="bg-gray-800 text-white hover:bg-gray-700">Explorer le Catalogue Complet</Button>
            </Link>
          </div>
        </div>
      </section>

       {/* Custom Quote Section */}
      <section className="bg-pale-pink py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Une Idée ? Un Projet Sur-Mesure ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">De la pièce unique au cadeau d'exception, nous donnons vie à vos envies. Contactez-nous pour un devis personnalisé.</p>
          <Link to="/devis-personnalise">
            <Button size="lg" className="bg-white text-gray-800 shadow-md hover:bg-gray-100">Demander un Devis</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}