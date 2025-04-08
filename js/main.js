document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const buttons = document.querySelectorAll('.btn');

    // 搜索功能
    searchInput.addEventListener('input', function() {
        const searchText = this.value.toLowerCase();
        
        buttons.forEach(button => {
            const buttonText = button.textContent.toLowerCase();
            if (buttonText.includes(searchText)) {
                button.style.display = 'flex';
            } else {
                button.style.display = 'none';
            }
        });
    });

    // 添加点击效果
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}); 