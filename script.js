// DOM 요소 선택
const searchInput = document.querySelector('.search-input');
const cameraButton = document.querySelector('.camera-button');
const categoryItems = document.querySelectorAll('.category-item');
const tabItems = document.querySelectorAll('button.tab-item');
const filterButtons = document.querySelectorAll('.filter-list .Listitem.Button');
const cartButtons = document.querySelectorAll('.cart-button');
const wishlistButtons = document.querySelectorAll('.wishlist-button, .wishlist-btn');
const languageBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const langOpts = document.querySelectorAll('.lang-option');
const popupCloseBtn = document.querySelector(".popup-close-btn");
const popup = document.querySelector(".popup");
const dontShowTodayCheckbox = document.getElementById("dont-show-today");
const videoContainer = document.querySelector('.video-container');
const video = document.querySelector('.video-container video');

// 언어별 번역 데이터
const translations = {
    ko: {
        "search-placeholder": "제품 및 아이디어, 신제품 검색",
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
        "add-to-cart-aria": "장바구니에 추가",
        "add-to-wishlist-aria": "위시리스트에 추가",
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
        "footer-ikea-service": "이케아 서비스",
        "footer-service": "고객 서비스",
        "footer-faq": "자주 묻는 질문",
        "footer-support": "고객지원센터",
        "footer-track": "배송조회",
        "footer-shipping": "배송 서비스",
        "footer-return": "교환환불",
        "footer-warranty": "품질보증",
        "footer-recall": "제품리콜",
        "footer-feedback": "피드백",
        "footer-parts": "부품 신청",
        "footer-phone-order": "전화 주문",
        "footer-business": "IKEA for Business",
        "footer-planning": "셀프 플래닝",
        "footer-app": "이케아 모바일 앱",
        "footer-tips": "제품 사용 팁 / 가이드",
        "footer-brochure": "브로슈어 / 제품 구매 안내",
        "footer-payment": "결제 옵션",
        "footer-gift-card": "기프트 카드",
        "footer-assembly": "조립 서비스",
        "footer-install": "설치 서비스",
        "footer-kitchen": "주방 서비스",
        "footer-consult": "구매 상담 서비스",
        "footer-styling": "공간 스타일링 서비스",
        "footer-buyback": "바이백 서비스",
        "footer-brand": "브랜드 소개",
        "footer-living": "집에서의 생활",
        "footer-sustainable": "지속가능한 생활",
        "footer-newsroom": "뉴스룸",
        "footer-jobs": "채용정보",
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
        "close": "닫기",
        "cart-alt": "장바구니",
        "wishlist-alt": "위시리스트",
        "globe-alt": "언어 및 국가 선택",
        "logo-alt": "IKEA 로고",
        "search-aria": "제품 및 아이디어, 신제품 검색",
        "search-alt": "검색",
        "camera-aria": "이미지로 검색",
        "camera-alt": "카메라",
        "more-alt": "더 보기",
        "user-alt": "로그인 아이콘",
        "p1-name": "NÅLBLECKA 놀블레카",
        "p1-desc": "주방 조리대 정리용품, 38x13x28 cm",
        "p2-name": "KUNGSFORS 쿵스포르스",
        "p2-desc": "주방카트, 60x40 cm",
        "p3-name": "SILVTJÄRN 실브셰른",
        "p3-desc": "보관용기",
        "p4-name": "FABLER 파블레르",
        "p4-desc": "식기도구 3종",
        "p5-name": "PLUTTIS 플루티스",
        "p5-desc": "벽시계, 블랙, 28cm",
        "p6-name": "NYMÅNE 뉘모네",
        "p6-desc": "플로어스탠드/독서등",
        "category-new": "신제품과 컬렉션",
        "category-storage-furniture": "수납 가구",
        "category-storage-items": "수납 용품",
        "category-bed-mattress": "침대/매트리스",
        "category-sofa": "소파/암체어",
        "category-table-chair": "식탁/테이블/의자",
        "category-desk": "책상/사무용의자",
        "category-kitchen-furniture": "주방가구",
        "category-kitchenware": "주방용품",
        "category-lighting": "조명",
        "category-textile": "텍스타일/러그",
        "category-curtain": "커튼/블라인드",
        "category-bathroom": "욕실/화장실 용품",
        "login-title-page": "로그인",
        "login-desc-page": "로그인 후 이용해주세요",
        "login-id-label": "이메일 또는 확인된 휴대폰 번호",
        "login-id-placeholder": "아이디 입력",
        "login-pw-label": "비밀번호",
        "login-pw-placeholder": "비밀번호 입력",
        "login-btn-page": "로그인",
        "signup-link": "회원가입",
        "forgot-pw-link": "비밀번호 찾기",
        "placeholder-title": "준비 중인 페이지입니다",
        "placeholder-p": "요청하신 페이지는 현재 준비 중입니다.",
        "back-to-main": "메인으로 돌아가기"
    },
    en: {
        "search-placeholder": "Search for products & ideas",
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
        "add-to-cart-aria": "Add to cart",
        "add-to-wishlist-aria": "Add to wishlist",
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
        "footer-ikea-service": "IKEA Service",
        "footer-service": "Customer Service",
        "footer-faq": "FAQ",
        "footer-support": "Support Center",
        "footer-track": "Track Order",
        "footer-shipping": "Shipping Service",
        "footer-return": "Returns",
        "footer-warranty": "Warranty",
        "footer-recall": "Recalls",
        "footer-feedback": "Feedback",
        "footer-parts": "Spare Parts",
        "footer-phone-order": "Phone Order",
        "footer-business": "IKEA for Business",
        "footer-planning": "Planning",
        "footer-app": "Mobile App",
        "footer-tips": "Tips & Guides",
        "footer-brochure": "Brochures",
        "footer-payment": "Payment",
        "footer-gift-card": "Gift Cards",
        "footer-assembly": "Assembly",
        "footer-install": "Installation",
        "footer-kitchen": "Kitchen",
        "footer-consult": "Consulting",
        "footer-styling": "Styling",
        "footer-buyback": "Buy-back",
        "footer-brand": "About Brand",
        "footer-living": "Life at Home",
        "footer-sustainable": "Sustainability",
        "footer-newsroom": "Newsroom",
        "footer-jobs": "Careers",
        "copyright-text": "© Inter IKEA Systems B.V 1998-2026 <br>This project is for job application portfolio.<br>Not an official IKEA website.",
        "company-name": "IKEA Korea Ltd.",
        "company-address": "Address: 18-8, Fresh Air Road, South Korea",
        "company-reg": "Registration: 189-69-12345",
        "company-check": "Business Info",
        "company-rep": "CEO: Doi Sae",
        "company-report": "Mail Order: 2026-XXXX-0114",
        "company-csc": "Support: 1998-2026",
        "policy-privacy": "Privacy Policy",
        "policy-cookie": "Cookie Policy",
        "policy-cookie-settings": "Cookie Settings",
        "policy-terms": "Terms of Use",
        "policy-disclosure": "Responsible disclosure",
        "dont-show-today": "Don't show today",
        "close": "Close",
        "cart-alt": "Cart",
        "wishlist-alt": "Wishlist",
        "globe-alt": "Select Language & Country",
        "logo-alt": "IKEA Logo",
        "search-aria": "Search for products, ideas and more",
        "search-alt": "Search",
        "camera-aria": "Search by image",
        "camera-alt": "Camera",
        "more-alt": "More",
        "user-alt": "Login icon",
        "p1-name": "NÅLBLECKA",
        "p1-desc": "Kitchen counter organizer, 38x13x28 cm",
        "p2-name": "KUNGSFORS",
        "p2-desc": "Kitchen cart, 60x40 cm",
        "p3-name": "SILVTJÄRN",
        "p3-desc": "Storage container",
        "p4-name": "FABLER",
        "p4-desc": "3-piece cutlery set",
        "p5-name": "PLUTTIS",
        "p5-desc": "Wall clock, black, 28cm",
        "p6-name": "NYMÅNE",
        "p6-desc": "Floor lamp/reading lamp",
        "category-new": "New products & Collections",
        "category-storage-furniture": "Storage furniture",
        "category-storage-items": "Storage items",
        "category-bed-mattress": "Beds & Mattresses",
        "category-sofa": "Sofas & Armchairs",
        "category-table-chair": "Tables & Chairs",
        "category-desk": "Desks & Office chairs",
        "category-kitchen-furniture": "Kitchen furniture",
        "category-kitchenware": "Kitchenware",
        "category-lighting": "Lighting",
        "category-textile": "Textiles & Rugs",
        "category-curtain": "Curtains & Blinds",
        "category-bathroom": "Bathroom products",
        "login-title-page": "Login",
        "login-desc-page": "Please log in to continue",
        "login-id-label": "Email or confirmed mobile number",
        "login-id-placeholder": "Enter ID",
        "login-pw-label": "Password",
        "login-pw-placeholder": "Enter password",
        "login-btn-page": "Log In",
        "signup-link": "Sign Up",
        "forgot-pw-link": "Forgot password",
        "placeholder-title": "Page Under Construction",
        "placeholder-p": "The page you requested is currently under development.",
        "back-to-main": "Back to Home"
    },
    zh: {
        "search-placeholder": "搜索产品、灵感和新品",
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
        "add-to-cart-aria": "加入购物车",
        "add-to-wishlist-aria": "加入愿望清单",
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
        "footer-service": "客户服务",
        "footer-faq": "常见问题",
        "footer-support": "客户支持",
        "footer-track": "追踪订单",
        "footer-return": "退换货",
        "footer-warranty": "品质保证",
        "footer-recall": "产品召回",
        "footer-feedback": "反馈意见",
        "footer-parts": "备件申请",
        "footer-phone-order": "电话订购",
        "footer-business": "宜家企业网络",
        "footer-planning": "自助规划",
        "footer-app": "手机应用",
        "footer-tips": "使用技巧",
        "footer-brochure": "宣传册",
        "footer-payment": "支付方式",
        "footer-gift-card": "礼品卡",
        "footer-assembly": "组装服务",
        "footer-install": "安装服务",
        "footer-kitchen": "厨房服务",
        "footer-consult": "购买咨询",
        "footer-styling": "设计服务",
        "footer-buyback": "回购服务",
        "footer-brand": "品牌故事",
        "footer-living": "居家生活",
        "footer-sustainable": "可持续发展",
        "footer-newsroom": "新闻中心",
        "footer-jobs": "加入我们",
        "copyright-text": "© Inter IKEA Systems B.V 1998-2026 <br>本项目用于求职作品集。<br>与宜家官方无关。",
        "company-name": "宜家韩国有限公司",
        "company-address": "地址：韩国京畿道 18-8",
        "company-reg": "工商注册号：189-69-12345",
        "company-check": "查看工商信息",
        "company-rep": "代表人：都理世",
        "company-report": "电信销售备案：2026-XXXX-0114",
        "company-csc": "客服中心：1998-2026",
        "policy-privacy": "隐私政策",
        "policy-cookie": "Cookie政策",
        "policy-cookie-settings": "Cookie设置",
        "policy-terms": "使用条款",
        "policy-disclosure": "责任披露",
        "dont-show-today": "今日不再显示",
        "close": "关闭",
        "cart-alt": "购物车",
        "wishlist-alt": "愿望清单",
        "globe-alt": "选择语言与国家",
        "logo-alt": "宜家 Logo",
        "search-aria": "搜索产品、灵感等",
        "search-alt": "搜索",
        "camera-aria": "按图像搜索",
        "camera-alt": "相机",
        "more-alt": "更多",
        "user-alt": "登录图标",
        "p1-name": "NÅLBLECKA 诺블레카",
        "p1-desc": "厨房台面收纳件, 38x13x28 厘米",
        "p2-name": "KUNGSFORS 康斯福",
        "p2-desc": "厨房推车, 60x40 厘米",
        "p3-name": "SILVTJÄRN 希弗特恩",
        "p3-desc": "储物罐",
        "p4-name": "FABLER 法布勒",
        "p4-desc": "餐具3件套",
        "p5-name": "PLUTTIS 普鲁提斯",
        "p5-desc": "挂钟, 黑色, 28 厘米",
        "p6-name": "NYMÅNE 纽墨奈",
        "p6-desc": "落地灯/阅读灯",
        "category-new": "新品与系列",
        "category-storage-furniture": "储物家具",
        "category-storage-items": "储物用品",
        "category-bed-mattress": "床/床垫",
        "category-sofa": "沙发/扶手椅",
        "category-table-chair": "餐桌/桌子/椅子",
        "category-desk": "书桌/办公椅",
        "category-kitchen-furniture": "厨房家具",
        "category-kitchenware": "厨具",
        "category-lighting": "灯具",
        "category-textile": "纺织品/地毯",
        "category-curtain": "窗帘/百叶窗",
        "category-bathroom": "浴室用品",
        "login-title-page": "登录",
        "login-desc-page": "请登录后继续",
        "login-id-label": "电子邮箱或已确认的手机号码",
        "login-id-placeholder": "输入账号",
        "login-pw-label": "密码",
        "login-pw-placeholder": "输入密码",
        "login-btn-page": "登录",
        "signup-link": "注册",
        "forgot-pw-link": "忘记密码",
        "placeholder-title": "页面准备中",
        "placeholder-p": "您请求的页面目前正在开发中。",
        "back-to-main": "返回首页"
    },
    ja: {
        "search-placeholder": "製品、アイデア、新製品を検索",
        "login-text": "Hej! ログイン",
        "all-products": "すべての製品",
        "room-shopping": "部屋別で選ぶ",
        "special-price": "特別価格",
        "news": "最新ニュース",
        "ideas": "アイデア",
        "planning": "プランニング＆スタイ링",
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
        "add-to-wishlist": "ウィッシュリストに追加されました。",
        "add-to-cart-aria": "カートに追加",
        "add-to-wishlist-aria": "ウィッシュリストに追加",
        "tips-ideas": "よりサステナブルな家づくりのためのヒント",
        "sustainable-life": "サステナブルな暮らし",
        "easy-food": "よりサステ나블な食事",
        "save-energy": "家でエネルギーを節約",
        "reduce-waste": "ゴミを減らす方法",
        "extend-life": "家具を長持ちさせる",
        "save-water": "水を節約する",
        "join-family-title": "IKEA Family",
        "join-family-desc": "今すぐIKEA Familyに無料で入会しましょう。",
        "see-details": "詳細を見る",
        "join-family-btn": "IKEA Familyに入会",
        "join-business-title": "IKEA Business Network",
        "join-business-desc": "ビジネス環境をより良くしましょう",
        "join-business-btn": "IKEA Business Networkに入会",
        "footer-qna": "カスタマーサービス",
        "footer-shopping": "ショッピングガイド",
        "footer-services": "サービス",
        "footer-about": "イケアについて",
        "footer-ikea-service": "イケアのサービス",
        "footer-service": "カスタマーサービス",
        "footer-faq": "よくある質問",
        "footer-support": "サポートセンター",
        "footer-track": "配送状況의 확인",
        "footer-shipping": "配送サービス",
        "footer-return": "返品・交換",
        "footer-warranty": "品質保証",
        "footer-recall": "リコール情報",
        "footer-feedback": "フィード백",
        "footer-parts": "スペアパーツ",
        "footer-phone-order": "電話注文",
        "footer-business": "IKEA for Business",
        "footer-planning": "プランニング",
        "footer-app": "モバイルアプリ",
        "footer-tips": "使い方のヒント",
        "footer-brochure": "カタログ",
        "footer-payment": "お支払い方法",
        "footer-gift-card": "ギフトカード",
        "footer-assembly": "組み立て",
        "footer-install": "設置",
        "footer-kitchen": "キッチン",
        "footer-consult": "購入相談",
        "footer-styling": "デザイン",
        "footer-buyback": "바이백",
        "footer-brand": "ブランド紹介",
        "footer-living": "家での暮らし",
        "footer-sustainable": "サステナビ리티",
        "footer-newsroom": "ニュースルーム",
        "footer-jobs": "採用情報",
        "copyright-text": "© Inter IKEA Systems B.V 1998-2026 <br>このプロジェクトは求職用ポートフォリオ입니다.<br>イケア公式とは無関係입니다.",
        "company-name": "イケア・コリア有限会社",
        "company-address": "住所：韓国京畿道 18-8",
        "company-reg": "登録番号：189-69-12345",
        "company-check": "企業情報",
        "company-rep": "代表者：ド・イセ",
        "company-report": "通信販売：2026-XXXX-0114",
        "company-csc": "カスタマーセンター：1998-2026",
        "policy-privacy": "個人情報保護方針",
        "policy-cookie": "クッキーポリシー",
        "policy-cookie-settings": "クッキー設定",
        "policy-terms": "웹사이트 이용약관",
        "policy-disclosure": "責任ある開示",
        "dont-show-today": "今日一日表示しない",
        "close": "閉じる",
        "cart-alt": "ショッピングカート",
        "wishlist-alt": "ウィッシュリスト",
        "globe-alt": "言語と国の選択",
        "logo-alt": "IKEA ロゴ",
        "search-aria": "製品、アイデアなどを検索",
        "search-alt": "検索",
        "camera-aria": "画像で検索",
        "camera-alt": "カメラ",
        "more-alt": "もっと見る",
        "user-alt": "ログインアイコン",
        "p1-name": "NÅLBLECKA ノールブレッカ",
        "p1-desc": "キッチンワークトップ用収納, 38x13x28 cm",
        "p2-name": "KUNGSFORS クング스フォルス",
        "p2-desc": "キッチンワゴン, 60x40 cm",
        "p3-name": "SILVTJÄRN シルヴティェルン",
        "p3-desc": "容器",
        "p4-name": "FABLER ファブレル",
        "p4-desc": "カトラリー3点セット",
        "p5-name": "PLUTTIS プルッ티스",
        "p5-desc": "壁掛け時計, ブラック, 28 cm",
        "p6-name": "NYMÅNE ニーモーネ",
        "p6-desc": "フロアランプ/読書ランプ",
        "category-new": "新製品とコレクション",
        "category-storage-furniture": "収納家具",
        "category-storage-items": "収納用品",
        "category-bed-mattress": "ベッド＆マットレス",
        "category-sofa": "ソファ＆アームチェア",
        "category-table-chair": "テーブル＆チェア",
        "category-desk": "デスク＆オフィスチェア",
        "category-kitchen-furniture": "キッチン家具",
        "category-kitchenware": "キッチン用品",
        "category-lighting": "照明",
        "category-textile": "テキスタイル＆ラグ",
        "category-curtain": "カーテン＆ブラインド",
        "category-bathroom": "バスルーム用品",
        "login-title-page": "ログイン",
        "login-desc-page": "ログインして続行してください",
        "login-id-label": "メールアドレスまたは携帯電話番号",
        "login-id-placeholder": "IDを入力",
        "login-pw-label": "パスワード",
        "login-pw-placeholder": "パスワードを入力",
        "login-btn-page": "ログイン",
        "signup-link": "新規登録",
        "forgot-pw-link": "パスワードをお忘れの方",
        "placeholder-title": "準備中のページです",
        "placeholder-p": "リクエストされたページは現在準備中です。",
        "back-to-main": "メインに戻る"
    }
};

// 번역 적용 함수
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

    const ariaLabels = document.querySelectorAll("[data-i18n-aria]");
    ariaLabels.forEach(el => {
        const key = el.getAttribute("data-i18n-aria");
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute("aria-label", translations[lang][key]);
        }
    });

    const altTexts = document.querySelectorAll("[data-i18n-alt]");
    altTexts.forEach(el => {
        const key = el.getAttribute("data-i18n-alt");
        if (translations[lang] && translations[lang][key]) {
            el.alt = translations[lang][key];
        }
    });

    localStorage.setItem("preferredLang", lang);
}

// 메뉴 닫기 함수
const closeMenu = () => {
    if (languageBtn && langMenu) {
        languageBtn.setAttribute('aria-expanded', 'false');
        langMenu.hidden = true;
    }
};

// 메뉴 열기 함수
const openMenu = () => {
    if (languageBtn && langMenu) {
        languageBtn.setAttribute('aria-expanded', 'true');
        langMenu.hidden = false;
        const checked = langMenu.querySelector('[aria-checked="true"]');
        (checked || langMenu.querySelector('.lang-option')).focus();
    }
};

// 언어 선택 처리 함수
function selectLang(opt) {
    const country = opt.dataset.country;
    const lang = opt.dataset.lang;
    
    const countryEl = document.querySelector('.language-selector .country');
    const langEl = document.querySelector('.language-selector .language');
    if (countryEl) countryEl.textContent = country;
    if (langEl) {
        const langDisplay = opt.textContent.split('—')[1]?.trim() || opt.textContent.trim();
        langEl.textContent = langDisplay;
    }
    
    if (langOpts) {
        langOpts.forEach(o => o.setAttribute('aria-checked', 'false'));
    }
    opt.setAttribute('aria-checked', 'true');
    document.documentElement.lang = lang;
    
    applyTranslations(lang);
    closeMenu();
    if (languageBtn) languageBtn.focus();
}

// 토스트 알림 함수
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
            if (document.body.contains(toast)) document.body.removeChild(toast);
        }, 300);
    }, duration);
}

// 이벤트 리스너 등록
if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim();
            if (query) console.log('검색:', query);
        }
    });
}

if (cameraButton) {
    cameraButton.addEventListener('click', () => console.log('이미지 검색 클릭'));
}

categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        const categoryName = item.querySelector('.category-name')?.textContent || item.textContent;
        const category = item.dataset.category;
        console.log('카테고리 선택:', categoryName, category);
    });
});

tabItems.forEach(tab => {
    tab.addEventListener('click', () => {
        tabItems.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tab.classList.add('active');
        tab.setAttribute('aria-selected', 'true');
    });
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

cartButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const savedLang = localStorage.getItem("preferredLang") || "ko";
        const msg = translations[savedLang]?.["add-to-cart"] || '장바구니에 추가되었습니다.';
        showToast(msg);
    });
});

wishlistButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const savedLang = localStorage.getItem("preferredLang") || "ko";
        const msg = translations[savedLang]?.["add-to-wishlist"] || '위시리스트에 추가되었습니다.';
        showToast(msg);
    });
});

if (languageBtn) {
    languageBtn.addEventListener('click', (e) => {
        const isOpen = languageBtn.getAttribute('aria-expanded') === 'true';
        (isOpen ? closeMenu() : openMenu());
    });

    languageBtn.addEventListener('keydown', (ev) => {
        if (ev.key === 'ArrowDown' || ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            openMenu();
        }
        if (ev.key === 'Escape') closeMenu();
    });
}

document.addEventListener('click', (e) => {
    if (languageBtn && langMenu && !languageBtn.contains(e.target) && !langMenu.contains(e.target)) closeMenu();
});

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
            if (languageBtn) languageBtn.focus();
        }
    });
});

if (popupCloseBtn) {
    popupCloseBtn.addEventListener("click", () => {
        if (dontShowTodayCheckbox && dontShowTodayCheckbox.checked) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            localStorage.setItem("popupHiddenUntil", tomorrow.toISOString());
        }
        if (popup) popup.style.display = "none";
    });
}

if (videoContainer && video) {
    video.play().catch(() => {});
    videoContainer.addEventListener('click', () => {
        (video.paused ? video.play() : video.pause());
    });
}

// 스크롤 시 헤더 고정
let lastScrollTop = 0;
const header = document.querySelector('header.header-container');
if (header) {
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}

// 초기화
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem("preferredLang") || "ko";
    applyTranslations(savedLang);
    
    if (langOpts && langOpts.length > 0) {
        const opt = Array.from(langOpts).find(o => o.dataset.lang === savedLang);
        if (opt) {
            const country = opt.dataset.country;
            const langDisplay = opt.textContent.split('—')[1]?.trim() || opt.textContent.trim();
            const countryEl = document.querySelector('.language-selector .country');
            const langEl = document.querySelector('.language-selector .language');
            if (countryEl) countryEl.textContent = country;
            if (langEl) langEl.textContent = langDisplay;
            langOpts.forEach(o => o.setAttribute('aria-checked', 'false'));
            opt.setAttribute('aria-checked', 'true');
        }
    }
    document.documentElement.lang = savedLang;

    // 별점 업데이트
    const starsInnerElements = document.querySelectorAll('.stars-inner');
    starsInnerElements.forEach(element => {
        const rating = parseFloat(element.getAttribute('data-rating'));
        if (!isNaN(rating)) {
            element.style.width = Math.round((rating / 5) * 100) + '%';
        }
    });

    // 팝업 숨김 확인
    const hiddenUntil = localStorage.getItem("popupHiddenUntil");
    if (hiddenUntil && new Date() < new Date(hiddenUntil) && popup) {
        popup.style.display = "none";
    }
});

// 가로 스크롤 휠 처리
['.tablist', '.category-list', '.filter-list'].forEach(selector => {
    const el = document.querySelector(selector);
    if (el) {
        el.addEventListener('wheel', e => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                el.scrollLeft += e.deltaY;
            }
        });
    }
});

// CSS 애니메이션 추가 (중복 방지 체크 생략 - 필요시 추가)
if (!document.getElementById('custom-animations')) {
    const style = document.createElement('style');
    style.id = 'custom-animations';
    style.textContent = `
        @keyframes slideUp { from { opacity: 0; transform: translateX(-50%) translateY(20px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }
        @keyframes slideDown { from { opacity: 1; transform: translateX(-50%) translateY(0); } to { opacity: 0; transform: translateX(-50%) translateY(20px); } }
        .header-container { transition: transform 0.3s ease; }
    `;
    document.head.appendChild(style);
}
