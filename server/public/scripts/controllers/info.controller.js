myApp.controller('InfoController', function (UserService) {
  console.log('InfoController created');
  var vm = this;
  vm.userService = UserService;
  vm.chartData = UserService.chartData;

  vm.getChartData = function () {
    UserService.getChartData()
  }
  
  vm.mainChartYears = vm.chartData.data.reduce(function (prev, curr) {
    var index = prev.findIndex(function (element) {
      return element.year === curr.year;
    });
    if (index < 0) {
      prev.push(curr);
    }
    return prev;
  },
    []
  ).map(function (element) { return element.year }).map(String)

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: vm.mainChartYears,
      datasets: [{
        label: '# of MCM cases per year',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });

});
