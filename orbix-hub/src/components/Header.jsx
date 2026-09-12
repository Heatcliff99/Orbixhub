import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    
    // Initial reveal animation
    gsap.from(header, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    // Scroll effect
    ScrollTrigger.create({
      start: 'top -80',
      onUpdate: (self) => {
        if (self.scroll() > 50) {
          header.style.background = 'rgba(10, 10, 15, 0.95)';
          header.style.backdropFilter = 'blur(10px)';
          header.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.3)';
        } else {
          header.style.background = 'transparent';
          header.style.backdropFilter = 'none';
          header.style.boxShadow = 'none';
        }
      }
    });
  }, []);

  return (
    <header 
      ref={headerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'var(--header-height)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 var(--spacing-6)',
        zIndex: 'var(--z-header)',
        transition: 'all var(--transition-slow)',
        background: 'transparent',
        backdropFilter: 'none'
      }}
    >
      {/* Logo */}
      <a href="/" style={{ 
        fontSize: 'var(--font-size-xl)', 
        fontWeight: 'var(--font-weight-bold)',
        letterSpacing: 'var(--letter-spacing-tight)',
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-2)'
      }}>
        <span className="text-gradient">Orbix Hub</span>
        <span style={{ color: 'var(--color-text-secondary)' }}>Technologies</span>
      </a>

      {/* Navigation */}
      <nav>
        <ul style={{ 
          display: 'flex', 
          gap: 'var(--spacing-8)',
          alignItems: 'center'
        }}>
          <li>
            <a href="/services" style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-text-secondary)',
              position: 'relative',
              '&:hover': { color: 'var(--color-text-primary)' }
            }}>Services</a>
          </li>
          <li>
            <a href="/about" style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-text-secondary)',
              position: 'relative'
            }}>About</a>
          </li>
          <li>
            <a href="/work" style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-text-secondary)',
              position: 'relative'
            }}>Work</a>
          </li>
          <li>
            <a href="/contact" style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              color: 'var(--color-text-secondary)',
              position: 'relative'
            }}>Contact</a>
          </li>
          <li>
            <a 
              href="mailto:heatcliffgp99@gmail.com"
              style={{
                padding: 'var(--spacing-3) var(--spacing-6)',
                background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#ffffff',
                transition: 'transform var(--transition-base), box-shadow var(--transition-base)',
                boxShadow: 'var(--shadow-glow)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 30px rgba(99, 102, 241, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              Get in Touch
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
