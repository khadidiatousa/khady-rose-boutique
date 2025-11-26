import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { toast } from "sonner"

export default function CustomQuotePage() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const description = formData.get('description');

    if (!name || !email || !description) {
        toast.error('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    toast.success('Votre demande de devis a été envoyée avec succès ! Nous vous répondrons bientôt.');
    // Here you would typically send the data to a server
    e.currentTarget.reset();
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Demande de Devis Personnalisé</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Donnez vie à votre projet de crochet unique. Décrivez-nous votre idée ou téléversez une image d'inspiration.</p>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom Complet</label>
                <Input id="name" name="name" type="text" placeholder="Votre nom" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Adresse Email</label>
                <Input id="email" name="email" type="email" placeholder="votreadresse@email.com" required />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description de votre projet</label>
                <Textarea id="description" name="description" placeholder="Décrivez en détail la pièce que vous imaginez (type, couleurs, taille, etc.)" required rows={6}/>
              </div>
              <div>
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">Image d'inspiration (Optionnel)</label>
                <Input id="file-upload" name="file-upload" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pale-pink file:text-gray-800 hover:file:bg-pink-100"/>
              </div>
              <Button type="submit" className="w-full bg-gray-800 text-white hover:bg-gray-700">Envoyer la Demande</Button>
            </form>
          </div>
          <div className="hidden md:block">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/fea9fa2d-da6b-44d5-b417-f002e466f385/quote-image-bhgbn0n-1764162310870.webp" 
                alt="Inspiration pour le crochet" 
                className="rounded-lg shadow-xl w-full h-full object-cover"
              />
          </div>
        </div>
      </div>
    </div>
  )
}