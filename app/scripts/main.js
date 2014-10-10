var myURL = 'https://api.github.com/users/rdanieldesign',
  orgsURL = 'https://api.github.com/users/rdanieldesign/orgs',
  reposURL = 'https://api.github.com/users/rdanieldesign/repos',
  starredURL = 'https://api.github.com/users/rdanieldesign/starred',
  nav_temp = $('#nav-info').html(),
  sidebar_template = $('#sidebar-info').html(),
  sidebar_stats_temp = $('#sidebar-stats').html(),
  sidebar_orgs_temp = $('#sidebar-orgs').html(),
  // starred_temp = $('#starred').html(),
  repos_temp = $('#repos').html(),
  render_nav = _.template(nav_temp),
  render_sidebar = _.template(sidebar_template),
  render_sidebar_stats = _.template(sidebar_stats_temp),
  render_orgs = _.template(sidebar_orgs_temp),
  render_repos = _.template(repos_temp);
  // render_starred = _.template(starred_temp);

$.getJSON(myURL).done( function(myData){
  $('.profile-links').prepend(render_nav(myData));
  $('aside').prepend(render_sidebar(myData));
  $('.stats').append(render_sidebar_stats(myData));
});

$.getJSON(orgsURL).done( function(myData){
  _.each(myData, function(x){
    $('.organizations').append(render_orgs(x));
  });
});

$.getJSON(reposURL).done( function(myData){
  _.each(myData, function(x){
    $('.repos').append(render_repos(x));
  });
});

$.getJSON(starredURL).done( function(myData){
  var x = myData.length;
  $('.starred h3').html(x);
});