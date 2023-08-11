document.addEventListener("DOMContentLoaded", function() {
  const teamColumns = document.querySelectorAll(".team-column");
  const totalColumns = teamColumns.length;
  const visibleColumns = 3;
  let currentIndex = 0;

  function showNextColumns() {
    // Hide all columns
    teamColumns.forEach(function(column) {
      column.style.display = "none";
    });

    // Show the next three columns
    for (let i = 0; i < visibleColumns; i++) {
      const nextIndex = (currentIndex + i) % totalColumns;
      teamColumns[nextIndex].style.display = "block";
    }

    // Update the currentIndex for the next iteration
    currentIndex = (currentIndex + 1) % totalColumns;

    // Handle the transition from the last set of columns to the first set
    if (currentIndex === 0) {
      teamColumns[totalColumns - 1].style.display = "block";
    } else if (currentIndex === 1) {
      teamColumns[totalColumns - 1].style.display = "none";
      teamColumns[0].style.display = "block";
    } else if (currentIndex === 2) {
      teamColumns[0].style.display = "none";
      teamColumns[1].style.display = "block";
    }
  }

  // Initially hide all columns except the first three
  for (let i = visibleColumns; i < totalColumns; i++) {
    teamColumns[i].style.display = "none";
  }

  setInterval(showNextColumns, 3000);
});
