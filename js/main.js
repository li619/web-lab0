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
        workCard.innerHTML = create3DCard(work);
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

// 添加滚动显示效果
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-reveal');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// 添加打字机效果
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadWorks();
    animateSkills();
    
    // 为所有区块添加滚动显示类
    document.querySelectorAll('section > *').forEach(element => {
        element.classList.add('scroll-reveal');
    });
    
    // 添加打字机效果
    const heroText = document.querySelector('.hero-content p');
    typeWriter(heroText, '前端开发爱好者 / 网页设计师');
    
    // 监听滚动事件
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // 初始检查
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

// 初始化粒子效果
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    }
});

// 添加鼠标跟随效果
const cursor = document.createElement('div');
const cursorDot = document.createElement('div');
cursor.className = 'cursor';
cursorDot.className = 'cursor-dot';
document.body.appendChild(cursor);
document.body.appendChild(cursorDot);

document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
});

// 添加滚动进度条
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// 技能进度条动画
function animateSkills() {
    const skills = {
        'HTML/CSS': 90,
        'JavaScript': 85,
        'React': 80,
        'Node.js': 75,
        'UI Design': 70
    };

    const skillsContainer = document.querySelector('.skills');
    Object.entries(skills).forEach(([skill, progress]) => {
        const skillBar = document.createElement('div');
        skillBar.innerHTML = `
            <h4>${skill}</h4>
            <div class="skill-bar">
                <div class="skill-progress" style="width: 0%"></div>
            </div>
        `;
        skillsContainer.appendChild(skillBar);

        setTimeout(() => {
            skillBar.querySelector('.skill-progress').style.width = progress + '%';
        }, 500);
    });
}

// 3D 卡片效果
function create3DCard(work) {
    return `
        <div class="work-card-inner">
            <div class="work-card-front">
                <img src="${work.image}" alt="${work.title}">
                <h3>${work.title}</h3>
                <p>${work.description}</p>
            </div>
            <div class="work-card-back">
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                <button class="view-project">查看项目</button>
            </div>
        </div>
    `;
} 