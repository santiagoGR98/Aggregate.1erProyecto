
/*Para saber la totalidad de tipos de instrumentos que se han vendido este año
utilizaremos la siguiente consulta*/

db.ventas.aggregate( [
    {
      $group: {
         articulo: exists,
         TotalInstrumentos: { $sum: 1 }
      }
    }
  ] )

/*Para saber la totalidad de dinero que hemos obtenido con la venta de pianos utilizaremos
 la siguiente consulta*/

 db.ventas.aggregate( [
      {
        $group :
          {
            Articulo : "Piano",
            TotalDeVenta: { $multiply: [ "$PrecioVenta", "$UnidadesVendidas" ] }
          }
       } ])

/*Para mostrar el articulo que mas se vendio durante unas fechas concretas tendremos 
 que ejecutar la siguiente consulta*/

 db.ventas.aggregate([
     {$match: {"FechaEntradaAlmacen": { 
    $gte: new ISODate("2020-01-01"), 
    $lt: new ISODate("2020-01-09")
}
}},
{$group:{
    Articulo: {$ne : null},
    ArticuloMasVendido: { $max: "$UnidadesVendidas"}
}
} ])

/*Para saber el mes en el que menos ventas se han realizado tendremos que ejecutar
 la siguiente consulta*/

 db.ventas.aggregate([
     {
        $group:{
            _id: { mesMenosVentas: { $month: "$FechaEntradaAlmacen"}},
            MinUnidadesVendidas:{ $min: "$UnidadesVendidas" }}},
        ])

/* Si queremos saber que instrumento ha sido el más vendido tendremos que ejecutar la siguiente
 consulta*/

 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$Articulo",
            ArticuloMasVendido: { $max: "$UnidadesVendidas" }
          }
       }])

/*Si por lo contrario quisiesemos saber que articulo ha sido el que menos se ha vendido
 o el que menos existencias hay en el almacen ejecutararemos una de estas dos consultas*/

 /*Articulo menos vendido*/

 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$Articulo",
            ArticuloMenosVendido: { $min: "$UnidadesVendidas" }
          }
       }])

/*Menos existencias en almacen*/ db.ventas.aggregate(

    db.ventas.aggregate(
        [
          {
            $group:
              {
                _id: "$Articulo",
                ArticuloMenosExistencia: { $min: "$UnidadesCompradas" }
              }
           }]))
