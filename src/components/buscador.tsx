import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Form } from "react-bootstrap";
import './styles/buscador.css';

interface BusquedaInputProps {
    onSearch: (value: string) => void;
}

const BusquedaInput: React.FC<BusquedaInputProps> = ({ onSearch }) => {

    const normalizeText = (text: string) => {
        return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    };

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const normalizedValue = normalizeText(event.target.value);
        onSearch(normalizedValue);
    };

    return (
        <div className="search-container">
            <Form.Group className="d-flex align-items-center mx-1 position-relative">
                <Form.Control
                    type="text"
                    className="me-0 input-with-icon"
                    placeholder="Ingrese un criterio de búsqueda..."
                    onChange={handleSearch}
                />
                <BiSearchAlt className="input-icon" />
            </Form.Group>
        </div>
    );
};

export { BusquedaInput };
