'use strict';

angular.module('carAdvisor')
    .controller('MainCtrl', function ($http, $scope, $location, $anchorScroll) {
        var dmcpk,pmcpk,dtmc,ptmc,dfcpkh,pfcpkh,dfcpkc,pfcpkc,dacpk,pacpk,dtfc,ptfc,difftotfc,dtrc,ptrc,difftotrc,daco,paco,diff,diffcost,diffinv,totkm,kpy,drv,prv,dhm,dcm,phm,pcm,hkm,ckm,c,n,dc,pc,rint,ds,ps,dcs,pcs,dem,pem,df,pf,di,pi;
        $scope.carData = [
            {
                'name': 'Swift Dzire',
                'description': 'Maruti Suzuki Swift DZire comes in  8 versions with 2 engine and 2 transmission and 2 fuel options',
                'logo':'dzire.png',
                'petrol': {
                  'cost': 485000.0,
                  'hmileage': 19.1,
                  'cmileage': 16.3,
                  'costPerService': 2500.0,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'insuranceCost': 43000.0
              },
                'diesel': {
                  'cost': 579000,
                  'hmileage': 23.4,
                  'cmileage': 18.6,
                  'servicePeriod': 10000.0,
                  'costPerService': 4168.6,
                  'extraMaintCost': 0.0,
                  'insuranceCost': 55000.0  
                }
              },
              {
                'name': 'Hyundai Xcent',
                'description': 'The sedan looks identical to the Grand i10 hatchback, but new styling design and rich interior mark distinction to its portfolio',
                'logo':'xcent.png',
                'petrol': {
                  'cost': 473000,
                  'hmileage': 19.2,
                  'cmileage': 15.7,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 2763
                },
                'diesel': {
                  'cost': 562000,
                  'hmileage': 24.4,
                  'cmileage': 18.9,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 4121.8
                }
              },
              {
                'name': 'Tata Manza',
                'description': 'The new Manza CS will be positioned between the mid-size Manza sedan and Indigo eCs.',
                'logo':'manza.png',
                'petrol': {
                  'cost': 580000,
                  'hmileage': 14.5,
                  'cmileage': 11.1,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 3260
                },
                'diesel': {
                  'cost': 600000,
                  'hmileage': 21.2,
                  'cmileage': 19.5,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 5008
                }
              },
              {
                'name': 'Toyota Etios',
                'description': 'The Toyota Etios is a line of four-door sedan and hatchback cars produced by Japanese automobile manufacturer Toyota for the Indian automotive market since 2010',
                'logo':'etios.png',
                'petrol': {
                  'cost': 574000,
                  'hmileage': 16.7,
                  'cmileage': 13.5,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 2963.3
                },
                'diesel': {
                  'cost': 684000,
                  'hmileage': 23.59,
                  'cmileage': 20.3,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 3070.8
                }
              },
              {
                'name': 'Honda Amaze',
                'description': 'India"s most fuel efficient compact sedan Honda Amaze gardens another achievement under its brand by getting its name written in Guinness World Record books in the category of Longest journey by a car in a single country',
                'logo':'amaze.png',
                'petrol': {
                  'cost': 500000,
                  'hmileage': 18,
                  'cmileage': 15,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,               
                  'costPerService': 4557.5
                },
                'diesel': {
                  'cost': 598000,
                  'hmileage': 25.8,
                  'cmileage': 21,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,              
                  'costPerService': 5140.9
                }
              },
              {
                'name': 'Fiat Linea',
                'description': 'Fiat Linea sedan model series is a sleek and lustrous looking vehicle. The manufacturer has designed it to give a direct competition to the likes of Honda City, Volkswagen Vento',
                'logo':'linea.png',
                'petrol': {
                  'cost': 700000,
                  'hmileage': 14.9,
                  'cmileage': 11.2,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 4611
                },
                'diesel': {
                  'cost': 817000,
                  'hmileage': 20.4,
                  'cmileage': 17.2,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 5077
                }
              },
              {
                'name': 'Nissan Sunny',
                'description': 'The New Fiat Linea, with its flair in design and precision engineering. Built from the old version.',
                'logo':'sunny.png',
                'petrol': {
                  'cost': 699000,
                  'hmileage': 14.9,
                  'cmileage': 11.2,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'hmileage': 20.4,
                  'cmileage': 17.2,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 5881.3
                }
              },
              {
                'name': 'Honda City',
                'description': 'Honda Cars India’s new City is leading in the mid-size sedan category, considered an important segment for all companies in the domestic market',
                'logo':'city.png',
                'petrol': {
                  'cost': 699000,
                  'hmileage': 14.9,
                  'cmileage': 11.2,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 3249.1
                },
                'diesel': {
                  'cost': 813000,
                  'hmileage': 20.4,
                  'cmileage': 17.2,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,
                  'costPerService': 5881.3
                }
              },
                            {
                'name': 'Custom',
                'description': '',
                'logo':'custom.png',
                'petrol': {
                  'cost': 0,
                  'hmileage': 20.4,
                  'cmileage': 17.2,
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,              
                  'costPerService': 0
                },
                'diesel': {
                  'cost': 0,
                  'hmileage': 20.4,
                  'cmileage': 17.2, 
                  'extraMaintCost': 0.0,
                  'servicePeriod': 10000.0,              
                  'costPerService': 0
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

            var dcost=parseFloat($scope.car.diesel.cost);
            $scope.car.diesel.resaleValue = parseInt(dcost*(1-Math.pow(0.9,$scope.car.years)));
            var pcost=parseFloat($scope.car.petrol.cost);
            $scope.car.petrol.resaleValue = parseInt(pcost*(1-Math.pow(0.9,$scope.car.years)));

            $scope.car.petrol.insuranceCost = parseFloat($scope.car.petrol.cost)*0.16*parseFloat($scope.car.years);
            $scope.car.diesel.insuranceCost = parseFloat($scope.car.diesel.cost)*0.16*parseFloat($scope.car.years);
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
            dhm=parseFloat(c.diesel.hmileage);
            dcm=parseFloat(c.diesel.cmileage);
            ds=parseFloat(c.diesel.servicePeriod);
            dcs=parseFloat(c.diesel.costPerService);
            dem=parseFloat(c.diesel.extraMaintCost);
            di=parseFloat(c.diesel.insuranceCost);

            pc=parseFloat(c.petrol.cost);
            phm=parseFloat(c.petrol.hmileage);
            pcm=parseFloat(c.petrol.cmileage);
            ps=parseFloat(c.petrol.servicePeriod);
            pcs=parseFloat(c.petrol.costPerService);
            pem=parseFloat(c.petrol.extraMaintCost);
            pi=parseFloat(c.petrol.insuranceCost);

            hkm=parseFloat(c.hkm);
            ckm=parseFloat(c.ckm);

            drv=parseFloat(c.diesel.resaleValue);
            prv=parseFloat(c.petrol.resaleValue);

            // Calculations
            kpy=12*(hkm+ckm);
            totkm=n*kpy;
            diffcost=dc-pc;
            diffinv=diffcost*Math.pow((1+(rint/100)),n);
            dmcpk=((totkm/ds)*dcs+dem)/totkm;
            pmcpk=((totkm/ps)*pcs+pem)/totkm;

            dtmc=totkm*dmcpk;
            ptmc=totkm*pmcpk;

            dfcpkh=df/dhm;
            pfcpkh=pf/phm;
            
            dfcpkc=df/dcm;
            pfcpkc=pf/pcm;

            dacpk=dmcpk+(hkm*dfcpkh+ckm*dfcpkc)/(hkm+ckm);
            pacpk=pmcpk+(hkm*pfcpkh+ckm*pfcpkc)/(hkm+ckm);

            dtfc=(12*hkm*dfcpkh+12*ckm*dfcpkc)*n;
            ptfc=(12*hkm*pfcpkh+12*ckm*pfcpkc)*n;

            difftotfc=ptfc-dtfc;

            dtrc=totkm*dacpk+di;
            ptrc=totkm*pacpk+pi;

            difftotrc=ptrc-dtrc;

            daco=dc+dtrc-drv;
            paco=pc+ptrc-prv-diffinv;

            diff=paco-daco;

            console.log(diff);
            if(diff>0){
                $scope.result = 'Diesel vehicle is recommended, gains will start to show up when ODO reaches '+(totkm-(diff/dacpk))+' kms.';
            }else{
                $scope.result = 'Petrol vehicle is recommended.';
            }
        };
    });
