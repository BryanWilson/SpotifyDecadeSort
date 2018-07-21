$(document).ready(function () {
    

    // Get the hash of the url

    const hash = window.location.hash

        // The hash comes with the # charachter, so to get rid of it we use substring(1)
        .substring(1)

        .split('&')

        .reduce(function (initial, item) {

            if (item) {

                var parts = item.split('=');

                initial[parts[0]] = decodeURIComponent(parts[1]);

            }

            return initial;

        }, {});
    
    console.log(hash);
    
    window.location.hash = '';



    // Set tokenn

    let _token = hash.access_token;

    console.log(hash.access_token);

    const authEndpoint = 'https://accounts.spotify.com/authorize';



    // Replace with your app's client ID, redirect URI and desired scopes

    const clientId = 'cea79ec962aa4793b2d9daa2feccbe66';

    const redirectUri = 'http://127.0.0.1:57000/index.html';

    const scopes = [

  'user-read-birthdate',

  'user-read-email',

  'user-read-private'

];



    // If there is no token, redirect to Spotify authorization

    if (!_token) {

        window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token`;

    }

    
    
     
   
    
});

//This function loads what ever function you want to load right when the page loads//
//
//$(document).ready(function () {
//
//    $(".row").hide();
//
//
//
//    $("button").click(function () {
//        $(".row").fadeIn(1000);
//    });
//
//
//
//    var jsonDataNewsFeedGlobal = $.getJSON('https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=938c99f8bd25454ab488d241db84b493');
//
//    jsonDataNewsFeedGlobal.done(function (data) {
//        console.log(data);
//        /*$(".row").hide();*/
//
//        var x = [];
//        
//        
//
//        for (headline in data.articles) {
//
//            var dateStr = (data.articles[headline].publishedAt);
//            console.log(data.articles[headline].publishedAt);
//
//            var articleDate = new Date(dateStr);
//            console.log(articleDate);
//            console.log(articleDate.getDate());
//
//
//
//            var articleDateStr = articleDate.toString().slice(0, 21);
//            var articleDateDisplay = articleDate.toString().slice(0, 10);
//
//
//            x.push(articleDateDisplay);
//
//
//             //  console.log(data.articles[headline].publishedat!+1);
//
//
//
//            if //(5 === 5)
//            (new Date().getDate() === articleDate.getDate()) {
//                /* console.log(articleDate);
//                console.log(articleDate.getDate());
//                console.log(data.articles[headline].publishedAt);*/
//
//                var bodyStrLength = data.articles[headline].description.length
//                console.log(bodyStrLength);
//
//                if (bodyStrLength > 150) {
//
//                    var body = (data.articles[headline].description.toString().slice(0, 300) + " ...");
//
//                } else {
//
//                    body = data.articles[headline].description;
//                }
//
//                $("#output1").append("<br>" + "<h5>" + '<a href="' + data.articles[headline].url + '">' + data.articles[headline].title + '</a>' + "<h5/>");
//                $("#output1").append("<br>" + articleDateStr + "<br>");
//
//
//                $("#output2").append("<br>" + "<h5>" + '<a href="' + data.articles[headline].url + '">' + data.articles[headline].title + '</a>' + "<h5/>");
//                $("#output2").append("<br>" + body + "<br>");
//                $("#output2").append("<br>" + articleDateStr + "<br>");
//
//
//
//            }
//
//            $("#output3").append('<a href="' + data.articles[headline].url + '">' + "<br>" + "<b>" + articleDateDisplay + "</b>" + "<br>" + '</a>');
//
//
//
//
//        }
//        
//        console.log(x);
//       
//        x.sort();  
//        
//        for (i in x)  {
//        
//            if (x[i] == x[j]) {
//          console.log("true");
//                
//            } else {
//                
//                console.log("false");
//            }
//        }
//            
//            
//        
//        
//        
//        
//        
//        /*if (x.indexOf("Apple", 0);)
//             {
//             
//             
//             }*/
//        
//    });
//
//});

/*INSERT JAVASCRIPT AND JQUERY HERE*/
