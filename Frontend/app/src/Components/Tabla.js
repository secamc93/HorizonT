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
    {
      nombre: "Alice",
      apellido: "Smith",
      cedula: "987654",
      unidad: "Unit 3"
    },
    {
      nombre: "Bob",
      apellido: "Johnson",
      cedula: "654321",
      unidad: "Unit 1"
    },
    {
      nombre: "Emily",
      apellido: "Davis",
      cedula: "456789",
      unidad: "Unit 2"
    },
    {
      nombre: "Michael",
      apellido: "Wilson",
      cedula: "321654",
      unidad: "Unit 3"
    },
    {
      nombre: "Sarah",
      apellido: "Taylor",
      cedula: "159357",
      unidad: "Unit 1"
    },
    {
      nombre: "David",
      apellido: "Anderson",
      cedula: "753159",
      unidad: "Unit 2"
    },
    {
      nombre: "Olivia",
      apellido: "Thomas",
      cedula: "246813",
      unidad: "Unit 3"
    },
    {
      nombre: "Daniel",
      apellido: "Moore",
      cedula: "951357",
      unidad: "Unit 1"
    },
    {
      nombre: "Sophia",
      apellido: "Brown",
      cedula: "357951",
      unidad: "Unit 2"
    },
    {
      nombre: "Matthew",
      apellido: "Lee",
      cedula: "864209",
      unidad: "Unit 3"
    },
    {
      nombre: "Ava",
      apellido: "Jackson",
      cedula: "297148",
      unidad: "Unit 1"
    },
    {
      nombre: "James",
      apellido: "White",
      cedula: "680932",
      unidad: "Unit 2"
    },
    {
      nombre: "Lily",
      apellido: "Clark",
      cedula: "831097",
      unidad: "Unit 3"
    },
    {
      nombre: "Benjamin",
      apellido: "Harris",
      cedula: "457210",
      unidad: "Unit 1"
    },
    {
      nombre: "Chloe",
      apellido: "Lewis",
      cedula: "729610",
      unidad: "Unit 2"
    },
    {
      nombre: "Jacob",
      apellido: "Martin",
      cedula: "106824",
      unidad: "Unit 3"
    },
    {
      nombre: "Grace",
      apellido: "Young",
      cedula: "513479",
      unidad: "Unit 1"
    },
    {
      nombre: "William",
      apellido: "Walker",
      cedula: "908763",
      unidad: "Unit 2"
    },
    {
      nombre: "Nora",
      apellido: "Hall",
      cedula: "263094",
      unidad: "Unit 3"
    }
  ];

  return (
    <div className="flex flex-col justify-center p-10">
      <div className="w-full md:w-2/3 xl:w-1/2 px-4">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <div className="max-h-96 overflow-y-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-700">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Apellido
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Cédula
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
    </div>
);

}

export default Tabla;
