// need to use a network IP when testing on mobile!
export const FETCH_URL = +import.meta.env.VITE_HENRIK_PC === 0 ? 'localhost' : '192.168.1.64';
