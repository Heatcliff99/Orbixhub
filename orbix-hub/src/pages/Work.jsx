import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Work() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-title', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      gsap.from('.project-card', {
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 75%'
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });
    });

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'Nebula Finance',
      category: 'Web Application',
      description: 'A modern fintech dashboard with real-time data visualization and interactive charts.',
      gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))'
    },
    {
      title: 'Aura Commerce',
      category: 'E-commerce Platform',
      description: 'Premium shopping experience with 3D product previews and seamless checkout flow.',
      gradient: 'linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.3))'
    },
    {
      title: 'Vertex Analytics',
      category: 'Data Visualization',
      description: 'Interactive analytics platform with custom WebGL charts and real-time updates.',
      gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(16, 185, 129, 0.3))'
    },
    {
      title: 'Quantum Labs',
      category: 'Corporate Website',
      description: 'Futuristic corporate presence with immersive 3D elements and smooth animations.',
      gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(99, 102, 241, 0.3))'
    },
    {
      title: 'Echo Media',
      category: 'Media Platform',
      description: 'Content streaming platform with elegant UI and advanced filtering capabilities.',
      gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(239, 68, 68, 0.3))'
    },
    {
      title: 'Prism Studio',
      category: 'Portfolio Site',
      description: 'Creative agency portfolio showcasing work with stunning visual transitions.',
      gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.3), rgba(139, 92, 246, 0.3))'
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
            Our <span className="text-gradient">Work</span>
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            A showcase of our finest projects, demonstrating our commitment to excellence in digital design and development
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid" style={{
        padding: 'var(--spacing-16) 0'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--spacing-8)'
          }}>
            {projects.map((project, index) => (
              <article 
                key={index}
                className="project-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid var(--color-border-subtle)',
                  background: project.gradient,
                  transition: 'all var(--transition-slow)',
                  minHeight: '300px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: 'var(--spacing-8)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.borderColor = 'var(--color-accent-primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--color-border-subtle)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to top, rgba(10, 10, 15, 0.9), transparent)',
                  zIndex: 1
                }} />
                
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <span style={{
                    display: 'inline-block',
                    padding: 'var(--spacing-2) var(--spacing-4)',
                    background: 'rgba(99, 102, 241, 0.2)',
                    borderRadius: 'var(--radius-full)',
                    fontSize: 'var(--font-size-xs)',
                    fontWeight: 'var(--font-weight-medium)',
                    color: 'var(--color-accent-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: 'var(--letter-spacing-wide)',
                    marginBottom: 'var(--spacing-3)'
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{
                    fontSize: 'var(--font-size-2xl)',
                    fontWeight: 'var(--font-weight-semibold)',
                    marginBottom: 'var(--spacing-2)',
                    color: 'var(--color-text-primary)'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: 'var(--font-size-sm)',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 'var(--line-height-relaxed)'
                  }}>
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
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
              Technical <span className="text-gradient">Capabilities</span>
            </h2>
            <p style={{
              fontSize: 'var(--font-size-lg)',
              color: 'var(--color-text-secondary)',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Technologies and frameworks we master
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'var(--spacing-4)'
          }}>
            {['React', 'Next.js', 'Vite', 'Three.js', 'WebGL', 'GSAP', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Figma'].map((tech, index) => (
              <span 
                key={index}
                style={{
                  padding: 'var(--spacing-3) var(--spacing-6)',
                  background: 'var(--color-bg-tertiary)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-medium)',
                  color: 'var(--color-text-secondary)',
                  border: '1px solid var(--color-border-subtle)',
                  transition: 'all var(--transition-base)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = 'var(--color-accent-primary)';
                  e.target.style.color = 'var(--color-accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'var(--color-border-subtle)';
                  e.target.style.color = 'var(--color-text-secondary)';
                }}
              >
                {tech}
              </span>
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
            Want to see more?
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '600px',
            margin: '0 auto var(--spacing-8)'
          }}>
            Let's discuss how we can help bring your project to life
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
            Start a Project
          </a>
        </div>
      </section>
    </main>
  );
}
