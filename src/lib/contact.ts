/**
 * Decouples the contact drawer (a React island) from the buttons that open it
 * (vanilla Astro markup). Instead of a shared store, openers dispatch a DOM
 * CustomEvent and the drawer island listens for it.
 */
export const CONTACT_OPEN_EVENT = 'contact:open';

export function openContactDrawer(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(CONTACT_OPEN_EVENT));
}
