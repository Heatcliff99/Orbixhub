import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-title', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.about-content', {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      gsap.from('.about-image', {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });

      gsap.from('.value-card', {
        scrollTrigger: {
          trigger: '.values-section',
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

  return (
    <main ref={pageRef} style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero Section */}
      <section style={{
        padding: 'var(--spacing-24) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-16)',
            alignItems: 'center'
          }}>
            <div className="about-content">
              <h1 className="about-title" style={{
                fontSize: 'clamp(var(--font-size-4xl), 6vw, var(--font-size-5xl))',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: 'var(--letter-spacing-tight)',
                marginBottom: 'var(--spacing-6)'
              }}>
                About <span className="text-gradient">Orbix Hub</span> Technologies
              </h1>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-6)'
              }}>
                We are a forward-thinking digital agency passionate about creating exceptional web experiences. Founded on the principles of innovation, quality, and client success, we combine cutting-edge technology with artistic vision to deliver results that exceed expectations.
              </p>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-8)'
              }}>
                Our team of expert developers, designers, and strategists work collaboratively to transform complex challenges into elegant solutions. We believe in the power of technology to drive business growth and create meaningful connections between brands and their audiences.
              </p>
              <a 
                href="/contact"
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
                Work With Us
              </a>
            </div>
            
            <div className="about-image" style={{
              position: 'relative',
              height: '400px',
              background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.2))',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid var(--color-border-subtle)',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.3), transparent 70%)',
                animation: 'pulse 4s ease-in-out infinite'
              }} />
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: 'var(--font-size-6xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  5+
                </div>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  marginTop: 'var(--spacing-2)'
                }}>
                  Years of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section" style={{
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
              Our <span className="text-gradient">Values</span>
            </h2>
            <p style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              The principles that guide everything we do
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-8)'
          }}>
            {[
              {
                title: 'Innovation',
                description: 'We embrace new technologies and creative approaches to solve problems in unique ways.',
                icon: '💡'
              },
              {
                title: 'Quality',
                description: 'Every project receives our full attention to detail and commitment to excellence.',
                icon: '✨'
              },
              {
                title: 'Collaboration',
                description: 'We work closely with clients as partners, ensuring alignment and shared success.',
                icon: '🤝'
              },
              {
                title: 'Transparency',
                description: 'Open communication and honest feedback form the foundation of our relationships.',
                icon: '🔍'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="value-card"
                style={{
                  padding: 'var(--spacing-8)',
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border-subtle)',
                  textAlign: 'center',
                  transition: 'all var(--transition-slow)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: 'var(--spacing-4)'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: 'var(--font-size-xl)',
                  fontWeight: 'var(--font-weight-semibold)',
                  marginBottom: 'var(--spacing-3)'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-relaxed)'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: 'var(--spacing-32) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--spacing-8)',
            textAlign: 'center'
          }}>
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div key={index}>
                <div style={{
                  fontSize: 'var(--font-size-5xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  {stat.number}
                </div>
                <p style={{
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--color-text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: 'var(--letter-spacing-wide)'
                }}>
                  {stat.label}
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
            Let's Build Something Amazing Together
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-8)'
          }}>
            Ready to take your digital presence to the next level? Get in touch with us today.
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
                boxShadow: 'var(--shadow-glow)'
              }}
            >
              Email Us
            </a>
            <a 
              href="/contact"
              style={{
                padding: 'var(--spacing-4) var(--spacing-8)',
                background: 'transparent',
                borderRadius: 'var(--radius-full)',
                fontSize: 'var(--font-size-base)',
                fontWeight: 'var(--font-weight-semibold)',
                color: 'var(--color-text-primary)',
                border: '1px solid var(--color-border-hover)'
              }}
            >
              Contact Page
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
