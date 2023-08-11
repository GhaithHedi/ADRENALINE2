function showMore() {
    var hiddenCards = document.getElementsByClassName('hidden');
    
    for (var i = 0; i < hiddenCards.length; i++) {
      hiddenCards[i].classList.remove('hidden');
    }
    
    var showMoreBtn = document.getElementById('showMoreBtn');
    showMoreBtn.style.display = 'none';
  }
  