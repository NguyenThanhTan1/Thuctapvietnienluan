document.querySelector('.table-player').addEventListener('scroll', function() {
    const hiddenPlayers = document.querySelectorAll('.player.hidden');
    hiddenPlayers.forEach(player => {
        if (player.getBoundingClientRect().top < window.innerHeight) {
            player.classList.remove('hidden');
        }
    });
});
function showFormation(value) {

    document.querySelectorAll('.formations > div').forEach(div => {
        div.style.display = 'none'; 
    });

   
    if (value === '1') {
        document.querySelector('.formation-4-3-3').style.display = 'block';
    } else if (value === '4') {
        document.querySelector('.formation-4-4-2').style.display = 'block';
    }
}
//
function changeFormation(value) {
    const formationElement = document.getElementById('formation');
    
    // Ẩn tất cả các sơ đồ
    formationElement.classList.remove('formation-4-3-3', 'formation-4-4-2');
    formationElement.classList.add('formation-4-4-2' + value);

    // Hiển thị sơ đồ tương ứng
    if (value == '4') {
        formationElement.classList.add('formation-4-4-2');
    } else {
        formationElement.classList.remove('formation-4-4-2');
    }
}
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
 