angular.module('cupcakeDashboard')
  .service('UIHelperService', function Phases($http) {

        self = this;

        self._phases = [];
        self._total = null;

        this.phases = function(){
          var promise = $http.get('/api/phases', { cache: false }).then(function(res){
            self._phases = res.data;
            return res.data;
          })
          return promise;
        }

        this.total = function(){
          var promise = $http.get('/api/projects/total', { cache: false }).then(function(res){
            return res.data.total;
          })
          return promise;
        }

        this.displayName = function(user){
          if(!user)
          {
            return;
          }

          if(user.first_name || user.last_name)
          {
            return user.first_name + ' ' + user.last_name;
          }
          else
          {
            return user.email;
          }
        }
        this.displayNameShort = function(user){
          if(!user)
          {
            return;
          }

          if(user.first_name)
          {
            return user.first_name;
          }
          else
          {
            return user.email;
          }
        }
    });
