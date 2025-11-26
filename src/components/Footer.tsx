export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 Croch-Khady. Tous droits réservés.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-pale-pink">Facebook</a>
          <a href="#" className="hover:text-pale-pink">Instagram</a>
          <a href="#" className="hover:text-pale-pink">Pinterest</a>
        </div>
      </div>
    </footer>
  );
}