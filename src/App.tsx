import { VentanaLienzo } from 'eco-unp/ui';
import './App.css';
import { PruebaBoton } from './components/contenidoDinamico';
import { BootstrapTable } from './components/tabla';
import { FaUsers } from "react-icons/fa";

function App() {
  const columns = [
    { key: "no_orden", label: "No de Orden", hasModal: true },
    { key: "nombre_evaluado", label: "Nombre del Evaluado" },
    { key: "id_evaluado", label: "Identificación" },
    { key: "fecha_asignacion", label: "Fecha de asignación" },
    { key: "dias_habiles", label: "Días hábiles" },
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
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2021", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2021", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/08/2021", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/10/2021", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/12/2021", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/01/2021", dias_habiles: 17, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/2/2021", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/03/2021", dias_habiles: 35, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/04/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/05/2024", dias_habiles: 25, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2024", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 17, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/08/2023", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/09/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/10/2023", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/11/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/12/2023", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2023", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/08/2023", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/10/2024", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/12/2023", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/01/2019", dias_habiles: 17, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/2/2019", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/03/2019", dias_habiles: 35, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/04/2019", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/05/2019", dias_habiles: 25, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/06/2019", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/07/2019", dias_habiles: 17, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/08/2019", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/09/2019", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/10/2019", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
    { solicitud: 3, no_orden: "OTI02", nombre_evaluado: "Juan Díaz", id_evaluado: "465432154", fecha_asignacion: "12/11/2019", dias_habiles: 10, poblacion: "AFRO", tipo_estudio: "A1", anexos: '7', extra: 'hola' },
    { solicitud: 1, no_orden: "OTI01", nombre_evaluado: "Viviana Pérez", id_evaluado: "100354321", fecha_asignacion: "12/12/2019", dias_habiles: 2, poblacion: "ROM", tipo_estudio: "A", anexos: '8', extra: 'hola' },
  ];

  // Función para renderizar contenido dinámico en el modal
  const renderModalContent = (row: Record<string, any>, column: any, onHide: () => any) => {
    switch (column.key) {
      case "no_orden":
        return (
          <PruebaBoton row={row} onHide={onHide}></PruebaBoton>
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
            totalDias={30}
            subtitle={'Subdirección de Evaluación de Riesgo'}
            items='Ordenes de trabajo'
            extraInput={extraInput}
            dateColumnKey='fecha_asignacion'
          />
        </div>
      </VentanaLienzo>
    </div>
  );
}

export default App;
