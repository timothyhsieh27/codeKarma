angular.module('codeKarmaApp').controller('ClientAddProjectController', function($state, $http, RequestService) {


  // this.url calls to the request service to get the correct url for posting to including the user id and token, and saves it in the controller variable this.url

  this.url = function() {
    this.url = RequestService.getClientUrl();
  };

    // collect form data and put into project object

    this.create = function(title, briefDescription, description, category, githubRepo) {
        this.newProject = {
            title: title,
            brief_description: briefDescription,
            description: description,
            fix_type: category,
            github_repo_url: githubRepo,
        };

        $http ({
          method: "POST",
          url: this.url,
          data: this.newProject
        }).then(function successCallback(response) {
          console.log('post success');
        });

    };

    this.url();
});
