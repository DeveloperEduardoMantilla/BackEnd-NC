<img src="./assets/img/fondo.jpg" height="100px" width="100%"/>

#### Proyecto personal - NC - BackEnd

 EndPoints - NC 

<hr> 

CRUD CLIENTE
```Js
    Get - http://127.0.0.1:1357/clientes/
```
```Js
    DELETE - http://127.0.0.1:1357/cliente/:id
```
```Js
    POST - http://127.0.0.1:1357/cliente/     
    body{
        "nombre":"Stiven Amigo Maria Jose",
        "telefono":"3167967956",
        "comoLlego":"Eduardo",
        "descripcion":"HolaMundo"
    }
```
```Js
    PUT - http://127.0.0.1:1357/cliente 
    body{
        "id":"8",
        "nombre":"Stiven Amigo Maria Jose",
        "telefono":"3167967956",
        "comoLlego":"Eduardo",
        "descripcion":"HolaMundo"
    }
```
CRUD VENTA
```Js
    Get - http://127.0.0.1:1357/ventas/
```
```Js
    DELETE - http://127.0.0.1:1357/venta/:id
```
```Js
    POST - http://127.0.0.1:1357/venta/   
    body{
        "id":7,
        "idCliente": 1,
        "perfil": "Ana Karina",
        "contraseniaPerfil": "1010",
        "idCuenta": 1,
        "idVendedor": 1,
        "tiempo": 60,
        "fechaCompra": "16/10/2023",
        "fechaCorte": "15/12/2023",
        "costo": "12",
        "pago": 1,
        "descripcion": "",
        "cantRenovacion": "10",
        "estadoVenta": "Activo"
    }
```
```Js
    PUT - http://127.0.0.1:1357/venta 
    body{
        "idCliente": 1,
        "perfil": "Ana Karina",
        "contraseniaPerfil": "1010",
        "idCuenta": 1,
        "idVendedor": 1,
        "tiempo": 60,
        "fechaCompra": "16/10/2023",
        "fechaCorte": "15/12/2023",
        "costo": "12",
        "pago": 1,
        "descripcion": "",
        "cantRenovacion": "10",
        "estadoVenta": "Activo"
    }
```

CRUD VENDEDOR
```Js
    Get - http://127.0.0.1:1357/vendedores/
```
```Js
    DELETE - http://127.0.0.1:1357/vendedor/:id
```
```Js
    POST - http://127.0.0.1:1357/vendedor/      
    body{
        "nombre": "Andres",
        "telefono": "321",
        "descripcion": "xd"
    }
```
```Js
    PUT - http://127.0.0.1:1357/vendedor 
    body{
        "id":"7",
        "nombre": "Andres",
        "telefono": "321",
        "descripcion": "xd"
    }
```
CRUD SERVICIO
```Js
    Get - http://127.0.0.1:1357/servicios/
```
```Js
    DELETE - http://127.0.0.1:1357/servicio/:id
```
```Js
    POST - http://127.0.0.1:1357/servicio/   
    body{
        "nombre": "Lalala",
        "descripcion": "123"
    }
```
```Js
    PUT - http://127.0.0.1:1357/servicio 
    body{
        "id":9,
        "nombre": "Lalala",
        "descripcion": "123"
    }
```

CRUD CUENTA

```Js
    Get - http://127.0.0.1:1357/cuentas/
```
```Js
    DELETE - http://127.0.0.1:1357/cuenta/:id
```
```Js
    POST - http://127.0.0.1:1357/cuenta/    
    body{
        "idServicio": 1,
        "correo": "camata3",
        "contrasenia": "asda",
        "fechaCompra": "aasdsad3",
        "fechaPago": "asdad",
        "idProveedor": 1,
        "descripcion": ""
    }
```
```Js
    PUT - http://127.0.0.1:1357/cuenta 
    body{
        "idServicio": 1,
        "correo": "camata3",
        "contrasenia": "asda",
        "fechaCompra": "aasdsad3",
        "fechaPago": "asdad",
        "idProveedor": 1,
        "descripcion": ""
    }
```

CRUD PROVEEDOR

```Js
    Get - http://127.0.0.1:1357/proveedores/
```
```Js
    DELETE - http://127.0.0.1:1357/proveedor/:id
```
```Js
    POST - http://127.0.0.1:1357/proveedor/    
    body{
        "nombre": "asdad",
        "telefono": "qweqwe13212",
        "descripcion": "asdasd"
    }
```
```Js
    PUT - http://127.0.0.1:1357/proveedor 
    body{
        "id":4,
        "nombre": "asdad",
        "telefono": "qweqwe13212",
        "descripcion": "asdasd"
    }
```


* Listar los cliente que no han pagado el servicio.
* Mostrar los clientes que se les vence el servicio el dia de hoy.
* Mostrar los ventas que se le cumple el servicio en un rango de dias especifico hacia adelante.
* Mostrar los clientes que se les cobro pero no han dado respuesta del servicio.
* Mostrar las ventas filtradas por el nombre del cliente.
* Mostrar las cuentas que se adquirieron filtradas.
* Mostrar las ventas filtradas por un proveedor.
* Mostrar las ventas filtradas por servicio.
* Mostrar la cantidad de servicios vendidos por cada plataforma.
* Mostrar el total de compras realizadas por un cliente || filtrado por un cliente.
* Mostrar las ventas realizadas filtrado por el nombre de un cliente.
* Servicios disponibles por categoria
* Mostrar las ganancias filtrado por mes año dia 