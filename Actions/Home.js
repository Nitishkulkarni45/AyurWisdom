document.getElementsByClassName('user-main').addEventListener('click',function(){
    var userMainContents = document.getElementsByClassName('user-main-contents');
    if(userMainContents.style.left === '-200px'){
        userMainContents.style.left = '0'
    }
    else{
        userMainContents.style.left = '-200px';
    }
});