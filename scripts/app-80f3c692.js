"use strict";angular.module("carAdvisor",["ngAnimate","ngSanitize"]),angular.module("carAdvisor").controller("MainCtrl",["$http","$scope","$location","$anchorScroll",function(e,a,i,r){var t,o,s,n,c,l,d,p,m,g,v,h,u,P,C,f,F,b,y,M,S,x,w,k,z,A,T,D,I,H,L,V,$,N,O,j,B,G,E,J,K,W,Y,R,U,X;a.carData=[{name:"Swift Dzire",description:"Maruti Suzuki Swift DZire comes in  8 versions with 2 engine and 2 transmission and 2 fuel options",logo:"dzire.png",petrol:{cost:485e3,hmileage:19.1,cmileage:16.3,costPerService:2500,extraMaintCost:0,servicePeriod:1e4,insuranceCost:43e3},diesel:{cost:579e3,hmileage:23.4,cmileage:18.6,servicePeriod:1e4,costPerService:4168.6,extraMaintCost:0,insuranceCost:55e3}},{name:"Hyundai Xcent",description:"The sedan looks identical to the Grand i10 hatchback, but new styling design and rich interior mark distinction to its portfolio",logo:"xcent.png",petrol:{cost:473e3,hmileage:19.2,cmileage:15.7,extraMaintCost:0,servicePeriod:1e4,costPerService:2763},diesel:{cost:562e3,hmileage:24.4,cmileage:18.9,extraMaintCost:0,servicePeriod:1e4,costPerService:4121.8}},{name:"Tata Manza",description:"The new Manza CS will be positioned between the mid-size Manza sedan and Indigo eCs.",logo:"manza.png",petrol:{cost:58e4,hmileage:14.5,cmileage:11.1,extraMaintCost:0,servicePeriod:1e4,costPerService:3260},diesel:{cost:6e5,hmileage:21.2,cmileage:19.5,extraMaintCost:0,servicePeriod:1e4,costPerService:5008}},{name:"Toyota Etios",description:"The Toyota Etios is a line of four-door sedan and hatchback cars produced by Japanese automobile manufacturer Toyota for the Indian automotive market since 2010",logo:"etios.png",petrol:{cost:574e3,hmileage:16.7,cmileage:13.5,extraMaintCost:0,servicePeriod:1e4,costPerService:2963.3},diesel:{cost:684e3,hmileage:23.59,cmileage:20.3,extraMaintCost:0,servicePeriod:1e4,costPerService:3070.8}},{name:"Honda Amaze",description:'India"s most fuel efficient compact sedan Honda Amaze gardens another achievement under its brand by getting its name written in Guinness World Record books in the category of Longest journey by a car in a single country',logo:"amaze.png",petrol:{cost:5e5,hmileage:18,cmileage:15,extraMaintCost:0,servicePeriod:1e4,costPerService:4557.5},diesel:{cost:598e3,hmileage:25.8,cmileage:21,extraMaintCost:0,servicePeriod:1e4,costPerService:5140.9}},{name:"Fiat Linea",description:"Fiat Linea sedan model series is a sleek and lustrous looking vehicle. The manufacturer has designed it to give a direct competition to the likes of Honda City, Volkswagen Vento",logo:"linea.png",petrol:{cost:7e5,hmileage:14.9,cmileage:11.2,extraMaintCost:0,servicePeriod:1e4,costPerService:4611},diesel:{cost:817e3,hmileage:20.4,cmileage:17.2,extraMaintCost:0,servicePeriod:1e4,costPerService:5077}},{name:"Nissan Sunny",description:"The New Fiat Linea, with its flair in design and precision engineering. Built from the old version.",logo:"sunny.png",petrol:{cost:699e3,hmileage:14.9,cmileage:11.2,extraMaintCost:0,servicePeriod:1e4,costPerService:3249.1},diesel:{cost:813e3,hmileage:20.4,cmileage:17.2,extraMaintCost:0,servicePeriod:1e4,costPerService:5881.3}},{name:"Honda City",description:"Honda Cars India’s new City is leading in the mid-size sedan category, considered an important segment for all companies in the domestic market",logo:"city.png",petrol:{cost:699e3,hmileage:14.9,cmileage:11.2,extraMaintCost:0,servicePeriod:1e4,costPerService:3249.1},diesel:{cost:813e3,hmileage:20.4,cmileage:17.2,extraMaintCost:0,servicePeriod:1e4,costPerService:5881.3}},{name:"Custom",description:"",logo:"custom.png",petrol:{cost:0,hmileage:20.4,cmileage:17.2,extraMaintCost:0,servicePeriod:1e4,costPerService:0},diesel:{cost:0,hmileage:20.4,cmileage:17.2,extraMaintCost:0,servicePeriod:1e4,costPerService:0}}];var Z=function(){i.hash("details"),r()};a.selectCar=function(e){for(var i=a.carData.length-1;i>=0;i--)if(a.carData[i].name===e){a.car=a.carData[i],Z();break}a.car.years=5,a.car.rInt=7;var r=parseFloat(a.car.diesel.cost);a.car.diesel.resaleValue=parseInt(r*(1-Math.pow(.9,a.car.years)));var t=parseFloat(a.car.petrol.cost);a.car.petrol.resaleValue=parseInt(t*(1-Math.pow(.9,a.car.years))),a.car.petrol.insuranceCost=.16*parseFloat(a.car.petrol.cost)*parseFloat(a.car.years),a.car.diesel.insuranceCost=.16*parseFloat(a.car.diesel.cost)*parseFloat(a.car.years)},e.jsonp("https://www.kimonolabs.com/api/2tyjuvaa?apikey=BrYpmtAOTbdei17Gr0tWlUM6dT2Y5xKP&callback=JSON_CALLBACK").success(function(e){e=e.results.prices[0],R=parseFloat(e.petrol.slice(0,5)),Y=parseFloat(e.diesel.slice(0,5)),a.pf=R,a.df=Y}).error(function(e){console.log(e)}),a.calculate=function(){V=a.car,$=parseFloat(V.years),j=parseFloat(V.rInt),N=parseFloat(V.diesel.cost),A=parseFloat(V.diesel.hmileage),T=parseFloat(V.diesel.cmileage),B=parseFloat(V.diesel.servicePeriod),E=parseFloat(V.diesel.costPerService),K=parseFloat(V.diesel.extraMaintCost),U=parseFloat(V.diesel.insuranceCost),O=parseFloat(V.petrol.cost),D=parseFloat(V.petrol.hmileage),I=parseFloat(V.petrol.cmileage),G=parseFloat(V.petrol.servicePeriod),J=parseFloat(V.petrol.costPerService),W=parseFloat(V.petrol.extraMaintCost),X=parseFloat(V.petrol.insuranceCost),H=parseFloat(V.hkm),L=parseFloat(V.ckm),k=parseFloat(V.diesel.resaleValue),z=parseFloat(V.petrol.resaleValue),w=12*(H+L),x=$*w,M=N-O,S=M*Math.pow(1+j/100,$),t=(x/B*E+K)/x,o=(x/G*J+W)/x,s=x*t,n=x*o,c=Y/A,l=R/D,d=Y/T,p=R/I,m=t+(H*c+L*d)/(H+L),g=o+(H*l+L*p)/(H+L),v=(12*H*c+12*L*d)*$,h=(12*H*l+12*L*p)*$,u=h-v,P=x*m+U,C=x*g+X,f=C-P,F=N+P-k,b=O+C-z-S,y=b-F,console.log(y),a.result=y>0?"Diesel vehicle is recommended, gains will start to show up when ODO reaches "+(x-y/m)+" kms.":"Petrol vehicle is recommended."}}]),angular.module("carAdvisor").controller("NavbarCtrl",["$scope",function(e){e.date=new Date}]),function(e){try{e=angular.module("carAdvisor")}catch(a){e=angular.module("carAdvisor",[])}e.run(["$templateCache",function(e){e.put("components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="navbar-header"><a class="navbar-brand" href="http://shahidh.me"><span class="glyphicon glyphicon-home"></span> Car Advisor</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"></ul></div></nav>')}])}();