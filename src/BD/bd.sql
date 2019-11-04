

create database proyecto;
use proyecto;


CREATE TABLE `usuarios` (
  `IdUsuario` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `NombreUsuario` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `ApellidoPaterno` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `ApellidoMaterno` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `usuario` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  `contrasena` varchar(20) COLLATE latin1_spanish_ci NOT NULL,
  telefono varchar(11),
  `IdPerfil` int(11) NOT NULL
);

CREATE TABLE `perfil` (
  `IdPerfil` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `DescripcionPerfil` varchar(40) COLLATE latin1_spanish_ci NOT NULL
);

CREATE TABLE `productos` (
  `idProducto` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `descripcionProducto` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `precio` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `cantidad` varchar(40) COLLATE latin1_spanish_ci NOT NULL
);


CREATE TABLE `Mapa` (
  `idMapa` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `DescripcionMapa` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `lat` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `lng` varchar(40) COLLATE latin1_spanish_ci NOT NULL
); 

CREATE TABLE `compras` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `nombre` varchar(40) COLLATE latin1_spanish_ci NOT NULL,
  `precio` int(11) COLLATE latin1_spanish_ci NOT NULL,
  `existencias` int(11) COLLATE latin1_spanish_ci NOT NULL
); 

INSERT INTO `Mapa` (`DescripcionMapa`, `lat`,`lng`) VALUES('UNI', 21.839788,102.3519674);
INSERT INTO `perfil` (`IdPerfil`, `DescripcionPerfil`) VALUES(1, 'Administrador'),(2,'Empreado');
INSERT INTO `usuarios` (`NombreUsuario`, `ApellidoPaterno`,ApellidoMaterno, `usuario`, `contrasena`, telefono,`IdPerfil`)
 VALUES('Diego', 'Garcia','Villaseñor', 'diego', '', '4498980106', 1),('nose', 'nose1','nose1', 'nose', '', '1234567890', 1),('Usuario', '','', '', '', '', 1);
 
insert into productos(descripcionProducto,precio,cantidad) values('producto1','50.55','10'),('producto2','100','52');

