
const modal = document.getElementById('confirmation-modal');
const followBtn = document.getElementById('follow-btn');
const followBtn2 = document.getElementById('follow-btn-2');
const followBtn3 = document.getElementById('follow-btn-3');
const followBtn4 = document.getElementById('follow-btn-4');
const confirmYes = document.getElementById('confirm-yes');
const confirmNo = document.getElementById('confirm-no');


followBtn.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});
followBtn2.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});
followBtn3.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});
followBtn4.addEventListener('click', function(e) {
    e.preventDefault(); 
    modal.style.display = 'block'; 
});


confirmYes.addEventListener('click', function() {
    modal.style.display = 'none';
  
    alert('Đã theo dõi!');
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
window.onload = function() {
    // Lấy thông tin người dùng từ localStorage
    const currentUser = localStorage.getItem('current_user');
    console.log('Retrieved current user:', currentUser);
    document.getElementById('welcome-message').textContent = `${currentUser}`;

    
};
//
document.querySelector('.log-out').addEventListener('click', function() {
    // Điều hướng đến trang đăng nhập hoặc trang khác
    

    setTimeout(function() {
        window.location.href = '/Dangnhap/Dangnhap.html';
    }, 500); // 3000ms = 3 giây
});
//
document.getElementById('searchBox').addEventListener('keyup', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.product');
    let noMatches = true;

    products.forEach(function(product) {
        let productName = product.getAttribute('data-name').toLowerCase();
        
        if (productName.includes(filter)) {
            product.style.display = 'block';
            noMatches = false;
        } else {
            product.style.display = 'none';
        }
    });

    if (filter === '') {
        products.forEach(function(product) {
            product.style.display = 'block';
        });
        noMatches = false; 
    }

    let warningText = document.querySelector('.warning-text');
    if (noMatches) {
        warningText.style.display = 'block';
    } else {
        warningText.style.display = 'none';
    }
});