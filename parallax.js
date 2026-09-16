/* Delikatny ruch mapy w tle, wspólny dla wszystkich podstron. */
(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0;
  let scrollRange = 0;
  let travel = 0;

  function render() {
    frame = 0;
    const progress = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 0;
    root.style.setProperty('--map-offset', `${-progress * travel}px`);
  }

  function scheduleRender() {
    if (!frame && !reducedMotion.matches) frame = requestAnimationFrame(render);
  }

  function measure() {
    scrollRange = Math.max(0, root.scrollHeight - window.innerHeight);
    // Zapas grafiki zapobiega odsłonięciu krawędzi; limit chroni długie poradniki przed nadmiernym powiększeniem tła.
    travel = reducedMotion.matches ? 0 : Math.min(320, scrollRange * 0.12);
    root.style.setProperty('--map-travel', `${travel}px`);
    render();
  }

  window.addEventListener('scroll', scheduleRender, { passive: true });
  window.addEventListener('resize', measure);
  window.addEventListener('pageshow', measure);
  reducedMotion.addEventListener('change', measure);
  // Obrazy i rozwijane odpowiedzi FAQ mogą zmienić wysokość już po wczytaniu strony.
  new ResizeObserver(measure).observe(document.body);
  measure();
})();
