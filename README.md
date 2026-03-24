# Dr. Park - 뇌공학 & 시과학 연구자 포트폴리오

전문적인 연구자 개인 홈페이지 - 논문 게재 자료 소개, 연구 분야 설명, 컨설팅 서비스 제공 - **한글/영문 다국어 지원**

## 📋 프로젝트 개요

분당서울대병원 소속 뇌공학 및 시과학 전문가의 개인 홈페이지입니다. 학술 업적을 소개하고, 연구 분야를 설명하며, 컨설팅 의뢰를 받을 수 있는 전문적인 포트폴리오 사이트입니다.

### 주요 목표
- ✅ 연구자로서의 전문성과 신뢰성 강조
- ✅ 논문 및 학술 업적 효과적 전시
- ✅ 컨설팅 의뢰를 위한 명확한 연락 경로 제공
- ✅ **한글/영문 다국어 지원으로 국제적 접근성 강화**
- ✅ 반응형 디자인으로 모든 기기에서 완벽한 경험 제공
- ✅ 유지보수 비용 최소화 (정적 웹사이트)

## ✨ 완성된 주요 기능

### 🌐 다국어 지원 (NEW!)
- **한국어/English 실시간 전환**: 네비게이션 바의 KO/EN 버튼으로 즉시 전환
- **localStorage 저장**: 사용자가 선택한 언어 설정 자동 저장
- **전체 컨텐츠 번역**: 모든 섹션의 텍스트가 선택한 언어로 표시
- **매끄러운 전환**: 페이지 새로고침 없이 즉시 언어 변경

### 1. 🏠 히어로 섹션
- 첫인상에서 전문성을 강조하는 그라디언트 배경
- 직책 및 소속 기관 명시 (다국어)
- CTA 버튼으로 논문 보기 및 컨설팅 문의 유도
- 스크롤 인디케이터 애니메이션

### 2. 👤 연구자 소개 (About)
- 프로필 이미지 영역 (이미지 업로드 가능)
- 전문 분야 4가지 카드 형식으로 표시
  - 뇌공학
  - 시과학
  - 응용 연구
  - 데이터 분석
- 호버 애니메이션으로 인터랙티브한 경험

### 3. 🔬 연구 분야 (Research Areas)
- 4개 주요 연구 분야 상세 설명
  - 뇌공학 (BCI, EEG/fMRI 분석)
  - 시과학 (시각 인지, 안구 운동)
  - 임상 응용 (신경 재활, 의료 기기)
  - 데이터 과학 (머신러닝, 빅데이터)
- 키워드 태그로 세부 분야 표시

### 4. 📚 논문 게재 (Publications)
- **필터링 기능**: 전체/저널/학회/특허 카테고리 분류
- 각 논문 항목 포함 정보:
  - 제목, 저자, 출판 정보
  - Impact Factor 표시
  - PDF, DOI, 인용 링크
- 학술 프로필 링크 (Google Scholar, ResearchGate, ORCID)
- 샘플 논문 4개 포함 (실제 논문으로 교체 가능)

### 5. 💼 컨설팅 서비스 (Consulting)
- 4가지 컨설팅 서비스 소개
  - 연구 자문
  - 데이터 분석
  - 기술 자문
  - 교육 & 강연
- 4단계 컨설팅 프로세스 시각화
- 전문성과 접근성 강조

### 6. 📧 연락하기 (Contact)
- **이메일 링크**: mailto 기능으로 즉시 메일 작성
- 연락처 정보 표시
- 빠른 문의 폼 (이름, 이메일, 제목, 메시지)
- 폼 제출 시 자동으로 이메일 클라이언트 실행
- 학술 프로필 아이콘 링크

### 7. 🎨 UI/UX 기능
- **반응형 네비게이션**: 모바일에서 햄버거 메뉴
- **Smooth Scrolling**: 부드러운 스크롤 이동
- **Active Link Highlighting**: 현재 섹션 하이라이트
- **Scroll to Top 버튼**: 페이지 최상단으로 빠른 이동
- **Intersection Observer**: 스크롤 시 요소 페이드인 애니메이션
- **호버 효과**: 모든 카드 및 버튼에 인터랙티브 효과

## 📂 프로젝트 구조

```
/
├── index.html              # 메인 페이지 (단일 페이지 구조, 다국어 지원)
├── css/
│   └── style.css           # 전체 스타일 시트 (언어 버튼 포함)
└── js/
    ├── translations.js     # 한글/영문 번역 데이터
    └── script.js           # 인터랙티브 기능 + 언어 전환
```

## 🌐 다국어 기능 사용법

### 사용자 관점
1. 네비게이션 바 우측의 **KO/EN** 버튼 클릭
2. 즉시 전체 페이지 내용이 선택한 언어로 전환
3. 선택한 언어는 localStorage에 저장되어 다음 방문 시 자동 적용

### 개발자 관점 - 번역 추가/수정 방법

**1. 번역 데이터 수정**
`js/translations.js` 파일 열기:
```javascript
const translations = {
    ko: {
        'nav-about': '소개',
        // ... 더 많은 한글 텍스트
    },
    en: {
        'nav-about': 'About',
        // ... 더 많은 영문 텍스트
    }
};
```

**2. HTML에 다국어 속성 추가**
```html
<h2 data-lang="section-title">기본 텍스트</h2>
```

**3. 새로운 텍스트 추가 절차**
1. `js/translations.js`에서 ko와 en 섹션에 키-값 쌍 추가
2. HTML 요소에 `data-lang="your-key"` 속성 추가
3. 페이지 새로고침하면 자동으로 언어 전환 적용

## 🔗 주요 섹션 경로

| 섹션 | URI | 설명 |
|------|-----|------|
| 홈 | `/` 또는 `index.html` | 히어로 섹션 |
| 소개 | `#about` | 연구자 소개 및 전문 분야 |
| 연구 분야 | `#research` | 주요 연구 영역 상세 설명 |
| 논문 | `#publications` | 논문 게재 목록 및 필터링 |
| 컨설팅 | `#consulting` | 컨설팅 서비스 소개 |
| 연락 | `#contact` | 연락처 및 문의 폼 |

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Grid & Flexbox
  - CSS Variables (사용자 정의 속성)
  - 반응형 디자인 (Mobile-first)
  - 애니메이션 & 트랜지션
- **JavaScript (Vanilla)**:
  - DOM 조작
  - Intersection Observer API
  - Smooth Scrolling
  - 이벤트 리스너
  - **localStorage를 활용한 언어 설정 저장**
  - **다국어 전환 시스템**
- **외부 라이브러리**:
  - Google Fonts (Noto Sans KR, Inter)
  - Font Awesome 6.4.0 (아이콘)

## 📱 반응형 디자인

- **Desktop** (> 968px): 풀 레이아웃 + 언어 버튼
- **Tablet** (768px - 968px): 2열 그리드 + 상단 언어 버튼
- **Mobile** (< 768px): 단일 열, 햄버거 메뉴 + 언어 버튼 우측 상단
- **Small Mobile** (< 480px): 최적화된 터치 인터페이스

## 🚀 배포 및 호스팅 옵션

### 추천 무료 호스팅 서비스 (비용 최소화)

#### 1. **GitHub Pages** (추천 ⭐)
- **비용**: 완전 무료
- **장점**: 
  - 무제한 정적 사이트 호스팅
  - 커스텀 도메인 연결 가능
  - HTTPS 자동 지원
  - Git 버전 관리
- **배포 방법**:
  1. GitHub 계정 생성
  2. 새 Repository 생성 (public)
  3. 파일 업로드
  4. Settings > Pages에서 활성화
  5. URL: `https://username.github.io/repository-name`

#### 2. **Netlify** (추천 ⭐)
- **비용**: 무료 플랜 (월 100GB 대역폭)
- **장점**:
  - 드래그 앤 드롭 배포
  - 자동 HTTPS
  - 폼 제출 기능 (월 100회)
  - 커스텀 도메인
- **배포 방법**:
  1. Netlify.com 회원가입
  2. "Add new site" > "Deploy manually"
  3. 프로젝트 폴더 드래그 앤 드롭
  4. 즉시 배포 완료

#### 3. **Vercel**
- **비용**: 무료 플랜
- **장점**: 빠른 CDN, 자동 HTTPS, Git 연동
- **배포**: GitHub 연동 또는 CLI 사용

#### 4. **Cloudflare Pages**
- **비용**: 무료 (무제한 대역폭)
- **장점**: 전 세계 CDN, 빠른 속도, Git 연동

### 도메인 연결 (선택사항)
- **무료 도메인**: Freenom (무료 .tk, .ml 도메인)
- **저렴한 도메인**: 
  - Namecheap: 약 $10/년
  - Google Domains: 약 $12/년
  - 가비아: 약 10,000원/년

## 🔧 커스터마이징 가이드

### 1. 이메일 주소 변경
모든 `your.email@example.com`을 실제 이메일로 변경:

**방법 1: HTML에서 직접 수정**
```html
<!-- index.html의 여러 위치에서 -->
<a href="mailto:your.email@example.com">your.email@example.com</a>
```

**방법 2: JavaScript 함수 사용**
```javascript
// js/script.js에 이미 포함된 함수
updateEmailLinks('your.real.email@example.com');
```

### 2. 논문 정보 업데이트
`index.html`의 Publications 섹션에서 논문 항목 수정:
```html
<div class="publication-item" data-category="journal">
    <div class="publication-year">2025</div>
    <div class="publication-content">
        <h4 class="publication-title">실제 논문 제목</h4>
        <p class="publication-authors"><strong>박OO</strong>, 공저자</p>
        <p class="publication-venue"><em>저널명</em>, 권, 호, 페이지</p>
        <!-- PDF, DOI 링크 수정 -->
        <a href="실제_pdf_링크" class="pub-link">
            <i class="fas fa-file-pdf"></i> PDF
        </a>
    </div>
</div>
```

### 3. 프로필 이미지 추가
```html
<!-- index.html의 about-image 섹션에서 -->
<div class="about-image">
    <img src="images/profile.jpg" alt="Dr. Park Profile" 
         style="width: 280px; height: 280px; border-radius: 50%; 
                object-fit: cover; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
</div>
```

### 4. 학술 프로필 링크 연결
```html
<!-- Google Scholar, ResearchGate, ORCID, LinkedIn 링크 -->
<a href="https://scholar.google.com/your-profile" class="academic-link" target="_blank">
    <i class="fas fa-graduation-cap"></i> Google Scholar
</a>
```

### 5. 색상 테마 변경
`css/style.css`의 CSS Variables 수정:
```css
:root {
    --primary-color: #2c3e50;      /* 메인 색상 */
    --secondary-color: #3498db;    /* 강조 색상 */
    --accent-color: #e74c3c;       /* 악센트 색상 */
}
```

## 📝 콘텐츠 업데이트 체크리스트

- [ ] 이메일 주소 변경 (`your.email@example.com`)
- [ ] 실제 논문 정보로 교체 (제목, 저자, 링크)
- [ ] 프로필 이미지 추가 (선택)
- [ ] 학술 프로필 링크 연결 (Google Scholar, ResearchGate, ORCID)
- [ ] 연구 분야 및 키워드 커스터마이징
- [ ] 컨설팅 서비스 내용 수정
- [ ] Footer 정보 업데이트
- [ ] **영문 번역 검토 및 수정** (필요시 `js/translations.js`)

## 🌍 다국어 기능의 장점

1. **국제적 접근성**: 해외 연구자 및 기관과의 협업 기회 확대
2. **전문성 강화**: 영문 페이지로 글로벌 표준 준수
3. **사용자 경험**: 방문자의 언어 선호도에 맞춘 맞춤형 경험
4. **SEO 최적화**: 다국어 콘텐츠로 검색 노출 증대
5. **유지보수 용이**: 번역 데이터가 별도 파일로 관리되어 수정 간편

## 🔮 향후 개선 가능 항목

### 단기 개선 사항
- [x] **다국어 지원 (한글/영문)** ✅ 완료!
- [ ] 실제 프로필 사진 추가
- [ ] 더 많은 논문 항목 추가
- [ ] 연구 업적 통계 섹션 (총 논문 수, 인용 수 등)
- [ ] 블로그/뉴스 섹션 추가

### 중기 개선 사항
- [ ] 추가 언어 지원 (중국어, 일본어 등)
- [ ] 논문 검색 기능
- [ ] 연구 프로젝트 갤러리
- [ ] 미디어 출연 섹션

### 장기 개선 사항
- [ ] 백엔드 연동 (실제 폼 제출 기능)
- [ ] 관리자 페이지 (콘텐츠 관리)
- [ ] 방문자 통계 (Google Analytics)
- [ ] SEO 최적화 강화

## 💰 비용 분석

### 초기 비용
- **호스팅**: $0 (GitHub Pages/Netlify 무료 플랜)
- **도메인**: $0~$12/년 (선택사항)
- **개발**: 완료 ✅

### 연간 운영 비용
- **호스팅**: $0 (무료 플랜 충분)
- **도메인 갱신**: $10~$15 (구매 시)
- **총 연간 비용**: **약 $10 이하** (또는 완전 무료)

### 비용 최적화 전략
1. GitHub Pages 사용 → 완전 무료
2. 무료 도메인 사용 (yourname.github.io)
3. CDN 라이브러리 사용으로 저장 공간 최소화
4. 정적 사이트로 서버 비용 제로

## 📞 기술 지원

웹사이트 수정이나 업데이트가 필요하신 경우:
1. HTML/CSS/JS 파일을 직접 수정
2. 위의 커스터마이징 가이드 참조
3. 텍스트 에디터 (VS Code, Sublime Text 등) 사용 권장

## 📄 라이선스

이 프로젝트는 개인 사용을 위해 제작되었습니다.

---

## 🎓 프로젝트 완성 사항 요약

✅ **완료된 기능**
- 전문적인 1페이지 포트폴리오 웹사이트
- **한글/영문 다국어 지원 (KO/EN 전환 버튼)**
- **localStorage를 활용한 언어 설정 자동 저장**
- 논문 게재 자료 전시 (필터링 기능 포함)
- 연구 분야 상세 소개
- 컨설팅 의뢰를 위한 이메일 링크
- 완전 반응형 디자인 (모바일 최적화)
- 인터랙티브 애니메이션 및 UI
- SEO 기본 메타 태그

✅ **기술적 완성도**
- 시맨틱 HTML5
- 모던 CSS3 (Grid, Flexbox, Variables)
- Vanilla JavaScript (의존성 최소화)
- **모듈화된 번역 시스템** (translations.js)
- 크로스 브라우저 호환성
- 성능 최적화 (Lazy Loading, Intersection Observer)

✅ **비용 효율성**
- 정적 사이트로 서버 비용 불필요
- 무료 호스팅 옵션 다수
- CDN 사용으로 저장 공간 최소화
- 연간 운영 비용 $10 이하 가능

✅ **국제화 (i18n)**
- 한글/영문 완벽 지원
- 확장 가능한 번역 구조
- 사용자 친화적 언어 전환
- 글로벌 표준 준수

---

**Last Updated**: 2026-02-23  
**Version**: 2.0.0 (다국어 지원 추가)  
**Status**: ✅ 프로덕션 준비 완료