import React from "react";

import { FormControl, FormGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";

import "./Buscador.css";

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
      <FormGroup className="d-flex align-items-center mx-1 position-relative">
        <FormControl
          type="text"
          className="me-0 input-with-icon"
          placeholder="Ingrese un criterio de búsqueda..."
          onChange={handleSearch}
        />
        <FaMagnifyingGlass className="input-icon" />
      </FormGroup>
    </div>
  );
};

export { BusquedaInput };
