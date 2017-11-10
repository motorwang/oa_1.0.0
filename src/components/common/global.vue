<script>
  function getBrowserInfo()
  {
    var explorer = navigator.userAgent ;
    if (explorer.indexOf("msie") >= 0) {
      var ver = explorer.match(/msie ([\d.]+)/)[1];
      return { type: "IE", version: ver };
    }
    //firefox
    else if (explorer.indexOf("firefox") >= 0) {
      var ver = explorer.match(/firefox\/([\d.]+)/)[1];
      return { type: "Firefox", version: ver };
    }
    //Chrome
    else if (explorer.indexOf("chrome") >= 0) {
      var ver = explorer.match(/chrome\/([\d.]+)/)[1];
      return { type: "Chrome", version: ver };
    }
    //Opera
    else if (explorer.indexOf("opera") >= 0) {
      var ver = explorer.match(/opera.([\d.]+)/)[1];
      return { type: "Opera", version: ver };
    }
    //Safari
    else if (explorer.indexOf("Safari") >= 0) {
      var ver = explorer.match(/version\/([\d.]+)/)[1];
      return { type: "Safari", version: ver };
    }
    //360se
    else if (explorer.indexOf("360SE") >= 0) {
      return { type: "360SE" };
    }
  }
  //如果time1>time2==> 1  否则0
  function timeCompare(time1,time2) {
     var t1= time1.split(":");
     var t2= time2.split(":");

    for(var i=0 ;i++;i<3)
    {
        if(parseInt(t1[i])>parseInt(t2[i]))
        {
            return 1;
        }
    }
      return 0;
  }
  function  loginInfoToCookie(logininfo) {

  }
</script>
