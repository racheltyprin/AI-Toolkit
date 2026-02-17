let currentOpenId = null;

function openStage(stageId) {
    const card = document.getElementById(stageId);
    if (!card) return;

    // Close whatever is currently open first
    if (currentOpenId && currentOpenId !== stageId) {
        closeStage(currentOpenId);
    }

    card.classList.add('is-active');

    const exp = card.querySelector('.stage-expansion-content');
    exp.style.maxHeight = '0';
    exp.getBoundingClientRect(); // force reflow
    exp.style.maxHeight = exp.scrollHeight + 'px';
    exp.style.opacity = '1';

    // Swap button to "Show Less"
    const btn = card.querySelector('.show-more-btn');
    btn.textContent = 'SHOW LESS';
    btn.onclick = function(e) {
        e.stopPropagation();
        closeStage(stageId);
    };
    btn.classList.add('is-less');

    currentOpenId = stageId;
}

function closeStage(stageId) {
    const card = document.getElementById(stageId);
    if (!card) return;

    card.classList.remove('is-active');

    const exp = card.querySelector('.stage-expansion-content');
    exp.style.maxHeight = '0';
    exp.style.opacity = '0';

    // Swap button back to "Show More"
    const btn = card.querySelector('.show-more-btn');
    btn.textContent = 'SHOW MORE';
    btn.onclick = function(e) {
        e.stopPropagation();
        openStage(stageId);
    };
    btn.classList.remove('is-less');

    currentOpenId = null;
}