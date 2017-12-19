module.exports = function (app) {
  const data = [
    {
      "model": "Mazda Rx7",
      "type": "Coupe",
      "year": "1998",
      "color": "red",
      "cost": 1200,
      "ifDiscount": false,
      "clientFirstName": "Jan",
      "clientSecondName": "Kowalski",
      "clientPhoneNumber": "505888712",
      "clientEmail": "jan@kowalski.pl",
      "power": 155,
      "licensePlate": "GWE2118",
      "rentStart": "2017-06-01T17:16:39.259Z",
      "rentEnd": "2017-07-01T17:16:39.260Z"
    },
    {
      "model": "Opel",
      "type": "Astra III",
      "year": "2005",
      "color": "blue",
      "cost": 12944,
      "ifDiscount": true,
      "clientFirstName": "Sebatian",
      "clientSecondName": "Woźniak",
      "clientPhoneNumber": "723844765",
      "clientEmail": "seba@seba.pl",
      "power": 253,
      "licensePlate": "PKLG410",
      "rentStart": "2017-06-01T17:16:39.259Z",
      "rentEnd": "2017-07-01T17:16:39.260Z"
    }
  ];

  var db = app.dataSources.db;
  const CarModel = app.models.Car || db.buildModelFromInstance("Car", data, {idInjection: true});

  data.map(function (car) {
    CarModel.create(car, function (err, u) {
      if (err) {
        throw err;
      }
    });
  })

}
