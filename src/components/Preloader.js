import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Preloader.css';

const Preloader = () => {
  useEffect(() => {
    const timeline = gsap.timeline();

    // Анимация быстрого появления
    timeline
      .fromTo(
        '.preloader',
        { y: '100%' }, // Начинает за экраном внизу
        { y: '0%', duration: 0.6, ease: 'power3.out' } // Быстрое появление
      )
      .fromTo(
        '.preloader h1',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
      .fromTo(
        '.preloader h2:nth-child(2)',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4' // Перекрытие анимации
      )
      .fromTo(
        '.preloader h2:nth-child(3)',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.4'
      )
      // Плавное исчезновение снизу вверх
      .to('.preloader', {
        y: '100%', // Уходит вниз за экран
        opacity: 0.6, // Постепенно исчезает
        duration: 1.2, // Длительность исчезновения
        ease: 'power3.inOut', // Плавное ускорение/замедление
      })
      .set('.preloader', { display: 'none' }); // Удаление из DOM
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-text">
        <h1>Dental Practis</h1>
        <h2>by</h2>
        <h2>Tatjana Ladstätter</h2>
      </div>
    </div>
  );
};

export default Preloader;





