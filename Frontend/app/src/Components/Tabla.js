import React from 'react';

function Tabla() {
  const data = [
    {
      nombre: "John",
      apellido: "Doe",
      cedula: "123456",
      unidad: "Unit 1"
    },
    {
      nombre: "Jane",
      apellido: "Doe",
      cedula: "789456",
      unidad: "Unit 2"
    },
  ];

  return (
    <div className>
      <div className=" sm:-mx-6 lg:-mx-8 max-w-xl max-auto">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-dark-green">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Nombre
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Apellido
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Cedula
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                    Unidad
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.nombre}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.apellido}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.cedula}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {row.unidad}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabla;
