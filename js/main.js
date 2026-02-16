/* --- STAGE EXPANSION TOGGLE --- */
function toggleStage(id) {
    const selectedCard = document.getElementById(id);
    
    // Optional: Close all other open cards first
    const allCards = document.querySelectorAll('.stage-header-card');
    allCards.forEach(card => {
      if (card !== selectedCard) {
        card.classList.remove('is-open');
      }
    });
  
    // Toggle the clicked card
    if (selectedCard) {
      selectedCard.classList.toggle('is-open');
    }
  }

  