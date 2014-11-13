'use strict';

angular.module('carAdvisor')
    .controller('MainCtrl', function ($scope) {
        $scope.carData = [
            {
                'name': 'Swift Dzire',
                'description': '',
                'logo':'dzire.png',
                'petrol': {
                  'cost': 485000,
                  'hmileage': 19.1,
                  'cmileage': 16.3,
                  'maintainance': 3333.3
                },
                'diesel': {
                  'cost': 579000,
                  'hmileage': 23.4,
                  'cmileage': 18.6,
                  'maintainance': 4168.6
                }
              },
              {
                'name': 'Hyundai Xcent',
                'description': '',
                'logo':'xcent.png',
                'petrol': {
                  'cost': 473000,
                  'hmileage': 19.2,
                  'cmileage': 15.7,
                  'maintainance': 2763
                },
                'diesel': {
                  'cost': 562000,
                  'hmileage': 24.4,
                  'cmileage': 18.9,
                  'maintainance': 4121.8
                }
              },
              {
                'name': 'Tata Manza',
                'description': '',
                'logo':'manza.png',
                'petrol': {
                  'cost': 580000,
                  'hmileage': 14.5,
                  'cmileage': 11.1,
                  'maintainance': 3260
                },
                'diesel': {
                  'cost': 600000,
                  'hmileage': 21.2,
                  'cmileage': 19.5,
                  'maintainance': 5008
                }
              },
              {
                'name': 'Toyota Etios',
                'description': '',
                'logo':'etios.png',
                'petrol': {
                  'cost': 574000,
                  'hmileage': 16.7,
                  'cmileage': 13.5,
                  'maintainance': 2963.3
                },
                'diesel': {
                  'cost': 684000,
                  'hmileage': 23.59,
                  'cmileage': 20.3,
                  'maintainance': 3070.8
                }
              },
              {
                'name': 'Honda Amaze',
                'description': '',
                'logo':'amaze.png',
                'petrol': {
                  'cost': 500000,
                  'hmileage': 18,
                  'cmileage': 15,
                  'maintainance': 4557.5
                },
                'diesel': {
                  'cost': 598000,
                  'hmileage': 25.8,
                  'cmileage': 21,
                  'maintainance': 5140.9
                }
              },
              {
                'name': 'Fiat Linea',
                'description': '',
                'logo':'linea.png',
                'petrol': {
                  'cost': 700000,
                  'hmileage': 14.9,
                  'cmileage': 11.2,
                  'maintainance': 4611
                },
                'diesel': {
                  'cost': 817000,
                  'hmileage': 20.4,
                  'cmileage': 17.2,
                  'maintainance': 5077
                }
              },
              {
                'name': 'Nissan Sunny',
                'description': '',
                'logo':'sunny.png',
                'petrol': {
                  'cost': 699000,
                  'hmileage': 14.9,
                  'cmileage': 11.2,
                  'maintainance': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'hmileage': 20.4,
                  'cmileage': 17.2,
                  'maintainance': 5881.3
                }
              },
              {
                'name': 'Honda City',
                'description': '',
                'logo':'city.png',
                'petrol': {
                  'cost': 699000,
                  'hmileage': 14.9,
                  'cmileage': 11.2,
                  'maintainance': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'hmileage': 20.4,
                  'cmileage': 17.2,
                  'maintainance': 5881.3
                }
              },
                            {
                'name': 'Custom',
                'description': '',
                'logo':'custom.png',
                'petrol': {
                  'cost': 0,
                  'hmileage': 0,
                  'cmileage': 0,
                  'maintainance': 0
                },
                'diesel': {
                  'cost': 0,
                  'hmileage': 0,
                  'cmileage': 0,
                  'maintainance': 0
                }
            }
        ];   
    });
