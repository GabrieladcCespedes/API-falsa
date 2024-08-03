const express = require('express');
const { faker } = require('@faker-js/faker'); //Cambie faker por @faker-js/faker por que no me funcionaba

const app = express();
const puerto = 4000; //cambie 3000 por 4000 por que no me funcionaba

class Usuario {
    constructor() {
        this._id = faker.string.uuid();
        this.nombre = faker.person.firstName();
        this.apellido = faker.person.lastName();
        this.telefono = faker.phone.number();
        this.correo = faker.internet.email();
        this.contraseña = faker.internet.password();
    }
}

class Empresa {
    constructor() {
        this._id = faker.string.uuid();
        this.nombre = faker.company.name();
        this.direccion = {
            calle: faker.location.streetAddress(),
            ciudad: faker.location.city(),
            estado: faker.location.state(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        };
    }
}

app.get('/api/usuarios/nuevo', (req, res) => {
    const nuevoUsuario = new Usuario();
    res.json(nuevoUsuario);
});

app.get('/api/empresas/nueva', (req, res) => {
    const nuevaEmpresa = new Empresa();
    res.json(nuevaEmpresa);
});

app.get('/api/usuario/empresa', (req, res) => {
    const nuevoUsuario = new Usuario();
    const nuevaEmpresa = new Empresa();
    res.json({ usuario: nuevoUsuario, empresa: nuevaEmpresa });
});

app.listen(puerto, () => {
    console.log(`Servidor corriendo en http://localhost:${puerto}/`);
});
