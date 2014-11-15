'use strict';

angular.module('carAdvisor')
    .controller('MainCtrl', function ($scope, $location, $anchorScroll) {
        $scope.carData = [
            {
                'name': 'Swift Dzire',
                'description': '',
                'logo':'dzire.png',
                'petrol': {
                  'cost': 485000,
                  'hmilage': 19.1,
                  'cmilage': 16.3,
                  'maintainance': 3333.3
                },
                'diesel': {
                  'cost': 579000,
                  'hmilage': 23.4,
                  'cmilage': 18.6,
                  'maintainance': 4168.6
                }
              },
              {
                'name': 'Hyundai Xcent',
                'description': '',
                'logo':'xcent.png',
                'petrol': {
                  'cost': 473000,
                  'hmilage': 19.2,
                  'cmilage': 15.7,
                  'maintainance': 2763
                },
                'diesel': {
                  'cost': 562000,
                  'hmilage': 24.4,
                  'cmilage': 18.9,
                  'maintainance': 4121.8
                }
              },
              {
                'name': 'Tata Manza',
                'description': '',
                'logo':'manza.png',
                'petrol': {
                  'cost': 580000,
                  'hmilage': 14.5,
                  'cmilage': 11.1,
                  'maintainance': 3260
                },
                'diesel': {
                  'cost': 600000,
                  'hmilage': 21.2,
                  'cmilage': 19.5,
                  'maintainance': 5008
                }
              },
              {
                'name': 'Toyota Etios',
                'description': '',
                'logo':'etios.png',
                'petrol': {
                  'cost': 574000,
                  'hmilage': 16.7,
                  'cmilage': 13.5,
                  'maintainance': 2963.3
                },
                'diesel': {
                  'cost': 684000,
                  'hmilage': 23.59,
                  'cmilage': 20.3,
                  'maintainance': 3070.8
                }
              },
              {
                'name': 'Honda Amaze',
                'description': '',
                'logo':'amaze.png',
                'petrol': {
                  'cost': 500000,
                  'hmilage': 18,
                  'cmilage': 15,
                  'maintainance': 4557.5
                },
                'diesel': {
                  'cost': 598000,
                  'hmilage': 25.8,
                  'cmilage': 21,
                  'maintainance': 5140.9
                }
              },
              {
                'name': 'Fiat Linea',
                'description': '',
                'logo':'linea.png',
                'petrol': {
                  'cost': 700000,
                  'hmilage': 14.9,
                  'cmilage': 11.2,
                  'maintainance': 4611
                },
                'diesel': {
                  'cost': 817000,
                  'hmilage': 20.4,
                  'cmilage': 17.2,
                  'maintainance': 5077
                }
              },
              {
                'name': 'Nissan Sunny',
                'description': '',
                'logo':'sunny.png',
                'petrol': {
                  'cost': 699000,
                  'hmilage': 14.9,
                  'cmilage': 11.2,
                  'maintainance': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'hmilage': 20.4,
                  'cmilage': 17.2,
                  'maintainance': 5881.3
                }
              },
              {
                'name': 'Honda City',
                'description': '',
                'logo':'city.png',
                'petrol': {
                  'cost': 699000,
                  'hmilage': 14.9,
                  'cmilage': 11.2,
                  'maintainance': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'hmilage': 20.4,
                  'cmilage': 17.2,
                  'maintainance': 5881.3
                }
              },
                            {
                'name': 'Custom',
                'description': '',
                'logo':'custom.png',
                'petrol': {
                  'cost': 0,
                  'hmilage': 0,
                  'cmilage': 0,
                  'maintainance': 0
                },
                'diesel': {
                  'cost': 0,
                  'hmilage': 0,
                  'cmilage': 0,
                  'maintainance': 0
                }
            }
        ];
        var gotoDetails = function(){
            // set the location.hash to the id of
            // the element you wish to scroll to.
            $location.hash('details');

            // call $anchorScroll()
            $anchorScroll();
        };
        $scope.selectCar = function(car){
            for (var i = $scope.carData.length - 1; i >= 0; i--) {
                if($scope.carData[i].name === car){
                    $scope.car = $scope.carData[i];
                    gotoDetails();
                    break;
                }
            }
        };
       
    });
