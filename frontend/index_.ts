import { Router } from '@vaadin/router';

export const router = new Router(document.querySelector('#outlet'));

window.addEventListener('vaadin-router-location-changed', (e) => {
  console.log('Location changed', e.detail.location);
});
