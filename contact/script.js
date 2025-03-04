document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-grid');
    const nav = document.querySelector('.nav-grid');
    const links = document.querySelectorAll('.nav-grid__link');
  
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
  
      const isOpen = hamburger.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      nav.setAttribute('aria-hidden', !isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
  
      // リンクのアニメーションディレイを設定
      if (isOpen) {
        links.forEach((link, index) => {
          link.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
        });
      } else {
        links.forEach(link => {
          link.style.transitionDelay = '0s';
        });
      }
    });
  
    // アクセシビリティのためのキーボードナビゲーション
    nav.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('active')) {
        hamburger.click();
      }
    });
  });