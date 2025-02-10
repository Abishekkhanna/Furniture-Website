const themetoggle = document.getElementById('theme-toggle');
const themeicon = themetoggle.querySelector('i');
const body = document.body;
if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark-theme');
    themeicon.classList.replace('fa-moon','fa-sun');
}
themetoggle.addEventListener('click',()=>{
    body.classList.toggle('dark-theme');
    if(body.classList.contains('dark-theme')){
        localStorage.setItem('theme','dark');
        themeicon.classList.replace('fa-moon','fa-sun');
    }else{
        localStorage.setItem('theme','light');
        themeicon.classList.replace('fa-sun','fa-moon');
    }
});
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("myslide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000);
}