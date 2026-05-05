 // Nav scroll shadow
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 40));

    // Hamburger / mobile menu
    const ham = document.getElementById('hamburger');
    const mob = document.getElementById('mobileMenu');
    const cls = document.getElementById('mobClose');
    const closeMob = () => { ham.classList.remove('open'); mob.classList.remove('open'); document.body.style.overflow = ''; };
    ham.addEventListener('click', () => {
      ham.classList.toggle('open');
      mob.classList.toggle('open');
      document.body.style.overflow = mob.classList.contains('open') ? 'hidden' : '';
    });
    cls.addEventListener('click', closeMob);
    document.querySelectorAll('.mob-l').forEach(l => l.addEventListener('click', closeMob));

    // FAQ accordion
    document.querySelectorAll('.faq-q').forEach(q => {
      q.addEventListener('click', () => {
        const item = q.parentElement;
        const ans  = item.querySelector('.faq-a');
        const open = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('open');
          i.querySelector('.faq-a').style.height = '0';
        });
        if (!open) { item.classList.add('open'); ans.style.height = ans.scrollHeight + 'px'; }
      });
    });

    // Scroll reveal
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));