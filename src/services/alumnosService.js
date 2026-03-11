const API_URL = 'https://backend-alumnos-lovat.vercel.app';

export const alumnosService = {
  getAll: async () => {
    const res = await fetch(API_URL);
    return res.json();
  },

  create: async (alumno) => {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(alumno),
    });
    return res.json();
  },

  update: async (id, datos) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos),
    });
    return res.json();
  },

  delete: async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  },
};
