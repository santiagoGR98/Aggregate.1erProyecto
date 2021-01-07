db.Ventas.insertMany([

{Articulo: "Saxofón",
PrecioVenta: 45,
UnidadesVendidas: 15,
UnidadesCompradas: 20,
FechaEntradaAlmacen: new Date(2020,9,12),
PrecioCompra: 35,
Clientes: [1, 4, 6],
Vendedores: [3, 5, 8, 10]
},

{Articulo: "Trompeta",
PrecioVenta: 120,
UnidadesVendidas: 4,
UnidadesCompradas: 10,
FechaEntradaAlmacen: new Date(2020,1,1),
PrecioCompra: 100,
Clientes: [10, 3, 7],
Vendedores: [3, 5]
},

{Articulo: "Guitarra",
PrecioVenta: 100,
UnidadesVendidas: 1,
UnidadesCompradas: 8,
FechaEntradaAlmacen: new Date(2020,5,12),
PrecioCompra: 80,
Clientes: [7],
Vendedores: [1]
},

{Articulo: "Piano",
PrecioVenta: 5000,
UnidadesVendidas: 15,
UnidadesCompradas: 30,
FechaEntradaAlmacen: new Date(2020,4,25),
PrecioCompra: 400,
Clientes: [10, 3, 7, 5, 2, 8, 9],
Vendedores: [3, 5, 1, 2]
},

{Articulo: "Violín",
PrecioVenta: 50,
UnidadesVendidas: 17,
UnidadesCompradas: 17,
FechaEntradaAlmacen: new Date(2020,12,1),
PrecioCompra: 10,
Clientes: [10, 7, 5, 3, 9],
Vendedores: [3, 5, 9, 8]
},

{Articulo: "Xilofono",
PrecioVenta: 15,
UnidadesVendidas: 4,
UnidadesCompradas: 10,
FechaEntradaAlmacen: new Date(2020,11,18),
PrecioCompra: 6,
Clientes: [10, 4, 6, 5, 3, 7],
Vendedores: [3, 5, 1, 2, 7, 8]
},

{Articulo: "Contrabajo",
PrecioVenta: 200,
UnidadesVendidas: 2,
UnidadesCompradas: 5,
FechaEntradaAlmacen: new Date(2020,7,8),
PrecioCompra: 160,
Clientes: [3, 7],
Vendedores: [3, 5]
},

{Articulo: "Bateria",
PrecioVenta: 300,
UnidadesVendidas: 20,
UnidadesCompradas: 30,
FechaEntradaAlmacen: new Date(2020,10,1),
PrecioCompra: 100,
Clientes: [7, 9, 1, 3, 2, 9, 5],
Vendedores: [3, 5, 7, 8, 9]
},

{Articulo: "Equipo de sonido",
PrecioVenta: 70,
UnidadesVendidas: 45,
UnidadesCompradas: 60,
FechaEntradaAlmacen: new Date(2020,2,27),
PrecioCompra: 30,
Clientes: [10, 3, 1, 2, 4, 5, 6, 8, 7],
Vendedores: [3, 1, 2, 4, 7, 8, 5]
},
])