'use strict';

angular.module('carAdvisor')
    .controller('MainCtrl', function ($http, $scope, $location, $anchorScroll) {
        var x,c,n,dc,pc,rint,ds,ps,dcs,pcs,dem,pem,df,pf,dm,pm,di,pi;
        $scope.carData = [
            {
                'name': 'Swift Dzire',
                'description': '',
                'logo':'dzire.png',
                'petrol': {
                  'cost': 485000.0,
                  'milage': 17.7,
                  'servicePeriod': 15000.0,
                  'costPerService': 2500.0,
                  'extraMaintCost': 2500.0,
                  'insuranceCost': 43000.0              },
                'diesel': {
                  'cost': 579000,
                  'milage': 21.0,
                  'servicePeriod': 15000.0,
                  'costPerService': 2500.0,
                  'extraMaintCost': 5000.0,
                  'insuranceCost': 55000.0  
                }
              },
              {
                'name': 'Hyundai Xcent',
                'description': '',
                'logo':'xcent.png',
                'petrol': {
                  'cost': 473000,
                  'milage': 17.45,
                  'maintainance': 2763
                },
                'diesel': {
                  'cost': 562000,
                  'milage': 31.65,
                  'maintainance': 4121.8
                }
              },
              {
                'name': 'Tata Manza',
                'description': '',
                'logo':'manza.png',
                'petrol': {
                  'cost': 580000,
                  'milage': 12.8,
                  'maintainance': 3260
                },
                'diesel': {
                  'cost': 600000,
                  'milage': 20.35,
                  'maintainance': 5008
                }
              },
              {
                'name': 'Toyota Etios',
                'description': '',
                'logo':'etios.png',
                'petrol': {
                  'cost': 574000,
                  'milage': 15.1,
                  'maintainance': 2963.3
                },
                'diesel': {
                  'cost': 684000,
                  'milage': 21.945,
                  'maintainance': 3070.8
                }
              },
              {
                'name': 'Honda Amaze',
                'description': '',
                'logo':'amaze.png',
                'petrol': {
                  'cost': 500000,
                  'milage': 16.5,                 
                  'maintainance': 4557.5
                },
                'diesel': {
                  'cost': 598000,
                  'milage': 23.4,                 
                  'maintainance': 5140.9
                }
              },
              {
                'name': 'Fiat Linea',
                'description': '',
                'logo':'linea.png',
                'petrol': {
                  'cost': 700000,
                  'milage': 13.05,
                  'maintainance': 4611
                },
                'diesel': {
                  'cost': 817000,
                  'milage': 18.8,
                  'maintainance': 5077
                }
              },
              {
                'name': 'Nissan Sunny',
                'description': '',
                'logo':'sunny.png',
                'petrol': {
                  'cost': 699000,
                  'milage': 13.05,
                  'maintainance': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'milage': 18.8,
                  'maintainance': 5881.3
                }
              },
              {
                'name': 'Honda City',
                'description': '',
                'logo':'city.png',
                'petrol': {
                  'cost': 699000,
                  'milage': 13.05,
                  'maintainance': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'milage': 18.8,
                  'maintainance': 5881.3
                }
              },
                            {
                'name': 'Custom',
                'description': '',
                'logo':'custom.png',
                'petrol': {
                  'cost': 0,
                  'milage': 0,                
                  'maintainance': 0
                },
                'diesel': {
                  'cost': 0,
                  'milage': 0,                
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
            $scope.car.years=5;
            $scope.car.rInt=7;
        };
        $http.jsonp('https://www.kimonolabs.com/api/2tyjuvaa?apikey=BrYpmtAOTbdei17Gr0tWlUM6dT2Y5xKP&callback=JSON_CALLBACK').success(function(data){
            data = data.results.prices[0];
            pf = parseFloat(data.petrol.slice(0,5));
            df = parseFloat(data.diesel.slice(0,5));
            $scope.pf=pf;
            $scope.df=df;

        }).error(function(error){
            console.log(error);
        });

        $scope.calculate = function(){
            c = $scope.car;

            n = parseFloat(c.years);
            rint = parseFloat(c.rInt);

            dc=parseFloat(c.diesel.cost);
            dm=parseFloat(c.diesel.milage);
            ds=parseFloat(c.diesel.servicePeriod);
            dcs=parseFloat(c.diesel.costPerService);
            dem=parseFloat(c.diesel.extraMaintCost);
            di=parseFloat(c.diesel.insuranceCost);

            pc=parseFloat(c.petrol.cost);
            pm=parseFloat(c.petrol.milage);
            ps=parseFloat(c.petrol.servicePeriod);
            pcs=parseFloat(c.petrol.costPerService);
            pem=parseFloat(c.petrol.extraMaintCost);
            pi=parseFloat(c.petrol.insuranceCost);

            x=(dm*ds*(dc + dem + di + (Math.pow((1 + rint/100),n)*(dc - pc)) - pc - pem - pi)*pm*ps) / (12*n*(-df*ds*pm*ps + dm*(ds*pcs*pm + ds*pf*ps - dcs*pm*ps)));

            $scope.results = x;
        };
       
    });
