// Swiper Initialization
const swiper = new Swiper('.mySwiper', {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// Mobile Menu Toggle
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

menuCloseButton.addEventListener("click", () => menuOpenButton.click());

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// Theme Toggle (Dark/Light Mode)
const toggleBtn = document.getElementById("themeToggle");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    // Change icon based on theme
    if (document.body.classList.contains("dark-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// Language Toggle (Basic functionality - only changes button text)
const langToggleBtn = document.getElementById("langToggle");
// هنا يمكنك تعريف محتوى اللغات بشكل مفصل لاحقًا
const translations = {
    ar: {
        restaurantName: "مشووياتو🐟",
        home: "الرئيسية",
        about: "عنا",
        menu: "القائمة",
        testimonials: "آراء العملاء",
        gallery: "المعرض",
        contact: "تواصل معنا",
        homeTitle: "مطعم دينا للمشويات اللذيذة 🐟",
        homePara1: "مرحبًا بك في مطعم دينا، حيث المذاق الأصيل يلتقي بالجودة الفاخرة! نُقدّم لك أشهى أطباق المشويات والأسماك الطازجة بطعم لا يُنسى.",
        homePara2: "نختار مكوناتنا بعناية يوميًا لضمان تجربة صحية ولذيذة لكل أفراد الأسرة.<br>جو دافئ وخدمة راقية هتخليك تحس كأنك في بيتك.<br>اطلب دلوقتي أو زورنا واكتشف عالم من النكهات الشرقية اللي تستاهل التجربة!",
        aboutUsSectionTitle: "عنا",
        aboutUsText: "في مطعم دينا، بنقدملك أكل شرقي أصيل بطعم يفضل في بالك. من المشويات اللي على أصولها، لحد الأسماك الطازة... كل حاجة معمولة بحب ومن قلب البيت. جو دافئ، خدمة راقية، ونكهة ما تتنسيش. زورنا، وهتلاقي مكانك المفضل ❤️",
        orderButton: "اطلب الآن",
        inquireButton: "استفسر",
        testimonialsTitle: "آراء عملائنا",
        testimonial1: "\"الأكل لذيذ جدًا والنظافة ممتازة 👌\"",
        client1Name: "احمد – القاهرة",
        testimonial2: "\"أحلى وجبة كلتها من زمان، ربنا يباركلكم 💖\"",
        client2Name: "منه – طنطا",
        testimonial3: "\"التعامل راقي والطعم روعة.. أكيد هكرر الطلب 🥰\"",
        client3Name: "هاجر – الجيزة",
        testimonial4: "\"كنت مترددة أطلب، بس بصراحة التجربة تستاهل 🌟\"",
        client4Name: "محمد – الإسكندرية",
        testimonial5: "\"مذاق خرافي وسرعة توصيل رهيبة.. أنصح بيه بقوة 🔥\"",
        client5Name: "حوده – الزقازيق",
        galleryTitle: "معرض الصور",
        contactTitle: "تواصل معنا",
        contactAddress: "العنوان: 123 شارع المطاعم، حي النكهات، القاهرة، مصر",
        contactPhone: "الهاتف: +20 100 123 4567",
        contactEmail: "البريد الإلكتروني: info@dinarestaurant.com",
        contactHours: "ساعات العمل: يومياً من 12:00 ظهراً - 1:00 صباحاً",
        footerText: "© 2025 مطعم دينا للمشويات. جميع الحقوق محفوظة.",
        privacyPolicy: "سياسة الخصوصية",
        termsOfService: "شروط الخدمة"
    },
    en: {
        restaurantName: "Mashwiyato🐟",
        home: "Home",
        about: "About Us",
        menu: "Menu",
        testimonials: "Testimonials",
        gallery: "Gallery",
        contact: "Contact Us",
        homeTitle: "Dina's Grills Restaurant 🐟",
        homePara1: "Welcome to Dina's Restaurant, where authentic taste meets luxurious quality! We offer you the most delicious grilled dishes and fresh fish with an unforgettable taste.",
        homePara2: "We carefully select our ingredients daily to ensure a healthy and delicious experience for the whole family.<br>A warm atmosphere and elegant service will make you feel right at home.<br>Order now or visit us and discover a world of oriental flavors worth experiencing!",
        aboutUsSectionTitle: "About Us",
        aboutUsText: "At Dina's Restaurant, we offer authentic oriental food with a taste that lingers in your mind. From perfectly grilled meats to fresh fish... everything is made with love, straight from the heart. A warm atmosphere, elegant service, and unforgettable flavors. Visit us, and you'll find your favorite place ❤️",
        orderButton: "Order Now",
        inquireButton: "Inquire",
        testimonialsTitle: "Our Customer Reviews",
        testimonial1: "\"The food is so delicious and the cleanliness is excellent 👌\"",
        client1Name: "Ahmed – Cairo",
        testimonial2: "\"The best meal I've had in a long time, may God bless you 💖\"",
        client2Name: "Mona – Tanta",
        testimonial3: "\"Polite service and amazing taste.. I'll definitely order again 🥰\"",
        client3Name: "Hager – Giza",
        testimonial4: "\"I was hesitant to order, but honestly, the experience is worth it 🌟\"",
        client4Name: "Mohamed – Alexandria",
        testimonial5: "\"Fantastic taste and incredibly fast delivery.. Highly recommend 🔥\"",
        client5Name: "Houda – Zagazig",
        galleryTitle: "Gallery",
        contactTitle: "Contact Us",
        contactAddress: "Address: 123 Restaurants St., Flavors District, Cairo, Egypt",
        contactPhone: "Phone: +20 100 123 4567",
        contactEmail: "Email: info@dinarestaurant.com",
        contactHours: "Working Hours: Daily from 12:00 PM - 1:00 AM",
        footerText: "© 2025 Dina's Grills Restaurant. All rights reserved.",
        privacyPolicy: "Privacy Policy",
        termsOfService: "Terms of Service"
    }
};

langToggleBtn.addEventListener("click", () => {
    let currentLang = langToggleBtn.dataset.lang;
    let newLang = currentLang === "ar" ? "en" : "ar";
    langToggleBtn.dataset.lang = newLang;
    langToggleBtn.textContent = newLang === "ar" ? "English" : "العربية";
    document.documentElement.setAttribute("lang", newLang);
    document.documentElement.setAttribute("dir", newLang === "ar" ? "rtl" : "ltr");
    
    // Update all text content based on the new language
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        if (translations[newLang][key]) {
            element.innerHTML = translations[newLang][key]; // Use innerHTML to allow <br> tags
        }
    });
});

// Initial load: set page direction based on default language (Arabic)
document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.setAttribute("lang", "ar");
    document.documentElement.setAttribute("dir", "rtl");
});


// Animation on Scroll (Fade-in effect)
const fadeInElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    threshold: 0.1 // Percentage of element visible before it animates
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    observer.observe(element);
});