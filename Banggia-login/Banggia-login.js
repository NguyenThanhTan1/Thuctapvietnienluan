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