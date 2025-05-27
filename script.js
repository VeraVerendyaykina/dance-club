
    
    document.addEventListener("DOMContentLoaded", function() {
        const modal = document.getElementById("modal");
        const btn = document.querySelector(".button");
        const closeBtn = document.querySelector(".close-button");
        const submitBtn = document.querySelector(".submit-btn");
    
       
        // Начально скрываем форму
        modal.style.display = "none";
    
        // Открытие формы при клике на кнопку
        btn.addEventListener("click", function() {
            modal.style.display = "flex";
        });
    
        // Закрытие формы при клике на "×"
        closeBtn.addEventListener("click", function() {
            modal.style.display = "none";
        });
    
        // Закрытие формы при отправке
        submitBtn.addEventListener("click", function(event) {
            event.preventDefault(); // Предотвращаем перезагрузку страницы
            modal.style.display = "none";
        });
    
        // Закрытие формы при клике вне нее
        window.addEventListener("click", function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
        const reviewForm = document.querySelector(".review-form");
        const reviewTextarea = reviewForm.querySelector("textarea");
        const reviewList = document.querySelector(".reviews-list");
    
        const nextBtn = document.createElement("button");
        const deleteBtn = document.createElement("button");
    
        let reviews = [];
        let currentIndex = 0;
    
        nextBtn.textContent = "Следующий";
        nextBtn.classList.add("review-btn");
    
        deleteBtn.textContent = "Удалить последний";
        deleteBtn.classList.add("review-btn");
    
        // Форма отправки отзывов
        reviewForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const reviewText = reviewTextarea.value.trim();
            if (reviewText) {
                reviews.push(reviewText);
                reviewTextarea.value = "";
                updateReviewDisplay();
            }
        });
    
        // Обновление отображения отзывов
        function updateReviewDisplay() {
            reviewList.innerHTML = "";
            if (reviews.length > 0) {
                const reviewItem = document.createElement("div");
                reviewItem.classList.add("review-item");
                reviewItem.textContent = reviews[currentIndex];
                reviewList.appendChild(reviewItem);
                reviewList.appendChild(nextBtn);
                reviewList.appendChild(deleteBtn);
            }
        }
    
        // Кнопка "Следующий" - листание отзывов
        nextBtn.addEventListener("click", function() {
            if (reviews.length > 0) {
                currentIndex = (currentIndex + 1) % reviews.length;
                updateReviewDisplay();
            }
        });
    
        // Кнопка "Удалить последний" - удаляет текущий отзыв
        deleteBtn.addEventListener("click", function() {
            if (reviews.length > 0) {
                reviews.splice(currentIndex, 1);
                if (currentIndex >= reviews.length) {
                    currentIndex = 0;
                }
                updateReviewDisplay();
            }
        });
    
        updateReviewDisplay();
    });
    let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function moveCarousel(direction) {
    // Скрыть текущую картинку
    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Перемещение слайдера
    const newTransformValue = `translateX(-${currentIndex * 33.33}%)`;
    document.querySelector('.carousel-images').style.transform = newTransformValue;
}
function goToHome() {
    window.location.href = 'лаба3.html'; // Переход на главную страницу
}
function goToMoreInfo() {
    window.location.href = 'new.html';
}




    