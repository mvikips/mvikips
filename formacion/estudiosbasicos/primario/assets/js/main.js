document.addEventListener('DOMContentLoaded', () => {
  const viewer = document.querySelector('.diploma-viewer');
  if (!viewer) return;

  const img = viewer.querySelector('img');
  if (!img) return;

  let zoom = 1;

  viewer.addEventListener('click', () => {
    zoom = zoom === 1 ? 2 : 1;
    img.style.transform = `scale(${zoom})`;
    viewer.style.cursor = zoom === 1 ? 'zoom-in' : 'zoom-out';
  });
});