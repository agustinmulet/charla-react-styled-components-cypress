import React, { useState } from 'react';

import Ritmosustanciometro from './Ritmosustanciometro';

function App() {
  const [nombre, setNombre] = useState('');
  const [individuos, setIndividuos] = useState([
    {
      nombre: 'goncy',
      ritmosustancia: 100,
    },
  ]);

  function actualizarNombre(event) {
    setNombre(event.target.value);
  }

  async function obtenerRitmosustancia(event) {
    event.preventDefault();

    const request = await fetch(
      'https://wt-3581e5a0e6c19bb4a0552203b2738a9d-0.run.webtask.io/obtener-ritmosustancia'
    );
    const response = await request.json();

    setIndividuos(
      individuos.concat({
        nombre: nombre,
        ritmosustancia: response,
      })
    );
    setNombre('');
  }

  return (
    <div>
      <h1>Ritmosustanciometro</h1>
      {individuos.map(individuo => (
        <Ritmosustanciometro
          nombre={individuo.nombre}
          ritmosustancia={individuo.ritmosustancia}
        />
      ))}
      <form onSubmit={obtenerRitmosustancia}>
        <input type="text" value={nombre} onChange={actualizarNombre} />
        <button type="submit">Obtener ritmosustancia</button>
      </form>
    </div>
  );
}

export default App;
