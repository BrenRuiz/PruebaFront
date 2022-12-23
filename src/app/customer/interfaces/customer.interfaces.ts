export interface Customers {
    clientes: Cliente[];
}

export interface Cliente {
    id?:           number;
    nombre:       string;
    apellidoP:    string;
    apellidoM:    string;
    telefono:     string;
    puesto:       string;
    sucursal:     string;
    rfc:          string;
    nombreFiscal: string;
    latitud:      string;
    longitud:     string;
    fkEstado?:     Estado;
    fkMunicipio?:  Municipio;
    codigoPostal: string;
    colonia:      string;
    referencia:   string;
    estatus?:      number;
}

export interface Estado {
    id:           number;
    nombreEstado: string;
}

export interface Municipio {
    id:              number;
    nombreMunicipio: string;
    fkEstado:        Estado;
}

