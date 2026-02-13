document.addEventListener('DOMContentLoaded', function () {
    // Start every page at the top (avoids scroll jump when using sidebar)
    var main = document.querySelector('.main-content');
    if (main) main.scrollTop = 0;
    if (typeof window !== 'undefined') window.scrollTo(0, 0);

    var btn = document.getElementById('sidebar-toggle');
    var sidebar = document.getElementById('sidebar');
    if (btn && sidebar) {
        btn.addEventListener('click', function () {
            sidebar.classList.toggle('collapsed');
        });
    }
});
