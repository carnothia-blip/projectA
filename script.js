// DOM 요소 선택
const searchInput = document.querySelector('.search-input');
const cameraButton = document.querySelector('.camera-button');
const categoryItems = document.querySelectorAll('.category-item');
const tabItems = document.querySelectorAll('button.tab-item');
const filterButtons = document.querySelectorAll('.filter-list .Listitem.Button');
const cartButtons = document.querySelectorAll('.cart-button');
const wishlistButtons = document.querySelectorAll('.wishlist-button, .wishlist-btn');

// 검색 기능
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) {
                console.log('검색:', query);
                // 실제 검색 로직 구현
            }
        }
    });
}

// 이미지 검색 버튼
if (cameraButton) {
    cameraButton.addEventListener('click', () => {
        console.log('이미지 검색 클릭');
        // 이미지 검색 로직 구현
    });
}

// 카테고리 아이템 클릭
categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (item.tagName === 'A') {
            e.preventDefault();
        }
        const categoryName = item.querySelector('.category-name')?.textContent || item.textContent;
        const category = item.dataset.category;
        console.log('카테고리 선택:', categoryName, category);
        // 카테고리 필터링 로직 구현
    });
});

// 탭 전환
tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
        // 모든 탭의 active 및 aria-selected 제거
        tabItems.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        // 클릭된 탭에 active 클래스 및 aria-selected 추가
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');

        const tabName = tab.textContent.trim();
        console.log('탭 선택:', tabName);
        // 탭 전환 로직 구현
    });
});

// 필터 버튼
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // 모든 필터 버튼의 active 클래스 제거
        filterButtons.forEach(b => b.classList.remove('active'));
        // 클릭된 버튼에 active 클래스 추가
        btn.classList.add('active');

        const filterName = btn.textContent.trim();
        const filterValue = btn.dataset.filter;
        console.log('필터 선택:', filterName, filterValue);
        // 필터링 로직 구현
    });
});

// 장바구니 버튼
cartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3, .product-name')?.textContent;
        console.log('장바구니에 추가:', productName);

        // 시각적 피드백
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);

        // 토스트 알림 표시
        showToast('장바구니에 추가되었습니다.');
    });
});

// 위시리스트 버튼
wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const productCard = btn.closest('.product-card');
        const productName = productCard.querySelector('h3, .product-name')?.textContent;
        console.log('위시리스트에 추가:', productName);

        // 시각적 피드백
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);

        // 토스트 알림 표시
        showToast('위시리스트에 추가되었습니다.');
    });
});

['.tablist', '.category-list', '.filter-list'].forEach(selector => {
    const el = document.querySelector(selector);
    if (!el) return;

    el.addEventListener('wheel', e => {
        if (e.deltaY !== 0) {
            e.preventDefault();
            el.scrollLeft += e.deltaY;
        }
    });
});

// 언어 선택 버튼
const languageBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langOpts = document.querySelectorAll('.lang-option');

if (languageBtn && langMenu) {
    const closeMenu = () => {
        languageBtn.setAttribute('aria-expanded', 'false');
        langMenu.hidden = true;
    };

    const openMenu = () => {
        languageBtn.setAttribute('aria-expanded', 'true');
        langMenu.hidden = false;
        // 포커스가 첫 선택 항목으로 이동
        const checked = langMenu.querySelector('[aria-checked="true"]');
        (checked || langMenu.querySelector('.lang-option')).focus();
    };

    languageBtn.addEventListener('click', (e) => {
        const isOpen = languageBtn.getAttribute('aria-expanded') === 'true';
        (isOpen ? closeMenu() : openMenu());
    });

    // 메뉴 외 클릭 시 닫기
    document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !langMenu.contains(e.target)) closeMenu();
    });

    // 옵션 선택 처리
    langOpts.forEach(opt => {
        opt.addEventListener('click', () => selectLang(opt));
        opt.addEventListener('keydown', (ev) => {
            if (ev.key === 'Enter' || ev.key === ' ') {
                ev.preventDefault();
                selectLang(opt);
            }
            if (ev.key === 'ArrowDown') {
                ev.preventDefault();
                (opt.nextElementSibling || langOpts[0]).focus();
            }
            if (ev.key === 'ArrowUp') {
                ev.preventDefault();
                (opt.previousElementSibling || langOpts[langOpts.length-1]).focus();
            }
            if (ev.key === 'Escape') {
                closeMenu();
                languageBtn.focus();
            }
        });
    });

    function selectLang(opt) {
        const country = opt.dataset.country;
        const lang = opt.dataset.lang;
        // UI 업데이트
        document.querySelector('.language-selector .country').textContent = country;
        document.querySelector('.language-selector .language').textContent = opt.textContent.split('—')[1].trim();
        // aria 업데이트
        langOpts.forEach(o => o.setAttribute('aria-checked', 'false'));
        opt.setAttribute('aria-checked', 'true');
        // 문서의 lang 속성 업데이트 (간단 적용)
        try { document.documentElement.lang = lang; } catch (e) { /* no-op */ }
        // 닫기
        closeMenu();
        languageBtn.focus();
        console.log('언어 선택:', country, lang);
    }

    // 키보드로 버튼에서 바로 열기
    languageBtn.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowDown' || ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            openMenu();
        }
        if (ev.key === 'Escape') {
            closeMenu();
        }
    });
}

// 스크롤 시 헤더 고정 (옵션)
let lastScrollTop = 0;
const header = document.querySelector('header.header-container');

if (header) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 아래로 스크롤
            header.style.transform = 'translateY(-100%)';
        } else {
            // 위로 스크롤
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });
}

// 이미지 레이지 로딩
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// 페이지 로드 완료 시
window.addEventListener('DOMContentLoaded', () => {
    console.log('페이지 로드 완료');

    // 초기 애니메이션 등 추가 가능
});

// 반응형 메뉴 토글 (모바일용 - 필요시)
function toggleMobileMenu() {
    const menu = document.querySelector('nav.Tablist');
    if (menu) {
        menu.classList.toggle('mobile-open');
        const isOpen = menu.classList.contains('mobile-open');
        menu.setAttribute('aria-expanded', isOpen);
    }
}

// 장바구니/위시리스트 카운트 업데이트 (예시)
function updateCartCount(count) {
    const cartIcon = document.querySelector('.cart');
    if (cartIcon && count > 0) {
        let badge = cartIcon.querySelector('.count-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'count-badge';
            cartIcon.appendChild(badge);
        }
        badge.textContent = count;
    }
}

// 간단한 토스트 알림
function showToast(message, duration = 3000) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: #111;
        color: white;
        padding: 16px 24px;
        border-radius: 64px;
        font-size: 14px;
        z-index: 9999;
        animation: slideUp 0.3s ease;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
    }

    .count-badge {
        position: absolute;
        top: -4px;
        right: -4px;
        background: #e00751;
        color: white;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: 700;
    }

    .header-container {
        transition: transform 0.3s ease;
    }

    .mobile-open {
        max-height: 400px;
        overflow-y: auto;
    }
`;
document.head.appendChild(style);

// 예시: 장바구니 추가 시 토스트 표시
cartButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        showToast('장바구니에 추가되었습니다');
        // updateCartCount(현재개수 + 1);
    });
});

/* =======popup========= */
const popupCloseBtn = document.querySelector(".popup-close-btn");
if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", () => {
        document.querySelector(".popup").style.display = "none";
    });
}

// Video control
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');

if (videoContainer && video) {
  // Start playing the video initially
  video.play().catch(error => {
    console.log("Autoplay was prevented: ", error);
    // Autoplay was prevented.
    // Show a "Play" button to let the user start playback.
  });

  videoContainer.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
}
/* ========================================
   별점 시스템 (Star Rating System)
   ======================================== */

// 페이지 로드 시 모든 별점 업데이트
document.addEventListener('DOMContentLoaded', function() {
    const starsInnerElements = document.querySelectorAll('.stars-inner');
    
    starsInnerElements.forEach(function(element) {
        const rating = parseFloat(element.getAttribute('data-rating'));
        
        if (!isNaN(rating)) {
            // 5점 만점 기준 백분율 계산
            const starPercentage = (rating / 5) * 100;
            
            // CSS width 반영
            element.style.width = Math.round(starPercentage) + '%';
        }
    });
    
    console.log('별점 시스템 초기화 완료');
});
