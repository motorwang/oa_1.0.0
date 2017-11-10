/**
 * Created by zy on 2017/11/9.
 */
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
var loginInfo ={userID:"1234",userName:"test",department1ID:"department1ID",department1:"department1"
                  ,department2ID:"department2ID",department2:"department2"};
function  loginInfoSetter(logininfo) {
 loginInfo.userID= logininfo.userID;
 loginInfo.userName= logininfo.userName;
 loginInfo.department1ID= logininfo.department1ID;
 loginInfo.department1= logininfo.department1;
 loginInfo.department2ID= logininfo.department2ID;
 loginInfo.department2= logininfo.department2;
 loginInfo.duty= logininfo.duty;
 loginInfo.staffLevel= logininfo.staffLevel;
 loginInfo.loginID= logininfo.loginID;
 }
var http={
  login:"/channelst/login",
  attendOfCurrent:"/channelst/HR/attendOfCurrent",
  attendOflast:"/channelst/HR/attendOflast",
  departmentAttendance:"/channelst/HR/departmentAttendance",
  submitApplication:"/channelst/HR/submitApplication",
  getDaily:"/channelst/workspace/getDaily",
  getWeekly:"/channelst/workspace/getWeekly",
  dailySubmit:"/channelst/workspace/dailySubmit",
  weekSubmit:"/channelst/workspace/weekSubmit"
}
var  host=""
export  default
{
 loginInfo,
  timeCompare,
  getBrowserInfo,
  http,
  host
}

