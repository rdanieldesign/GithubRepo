var myURL = 'https://api.github.com/users/rdanieldesign',
  orgsURL = 'https://api.github.com/users/rdanieldesign/orgs',
  reposURL = 'https://api.github.com/users/rdanieldesign/repos',
  nav_temp = $('#nav-info').html(),
  sidebar_template = $('#sidebar-info').html(),
  sidebar_stats_temp = $('#sidebar-stats').html(),
  sidebar_orgs_temp = $('#sidebar-orgs').html(),
  repos_temp = $('#repos').html(),
  render_nav = _.template(nav_temp),
  render_sidebar = _.template(sidebar_template),
  render_sidebar_stats = _.template(sidebar_stats_temp),
  render_orgs = _.template(sidebar_orgs_temp),
  render_repos = _.template(repos_temp);

$.getJSON(myURL).done( function(myData){
  $('.profile-links').prepend(render_nav(myData));
  $('aside').prepend(render_sidebar(myData));
  $('.stats').append(render_sidebar_stats(myData));
});

$.getJSON(orgsURL).done( function(myData){
  console.log(myData);
  _.each(myData, function(x){
    $('.organizations').append(render_orgs(x));
  });
});

$.getJSON(reposURL).done( function(myData){
  console.log(myData);
  _.each(myData, function(x){
    $('.repos').append(render_repos(x));
  });
});