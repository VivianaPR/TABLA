import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { BusquedaInput } from './buscador';
import { CustomModal } from './modal';
import './styles/tabla.css';
import logo from '../assets/logo.png'

interface Column {
    key: string;
    label: string;
    hasModal?: boolean;
    renderComponent?: (row: Record<string, any>) => React.ReactNode;
}

interface TableProps {
    columns: Column[];
    data: Array<Record<string, any>>;
    renderModalContent?: (row: Record<string, any>, column: Column) => React.ReactNode;
    totalDias?: number;
    subtitle: string; 
    extraInput?: React.ReactNode; 
}


const BootstrapTable: React.FC<TableProps> = ({ columns, data, renderModalContent, totalDias, subtitle, extraInput }) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [modalData, setModalData] = useState<{ row: Record<string, any>, column: Column } | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [visibleData, setVisibleData] = useState<number>(15);
    const [hasMoreData, setHasMoreData] = useState<boolean>(data.length > 15);

    useEffect(() => {
        // Reinicia visibleData y hasMoreData solo cuando cambia el término de búsqueda
        setVisibleData(15);
        setHasMoreData(data.length > 15);
    }, [searchTerm, data.length]);

    const filteredData = data.filter(row =>
        columns.some(column =>
            String(row[column.key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
        const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
        // Verifica si estamos cerca del final del scroll para cargar más datos
        if (scrollHeight - scrollTop <= clientHeight + 50 && hasMoreData) {
            setVisibleData(prev => {
                const newVisibleData = prev + 5;
                if (newVisibleData >= filteredData.length) {
                    setHasMoreData(false);
                }
                return Math.min(newVisibleData, filteredData.length);
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
                <div className='title-container'>
                    <img className='imgLogo' src={logo} alt="logo" />
                    <span className='subtitle-logo'>{subtitle}</span>
                </div>
                <div className='inputs-container'>
                    <BusquedaInput onSearch={setSearchTerm} />
                    <div className='input-extra-container'>
                        {extraInput} 
                    </div>
                </div>
            </div>
            <div
                className='table-scroll'
                onScroll={handleScroll}
            >
                <Table striped hover responsive>
                    <thead>
                        <tr >
                            {columns.map((column, index) => (
                                <th  key={index}>{column.label}</th>
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


