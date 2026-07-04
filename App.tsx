import { useRoute } from './router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import { PrivacyPage, TermsPage } from './pages/LegalPages';

function App() {
  const route = useRoute();

  const renderPage = () => {
    switch (route.name) {
      case 'home':
        return <HomePage />;
      case 'shop':
        return <ShopPage category={route.category} query={route.q} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'faq':
        return <FaqPage />;
      case 'privacy':
        return <PrivacyPage />;
      case 'terms':
        return <TermsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-sand-50">
      <Navbar />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
