let vehicles = [
    {
        "id_vehicle_service": "83",
        "id_service": "64",
        "id_vehicle": "34",
        "name": "Bicicletas Electricas",
        "description": "Mejores resultados con menor esfuerzo",
        "price": "10",
        "duration": "30"
    },
    {
        "id_vehicle_service": "84",
        "id_service": "65",
        "id_vehicle": "34",
        "name": "Patinetas ",
        "description": "No te vayas a caer",
        "price": "10",
        "duration": "45"
    },
    {
        "id_vehicle_service": "86",
        "id_service": "63",
        "id_vehicle": "34",
        "name": "Bicicletas",
        "description": "Bicis estándares",
        "price": "10",
        "duration": "60"
    }
]

let unselected = [84, 86];


unselected.forEach(un => {
  vehicles.forEach((vh, index) => {
    if(+vh.id_vehicle_service === +un) vehicles.splice(index, 1);
  } )
})

console.log(vehicles)