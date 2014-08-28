var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
  
  $scope.myData = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
    "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
    "21", "22", "23", "24", "25", "26", "27", "28", "29", "30",
    "31", "32", "33", "34", "35", "36", "37", "38", "39", "40",
    "41", "42", "43", "44", "45", "46", "47", "48", "49", "50",
    "51", "52", "53", "54", "55", "56", "57", "58", "59", "60" 
    ]
});

app.directive('directiveScrolling', function () {
    function moveBy(sectionIndex, sectionID, delta) {

        sectionIndex = (typeof sectionIndex === 'undefined')
                       ? ''
                       : sectionIndex;

        var selector = '#' + sectionID + sectionIndex,
            $scrollable = $(selector).find('.scrollable'),
            curScroll = $scrollable.scrollLeft(),
            scrollTo = curScroll + delta;

        scrollTo = (delta > 0)
                   ? Math.min(scrollTo, $(window).width())
                   : Math.max(scrollTo, 0);

        $scrollable.scrollLeft(scrollTo);

    }
    return {
        restrict: 'AE',
        replace: 'true',
        template:   '<div class="scroll-btns">' +
                        '<div class="scroll-left icon-arrow-left" ng-click="scrollLeft(sectionIndex, sectionID)">' +
                          '<img src="http://icons.iconseeker.com/png/fullsize/fresh-addon/arrow-left-1.png" height="28px" alt="" />' +
                        '</div>' +
                        '<div class="scroll-right icon-arrow-right" ng-click="scrollRight(sectionIndex, sectionID)">' +
                            '<img src="http://www.veryicon.com/icon/png/System/Fresh%20Addon/Arrow%20right.png" height="28px" alt="" />' +
                        '</div>' +
                    '</div>',
        link: function(scope, elem, attrs) {
            scope.scrollLeft  = function (sectionIndex, sectionID) {
                moveBy(sectionIndex, sectionID, -100);
            };
            scope.scrollRight  = function (sectionIndex, sectionID) {
                moveBy(sectionIndex, sectionID, +100);
            };
        }
    };
});
