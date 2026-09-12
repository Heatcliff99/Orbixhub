import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-title', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.service-detail-card', {
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 75%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Custom Web Development',
      description: 'We build high-performance websites and web applications using modern frameworks like React, Next.js, and Vite. Our solutions are scalable, maintainable, and optimized for speed.',
      features: ['Single Page Applications', 'Progressive Web Apps', 'E-commerce Solutions', 'API Integration', 'Database Design']
    },
    {
      title: '3D & WebGL Experiences',
      description: 'Transform your digital presence with immersive 3D graphics and interactive visualizations. We leverage Three.js, custom shaders, and WebGL to create memorable experiences.',
      features: ['Interactive 3D Scenes', 'Product Visualizations', 'Data Visualization', 'Virtual Showrooms', 'Gaming Elements']
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that balances aesthetics with functionality. We create intuitive interfaces that delight users and drive engagement through thoughtful design systems.',
      features: ['Design Systems', 'Wireframing & Prototyping', 'User Research', 'Accessibility', 'Brand Identity']
    },
    {
      title: 'Motion Design & Animation',
      description: 'Bring your interface to life with smooth animations and micro-interactions. Using GSAP and modern CSS, we create engaging motion that enhances user experience.',
      features: ['Scroll Animations', 'Page Transitions', 'Micro-interactions', 'Loading Animations', 'Video Integration']
    },
    {
      title: 'Performance Optimization',
      description: 'Speed matters. We optimize every aspect of your application for maximum performance, ensuring fast load times and smooth interactions across all devices.',
      features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'CDN Integration', 'Core Web Vitals']
    },
    {
      title: 'Technical Consulting',
      description: 'Get expert guidance on technology decisions, architecture planning, and digital strategy. We help you make informed choices that align with your business goals.',
      features: ['Technology Assessment', 'Architecture Review', 'Migration Planning', 'Best Practices', 'Team Training']
    }
  ];

  return (
    <main ref={pageRef} style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero Section */}
      <section style={{
        padding: 'var(--spacing-24) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 className="page-title" style={{
            fontSize: 'clamp(var(--font-size-4xl), 6vw, var(--font-size-5xl))',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--letter-spacing-tight)',
            marginBottom: 'var(--spacing-6)'
          }}>
            Our <span className="text-gradient">Services</span>
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Comprehensive digital solutions designed to elevate your brand and deliver exceptional results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid" style={{
        padding: 'var(--spacing-16) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gap: 'var(--spacing-8)'
          }}>
            {services.map((service, index) => (
              <div 
                key={index}
                className="service-detail-card"
                style={{
                  padding: 'var(--spacing-10)',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all var(--transition-slow)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h2 style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-4)',
                  color: 'var(--color-text-primary)'
                }}>
                  {service.title}
                </h2>
                <p style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)',
                  marginBottom: 'var(--spacing-6)'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--spacing-3)'
                }}>
                  {service.features.map((feature, i) => (
                    <li 
                      key={i}
                      style={{
                        padding: 'var(--spacing-2) var(--spacing-4)',
                        background: 'rgba(99, 102, 241, 0.1)',
                        borderRadius: 'var(--radius-full)',
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-accent-primary)'
                      }}
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: 'var(--spacing-32) 0',
        background: 'var(--color-bg-secondary)'
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            marginBottom: 'var(--spacing-16)'
          }}>
            <h2 style={{
              fontSize: 'var(--font-size-3xl)',
              fontWeight: 'var(--font-weight-bold)',
              marginBottom: 'var(--spacing-4)'
            }}>
              Our <span className="text-gradient">Process</span>
            </h2>
            <p style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              A proven methodology that delivers results
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-8)',
            textAlign: 'center'
          }}>
            {[
              { step: '01', title: 'Discovery', desc: 'Understanding your goals and requirements' },
              { step: '02', title: 'Strategy', desc: 'Planning the optimal approach' },
              { step: '03', title: 'Design', desc: 'Creating beautiful, functional interfaces' },
              { step: '04', title: 'Development', desc: 'Building with precision and care' },
              { step: '05', title: 'Launch', desc: 'Deploying and optimizing for success' }
            ].map((item, index) => (
              <div key={index}>
                <div style={{
                  fontSize: 'var(--font-size-5xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 'var(--spacing-4)',
                  opacity: 0.8
                }}>
                  {item.step}
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'var(--spacing-24) 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 'var(--font-weight-bold)',
            marginBottom: 'var(--spacing-6)'
          }}>
            Ready to discuss your project?
          </h2>
          <a 
            href="mailto:heatcliffgp99@gmail.com"
            style={{
              display: 'inline-block',
              padding: 'var(--spacing-4) var(--spacing-8)',
              background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
              borderRadius: 'var(--radius-full)',
              fontSize: 'var(--font-size-base)',
              fontWeight: 'var(--font-weight-semibold)',
              color: '#ffffff',
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
