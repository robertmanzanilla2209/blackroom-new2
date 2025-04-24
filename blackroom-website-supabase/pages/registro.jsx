
import { useState } from 'react';

export default function Registro() {
  const [form, setForm] = useState({ nombre: '', email: '', instagram: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje('Enviando...');

    const response = await fetch('https://faycuokgzldprmeclvsw.supabase.co/rest/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheWN1b2tnemxkcHJtZWNsdnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NjU5MDYsImV4cCI6MjA2MTA0MTkwNn0.FeZYtC-WHAOl4POiM154Gjl8xrciREsn5DON2auLJ_k',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZheWN1b2tnemxkcHJtZWNsdnN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0NjU5MDYsImV4cCI6MjA2MTA0MTkwNn0.FeZYtC-WHAOl4POiM154Gjl8xrciREsn5DON2auLJ_k'
      },
      body: JSON.stringify(form)
    });

    if (response.ok) {
      setMensaje('¡Registro exitoso!');
      setForm({ nombre: '', email: '', instagram: '' });
    } else {
      setMensaje('Error al registrar.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-blue-500">Registro Black Room</h1>
      <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          type="text"
          name="instagram"
          placeholder="@instagram (opcional)"
          value={form.instagram}
          onChange={handleChange}
        />
        <button
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Registrarse
        </button>
        <p className="text-sm text-center mt-2">{mensaje}</p>
      </form>
    </div>
  );
}
