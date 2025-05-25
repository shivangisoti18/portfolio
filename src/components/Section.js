import React, { useEffect, useRef } from 'react';
import './Section.css';

const Section = ({ id, title, children, className = '' }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section section-${id} ${className}`}
    >
      <div className="section-content">
        {title && <h2 className="section-title">{title}</h2>}
        {children}
      </div>
    </section>
  );
};

export default Section;
