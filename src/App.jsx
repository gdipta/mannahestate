import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Wind, Sun, Compass, Phone, Mail, Instagram } from 'lucide-react';

// --- Custom Hook for Scroll Reveal ---
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
};

// --- Dummy Data ---
const PROPERTIES = [
  {
    id: 1,
    title: 'The Obsidian Villa',
    location: 'Uluwatu Cliffs',
    price: '$2,450,000',
    specs: '4 Beds • 5 Baths • 800 sqm',
    image: 'https://images.unsplash.com/photo-1570290870545-277c2f5ad465?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9ic2lkaWFuJTIwdmlsbGF8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    title: 'Canopy Residence',
    location: 'Ubud Jungle',
    price: '$1,850,000',
    specs: '3 Beds • 3 Baths • 600 sqm',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Coastal Pavilion',
    location: 'Canggu Beach',
    price: '$3,200,000',
    specs: '5 Beds • 6 Baths • 1200 sqm',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Navbar Background on Scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section helper
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-sans overflow-x-hidden selection:bg-stone-700 selection:text-white">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md py-4 border-b border-stone-800' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-row items-center justify-between">
          <div className="cursor-pointer flex-shrink-0" onClick={() => scrollTo('home')}>
            <img
              src="/logo_white.png"
              alt="Mannah Logo"
              className="h-8 w-auto object-contain block"
            />
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex flex-row items-center space-x-8 text-sm uppercase tracking-widest text-stone-300">
            <button onClick={() => scrollTo('vision')} className="hover:text-white transition-colors">Vision</button>
            <button onClick={() => scrollTo('properties')} className="hover:text-white transition-colors">Properties</button>
            <button onClick={() => scrollTo('lifestyle')} className="hover:text-white transition-colors">Lifestyle</button>
          </div>
          {/* CTA Button */}
          <button
            onClick={() => scrollTo('contact')}
            className="flex-shrink-0 border border-stone-600 px-5 py-2 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            Inquire
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=2000"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]"></div>
        </div>
        <div className="relative z-10 text-center px-6 mt-20">
          <p className="text-stone-400 tracking-[0.3em] uppercase text-sm mb-6 animate-pulse">Reimagining Habitat</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-8 max-w-5xl mx-auto leading-tight">
            Architecture in Harmony with Nature
          </h1>
          <button 
            onClick={() => scrollTo('properties')}
            className="group flex items-center space-x-3 mx-auto text-sm uppercase tracking-widest border-b border-stone-500 pb-2 hover:border-white transition-colors"
          >
            <span>Explore Collections</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-100 leading-tight">
                Not just spaces.<br />Ecosystems.
              </h2>
              <p className="text-stone-400 leading-relaxed mb-6 font-light">
                We design and curate properties that blur the boundaries between the built environment and the natural world. Inspired by the raw beauty of our surroundings, every structure is a testament to sustainable luxury and mindful living.
              </p>
              <p className="text-stone-400 leading-relaxed font-light">
                Our vision is to create sanctuaries where architecture doesn't interrupt nature, but rather, frames it. A return to essentialism without compromising on modern comfort.
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80&w=1200" 
                alt="Architecture details" 
                className="w-full h-full object-cover image-hover-zoom"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Properties Section */}
      <section id="properties" className="py-32 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div>
                <p className="text-stone-500 tracking-[0.2em] uppercase text-xs mb-3">Curated Spaces</p>
                <h2 className="text-4xl md:text-5xl font-serif">Featured Sanctuaries</h2>
              </div>
              <button className="hidden md:flex items-center space-x-2 text-sm uppercase tracking-widest text-stone-400 hover:text-white transition-colors">
                <span>View All Properties</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROPERTIES.map((prop, index) => (
              <PropertyCard key={prop.id} property={prop} delay={index * 200} />
            ))}
          </div>
          
          <button className="md:hidden mt-12 w-full border border-stone-600 py-4 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            View All Properties
          </button>
        </div>
      </section>

      {/* Lifestyle/Features Section */}
      <section id="lifestyle" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Designed for Living</h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light">Every element is meticulously selected to enhance your connection with the environment, promoting a lifestyle of tranquility and intention.</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-12 text-center border-y border-stone-800 py-16">
          <Reveal>
            <div className="flex flex-col items-center">
              <Sun className="w-8 h-8 text-stone-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Passive Design</h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">Harnessing natural light and cross-ventilation to minimize energy footprint while maximizing comfort.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center">
              <Wind className="w-8 h-8 text-stone-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Breathable Spaces</h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">Open-plan layouts that flow seamlessly into outdoor living areas, dissolving the walls between inside and out.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center">
              <Compass className="w-8 h-8 text-stone-500 mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-serif mb-3">Prime Locations</h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed">Situated in carefully selected pristine environments, offering uncompromised privacy and breathtaking vistas.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#050505] pt-32 pb-12 border-t border-stone-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8 text-stone-300">Let's Connect.</h2>
              <p className="text-stone-500 mb-10 max-w-md font-light">
                Register your interest to receive exclusive portfolios and arrange private viewings of our upcoming collections.
              </p>
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-4 text-stone-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                  <span className="font-light">inquiries@mannah-realestate.com</span>
                </a>
                <a href="#" className="flex items-center space-x-4 text-stone-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                  <span className="font-light">+62 812 3456 7890</span>
                </a>
              </div>
            </div>
            
            <div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows={4}
                    className="w-full bg-transparent border-b border-stone-700 py-3 text-stone-200 placeholder-stone-600 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm hover:bg-stone-200 transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800 text-stone-600 text-sm">
            <div className="text-2xl font-serif tracking-widest text-stone-500 mb-4 md:mb-0">
              MANNAH.
            </div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="hover:text-stone-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-stone-300 transition-colors">Terms</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-stone-300 transition-colors"><Instagram className="w-5 h-5" /></a>
              <span>© {new Date().getFullYear()} MANNAH Real Estate</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Helper Components ---

function Reveal({ children }) {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
    >
      {children}
    </div>
  );
}

function PropertyCard({ property }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div 
      ref={ref}
      className={`group cursor-pointer reveal-hidden ${isVisible ? 'reveal-visible' : ''}`}
    >
      <div className="relative h-[400px] overflow-hidden mb-6">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-full object-cover image-hover-zoom"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 text-xs tracking-widest uppercase">
          Available
        </div>
      </div>
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-serif text-stone-100 group-hover:text-white transition-colors">{property.title}</h3>
          <span className="text-lg font-light text-stone-300">{property.price}</span>
        </div>
        <div className="flex items-center space-x-2 text-stone-500 text-sm mb-3">
          <MapPin className="w-4 h-4" />
          <span>{property.location}</span>
        </div>
        <p className="text-stone-400 text-sm font-light border-t border-stone-800 pt-3">
          {property.specs}
        </p>
      </div>
    </div>
  );
}
