import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
        <div 
        className="min-h-screen p-7 flex flex-col"
        style={{ 
            backgroundImage: "url('/images/spotted-bg.png')",
            backgroundRepeat: 'repeat-y',
            backgroundSize: '100% auto',
            backgroundPosition: 'top center'
        }}
        >
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
        </main>
        </div>
        <Footer />
    </>
  );
}