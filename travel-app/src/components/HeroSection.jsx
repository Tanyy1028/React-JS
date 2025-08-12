import './HeroSection.css';
import SearchForm from './SearchForm';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Let's make a tour</h1>
        <h2><strong>Discover the beauty</strong></h2>
        <SearchForm />
      </div>
      
    </section>
  );
}

export default HeroSection;

