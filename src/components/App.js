import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Articles from './Articles';
import Footer from './Footer';

function App() {
  return (
    <div className="font-open text-center overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Articles />
      </main>
      <Footer />
    </div>
  )
}

export default App;
