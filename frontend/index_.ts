import { Router } from '@vaadin/router';
console.log('Router initialized');

export const router = new Router(document.querySelector('#outlet'));

window.addEventListener('vaadin-router-location-changed', (e) => {
  console.log('Location changed', e.detail.location);
});
