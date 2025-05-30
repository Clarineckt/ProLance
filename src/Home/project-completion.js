let selectedRating = 0;

function showJob(event, jobId) {
  const jobs = document.querySelectorAll(".job");
  const jobDetails = document.querySelectorAll(".job-detail");

  jobs.forEach((job) => job.classList.remove("active"));
  jobDetails.forEach((detail) => detail.classList.remove("active"));

  event.currentTarget.classList.add("active");
  document.getElementById(jobId).classList.add("active");
}

const stars = document.querySelectorAll(".star");
const ratingDisplay = document.getElementById("ratingDisplay");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    selectedRating = parseInt(star.dataset.rating);
    updateStarDisplay();
    updateRatingText();
  });

  star.addEventListener("mouseenter", () => {
    const hoverRating = parseInt(star.dataset.rating);
    highlightStars(hoverRating, "hovered");
  });

  star.addEventListener("mouseleave", () => {
    updateStarDisplay();
  });
});

function highlightStars(rating, className) {
  stars.forEach((star, index) => {
    star.classList.remove("active", "hovered");
    if (index < rating) {
      star.classList.add(className);
    }
  });
}

function updateStarDisplay() {
  highlightStars(selectedRating, "active");
}

function updateRatingText() {
  const ratingTexts = {
    1: "1 star - Poor",
    2: "2 stars - Fair",
    3: "3 stars - Good",
    4: "4 stars - Very Good",
    5: "5 stars - Excellent",
  };
  ratingDisplay.textContent = ratingTexts[selectedRating] || "Select a rating";
}

function submitReview() {
  const reviewText = document.getElementById("reviewText").value;

  if (selectedRating === 0) {
    alert("Please select a rating before submitting your review.");
    return;
  }

  if (reviewText.trim() === "") {
    alert("Please write a review before submitting.");
    return;
  }

  alert(
    `Review submitted!\nRating: ${selectedRating} stars\nReview: ${reviewText}`
  );

  selectedRating = 0;
  updateStarDisplay();
  updateRatingText();
  document.getElementById("reviewText").value = "";
}
