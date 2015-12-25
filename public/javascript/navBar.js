
//Click on any li in ul with class 'navbar-nav'
$('ul.navbar-nav li').click(function(e) {
 var $this = $(this); // declare variable for current li that we click
 $('ul.navbar-nav').find('li.active').last().removeClass('active') //find all li that class class active and remove
 $this.addClass('active'); //add 'active' class to current li.
});
