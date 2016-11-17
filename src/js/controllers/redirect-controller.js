angular.module('codeKarmaApp').controller('RedirectController', function($state, RequestService, $location) {

  // function to determine if the user is a client or developer and redirect them to their dashboard
  this.dashboardRedirect = function() {
    this.url = $location.url();

    if (this.url.includes("Client")) {
      $state.go('codeKarmaParent.clientDashboard');
    } else if (this.url.includes("Developer")) {
      $state.go('codeKarmaParent.devDashboard');
    }
  };

  this.getToken = function() {
    RequestService.getToken(function(response) {
      console.log(RequestService.token);
      console.log(response);
      this.dashboardRedirect();
    });
  };

  this.getToken();
});
