window.addEventListener('scroll', function() {
    var bannerEnd = document.querySelector('.banner-end');
    if (window.scrollY > 100) {
        bannerEnd.classList.add('visible');
    } else {
        bannerEnd.classList.remove('visible');
    }
});
confirmNo.addEventListener('click', function() {
    modal.style.display = 'none';
});
//
document.addEventListener('scroll', function() {
    const bannerEnd = document.querySelector('.banner-end');
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

 
    if (scrollTop + viewportHeight < documentHeight) {
        bannerEnd.classList.add('show');
        bannerEnd.classList.remove('hide');
    } else {
       
        bannerEnd.classList.add('hide');
        bannerEnd.classList.remove('show');
    }
});


window.addEventListener('resize', function() {
    const bannerEnd = document.querySelector('.banner-end');
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollTop + viewportHeight < documentHeight) {
        bannerEnd.classList.add('show');
        bannerEnd.classList.remove('hide');
    } else {
        bannerEnd.classList.add('hide');
        bannerEnd.classList.remove('show');
    }
});
//
