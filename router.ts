import { useEffect, useState, useCallback } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'shop'; category?: string; q?: string }
  | { name: 'about' }
  | { name: 'contact' }
  | { name: 'faq' }
  | { name: 'privacy' }
  | { name: 'terms' };

function parseHash(): Route {
  const hash = window.location.hash.replace(/^#\/?/, '');
  const [path, query] = hash.split('?');
  const segments = path.split('/').filter(Boolean);
  const params = new URLSearchParams(query || '');

  switch (segments[0]) {
    case undefined:
      return { name: 'home' };
    case 'shop':
      return {
        name: 'shop',
        category: segments[1] || params.get('category') || undefined,
        q: params.get('q') || undefined,
      };
    case 'about':
      return { name: 'about' };
    case 'contact':
      return { name: 'contact' };
    case 'faq':
      return { name: 'faq' };
    case 'privacy':
      return { name: 'privacy' };
    case 'terms':
      return { name: 'terms' };
    default:
      return { name: 'home' };
  }
}

export function routeToHash(route: Route): string {
  switch (route.name) {
    case 'home':
      return '#/';
    case 'shop':
      if (route.category) return `#/shop/${route.category}`;
      if (route.q) return `#/shop?q=${encodeURIComponent(route.q)}`;
      return '#/shop';
    case 'about':
      return '#/about';
    case 'contact':
      return '#/contact';
    case 'faq':
      return '#/faq';
    case 'privacy':
      return '#/privacy';
    case 'terms':
      return '#/terms';
  }
}

export function navigate(route: Route) {
  window.location.hash = routeToHash(route);
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parseHash());

  useEffect(() => {
    const onChange = () => {
      setRoute(parseHash());
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}

export function useNavigate() {
  return useCallback((route: Route) => navigate(route), []);
}
