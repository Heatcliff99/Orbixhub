import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;
    
    gsap.from(footer, {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }, []);

  return (
    <footer 
      ref={footerRef}
      style={{
        background: 'var(--color-bg-secondary)',
        borderTop: '1px solid var(--color-border-subtle)',
        padding: 'var(--spacing-16) 0',
        marginTop: 'var(--spacing-32)'
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-12)',
          marginBottom: 'var(--spacing-12)'
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontSize: 'var(--font-size-xl)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-4)',
              letterSpacing: 'var(--letter-spacing-tight)'
            }}>
              <span className="text-gradient">Orbix Hub</span>
              <span style={{ color: 'var(--color-text-secondary)', fontWeight: 'var(--font-weight-normal)' }}> Technologies</span>
            </h3>
            <p style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)',
              lineHeight: 'var(--line-height-relaxed)',
              maxWidth: '300px'
            }}>
              Crafting premium digital experiences with cutting-edge technology and innovative design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: 'var(--spacing-6)',
              color: 'var(--color-text-primary)'
            }}>Navigation</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <li><a href="/" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Home</a></li>
              <li><a href="/services" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Services</a></li>
              <li><a href="/about" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>About</a></li>
              <li><a href="/work" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Work</a></li>
              <li><a href="/contact" style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: 'var(--spacing-6)',
              color: 'var(--color-text-primary)'
            }}>Contact</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
              <li>
                <a 
                  href="mailto:heatcliffgp99@gmail.com"
                  style={{ 
                    color: 'var(--color-text-secondary)', 
                    fontSize: 'var(--font-size-sm)',
                    transition: 'color var(--transition-base)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >
                  heatcliffgp99@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919766443928"
                  style={{ 
                    color: 'var(--color-text-secondary)', 
                    fontSize: 'var(--font-size-sm)',
                    transition: 'color var(--transition-base)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >
                  India: +91 97664 43928
                </a>
              </li>
              <li>
                <a 
                  href="tel:+12393732663"
                  style={{ 
                    color: 'var(--color-text-secondary)', 
                    fontSize: 'var(--font-size-sm)',
                    transition: 'color var(--transition-base)'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--color-accent-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--color-text-secondary)'}
                >
                  US: +1 239 373 2663
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: 'var(--letter-spacing-wide)',
              marginBottom: 'var(--spacing-6)',
              color: 'var(--color-text-primary)'
            }}>Connect</h4>
            <div style={{ display: 'flex', gap: 'var(--spacing-4)' }}>
              <a 
                href="#" 
                aria-label="LinkedIn"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-bg-tertiary)',
                  border: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-accent-primary)';
                  e.target.style.borderColor = 'var(--color-accent-primary)';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--color-bg-tertiary)';
                  e.target.style.borderColor = 'var(--color-border-subtle)';
                  e.target.style.color = 'var(--color-text-secondary)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-bg-tertiary)',
                  border: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-accent-primary)';
                  e.target.style.borderColor = 'var(--color-accent-primary)';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--color-bg-tertiary)';
                  e.target.style.borderColor = 'var(--color-border-subtle)';
                  e.target.style.color = 'var(--color-text-secondary)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="#" 
                aria-label="GitHub"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: 'var(--radius-full)',
                  background: 'var(--color-bg-tertiary)',
                  border: '1px solid var(--color-border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-secondary)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--color-accent-primary)';
                  e.target.style.borderColor = 'var(--color-accent-primary)';
                  e.target.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--color-bg-tertiary)';
                  e.target.style.borderColor = 'var(--color-border-subtle)';
                  e.target.style.color = 'var(--color-text-secondary)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--color-border-subtle)',
          paddingTop: 'var(--spacing-8)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--spacing-4)'
        }}>
          <p style={{
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-muted)'
          }}>
            © {new Date().getFullYear()} Orbix Hub Technologies. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-6)' }}>
            <a href="#" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
