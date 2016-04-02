/* global angular, $ */
angular.module('itApp', [])
  .controller('itCtrl', function ($scope) {
    $scope.test = ['ff',
      '55',
      '66'
    ]
  })
$(document).ready(function () {
  $('.slider').slider({full_width: true})
})

$(document).ready(function () {
  $('.collapsible').collapsible({
    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
  })
})

$(document).ready(function () {
  $('.parallax').parallax()
})
