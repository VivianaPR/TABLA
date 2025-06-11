import React, { useState } from "react";
import { Button, FormControl, FormGroup, Table } from "react-bootstrap";
import { FaGrip } from "react-icons/fa6"; // FaEllipsis, FaGripLines
import { useNavigate } from "react-router-dom";
import './Tabla.css'
import { FaSort, FaSortDown, FaSortUp } from "react-icons/fa";

interface Column {
  key: string;
  label: string;
  hasModal?: boolean;
  truncateText?: boolean;
  sorter?: boolean;
  renderComponent?: (row: Record<string, any>) => React.ReactNode;
  redirectTo?: (row: Record<string, any>) => string;
}

interface TablaProps {
  columns: Column[];
  displayedData: Array<Record<string, any>>;
  // tableData: Array<Record<string, any>>;
  hasMoreData: boolean;
  setHasMoreData: (bool: boolean) => void;
  setVisibleData: any;
  visibleData: number;
  searchTerm: string;
  handleCellClick: (column: any, row: Record<string, any>) => void;
  totalDias?: number;
  isShared: boolean;

  //
  enableColumnSearch: boolean;
  columnSearch: Record<string, string>;
  handleColumnSearch: (key: string, value: string) => void;
  enableColumnSorter: boolean;
}

const Tabla: React.FC<TablaProps> = ({
  columns,
  displayedData,
  // tableData,
  hasMoreData,
  setHasMoreData,
  visibleData,
  setVisibleData,
  handleCellClick,
  totalDias,
  isShared,
  //
  enableColumnSearch,
  columnSearch,
  handleColumnSearch,
  enableColumnSorter
}) => {
  const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: "asc" | "desc" | null }>({
    key: null,
    direction: null
  });

  const getBackgroundAndTextColor = (diasHabiles: number) => {
    if (totalDias) {
      const porcentaje = (diasHabiles / totalDias) * 100;
      if (porcentaje <= 25)
        return { backgroundColor: "#3AB34A", color: "#FFFFFF" };
      if (porcentaje <= 50)
        return { backgroundColor: "#F8EB10", color: "#000000" };
      if (porcentaje <= 75)
        return { backgroundColor: "#F79122", color: "#000000" };
      return { backgroundColor: "#E91720", color: "#FFFFFF" };
    }
    return { backgroundColor: "transparent", color: "inherit" };
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 50 && hasMoreData) {
      setVisibleData((prev: any) => {
        const newVisibleData = prev + 5;
        if (newVisibleData >= displayedData.length) {
          setHasMoreData(false);
        }
        return Math.min(newVisibleData, displayedData.length);
      });
    }
  };

  // Función para manejar el botón de sorting
  const handleSort = (key: string) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
    }));
  };

  // Función para ordenar los datos según la columna seleccionada
  const sortedData = (() => {
    if (!sortConfig.key) return displayedData;

    // Cuando isShared es true: se separa en_gestion y se ordena solo esa sección
    if (isShared) {
      const [enGestion, otros] = displayedData.reduce(
        (acc: [Record<string, any>[], Record<string, any>[]], item) => {
          acc[item.estadoRegistro === "en_gestion" ? 0 : 1].push(item);
          return acc;
        },
        [[], []]
      );

      const sortedEnGestion = [...enGestion].sort((a, b) => {
        const valueA = a[sortConfig.key!];
        const valueB = b[sortConfig.key!];

        if (typeof valueA === "number" && typeof valueB === "number") {
          return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
        }
        if (typeof valueA === "string" && typeof valueB === "string") {
          return sortConfig.direction === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }
        return 0;
      });

      return [...sortedEnGestion, ...otros];
    }

    // Ordenamiento normal cuando isShared es false
    return [...displayedData].sort((a, b) => {
      const valueA = a[sortConfig.key!];
      const valueB = b[sortConfig.key!];

      if (typeof valueA === "number" && typeof valueB === "number") {
        return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
      }
      if (typeof valueA === "string" && typeof valueB === "string") {
        return sortConfig.direction === "asc"
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }
      return 0;
    });
  })();

  const tableData = (sortConfig.direction === "asc" || sortConfig.direction === "desc") ? sortedData : displayedData;

  return (
    <div className="table_container">
      <div className="table-scroll" onScroll={handleScroll}>
        <Table striped hover>
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="table-header-unp"
                  onClick={() => (column.sorter || enableColumnSorter) && handleSort(column.key)}
                  style={{ cursor: enableColumnSearch ? "pointer" : "default" }}
                >
                  {column.label}{" "}
                  {(column.sorter || enableColumnSorter) ? (
                    sortConfig.key === column.key ? (
                      sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />
                    ) : (
                      <FaSort />
                    )
                  ) : null}
                </th>
              ))}
            </tr>

            {/* Busqueda por columnas */}
            {enableColumnSearch && (
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>
                    <FormGroup className="mx-1 position-relative">
                      <FormControl
                        type="text"
                        placeholder={`Buscar ${column.label}`}
                        value={columnSearch[column.key] || ""}
                        onChange={(e) => handleColumnSearch(column.key, e.target.value)}
                        className="pe-4 search-column-input"
                      />
                      {columnSearch[column.key] && (
                        <Button
                          variant="link"
                          size="sm"
                          className="position-absolute end-0 top-50 translate-middle-y me-2 p-0"
                          onClick={() => handleColumnSearch(column.key, "")}
                          style={{ textDecoration: "none", color: "gray" }}
                        >
                          ✖
                        </Button>
                      )}
                    </FormGroup>
                  </th>
                ))}
              </tr>
            )}
          </thead>
          <tbody>

            {tableData.slice(0, visibleData).map((row, rowIndex) => (

              <React.Fragment key={rowIndex}>
                <tr>
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      onClick={() => handleCellClick(column, row)}
                      style={{
                        cursor: column.hasModal ? "pointer" : "default",
                      }}
                      className={
                        column.redirectTo
                          ? "cell-redirect"
                          : column.hasModal
                            ? "cell-with-modal"
                            : ""
                      }
                    >
                      {column.key === "diasHabiles" ? (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              padding: "8px",
                              borderRadius: "100px",
                              width: "40px",
                              backgroundColor: getBackgroundAndTextColor(
                                row.diasHabiles
                              ).backgroundColor,
                              color: getBackgroundAndTextColor(
                                row.diasHabiles
                              ).color,
                            }}
                          >
                            <span>{row.diasHabiles}</span>
                          </div>
                        </div>
                      ) : column.renderComponent ? (
                        column.renderComponent(row)
                      ) : (
                        <div>
                          {
                            (column.truncateText && (typeof row[column.key] === 'string' || row[column.key] instanceof String))
                              ?
                              (row[column.key].length > 26 ? row[column.key].slice(0, 26) + '...' : row[column.key])
                              :
                              row[column.key]
                          }
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
                {isShared &&
                  row.estadoRegistro === "en_gestion" &&
                  !tableData.some(r => r.estadoRegistro === "en_gestion" &&
                    tableData.indexOf(r) > rowIndex) &&
                  (
                    <tr>
                      <td colSpan={columns.length} className="text-center" style={{ padding: '0 0 0 0' }}>
                        <div style={{
                          height: '2rem',
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          alignItems: 'center',
                          fontWeight: '600',
                          color: (rowIndex % 2 === 0) ? '#365072' : '#303D50',
                          backgroundColor: (rowIndex % 2 === 0) ? '#fefefe' : '#f9fafa'
                        }}>
                          {/* <FaGripLines style={{ fontSize: '1.5rem' }} /> */}
                          <FaGrip style={{ fontSize: '1.3rem' }} />
                          {/* <FaEllipsis style={{ fontSize: '2rem' }} /> */}
                        </div>
                      </td>
                    </tr>
                  )}
              </React.Fragment>

            ))}

            {hasMoreData && (
              <tr>
                <td colSpan={columns.length} className="text-center">
                  Cargando más datos...
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export { Tabla };