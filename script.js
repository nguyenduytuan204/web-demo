// SuperCar Website - Main JavaScript

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
}

// Scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (nav) {
                nav.classList.remove('active');
            }
        }
    });
});

// Search functionality
const searchIcon = document.querySelector('.search-icon');
if (searchIcon) {
    searchIcon.addEventListener('click', function() {
        alert('Chức năng tìm kiếm đang được phát triển!');
    });
}

// Account functionality
const accountIcon = document.querySelector('.account-icon');
if (accountIcon) {
    accountIcon.addEventListener('click', function() {
        alert('Chức năng tài khoản đang được phát triển!');
    });
}

// Filter button functionality
const filterButton = document.querySelector('.filter-button');
if (filterButton) {
    filterButton.addEventListener('click', function() {
        const brand = document.querySelector('.filter-select:nth-of-type(1)');
        const price = document.querySelector('.filter-select:nth-of-type(2)');
        const type = document.querySelector('.filter-select:nth-of-type(3)');
        
        console.log('Tìm kiếm với:', {
            brand: brand?.value,
            price: price?.value,
            type: type?.value
        });
        
        alert('Đang tìm kiếm xe phù hợp với bạn...');
    });
}

// Model card click handler
document.querySelectorAll('.model-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking the button
        if (!e.target.classList.contains('model-button')) {
            const modelName = this.querySelector('.model-name').textContent;
            console.log('Clicked on:', modelName);
        }
    });
});

// Model button click handler
document.querySelectorAll('.model-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const modelName = this.closest('.model-card').querySelector('.model-name').textContent;
        alert(`Xem chi tiết: ${modelName}`);
    });
});

// Hero CTA buttons
document.querySelectorAll('.hero-cta .btn').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent;
        if (buttonText.includes('Khám Phá')) {
            // Scroll to models section
            const modelsSection = document.querySelector('.featured-models');
            if (modelsSection) {
                modelsSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (buttonText.includes('Lái Thử')) {
            alert('Cảm ơn bạn quan tâm! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
        }
    });
});

// Add parallax effect to hero video
window.addEventListener('scroll', function() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo && window.scrollY < window.innerHeight) {
        const scrolled = window.scrollY;
        heroVideo.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Console message
console.log('%c🏎️ SuperCar Website', 'font-size: 20px; font-weight: bold; color: #c41e1e;');
console.log('%cDesigned for luxury performance enthusiasts', 'font-size: 12px; color: #d4af37;');

const brandData = {
    ferrari: {
        title: "Ferrari",
        text: "Ferrari là biểu tượng tốc độ và đam mê của nước Ý, gắn liền với F1 và những khối động cơ V8 & V12 đầy cảm xúc.",
        image: "images/ferrari1.jpg",
        video: "https://cdn.pixabay.com/video/2021/05/11/74484-549618985_large.mp4"
    },
    lamborghini: {
        title: "Lamborghini",
        text: "Lamborghini nổi bật với thiết kế táo bạo, động cơ V10 – V12 mạnh mẽ và cá tính không thể nhầm lẫn.",
        image: "images/LAMBORGHINI.jpg",
        video: "https://cdn.pixabay.com/video/2020/10/30/53530-476964180_large.mp4"
    },
    mclaren: {
        title: "McLaren",
        text: "McLaren mang công nghệ F1 lên xe đường phố với khung carbon siêu nhẹ và khả năng tăng tốc ấn tượng.",
        image: "images/MCLAREN.jpg",
        video: "https://cdn.pixabay.com/video/2022/02/17/107468-678694188_large.mp4"
    },
    bugatti: {
        title: "Bugatti",
        text: "Bugatti là đỉnh cao của kỹ thuật và xa xỉ, nơi tốc độ trên 400km/h hòa cùng nghệ thuật thủ công.",
        image: "images/BUGATTI.jpg",
        video: "https://cdn.pixabay.com/video/2021/03/08/67620-522938843_large.mp4"
    },
    porsche: {
        title: "Porsche",
        text: "Porsche đại diện cho sự cân bằng hoàn hảo giữa hiệu suất, độ bền và trải nghiệm lái thuần khiết.",
        image: "images/PORSCHE.jpg",
        video: "https://cdn.pixabay.com/video/2020/05/30/40026-425938486_large.mp4"
    }
};

const brandItems = document.querySelectorAll(".brand-item");
const introBox = document.getElementById("brand-intro");
const introTitle = document.getElementById("brand-title");
const introText = document.getElementById("brand-text");
const introImg = document.getElementById("brand-image");
const introVideo = document.getElementById("brand-video");

brandItems.forEach(item => {
    item.addEventListener("click", () => {
        brandItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");

        const key = item.dataset.brand;
        const data = brandData[key];

        introTitle.textContent = data.title;
        introText.textContent = data.text;
        introImg.src = data.image;
        introVideo.src = data.video;

        introBox.style.display = "block";
        introVideo.load();
        introVideo.play();

        introBox.scrollIntoView({ behavior: "smooth", block: "center" });
    });
});
