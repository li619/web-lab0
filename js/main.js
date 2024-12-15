// 作品数据
const works = [
    {
        title: "个人博客项目",
        description: "使用 HTML、CSS 和 JavaScript 开发的响应式博客网站",
        image: "images/image1.jpg"
    },
    {
        title: "在线商城界面",
        description: "电商网站的前端展示界面设计与实现",
        image: "images/shop.jpg"
    },
    {
        title: "音乐播放器",
        description: "基于网页的音乐播放器，支持播放控制和歌单管理",
        image: "images/image3.jpg"
    }
];

// 动态加载作品
function loadWorks() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    works.forEach(work => {
        const workCard = document.createElement('div');
        workCard.className = 'work-card';
        workCard.innerHTML = `
            <img src="${work.image}" alt="${work.title}">
            <h3>${work.title}</h3>
            <p>${work.description}</p>
        `;
        portfolioGrid.appendChild(workCard);
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadWorks();
});

// 滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    }
}); 