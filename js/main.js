document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('sidebar-toggle');
    var sidebar = document.getElementById('sidebar');
    if (btn && sidebar) {
        btn.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }
});
