CREATE TABLE `Cliente`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` TEXT NOT NULL,
    `telefono` TEXT NOT NULL,
    `comoLlego` TEXT NOT NULL,
    `descripcion` TEXT NOT NULL
);
CREATE TABLE `Servicio`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` TEXT NOT NULL,
    `descripcion` TEXT NOT NULL
);
CREATE TABLE `Proveedor`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` TEXT NOT NULL,
    `telefono` INT NOT NULL,
    `descripcion` TEXT NOT NULL
);
CREATE TABLE `Venta`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idCliente` INT NOT NULL,
    `perfil` TEXT NOT NULL,
    `idCuenta` INT NOT NULL,
    `idVendedor` INT NOT NULL,
    `tiempo` INT NOT NULL,
    `fechaCompra` TEXT NOT NULL,
    `fechaCorte` TEXT NOT NULL,
    `costo` TEXT NOT NULL,
    `pago` INT NOT NULL,
    `descripcion` TEXT NOT NULL,
    `cantRenovacion` TEXT NOT NULL,
    `estadoVenta` TEXT NOT NULL
);
CREATE TABLE `cuenta`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `idServicio` INT NOT NULL,
    `correo` TEXT NOT NULL,
    `contrasenia` TEXT NOT NULL,
    `fechaCompra` TEXT NOT NULL,
    `fechaPago` TEXT NOT NULL,
    `idProveedor` INT NOT NULL,
    `descripcion` TEXT NOT NULL
);
CREATE TABLE `Vendedor`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` TEXT NOT NULL,
    `telefono` TEXT NOT NULL,
    `descripcion` TEXT NOT NULL
);
ALTER TABLE
    `cuenta` ADD CONSTRAINT `id` FOREIGN KEY(`id`) REFERENCES `Servicio`(`id`);
ALTER TABLE
    `cuenta` ADD CONSTRAINT `idproveedor` FOREIGN KEY(`idProveedor`) REFERENCES `Proveedor`(`id`);
ALTER TABLE
    `Venta` ADD CONSTRAINT `idcuenta` FOREIGN KEY(`idCuenta`) REFERENCES `cuenta`(`id`);
ALTER TABLE
    `Venta` ADD CONSTRAINT `idvendedor` FOREIGN KEY(`idVendedor`) REFERENCES `Vendedor`(`id`);
ALTER TABLE
    `Venta` ADD CONSTRAINT `idcliente` FOREIGN KEY(`idCliente`) REFERENCES `Cliente`(`id`);