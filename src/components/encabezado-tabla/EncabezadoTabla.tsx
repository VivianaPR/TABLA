import { BusquedaInput } from "../buscador/Buscador";


interface EncabezadoTablaProps {
    title?: string;
    subtitle: string;
    data: Array<Record<string, any>>;
    setSearchTerm: (term: string) => void;
    extraInput?: React.ReactNode;
    enableColumnSearch: boolean;
}

const EncabezadoTabla: React.FC<EncabezadoTablaProps> = ({
    title,
    subtitle,
    data,
    setSearchTerm,
    extraInput,
    enableColumnSearch
}) => {
    return (
        <div className="unp-row">
            {/* <Encabezado title={title} subtitle={subtitle} /> */}

            <div className="inputs-container">
                {(data.length > 0 && !enableColumnSearch) && (
                    <BusquedaInput onSearch={setSearchTerm} />
                )}
                {extraInput &&
                    <div>{extraInput}</div>
                }
            </div>

        </div>
    );
};

export { EncabezadoTabla };