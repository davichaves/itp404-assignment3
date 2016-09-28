function getSubreddits(subreddit) {
  // makes an AJAX call to the Reddit API using the subreddit argument and
  // returns a promise that resolves with an array of subreddits formatted like below
  // notice how num_comments is mapped to commentCount
  var call = 'https://www.reddit.com/r/' + subreddit + '.json';
  var promise = $.ajax({
    url: call,
    type: 'get'
  });
  return promise;
}


var button = document.getElementById("theButton");
button.onclick = function() {
  var value =  button.form.valueId.value;
  getSubreddits(value).then(function(subreddits) {
    console.log(subreddits.data.children);
    var templateSource = $('#subreddits-template').html();
    var template = Handlebars.compile(templateSource);
    var html = template({
      subreddits: subreddits.data.children
    });
    $('#subreddits-list').html(html);
  }, function() {
    console.log('there was an error');
  });
}
