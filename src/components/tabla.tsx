import React, { useState, useEffect } from 'react';
import { Button, Form, InputGroup, Table } from 'react-bootstrap';
import { BusquedaInput } from './buscador';
import { CustomModal } from './modal';
import Lottie from "lottie-react";
import logo from '../assets/logo.png';
import './styles/tabla.css';
import noData from '../assets/animations/noData.json';
import noInfo from '../assets/animations/noInfo.json';
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

interface Column {
    key: string;
    label: string;
    hasModal?: boolean;
    renderComponent?: (row: Record<string, any>) => React.ReactNode;
    searchable?: boolean;
}

interface TableProps {
    columns: Column[];
    data: Array<Record<string, any>>;
    renderModalContent?: (row: Record<string, any>, column: Column, onHide: () => void) => React.ReactNode;
    totalDias?: number;
    subtitle: string;
    items: string;
    extraInput?: React.ReactNode;
    dateColumnKey?: string;
    enableColumnSearch?: boolean;
}

const getCurrentYear = (): number => {
    return new Date().getFullYear();
};

const normalizeText = (text: string) => {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

export const BootstrapTable: React.FC<TableProps> = ({ columns, data, renderModalContent, totalDias, subtitle, extraInput, items, dateColumnKey, enableColumnSearch }) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [columnSearch, setColumnSearch] = useState<{ [key: string]: string }>({});
    const [modalData, setModalData] = useState<{ row: Record<string, any>, column: Column } | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [visibleData, setVisibleData] = useState<number>(15);
    const [hasMoreData, setHasMoreData] = useState<boolean>(data.length > 15);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const currentYear = getCurrentYear();
    const [sortConfig, setSortConfig] = useState<{ key: string | null; direction: "asc" | "desc" | null }>({
        key: null,
        direction: null
    });

    useEffect(() => {
        setShowMessage(data.length < 1);
        setVisibleData(15);
        setHasMoreData(data.length > 15);
    }, [searchTerm, columnSearch, data.length]);

    //Filtro por columna
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


    //Filtro General
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

    const displayedData = isColumnSearchActive ? filteredDataColumn : filteredData;

    const hasColumnSearch = enableColumnSearch;

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop <= clientHeight + 50 && hasMoreData) {
            setVisibleData(prev => {
                const newVisibleData = prev + 5;
                if (newVisibleData >= displayedData.length) {
                    setHasMoreData(false);
                }
                return Math.min(newVisibleData, displayedData.length);
            });
        }
    };

    const handleCellClick = (column: Column, row: Record<string, any>) => {
        if (column.hasModal && renderModalContent) {
            setModalData({ row, column });
            setShowModal(true);
        }
    };

    const getBackgroundAndTextColor = (diasHabiles: number) => {
        if (totalDias) {
            const porcentaje = (diasHabiles / totalDias) * 100;
            if (porcentaje <= 25) return { backgroundColor: '#3AB34A', color: '#FFFFFF' };
            if (porcentaje <= 50) return { backgroundColor: '#F8EB10', color: '#000000' };
            if (porcentaje <= 75) return { backgroundColor: '#F79122', color: '#000000' };
            return { backgroundColor: '#E91720', color: '#FFFFFF' };
        }
        return { backgroundColor: 'transparent', color: 'inherit' };
    };

    // Función para manejar el cambio de ordenamiento
    const handleSort = (key: string) => {
        setSortConfig(prev => ({
            key,
            direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc"
        }));
    };

    // Función para ordenar los datos según la columna seleccionada
    const sortedData = [...displayedData].sort((a, b) => {
        if (!sortConfig.key) return 0; // Si no hay ordenamiento, devolver el array tal cual

        const valueA = a[sortConfig.key];
        const valueB = b[sortConfig.key];

        if (typeof valueA === "number" && typeof valueB === "number") {
            return sortConfig.direction === "asc" ? valueA - valueB : valueB - valueA;
        }
        if (typeof valueA === "string" && typeof valueB === "string") {
            return sortConfig.direction === "asc" ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
        }
        return 0;
    });


    return (
        <>
            <div className='unp-row'>
                <div className='title-container'>
                    <div className='logo-subtitle-container'>
                        <div className='red-section'>1</div>
                        <img className='imgLogo' src={logo} alt="logo" />
                    </div>
                    <div className='subtitle-container'>
                        <span className='subtitle-logo'>{subtitle}</span>
                        <span className='items'>{items}</span>
                    </div>

                </div>
                {data.length > 0 && !enableColumnSearch && (
                    <div className='inputs-container'>
                        <BusquedaInput onSearch={setSearchTerm} />
                        <div className='input-extra-container'>
                            {extraInput}
                        </div>
                    </div>
                )}
            </div>

            {showMessage ? (
                <div className="animation-container">
                    <div style={{ width: 150, height: 150 }}>
                        <Lottie animationData={noData} loop={true} />
                    </div>
                    <span className='lottie'>No existen solicitudes pendientes por tramitar</span>
                </div>
            ) : (
                searchTerm && filteredData.length === 0 ? (
                    <div className='animation-container'>
                        <div style={{ width: 150, height: 150 }}>
                            <Lottie animationData={noInfo} loop={true} />
                        </div>
                        <span className='lottie'> No se encontró registro con el criterio de búsqueda definido </span>
                    </div>
                ) : (
                    <div className='table_container'>
                        <div className='table-scroll' onScroll={handleScroll}>
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        {columns.map((column, index) => (
                                            <th
                                                key={index}
                                                onClick={() => enableColumnSearch && handleSort(column.key)}
                                                style={{ cursor: enableColumnSearch ? "pointer" : "default" }}
                                            >
                                                {column.label}{" "}
                                                {enableColumnSearch ? (
                                                    sortConfig.key === column.key ? (
                                                        sortConfig.direction === "asc" ? <FaSortUp /> : <FaSortDown />
                                                    ) : (
                                                        <FaSort />
                                                    )
                                                ) : null}
                                            </th>
                                        ))}
                                    </tr>
                                    {enableColumnSearch && (
                                        <tr>
                                            {columns.map((column, index) => (
                                                <th key={index}>
                                                    <Form.Group className="mx-1 position-relative">
                                                        <Form.Control
                                                            type="text"
                                                            placeholder={`Buscar ${column.label}`}
                                                            value={columnSearch[column.key] || ""}
                                                            onChange={(e) => handleColumnSearch(column.key, e.target.value)}
                                                            className="pe-4"
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
                                                    </Form.Group>
                                                </th>
                                            ))}
                                        </tr>
                                    )}
                                </thead>
                                <tbody>
                                    {sortedData.slice(0, visibleData).map((row, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {columns.map((column, colIndex) => (
                                                <td
                                                    key={colIndex}
                                                    onClick={() => handleCellClick(column, row)}
                                                    style={{
                                                        cursor: column.hasModal ? 'pointer' : 'default',
                                                    }}
                                                    className={column.hasModal ? 'cell-with-modal' : ''}
                                                >
                                                    {column.key === 'dias_habiles' ? (
                                                        <div style={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                        }}>
                                                            <div style={{
                                                                padding: '8px',
                                                                borderRadius: '100px',
                                                                width: '40px',
                                                                backgroundColor: getBackgroundAndTextColor(row.dias_habiles).backgroundColor,
                                                                color: getBackgroundAndTextColor(row.dias_habiles).color,
                                                            }}>
                                                                <span>{row.dias_habiles}</span>
                                                            </div>
                                                        </div>

                                                    ) : (
                                                        column.renderComponent
                                                            ? column.renderComponent(row)
                                                            : row[column.key]
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}

                                </tbody>
                            </Table>
                            {columnSearch && displayedData.length === 0 ? (
                                <div className='animation-container_column'>
                                    <div style={{ width: 80, height: 80 }}>
                                        <Lottie animationData={noInfo} loop={true} />
                                    </div>
                                    <span> No se encontró registro con el criterio de búsqueda definido </span>
                                </div>
                            ) : (null)}
                        </div>
                        <div className='footer-table-container'>
                            <div className='data-unp'>
                                {currentYear} • Unidad Nacional de Protección — UNP
                            </div>
                            <div className='data-count'>
                                Mostrando {Math.min(visibleData, displayedData.length)} de {displayedData.length} elementos
                            </div>
                        </div>
                        {modalData && renderModalContent && (
                            <CustomModal
                                show={showModal}
                                onHide={() => setShowModal(false)}
                                title={`${modalData.column.label}`}
                            >
                                {renderModalContent(modalData.row, modalData.column, () => setShowModal(false))}
                            </CustomModal>
                        )}
                    </div>
                )
            )}
        </>
    );
};




