import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Contact() {
  const formRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-title', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.contact-info', {
        x: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out'
      });

      gsap.from(formRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - in production, this would send to a backend
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <main ref={pageRef} style={{ paddingTop: 'var(--header-height)' }}>
      {/* Hero Section */}
      <section style={{
        padding: 'var(--spacing-24) 0'
      }}>
        <div className="container">
          <h1 className="contact-title" style={{
            fontSize: 'clamp(var(--font-size-4xl), 6vw, var(--font-size-5xl))',
            fontWeight: 'var(--font-weight-bold)',
            letterSpacing: 'var(--letter-spacing-tight)',
            marginBottom: 'var(--spacing-4)',
            textAlign: 'center'
          }}>
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-16)',
            textAlign: 'center'
          }}>
            Ready to start your project? We'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section style={{
        padding: 'var(--spacing-16) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: 'var(--spacing-16)'
          }}>
            {/* Contact Info */}
            <div className="contact-info">
              <h2 style={{
                fontSize: 'var(--font-size-2xl)',
                fontWeight: 'var(--font-weight-semibold)',
                marginBottom: 'var(--spacing-6)'
              }}>
                Contact Information
              </h2>
              <p style={{
                fontSize: 'var(--font-size-base)',
                color: 'var(--color-text-secondary)',
                lineHeight: 'var(--line-height-relaxed)',
                marginBottom: 'var(--spacing-8)'
              }}>
                Fill out the form or reach us directly through email or phone. We typically respond within 24 hours.
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--spacing-6)'
              }}>
                {/* Email */}
                <div style={{
                  padding: 'var(--spacing-6)',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-4)',
                    marginBottom: 'var(--spacing-3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="M22 6l-10 7L2 6"/>
                    </svg>
                    <span style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)'
                    }}>Email</span>
                  </div>
                  <a 
                    href="mailto:heatcliffgp99@gmail.com"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-accent-primary)',
                      wordBreak: 'break-all'
                    }}
                  >
                    heatcliffgp99@gmail.com
                  </a>
                </div>

                {/* India Phone */}
                <div style={{
                  padding: 'var(--spacing-6)',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-4)',
                    marginBottom: 'var(--spacing-3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)'
                    }}>India Hotline</span>
                  </div>
                  <a 
                    href="tel:+919766443928"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-accent-primary)'
                    }}
                  >
                    +91 97664 43928
                  </a>
                </div>

                {/* US Phone */}
                <div style={{
                  padding: 'var(--spacing-6)',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-4)',
                    marginBottom: 'var(--spacing-3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-primary)" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)'
                    }}>US International</span>
                  </div>
                  <a 
                    href="tel:+12393732663"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: 'var(--color-accent-primary)'
                    }}
                  >
                    +1 239 373 2663
                  </a>
                </div>

                {/* WhatsApp */}
                <div style={{
                  padding: 'var(--spacing-6)',
                  background: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#25D366';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-4)',
                    marginBottom: 'var(--spacing-3)'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-semibold)',
                      color: 'var(--color-text-primary)'
                    }}>WhatsApp</span>
                  </div>
                  <a 
                    href="https://wa.me/919766443928"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 'var(--font-size-base)',
                      color: '#25D366'
                    }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-6)'
            }}>
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-4)',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-base)',
                    transition: 'border-color var(--transition-base), box-shadow var(--transition-base)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-primary)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-subtle)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-4)',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-base)',
                    transition: 'border-color var(--transition-base), box-shadow var(--transition-base)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-primary)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-subtle)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="subject" style={{
                  display: 'block',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-4)',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-base)',
                    transition: 'border-color var(--transition-base), box-shadow var(--transition-base)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-primary)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-subtle)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label htmlFor="message" style={{
                  display: 'block',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-primary)',
                  marginBottom: 'var(--spacing-2)'
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-4)',
                    background: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--color-text-primary)',
                    fontSize: 'var(--font-size-base)',
                    resize: 'vertical',
                    transition: 'border-color var(--transition-base), box-shadow var(--transition-base)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--color-accent-primary)';
                    e.target.style.boxShadow = '0 0 0 3px rgba(99, 102, 241, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--color-border-subtle)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: 'var(--spacing-4) var(--spacing-8)',
                  background: 'linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary))',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-base)',
                  fontWeight: 'var(--font-weight-semibold)',
                  color: '#ffffff',
                  boxShadow: 'var(--shadow-glow)',
                  transition: 'all var(--transition-base)',
                  alignSelf: 'flex-start'
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
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
