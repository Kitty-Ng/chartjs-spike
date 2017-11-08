myApp.service('UserService', function ($http, $location) {
  var self = this;

  self.userObject = {};
  self.appliancesObj = { appliances: [] };
  self.chartData = { data: [] };
  self.mainChartYears = [];

  self.getuser = function () {
    $http({
      method: "GET",
      url: '/user'
    }).then(function (response) {
      if (response.data.username) {
        // user has a current session on the server
        self.userObject.userName = response.data.username;
      } else {
        // user has no session, bounce them back to the login page
        $location.path("/home");
      }
    })
  };

  self.getChartData = function () {
    //on page load, GET all chart data from DB to the DOM
    return $http({
      method: 'GET',
      url: '/chart'
    })
      .then(function (res) {
        self.chartData.data = res.data;
        return self.chartData.data
      })
      .then(function (res) {

        self.filteredYears = res.reduce(function (prev, curr) {
          if (!prev[curr.year]) {
            prev[curr.year] = [];
          }

          prev[curr.year].push(curr);

          return prev;
        }, {});

        self.mainChartYears = Object.keys(self.filteredYears);

        self.filteredYears = self.mainChartYears.map(function (year) {
          return self.filteredYears[year].length;

        });
      })
  };


  self.logout = function () {
    $http({
      method: "GET",
      url: '/user/logout',
    }).then(function (response) {
      $location.path("/home");
    });
  }
});