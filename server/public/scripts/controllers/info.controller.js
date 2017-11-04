myApp.controller('InfoController', function (UserService, $scope) {

  var vm = this;
  vm.userService = UserService;
  vm.chartData = UserService.chartData;

  vm.getChartData = function () {
    UserService.getChartData()
  }

  $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Series A'];

  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];

  // vm.mainChartYears = vm.chartData.data.reduce(function (prev, curr) {
  //   var index = prev.findIndex(function (element) {
  //     return element.year === curr.year;
  //   });
  //   if (index < 0) {
  //     prev.push(curr);
  //   }
  //   return prev;
  // },
  //   []
  // ).map(function (element) { return element.year }).map(String)

  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });
});