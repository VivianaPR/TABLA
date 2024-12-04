import './App.css';
import { VentanaLienzo } from 'eco-unp/ui'
import { BootstrapTable } from './components/tabla'
import { FaUsers } from "react-icons/fa";


function App() {
  const columns = [
    { key: "no_orden", label: "No de Orden", hasModal: true },
    { key: "nombre_evaluado", label: "Nombre del Evaluado" },
    { key: "id_evaluado", label: "Identificación" },
    { key: "fecha_asignacion", label: "Fecha de asignación" },
    { key: "dias_habiles", label: "Horas hábiles" },
    { key: "poblacion", label: "Población" },
    { key: "tipo_estudio", label: "Tipo de estudio" },
    { key: "anexos", label: "Anexos", hasModal: true },
    {
      key: 'analista',
      label: 'Analista',
      renderComponent: (row: any) => <select className="form-select">
        <option value="0">Seleccione el analista</option>
        <option value="1">Analista uno</option>
        <option value="2">Analista dos</option>
        <option value="3">{row.no_orden}</option>
      </select>
    },
  ];

  const data = [
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 17, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 35, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 25, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 17, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
  ];

  // Función para renderizar contenido dinámico en el modal
  const renderModalContent = (row: Record<string, any>, column: any, onHide: () => any) => {
    switch (column.key) {
      case "no_orden":
        return (
          <h1></h1>
      );  
      case "anexos":
        return (<h1>{row.solicitud}</h1>);
      default:
        return <p>No hay información adicional disponible.</p>;
    }
  };

  // Input adicional si se desea incluir
  const extraInput = (
    <button className="btn custom-button">
      <FaUsers /> Colectivas
    </button>
  );

  return (
    <div >
      <VentanaLienzo>
        <div className='App'>
        <BootstrapTable
              columns={columns}
              data={data}
              renderModalContent={renderModalContent}
              totalDias={48}
              subtitle={'Subdirección de Evaluación de Riesgo'}
              items='Ordenes de trabajo'
              extraInput={extraInput}
            />
        </div>
      </VentanaLienzo>
    </div>
  );
}

export default App;
