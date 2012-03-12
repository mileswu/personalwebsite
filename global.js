        var bottomhack = function() {
                var wrapper = document.getElementById('wrapper');
                var body = document.getElementsByTagName('body')[0];
                if(wrapper.clientHeight < (window.innerHeight-15)) {
                        body.style.height = (window.innerHeight-30) + "px";
                }
                else {
                        body.style.height = "";
                }
        };
        window.addEventListener('load', bottomhack, false);
        window.addEventListener('pageshow', bottomhack, false);
        window.addEventListener('resize', bottomhack, false);

          var _gaq = _gaq || [];
          _gaq.push(['_setAccount', 'UA-23233820-1']);
          _gaq.push(['_trackPageview']);

          (function() {
            var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
            ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
          })();

