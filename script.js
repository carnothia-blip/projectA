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
        const savedLang = localStorage.getItem("preferredLang") || "ko";
        const msg = translations[savedLang]?.["add-to-cart"] || '장바구니에 추가되었습니다.';
        showToast(msg);
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
        const savedLang = localStorage.getItem("preferredLang") || "ko";
        const msg = translations[savedLang]?.["add-to-wishlist"] || '위시리스트에 추가되었습니다.';
        showToast(msg);
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

// 언어별 번역 데이터
const translations = {
    ko: {
        "search-placeholder": "검색어 입력",
        "login-text": "Hej! 로그인 하기",
        "all-products": "모든 제품",
        "room-shopping": "공간별 쇼핑하기",
        "special-price": "특별한 가격",
        "news": "새로운 소식",
        "ideas": "아이디어",
        "planning": "플래닝 & 스타일링 서비스",
        "more": "더 보기",
        "spring-sale": "이케아 봄 세일, 최대 50% 할인!",
        "new-products": "이달의 신제품",
        "warm-space": "싱그러운 공기 속, 따뜻한 공간을 위한 제안",
        "miss-this-deal": "놓치면 아쉬운 특가",
        "new-lower-price": "더 낮은 새로운 가격",
        "ikea-family-benefit": "IKEA Family 혜택",
        "last-chance": "마지막 기회",
        "lowest-price": "가장 낮은 가격",
        "prev-price": "기존가: ",
        "add-to-cart": "장바구니에 추가되었습니다.",
        "add-to-wishlist": "위시리스트에 추가되었습니다.",
        "tips-ideas": "보다 지속가능한 집을 만드는 팁과 아이디어",
        "sustainable-life": "지속 가능한 생활을 위한 아이디어",
        "easy-food": "보다 지속가능한 방식으로 음식을 먹을 수 있는 간편한 방법",
        "save-energy": "집에서 에너지를 절약하는 빠른 방법",
        "reduce-waste": "집에서 쓰레기를 줄이는 간단한 방법",
        "extend-life": "가구의 수명을 연장하는 간단한 방법",
        "save-water": "집에서 물을 절약할 수 있는 스마트 솔루션",
        "join-family-title": "IKEA Family",
        "join-family-desc": "지금 IKEA Family에 무료로 가입하고 다양한 멤버 전용 혜택을 누리세요.",
        "see-details": "자세히 보기",
        "join-family-btn": "IKEA Family 가입하기",
        "join-business-title": "IKEA Business Network",
        "join-business-desc": "여러분의 더 나은 비즈니스 환경을 위한 다양한 혜택들을 받으세요",
        "join-business-btn": "IKEA Business Network 가입하기",
        "footer-qna": "고객문의",
        "footer-shopping": "쇼핑하기",
        "footer-services": "서비스",
        "footer-about": "이케아 이야기",
        "copyright-text": "© Inter IKEA Systems B.V 1998-2026 <br>이 프로젝트는 구직용 포트폴리오입니다.<br>이케아와 무관함을 알려드립니다.",
        "company-name": "이케아코리아 유한회사",
        "company-address": "주소: (우) 09876 허리도 가늘군 만지면 부러지리 18-8, 1층일까 2층일까 이케아",
        "company-reg": "사업자 등록번호: 189-69-12345",
        "company-check": "사업자정보확인",
        "company-rep": "대표자: 도이새",
        "company-report": "통신판매업 신고: 2026-XXXX-0114",
        "company-csc": "고객지원센터: 1998-2026",
        "policy-privacy": "개인정보처리방침",
        "policy-cookie": "쿠키 정책",
        "policy-cookie-settings": "쿠키 설정",
        "policy-terms": "웹사이트 이용약관",
        "policy-disclosure": "Responsible disclosure",
        "dont-show-today": "하루동안 보지 않기",
        "close": "닫기"
    },
    en: {
        "search-placeholder": "Search",
        "login-text": "Hej! Log in",
        "all-products": "All products",
        "room-shopping": "Shop by room",
        "special-price": "Special price",
        "news": "What's new",
        "ideas": "Ideas",
        "planning": "Planning & styling service",
        "more": "More",
        "spring-sale": "IKEA Spring Sale, up to 50% off!",
        "new-products": "New this month",
        "warm-space": "Suggestions for a warm space in the fresh air",
        "miss-this-deal": "Deals you don't want to miss",
        "new-lower-price": "New lower price",
        "ikea-family-benefit": "IKEA Family benefit",
        "last-chance": "Last chance",
        "lowest-price": "Lowest price",
        "prev-price": "Previous price: ",
        "add-to-cart": "Added to cart.",
        "add-to-wishlist": "Added to wishlist.",
        "tips-ideas": "Tips and ideas for a more sustainable home",
        "sustainable-life": "Ideas for a sustainable life",
        "easy-food": "Easy ways to eat in a more sustainable way",
        "save-energy": "Quick ways to save energy at home",
        "reduce-waste": "Simple ways to reduce waste at home",
        "extend-life": "Simple ways to extend the life of your furniture",
        "save-water": "Smart solutions to save water at home",
        "join-family-title": "IKEA Family",
        "join-family-desc": "Join IKEA Family for free today and enjoy various member-only benefits.",
        "see-details": "See details",
        "join-family-btn": "Join IKEA Family",
        "join-business-title": "IKEA Business Network",
        "join-business-desc": "Get various benefits for your better business environment",
        "join-business-btn": "Join IKEA Business Network",
        "footer-qna": "Customer Service",
        "footer-shopping": "Shopping",
        "footer-services": "Services",
        "footer-about": "About IKEA",
        "copyright-text": "© Inter IKEA Systems B.V 1998-2026 <br>This project is for job application portfolio.<br>Not an official IKEA website.",
        "company-name": "IKEA Korea Ltd.",
        "company-address": "Address: 18-8, Fresh Air Road, Gyeonggi-do, South Korea",
        "company-reg": "Business Registration: 189-69-12345",
        "company-check": "Business Info",
        "company-rep": "CEO: Doi Sae",
        "company-report": "Mail Order Report: 2026-XXXX-0114",
        "company-csc": "Customer Support: 1998-2026",
        "policy-privacy": "Privacy Policy",
        "policy-cookie": "Cookie Policy",
        "policy-cookie-settings": "Cookie Settings",
        "policy-terms": "Terms of Use",
        "policy-disclosure": "Responsible disclosure",
        "dont-show-today": "Don't show today",
        "close": "Close"
    },
    zh: {
        "search-placeholder": "输入搜索词",
        "login-text": "Hej! 登录",
        "all-products": "所有产品",
        "room-shopping": "按房间购物",
        "special-price": "特别价格",
        "news": "最新消息",
        "ideas": "创意",
        "planning": "规划与设计服务",
        "more": "更多",
        "spring-sale": "宜家春季促销，最高5折！",
        "new-products": "本月新品",
        "warm-space": "在清新空气中打造温馨空间的建议",
        "miss-this-deal": "不容错过的特惠",
        "new-lower-price": "更低价格",
        "ikea-family-benefit": "宜家俱乐部优惠",
        "last-chance": "最后机会",
        "lowest-price": "最低价格",
        "prev-price": "原价: ",
        "add-to-cart": "已加入购物车。",
        "add-to-wishlist": "已加入愿望清单。",
        "tips-ideas": "打造更可持续家居的技巧与创意",
        "sustainable-life": "可持续生活的创意",
        "easy-food": "以更可持续的方式进食的简单方法",
        "save-energy": "家中节能的快捷方法",
        "reduce-waste": "家中减少废弃物的简单方法",
        "extend-life": "延长家具寿命的简单方法",
        "save-water": "家中节水的智能解决方案",
        "join-family-title": "宜家俱乐部",
        "join-family-desc": "立即免费加入宜家俱乐部，享受各种会员专享优惠。",
        "see-details": "查看详情",
        "join-family-btn": "加入宜家俱乐部",
        "join-business-title": "宜家企业网络",
        "join-business-desc": "为您的业务环境获取各种优惠",
        "join-business-btn": "加入宜家企业网络",
        "footer-qna": "客户服务",
        "footer-shopping": "购物指南",
        "footer-services": "相关服务",
        "footer-about": "关于宜家",
        "copyright-text": "© Inter IKEA Systems B.V 1998-2026 <br>本项目用于求职作品集。<br>与宜家官方无关。",
        "company-name": "宜家韩国有限公司",
        "company-address": "地址：韩国京畿道清新路 18-8",
        "company-reg": "工商注册号：189-69-12345",
        "company-check": "查看工商信息",
        "company-rep": "代表人：都理世",
        "company-report": "电信销售备案：2026-XXXX-0114",
        "company-csc": "客户支持中心：1998-2026",
        "policy-privacy": "隐私政策",
        "policy-cookie": "Cookie政策",
        "policy-cookie-settings": "Cookie设置",
        "policy-terms": "网站使用条款",
        "policy-disclosure": "责任披露",
        "dont-show-today": "今日不再显示",
        "close": "关闭"
    },
    ja: {
        "search-placeholder": "検索ワードを入力",
        "login-text": "Hej! ログイン",
        "all-products": "すべての製品",
        "room-shopping": "部屋別で選ぶ",
        "special-price": "特別価格",
        "news": "最新ニュース",
        "ideas": "アイデア",
        "planning": "プランニング＆スタイリングサービス",
        "more": "もっと見る",
        "spring-sale": "IKEA 春のセール、最大50%OFF！",
        "new-products": "今月の新製品",
        "warm-space": "爽やかな空気の中、温かい空間のための提案",
        "miss-this-deal": "見逃せないお買い得品",
        "new-lower-price": "さらにお求めやすくなりました",
        "ikea-family-benefit": "IKEA Family 特典",
        "last-chance": "ラストチャンス",
        "lowest-price": "最低価格",
        "prev-price": "旧価格: ",
        "add-to-cart": "カートに追加されました。",
        "add-to-wishlist": "ウィ시リストに追加されました。",
        "tips-ideas": "よりサステナブルな家づくりのためのヒントとアイデア",
        "sustainable-life": "サステナブルな暮らしのためのアイデア",
        "easy-food": "よりサステナブルな方法で食事を楽しむ簡単な方法",
        "save-energy": "家でエネルギーを節約する素早い方法",
        "reduce-waste": "家でゴミを減らす簡単な方法",
        "extend-life": "家具を長持ちさせる簡単な方法",
        "save-water": "家で水を節約するスマートなソリューション",
        "join-family-title": "IKEA Family",
        "join-family-desc": "今すぐIKEA Familyに無料で入会して、さまざまなメンバー限定特典を楽しみましょう。",
        "see-details": "詳細を見る",
        "join-family-btn": "IKEA Familyに入会する",
        "join-business-title": "IKEA Business Network",
        "join-business-desc": "ビジネス環境をより良くするためのさまざまな特典を受け取りましょう",
        "join-business-btn": "IKEA Business Networkに入会する",
        "footer-qna": "カスタマーサービス",
        "footer-shopping": "ショッピングガイド",
        "footer-services": "サービス",
        "footer-about": "イケアについて",
        "copyright-text": "© Inter IKEA Systems B.V 1998-2026 <br>このプロジェクトは求職用ポートフォリオです。<br>イケア公式とは無関係です。",
        "company-name": "イケア・コリア有限会社",
        "company-address": "住所：韓国京畿道爽やか路 18-8",
        "company-reg": "事業者登録番号：189-69-12345",
        "company-check": "事業者情報を確認",
        "company-rep": "代表者：ド・イセ",
        "company-report": "通信販売業届出：2026-XXXX-0114",
        "company-csc": "カスタマーサポートセンター：1998-2026",
        "policy-privacy": "個人情報保護方針",
        "policy-cookie": "クッキーポリシー",
        "policy-cookie-settings": "クッキー設定",
        "policy-terms": "ウェブサイト利用規約",
        "policy-disclosure": "責任ある開示",
        "dont-show-today": "今日一日表示しない",
        "close": "閉じる"
    }
};

function applyTranslations(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
    placeholders.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Save language preference
    localStorage.setItem("preferredLang", lang);
}

// 기존 selectLang 함수를 수정하여 번역 적용 호출
function selectLang(opt) {
    const country = opt.dataset.country;
    const lang = opt.dataset.lang;
    // UI 업데이트
    document.querySelector('.language-selector .country').textContent = country;
    const langDisplay = opt.textContent.split('—')[1].trim();
    document.querySelector('.language-selector .language').textContent = langDisplay;
    // aria 업데이트
    langOpts.forEach(o => o.setAttribute('aria-checked', 'false'));
    opt.setAttribute('aria-checked', 'true');
    // 문서의 lang 속성 업데이트
    document.documentElement.lang = lang;
    
    // 번역 적용
    applyTranslations(lang);

    // 닫기
    closeMenu();
    languageBtn.focus();
    console.log('언어 선택:', country, lang);
}

// 페이지 로드 시 저장된 언어 설정 적용
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem("preferredLang") || "ko";
    if (savedLang !== "ko") {
        applyTranslations(savedLang);
        // 언어 선택기 UI도 업데이트
        const opt = Array.from(langOpts).find(o => o.dataset.lang === savedLang);
        if (opt) {
            const country = opt.dataset.country;
            const langDisplay = opt.textContent.split('—')[1].trim();
            document.querySelector('.language-selector .country').textContent = country;
            document.querySelector('.language-selector .language').textContent = langDisplay;
            langOpts.forEach(o => o.setAttribute('aria-checked', 'false'));
            opt.setAttribute('aria-checked', 'true');
            document.documentElement.lang = savedLang;
        }
    }
});

// 기존 코드와 합치기 위해, selectLang 함수 정의 부분을 찾아서 교체해야 함.
// 이미 script.js에 selectLang이 있으므로, 이 부분만 따로 처리하거나 전체를 다시 쓰는 것이 좋음.
// 여기서는 selectLang 함수 자체를 덮어씌우는 방식으로 제안됨.

// (나머지 기존 script.js 코드들이 아래에 이어짐)

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
        const savedLang = localStorage.getItem("preferredLang") || "ko";
        const msg = translations[savedLang]?.["add-to-cart"] || '장바구니에 추가되었습니다';
        showToast(msg);
        // updateCartCount(현재개수 + 1);
    });
});

/* =======popup========= */
const popupCloseBtn = document.querySelector(".popup-close-btn");
const popup = document.querySelector(".popup");
const dontShowTodayCheckbox = document.getElementById("dont-show-today");

if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", () => {
        if (dontShowTodayCheckbox && dontShowTodayCheckbox.checked) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            localStorage.setItem("popupHiddenUntil", tomorrow.toISOString());
        }
        popup.style.display = "none";
    });
}

// 페이지 로드 시 팝업 표시 여부 확인
window.addEventListener("load", () => {
    const hiddenUntil = localStorage.getItem("popupHiddenUntil");
    if (hiddenUntil) {
        const hiddenDate = new Date(hiddenUntil);
        const now = new Date();
        if (now < hiddenDate) {
            popup.style.display = "none";
        }
    }
});

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
