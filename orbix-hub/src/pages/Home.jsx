import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroScene from '../components/HeroScene';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
        stagger: 0.2
      });

      gsap.from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      gsap.from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.6,
        ease: 'power3.out'
      });

      // Section reveals
      gsap.utils.toArray('.reveal-section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });

      // Card animations
      gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <main ref={heroRef}>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* 3D Scene Background */}
        <HeroScene />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at center, transparent 0%, var(--color-bg-primary) 100%)',
          zIndex: 2
        }} />

        {/* Content */}
        <div 
          ref={contentRef}
          className="container"
          style={{
            position: 'relative',
            zIndex: 10,
            textAlign: 'center',
            maxWidth: '900px',
            padding: 'var(--spacing-24) var(--spacing-6)'
          }}
        >
          <h1 className="hero-title" style={{
            fontSize: 'clamp(var(--font-size-4xl), 8vw, var(--font-size-6xl))',
            fontWeight: 'var(--font-weight-bold)',
            lineHeight: 'var(--line-height-tight)',
            letterSpacing: 'var(--letter-spacing-tight)',
            marginBottom: 'var(--spacing-6)',
            color: 'var(--color-text-primary)'
          }}>
            <span className="text-gradient">Digital Excellence</span>
            <br />
            <span style={{ color: 'var(--color-text-secondary)' }}>Reimagined</span>
          </h1>

          <p className="hero-subtitle" style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--line-height-relaxed)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-10)'
          }}>
            We craft immersive digital experiences that blend cutting-edge technology with sophisticated design. Transform your vision into reality with Orbix Hub Technologies.
          </p>

          <div className="hero-cta" style={{
            display: 'flex',
            gap: 'var(--spacing-4)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <a 
              href="/contact"
              style={{
                padding: 'var(--spacing-4) var(--spacing-8)',
                background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: '#ffffff',
                transition: 'all var(--transition-base)',
                boxShadow: 'var(--shadow-glow)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px)';
                e.target.style.boxShadow = '0 12px 40px rgba(99, 102, 241, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'var(--shadow-glow)';
              }}
            >
              Start a Project
            </a>
            <a 
              href="mailto:heatcliffgp99@gmail.com"
              style={{
                padding: 'var(--spacing-4) var(--spacing-8)',
                background: 'transparent',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border-hover)',
                transition: 'all var(--transition-base)'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = 'var(--color-accent-primary)';
                e.target.style.color = 'var(--color-accent-primary)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'var(--color-border-hover)';
                e.target.style.color = 'var(--color-text-primary)';
              }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="reveal-section" style={{
        padding: 'var(--spacing-32) 0',
        background: 'var(--color-bg-secondary)'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-16)'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: 'var(--letter-spacing-tight)',
              marginBottom: 'var(--spacing-4)'
            }}>
              Our <span className="text-gradient">Expertise</span>
            </h2>
            <p style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Comprehensive digital solutions tailored to elevate your brand
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-8)'
          }}>
            {[
              {
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern frameworks and best practices.',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                    <line x1="8" y1="21" x2="16" y2="21"/>
                    <line x1="12" y1="17" x2="12" y2="21"/>
                  </svg>
                )
              },
              {
                title: '3D & WebGL',
                description: 'Immersive 3D experiences and interactive visualizations using Three.js and custom shaders.',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 3l9 4.5v9L12 21 3 16.5v-9L12 3z"/>
                    <path d="M12 3v18"/>
                    <path d="M3 7.5l9 4.5 9-4.5"/>
                  </svg>
                )
              },
              {
                title: 'UI/UX Design',
                description: 'User-centered design that combines aesthetics with functionality for optimal experiences.',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                )
              },
              {
                title: 'Motion & Animation',
                description: 'Smooth animations and micro-interactions that bring interfaces to life with GSAP.',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10"/>
                    <polygon points="10 8 16 12 10 16 10 8"/>
                  </svg>
                )
              },
              {
                title: 'Performance Optimization',
                description: 'High-performance applications optimized for speed, SEO, and user engagement.',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                  </svg>
                )
              },
              {
                title: 'Consulting',
                description: 'Strategic technology consulting to help you make informed decisions for your digital presence.',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a2 2 0 0 0-3-1.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                )
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="feature-card"
                style={{
                  padding: 'var(--spacing-8)',
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all var(--transition-slow)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-accent-primary)',
                  marginBottom: 'var(--spacing-6)'
                }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-3)',
                  color: 'var(--color-text-primary)'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="reveal-section" style={{
        padding: 'var(--spacing-32) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <div style={{
            padding: 'var(--spacing-16)',
            background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--color-border-subtle)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-4xl)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-4)'
            }}>
              Ready to <span className="text-gradient">Transform</span> Your Digital Presence?
            </h2>
            <p style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              marginBottom: 'var(--spacing-8)',
              maxWidth: '600px',
              margin: '0 auto var(--spacing-8)'
            }}>
              Let's discuss how we can help bring your vision to life with innovative technology and design.
            </p>
            <div style={{
              display: 'flex',
              gap: 'var(--spacing-4)',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a 
                href="mailto:heatcliffgp99@gmail.com"
                style={{
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: '#ffffff',
                  transition: 'all var(--transition-base)',
                  boxShadow: 'var(--shadow-glow)'
                }}
              >
                Email Us
              </a>
              <a 
                href="tel:+919766443928"
                style={{
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  background: 'transparent',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-text-primary)',
                  border: '1px solid var(--color-border-hover)',
                  transition: 'all var(--transition-base)'
                }}
              >
                Call India: +91 97664 43928
              </a>
              <a 
                href="tel:+12393732663"
                style={{
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  background: 'transparent',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: 'var(--color-text-primary)',
                  border: '1px solid var(--color-border-hover)',
                  transition: 'all var(--transition-base)'
                }}
              >
                Call US: +1 239 373 2663
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
