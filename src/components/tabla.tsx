import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BusquedaInput } from './buscador';
import { CustomModal } from './modal';
import './styles/tabla.css';

// Interfaz de las columnas
interface Column {
    key: string;
    label: string;
    hasModal?: boolean;
    renderComponent?: (row: Record<string, any>) => React.ReactNode;
}

// Interfaz de los parámetros
interface TableProps {
    columns: Column[];
    data: Array<Record<string, any>>;
    renderModalContent?: (row: Record<string, any>, column: Column) => React.ReactNode;
    totalDias?: number;
}

const BootstrapTable: React.FC<TableProps> = ({ columns, data, renderModalContent, totalDias }) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [modalData, setModalData] = useState<{ row: Record<string, any>, column: Column } | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [visibleData, setVisibleData] = useState<number>(10); // Inicializa con 10
    const [hasMoreData, setHasMoreData] = useState<boolean>(true);

    // Ajusta visibleData si el número total de datos es menor a 10
    useEffect(() => {
        if (data.length < 10) {
            setVisibleData(data.length); // Si hay menos de 10 datos, inicializa visibleData con el total
        }
    }, [data.length]);

    const filteredData = data.filter(row =>
        columns.some(column =>
            String(row[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        if (scrollHeight - scrollTop <= clientHeight + 50 && hasMoreData) {
            setVisibleData(prev => {
                const newVisibleData = prev + 10; // Incrementa el número de elementos visibles en 10
                if (newVisibleData >= filteredData.length) {
                    setHasMoreData(false); // No hay más datos para cargar
                }
                return newVisibleData;
            });
        }
    };

    const handleCellClick = (column: Column, row: Record<string, any>) => {
        if (column.hasModal && renderModalContent) {
            setModalData({ row, column });
            setShowModal(true);
        }
    };

    const getBackgroundColor = (diasHabiles: number) => {
        if (totalDias) {
            const porcentaje = (diasHabiles / totalDias) * 100;
            if (porcentaje <= 25) return '#CBFDBD';
            if (porcentaje <= 50) return '#ffffd4';
            if (porcentaje <= 75) return '#FFEBD0';
            return '#FFD0D3';
        }
        return 'transparent';
    };

    return (
        <div className='table_container'>
            <div className='unp-row'>
                <BusquedaInput onSearch={setSearchTerm} />
            </div>

            <div
                className='table-scroll'
                onScroll={handleScroll}
                style={{ maxHeight: '72vh', overflowY: 'auto' }}
            >
                <Table striped hover responsive>
                    <thead>
                        <tr>
                            {columns.map((column, index) => (
                                <th key={index}>{column.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.slice(0, visibleData).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    <td
                                        key={colIndex}
                                        onClick={() => handleCellClick(column, row)}
                                        style={{
                                            cursor: column.hasModal ? 'pointer' : 'default',
                                            backgroundColor: column.key === 'dias_habiles'
                                                ? getBackgroundColor(row.dias_habiles)
                                                : 'transparent',
                                        }}
                                        className={column.hasModal ? 'cell-with-modal' : ''}
                                    >
                                        {column.renderComponent 
                                            ? column.renderComponent(row) 
                                            : row[column.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {visibleData < filteredData.length && (
                            <tr>
                                <td colSpan={columns.length} className="text-center">
                                    Cargando más datos...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>

            <div className='data-count'>
                Mostrando {Math.min(visibleData, filteredData.length)} de {filteredData.length} elementos
            </div>

            {modalData && renderModalContent && (
                <CustomModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={`${modalData.column.label}`}
                >
                    {renderModalContent(modalData.row, modalData.column)}
                </CustomModal>
            )}
        </div>
    );
};

export { BootstrapTable };

