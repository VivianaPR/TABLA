import React, { useState, useEffect, ReactNode } from "react";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Tabla } from "./tabla/Tabla";
import { CustomModal } from "./modal/Modal";
import { EncabezadoTabla } from "./encabezado-tabla/EncabezadoTabla";

import noData from "../assets/animations/noData.json";
import noInfo from "../assets/animations/noInfo.json";
// import isLoadingAnimation from "../../assets/animations/isLoading.json";

import './encabezado-tabla/EncabezadoTabla.css';
import "./tabla/Tabla.css";


interface Column {
  key: string;
  label: string;
  hasModal?: boolean;
  truncateText?: boolean;
  sorter?: boolean;
  renderComponent?: (row: Record<string, any>) => React.ReactNode;
}

interface TableProps {
  title?: string;
  subtitle: string;
  columns: Column[];
  data: Array<Record<string, any>>;
  totalDias?: number;
  renderModalContent?: (row: any, column: any, onHide: () => void) => ReactNode;
  alertAction?: (...args: any[]) => any;
  extraInput?: React.ReactNode;
  dateColumnKey?: string;
  isShared?: boolean;
  isLoading?: boolean;
  closeModalOut?: boolean;
  enableColumnSearch?: boolean;
  enableColumnSorter?: boolean;
}

const getCurrentYear = (): number => {
  return new Date().getFullYear();
};

const normalizeText = (text: string) => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const TablaRegistros: React.FC<TableProps> = ({
  columns,
  data,
  renderModalContent,
  alertAction,
  totalDias,
  title,
  extraInput,
  subtitle,
  dateColumnKey,
  isShared = false,
  isLoading,
  closeModalOut = true,
  enableColumnSearch = false,
  enableColumnSorter = false
}) => {

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [columnSearch, setColumnSearch] = useState<{ [key: string]: string }>({});

  const [modalData, setModalData] = useState<{
    row: Record<string, any>;
    column: any;
  } | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [visibleData, setVisibleData] = useState<number>(23); // Revisar número
  const [hasMoreData, setHasMoreData] = useState<boolean>(data.length > 23); // Revisar número
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const currentYear = getCurrentYear();
  const navigate = useNavigate();

  useEffect(() => {
    setShowMessage(data.length < 1);
    setVisibleData(25); // Cantidad total de datos visibles
    setHasMoreData(data.length > 25);
  }, [searchTerm, columnSearch, data.length]);

  // 
  // Filtro por columna
  //
  const handleColumnSearch = (key: string, value: string) => {
    setColumnSearch(prev => ({ ...prev, [key]: value }));
  };

  const filteredDataColumn = data.filter(row =>
    columns.every(column => {
      if (enableColumnSearch && columnSearch[column.key]) {
        return String(row[column.key]).toLowerCase().includes(columnSearch[column.key].toLowerCase());
      }
      return true;
    })
  );

  // 
  // Filtro general
  // 
  const isColumnSearchActive = Object.values(columnSearch).some(value => value.trim() !== "");

  const filteredData = data
    .slice()
    .sort((a, b) => dateColumnKey
      ? new Date(b[dateColumnKey]).getTime() - new Date(a[dateColumnKey]).getTime()
      : 0
    )
    .filter(row =>
      !isColumnSearchActive && columns.some(column =>
        normalizeText(String(row[column.key])).includes(normalizeText(searchTerm))
      )
    );

  // Datos a mostrar en la tabla
  const displayedData = isColumnSearchActive ? filteredDataColumn : filteredData;

  const handleCellClick = (column: any, row: Record<string, any>) => {
    if (column.redirectTo) {
      const path = column.redirectTo(row);
      navigate(path);
      return;
    }
    if (column.hasModal) {
      // Si el estado de la fila es por_gestionar, es una tabla compartida y tiene una acción
      if ((row.estadoRegistro === 'por_gestionar' && isShared) && alertAction) {
        Swal.fire({
          title: '<small>¿Tomar este registro?</small>',
          text: 'Tenga presente que, una vez lo haga, deberá darle trámite en los tiempos definidos en el procedimiento.',
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: "#178250",
          cancelButtonColor: "#cc5159",
          confirmButtonText: "Sí, tomar registro",
          cancelButtonText: "No, cancelar"
        }).then(async (result) => {
          // Si confirma la alerta ejecuta la acción
          if (result.isConfirmed) {
            alertAction(row);
          }
        });

      } else if (row.estadoRegistro === 'en_gestion' || !isShared) {
        // Si la fila está en_gestion o no es una tabla compartida
        setModalData({ row, column });
        setShowModal(true);
      }
    } else if ((column.hasModal && renderModalContent) && !isShared) {
      // Si la columna tiene modal, hay modal y no es compartida
      setModalData({ row, column });
      setShowModal(true);
    }
  };

  return (
    <>
      <EncabezadoTabla
        title={title}
        subtitle={subtitle}
        data={data}
        setSearchTerm={setSearchTerm}
        extraInput={extraInput}
        enableColumnSearch={enableColumnSearch}
      />

      {isLoading ? (
        <div className="animation-container">
          <div style={{ width: 500, height: 125 }}>
            <Lottie animationData={noData} loop={true} />
          </div>
          <span className="lottie">
            Actualizando y cargando registros, por favor espere...
          </span>
        </div>
      ) : showMessage ? (
        <div className="animation-container">
          <div style={{ width: 150, height: 150 }}>
            <Lottie animationData={noData} loop={true} />
          </div>
          <span className="lottie">
            No existen registros pendientes por tramitar
          </span>
        </div>
      ) : searchTerm && displayedData.length === 0 ? (
        <div className="animation-container">
          <div style={{ width: 150, height: 150 }}>
            <Lottie animationData={noInfo} loop={true} />
          </div>
          <span className="lottie">
            No se encontró registro con el criterio de búsqueda definido
          </span>
        </div>
      ) : (
        <>
          <Tabla
            columns={columns}
            displayedData={displayedData}
            // tableData={filteredData}
            hasMoreData={hasMoreData}
            setHasMoreData={setHasMoreData}
            setVisibleData={setVisibleData}
            visibleData={visibleData}
            searchTerm={searchTerm}
            handleCellClick={handleCellClick}
            totalDias={totalDias}
            isShared={isShared}
            //
            enableColumnSearch={enableColumnSearch}
            columnSearch={columnSearch}
            handleColumnSearch={handleColumnSearch}
            enableColumnSorter={enableColumnSorter}
          />
          <div className="d-flex justify-content-between">
            <div className="data-unp">
              {currentYear} • Unidad Nacional de Protección — UNP
            </div>
            <div className="data-count">
              Mostrando {Math.min(visibleData, displayedData.length)} de{" "}
              {displayedData.length} elementos
            </div>
          </div>
        </>
      )}

      {modalData && renderModalContent && (
        <CustomModal
          show={showModal}
          onHide={() => setShowModal(false)}
          title={`${modalData.column.label}`}
          closeModalOut={closeModalOut}
        >
          {renderModalContent(modalData.row, modalData.column, () =>
            setShowModal(false)
          )}
        </CustomModal>
      )}
    </>
  );
};

export { TablaRegistros };