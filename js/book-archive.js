(function() {
    'use strict';

    // ── Color Scheme: B. Brand base + warm accent ──
    var ACCENT = {
        'INTERVIEW': { strip: '#c0945e', badge: '#fdf3e7', badgeText: '#8a6530', icon: 'fa-microphone', label: 'Interview' },
        'LECTURE':   { strip: '#5b8c85', badge: '#e8f4f2', badgeText: '#3a6b64', icon: 'fa-chalkboard-teacher', label: 'Lecture' },
        'SEMINAR':   { strip: '#7c8ea0', badge: '#eef1f5', badgeText: '#4e6070', icon: 'fa-users', label: 'Seminar' }
    };

    // ── Book Data (최신순) ──
    var BOOKS = [
        {
            title: 'VR 시야검사\n기술의 미래',
            date: '2025.11',
            type: 'INTERVIEW',
            source: '옵틱뉴스',
            content: 'VR(가상현실) 기반 시야검사 플랫폼은 기존 대면 시야검사의 한계를 극복하기 위해 개발되었습니다.\n\n기존 골드만 또는 험프리 시야검사기는 고가의 장비와 전문 시설이 필요하며, 환자가 직접 병원을 방문해야 하는 제약이 있었습니다. VR 기반 플랫폼은 헤드마운트 디스플레이(HMD)를 활용하여 어디서든 정밀한 시야검사가 가능하도록 설계되었습니다.\n\n본 인터뷰에서는 VR 시야검사의 개발 배경, 기존 검사 대비 임상적 동등성 검증 결과, 그리고 향후 원격 의료(Telemedicine) 환경에서의 활용 가능성에 대해 논의하였습니다.',
            sourceLabel: '출처: 옵틱뉴스 (2025.11)'
        },
        {
            title: '디지털 치료제와\n임상 연구',
            date: '2025.08',
            type: 'LECTURE',
            source: '대한안경사협회',
            content: '디지털 치료제(Digital Therapeutics, DTx)는 소프트웨어 기반의 치료적 개입을 통해 질병을 예방, 관리, 치료하는 새로운 의료 패러다임입니다.\n\n본 강연에서는 디지털 치료제의 정의와 분류, 국내외 규제 동향, 그리고 임상시험 설계 시 고려해야 할 핵심 요소들을 다루었습니다. 특히 시각 관련 디지털 치료제의 개발 사례를 중심으로, FDA 및 식약처 인허가 과정에서의 임상 근거 구축 전략을 공유하였습니다.\n\n또한 RCT(무작위 대조 시험) 설계에서의 Sham control 구현 방법, 디지털 바이오마커의 활용, 환자 순응도(adherence) 측정 방법론에 대해서도 논의하였습니다.',
            sourceLabel: '출처: 대한안경사협회 학술대회 강연 (2025.08)'
        },
        {
            title: '뇌공학 기반\n시기능 평가',
            date: '2025.05',
            type: 'SEMINAR',
            source: '경희대학교',
            content: '기존 시기능 평가는 주관적 응답에 의존하는 심리물리학적(psychophysical) 방법이 주를 이루었으나, 뇌공학 기술의 발전으로 객관적 평가가 가능해지고 있습니다.\n\n본 세미나에서는 EEG(뇌전도)와 Eye Tracking(안구추적)을 결합한 다중모달 시기능 평가 방법론을 소개하였습니다. VEP(시각유발전위)를 이용한 시력 및 시야의 객관적 측정, 그리고 시선추적 데이터의 실시간 분석을 통한 시각 피로 정량화 기법을 다루었습니다.\n\n임상 적용 사례로서 녹내장 환자의 시야 손실 조기 탐지, VDT 작업자의 시각 피로 모니터링 연구 결과를 공유하였습니다.',
            sourceLabel: '출처: 경희대학교 안광학과 세미나 (2025.05)'
        },
        {
            title: '안경광학의\n연구 방향',
            date: '2024.12',
            type: 'INTERVIEW',
            source: '보사뉴스',
            content: '안경광학(Optometry) 분야는 전통적인 굴절검사와 안경 처방을 넘어, 디지털 헬스케어와 융합하며 새로운 연구 영역을 개척하고 있습니다.\n\n본 인터뷰에서는 안경광학 분야의 연구가 나아가야 할 방향에 대해 논의하였습니다. AI 기반 자동 굴절검사, 스마트 렌즈를 활용한 생체신호 모니터링, VR/AR 기기 사용에 따른 시각 건강 영향 평가 등 미래 핵심 연구 주제를 다루었습니다.\n\n또한 안경사의 임상 연구 역량 강화 필요성과, SCI 논문 작성을 위한 연구 방법론 교육의 중요성에 대해서도 이야기하였습니다.',
            sourceLabel: '출처: 보사뉴스 (2024.12)'
        },
        {
            title: 'AI 진단 모델\n개발 사례',
            date: '2024.09',
            type: 'LECTURE',
            source: '한국뇌공학회',
            content: '의료 분야에서 AI 진단 모델의 개발과 임상 적용은 빠르게 확산되고 있으며, 특히 의료영상 분석과 생체신호 해석 분야에서 괄목할 만한 성과를 보이고 있습니다.\n\n본 강연에서는 뇌파(EEG) 기반 수면 단계 자동 분류 모델과 안저 영상(Fundus Image) 기반 녹내장 스크리닝 모델의 개발 과정을 실제 사례로 소개하였습니다.\n\n데이터 수집 및 전처리, 모델 아키텍처 설계, 학습 전략, 그리고 임상 검증(validation) 과정에서의 경험과 교훈을 공유하였습니다. 특히 의료 AI에서의 해석 가능성(Explainability)과 규제 대응 전략에 대해 심도 있게 논의하였습니다.',
            sourceLabel: '출처: 한국뇌공학회 추계학술대회 강연 (2024.09)'
        },
        {
            title: '수면 의학과\n뇌파 분석',
            date: '2024.06',
            type: 'SEMINAR',
            source: '분당서울대병원',
            content: '수면 다원검사(Polysomnography, PSG)는 수면 장애 진단의 표준 검사이지만, 방대한 뇌파 데이터의 수작업 분석은 시간과 인력이 많이 소요되는 과정입니다.\n\n본 세미나에서는 딥러닝 기반 수면 단계 자동 분류(Automatic Sleep Staging) 알고리즘의 개발과 임상 적용 가능성에 대해 발표하였습니다. CNN-LSTM 하이브리드 모델을 활용한 수면 단계 분류 성능, AASM 기준과의 일치도(Cohen\'s Kappa), 그리고 임상의의 수작업 판독 결과와의 비교 분석을 다루었습니다.\n\n또한 수면 무호흡증(OSA) 중증도 예측, 렘수면행동장애(RBD) 조기 탐지를 위한 뇌파 바이오마커 발굴 연구에 대해서도 소개하였습니다.',
            sourceLabel: '출처: 분당서울대병원 신경과 세미나 (2024.06)'
        }
    ];

    // ── DOM ──
    var canvas = document.getElementById('bookCanvas');
    if (!canvas) return;
    var container = document.getElementById('bookArchiveContainer');
    var tooltip = document.getElementById('bookTooltip');
    var splitWrapper = document.getElementById('bookSplitWrapper');
    var listPanel = document.getElementById('bookListPanel');
    var detailClose = document.getElementById('bookDetailClose');

    var width = container.clientWidth;
    var height = container.clientHeight;

    // ══════════════════════════════════════
    //  THREE.JS 3D SCENE
    // ══════════════════════════════════════

    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f8fa);

    var camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    var renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;

    // ── Lighting ──
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));

    var dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(4, 8, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 30;
    dirLight.shadow.camera.left = -12;
    dirLight.shadow.camera.right = 12;
    dirLight.shadow.camera.top = 6;
    dirLight.shadow.camera.bottom = -3;
    dirLight.shadow.bias = -0.0006;
    dirLight.shadow.radius = 4;
    scene.add(dirLight);

    var fillLight = new THREE.DirectionalLight(0xe0ddd5, 0.25);
    fillLight.position.set(-5, 4, -3);
    scene.add(fillLight);

    // ── Ground ──
    var ground = new THREE.Mesh(
        new THREE.PlaneGeometry(30, 30),
        new THREE.ShadowMaterial({ opacity: 0.12 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    scene.add(ground);

    // Shelf (바닥 표면)
    var shelf = new THREE.Mesh(
        new THREE.BoxGeometry(22, 0.06, 3.5),
        new THREE.MeshStandardMaterial({ color: 0xeae6df, roughness: 0.95 })
    );
    shelf.position.set(0, -0.03, 0);
    shelf.receiveShadow = true;
    scene.add(shelf);

    // ══════════════════════════════════════
    //  COVER & SPINE TEXTURES
    // ══════════════════════════════════════

    function createCoverTexture(book) {
        var c = document.createElement('canvas');
        c.width = 320; c.height = 448;
        var ctx = c.getContext('2d');
        var accent = ACCENT[book.type];

        // Base gradient
        var bg = ctx.createLinearGradient(0, 0, 320, 448);
        bg.addColorStop(0, '#2c3e50');
        bg.addColorStop(1, '#34495e');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, 320, 448);

        // Subtle light
        var ov = ctx.createLinearGradient(0, 0, 160, 0);
        ov.addColorStop(0, 'rgba(255,255,255,0.06)');
        ov.addColorStop(1, 'rgba(0,0,0,0.04)');
        ctx.fillStyle = ov;
        ctx.fillRect(0, 0, 320, 448);

        // Left accent strip
        ctx.fillStyle = accent.strip;
        ctx.fillRect(0, 0, 14, 448);

        // Type label
        ctx.font = '600 15px Inter, sans-serif';
        ctx.fillStyle = accent.strip;
        ctx.textAlign = 'left';
        ctx.fillText(book.type, 30, 64);

        // Accent line
        ctx.fillStyle = accent.strip;
        ctx.globalAlpha = 0.5;
        ctx.fillRect(30, 72, 50, 2);
        ctx.globalAlpha = 1.0;

        // Title
        ctx.font = '700 26px "Noto Sans KR", sans-serif';
        ctx.fillStyle = '#ffffff';
        var lines = book.title.split('\n');
        var y = 190;
        for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], 30, y);
            y += 36;
        }

        // Date
        ctx.font = '400 15px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.5)';
        ctx.fillText(book.date, 30, 408);

        // Source
        ctx.font = '400 13px "Noto Sans KR", sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillText(book.source, 30, 432);

        var tex = new THREE.CanvasTexture(c);
        tex.encoding = THREE.sRGBEncoding;
        return tex;
    }

    function createSpineTexture(book) {
        var c = document.createElement('canvas');
        c.width = 64; c.height = 448;
        var ctx = c.getContext('2d');
        var accent = ACCENT[book.type];

        ctx.fillStyle = '#243342';
        ctx.fillRect(0, 0, 64, 448);

        // Accent edge
        ctx.fillStyle = accent.strip;
        ctx.fillRect(58, 0, 6, 448);

        ctx.save();
        ctx.translate(28, 224);
        ctx.rotate(-Math.PI / 2);
        ctx.font = '500 13px "Noto Sans KR", sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.65)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var t = book.title.replace(/\n/g, ' ');
        if (t.length > 16) t = t.substring(0, 15) + '…';
        ctx.fillText(t, 0, 0);
        ctx.restore();

        var tex = new THREE.CanvasTexture(c);
        tex.encoding = THREE.sRGBEncoding;
        return tex;
    }

    // ══════════════════════════════════════
    //  BUILD BOOKS — 좌측 최신, 우측 과거, 원근 보정 간격
    // ══════════════════════════════════════

    var bookMeshes = [];
    var bookW = 1.4, bookH = 2.0, bookD = 0.22;
    var total = BOOKS.length;

    // 배치 파라미터
    // BOOKS[0]=최신 → 가장 좌측+앞(Z 최고), BOOKS[n]=과거 → 우측+뒤(Z 감소)
    var BOOK_ANGLE = -0.45;       // 음수: 왼쪽 정면 사선 (좌측 카드가 전면 노출)
    var BASE_SPACING_X = 1.35;    // 기본 가로 간격 (넓혀서 카드 사이 여백 확보)
    var SPACING_Z = 0.55;         // Z축 간격 (앞→뒤)
    var DAMPING = 0.93;           // X 간격 감쇠율 (뒤로 갈수록 좁아짐 → 원근 보정)

    // 좌측에서 우측으로: i=0(최신)이 가장 왼쪽
    // 각 책의 X 오프셋을 감쇠 적용하여 사전 계산
    var xOffsets = [0];
    for (var p = 1; p < total; p++) {
        var dampedStep = BASE_SPACING_X * Math.pow(DAMPING, p - 1);
        xOffsets.push(xOffsets[p - 1] + dampedStep);  // 오른쪽(플러스)으로 이동
    }
    // 전체 중심 맞추기
    var totalWidth = Math.abs(xOffsets[total - 1]);
    var centerOffset = -totalWidth * 0.5;

    for (var i = 0; i < total; i++) {
        var book = BOOKS[i];
        var coverTex = createCoverTexture(book);
        var spineTex = createSpineTexture(book);

        var materials = [
            new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.95 }),  // pages right
            new THREE.MeshStandardMaterial({ map: spineTex, roughness: 0.55 }),     // spine left
            new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.95 }),  // top
            new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.95 }),  // bottom
            new THREE.MeshStandardMaterial({ map: coverTex, roughness: 0.4 }),      // front cover
            new THREE.MeshStandardMaterial({ color: 0x1f2d3a, roughness: 0.7 })     // back
        ];

        var geo = new THREE.BoxGeometry(bookD, bookH, bookW);
        var mesh = new THREE.Mesh(geo, materials);

        // i=0(최신) → 좌측 앞, i 증가(과거) → 우측 뒤
        var posX = xOffsets[i] + centerOffset;
        var posY = bookH / 2;
        var posZ = -i * SPACING_Z;  // i=0 가장 앞(Z=0), i 증가 → 뒤로

        mesh.position.set(posX, posY, posZ);
        mesh.rotation.y = BOOK_ANGLE;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        // 각 카드 하단에 은은한 타원형 그림자
        var shadowGeo = new THREE.PlaneGeometry(1.6, 0.8);
        var shadowMat = new THREE.MeshBasicMaterial({
            color: 0x1a2530,
            transparent: true,
            opacity: 0.10,
            depthWrite: false
        });
        var shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
        shadowMesh.rotation.x = -Math.PI / 2;
        shadowMesh.position.set(posX, 0.02, posZ + 0.15);
        scene.add(shadowMesh);

        mesh.userData = {
            index: i,
            bookData: book,
            originalPos: new THREE.Vector3(posX, posY, posZ),
            originalRotY: BOOK_ANGLE,
            shadowMesh: shadowMesh
        };

        scene.add(mesh);
        bookMeshes.push(mesh);
    }

    // ── Camera (좌측 앞 카드가 잘 보이도록 약간 좌측에서 바라봄) ──
    camera.position.set(-1.5, 3.2, 8.5);
    camera.lookAt(-0.3, 0.7, -1.2);

    // ══════════════════════════════════════
    //  RAYCASTER & HOVER (정면 회전 + 튀어나옴)
    // ══════════════════════════════════════

    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var hoveredBook = null;

    // 부드러운 애니메이션을 위한 target 저장
    var targets = [];
    for (var j = 0; j < bookMeshes.length; j++) {
        targets.push({
            posX: bookMeshes[j].position.x,
            posY: bookMeshes[j].position.y,
            posZ: bookMeshes[j].position.z,
            rotY: bookMeshes[j].rotation.y,
            scale: 1,
            shadowOpacity: 0.10,
            shadowScale: 1.0
        });
    }

    function onMouseMove(event) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        var hits = raycaster.intersectObjects(bookMeshes);

        if (hits.length > 0) {
            var obj = hits[0].object;
            var idx = obj.userData.index;

            if (hoveredBook !== obj) {
                // 이전 호버 리셋
                if (hoveredBook) resetTarget(hoveredBook.userData.index);
                hoveredBook = obj;

                // 호버 효과: 정면 회전 + 앞으로 + 위 + 확대 + 그림자 강화
                var t = targets[idx];
                t.rotY = 0;                               // 정면 (사선→수평)
                t.posZ = obj.userData.originalPos.z + 2.0; // 카메라 쪽(+Z)으로 튀어나옴
                t.posY = obj.userData.originalPos.y + 0.12; // 약간 위로
                t.scale = 1.1;                             // 확대
                t.shadowOpacity = 0.22;                    // 그림자 짙어짐
                t.shadowScale = 1.3;                       // 그림자 확대
            }

            // Tooltip
            tooltip.style.display = 'block';
            var bookData = obj.userData.bookData;
            tooltip.textContent = bookData.title.replace(/\n/g, ' ') + '  (' + bookData.date + ')';
            tooltip.style.left = (event.clientX - rect.left + 15) + 'px';
            tooltip.style.top = (event.clientY - rect.top - 35) + 'px';
            canvas.style.cursor = 'pointer';
        } else {
            if (hoveredBook) {
                resetTarget(hoveredBook.userData.index);
                hoveredBook = null;
            }
            tooltip.style.display = 'none';
            canvas.style.cursor = 'grab';
        }
    }

    function resetTarget(idx) {
        var m = bookMeshes[idx];
        var t = targets[idx];
        t.posX = m.userData.originalPos.x;
        t.posY = m.userData.originalPos.y;
        t.posZ = m.userData.originalPos.z;
        t.rotY = m.userData.originalRotY;
        t.scale = 1;
        t.shadowOpacity = 0.10;
        t.shadowScale = 1.0;
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', function() {
        if (hoveredBook) { resetTarget(hoveredBook.userData.index); hoveredBook = null; }
        tooltip.style.display = 'none';
    });

    // Touch
    canvas.addEventListener('touchstart', function(e) {
        var touch = e.touches[0];
        var rect = canvas.getBoundingClientRect();
        mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var hits = raycaster.intersectObjects(bookMeshes);
        if (hits.length > 0) {
            hoveredBook = hits[0].object;
            openDetail(hoveredBook.userData.index);
        }
    });

    // ══════════════════════════════════════
    //  CLICK → 리스트 + 상세 분할
    // ══════════════════════════════════════

    var activeBookIndex = 0;

    canvas.addEventListener('click', function() {
        if (!hoveredBook) return;
        openDetail(hoveredBook.userData.index);
    });

    function openDetail(bookIndex) {
        activeBookIndex = bookIndex;
        buildListPanel();
        populateDetail(bookIndex);
        splitWrapper.classList.add('detail-open');
    }

    function closeDetail() {
        splitWrapper.classList.remove('detail-open');
        // 캔버스 리사이즈 대기
        setTimeout(function() {
            width = container.clientWidth;
            height = container.clientHeight;
            if (width > 0 && height > 0) {
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
            }
        }, 550);
    }

    detailClose.addEventListener('click', closeDetail);

    // ── 좌측 리스트 패널 생성 ──
    function buildListPanel() {
        var html = '<div class="book-list-header">' +
            '<h4>목록</h4>' +
            '<button class="book-list-back" id="bookListBack"><i class="fas fa-th-large"></i> 3D 보기</button>' +
            '</div>' +
            '<div class="book-list-items">';

        for (var i = 0; i < BOOKS.length; i++) {
            var b = BOOKS[i];
            var accent = ACCENT[b.type];
            var isActive = (i === activeBookIndex) ? ' active' : '';
            html += '<div class="book-list-item' + isActive + '" data-index="' + i + '">' +
                '<div class="book-list-item-cover" style="background:linear-gradient(160deg,#2c3e50,#34495e);border-left:3px solid ' + accent.strip + ';">' +
                '<i class="fas ' + accent.icon + '"></i>' +
                '</div>' +
                '<div class="book-list-item-info">' +
                '<div class="book-list-item-title">' + b.title.replace(/\n/g, ' ') + '</div>' +
                '<div class="book-list-item-meta">' + b.date + ' · ' + b.source + '</div>' +
                '</div></div>';
        }
        html += '</div>';
        listPanel.innerHTML = html;

        // 이벤트: 리스트 아이템 클릭
        var items = listPanel.querySelectorAll('.book-list-item');
        for (var j = 0; j < items.length; j++) {
            items[j].addEventListener('click', function() {
                var idx = parseInt(this.getAttribute('data-index'));
                activeBookIndex = idx;
                // active 표시 갱신
                var all = listPanel.querySelectorAll('.book-list-item');
                for (var k = 0; k < all.length; k++) all[k].classList.remove('active');
                this.classList.add('active');
                populateDetail(idx);
            });
        }

        // 이벤트: 3D 보기 복귀
        var backBtn = document.getElementById('bookListBack');
        if (backBtn) backBtn.addEventListener('click', closeDetail);
    }

    // ── 우측 상세 패널 채우기 ──
    function populateDetail(idx) {
        var book = BOOKS[idx];
        var accent = ACCENT[book.type];

        // Cover
        var coverEl = document.getElementById('detailCover');
        coverEl.style.background = 'linear-gradient(160deg, #2c3e50, #34495e)';
        coverEl.style.borderLeft = '4px solid ' + accent.strip;
        coverEl.innerHTML = '<i class="fas ' + accent.icon + '" style="font-size:1.5rem;margin-bottom:6px;"></i>' +
            '<span style="font-size:0.65rem;opacity:0.8;">' + book.type + '</span>';

        // Badge
        var badgeEl = document.getElementById('detailBadge');
        badgeEl.textContent = accent.label;
        badgeEl.style.background = accent.badge;
        badgeEl.style.color = accent.badgeText;

        document.getElementById('detailTitle').textContent = book.title.replace(/\n/g, ' ');
        document.getElementById('detailDate').innerHTML = '<i class="fas fa-calendar-alt"></i> ' + book.date + ' | ' + book.source;

        // Body
        var bodyEl = document.getElementById('detailBody');
        var paragraphs = book.content.split('\n\n');
        bodyEl.innerHTML = paragraphs.map(function(p) { return '<p>' + p + '</p>'; }).join('');

        // Source
        document.getElementById('detailSource').innerHTML = '<i class="fas fa-quote-left"></i> ' + book.sourceLabel;
    }

    // ══════════════════════════════════════
    //  CAMERA ORBIT (드래그)
    // ══════════════════════════════════════

    var isDragging = false;
    var prevMouse = { x: 0, y: 0 };
    var orbitTheta = -0.08;
    var orbitPhi = 0.35;
    var orbitRadius = 9;
    var orbitTarget = new THREE.Vector3(-0.3, 0.7, -1.2);

    function setCameraFromOrbit() {
        camera.position.x = orbitTarget.x + orbitRadius * Math.sin(orbitTheta) * Math.cos(orbitPhi);
        camera.position.y = orbitTarget.y + orbitRadius * Math.sin(orbitPhi);
        camera.position.z = orbitTarget.z + orbitRadius * Math.cos(orbitTheta) * Math.cos(orbitPhi);
        camera.lookAt(orbitTarget);
    }
    setCameraFromOrbit();

    canvas.addEventListener('mousedown', function(e) {
        if (hoveredBook) return;
        isDragging = true;
        prevMouse.x = e.clientX;
        prevMouse.y = e.clientY;
    });
    window.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        orbitTheta -= (e.clientX - prevMouse.x) * 0.005;
        orbitPhi = Math.max(0.1, Math.min(0.7, orbitPhi + (e.clientY - prevMouse.y) * 0.005));
        prevMouse.x = e.clientX;
        prevMouse.y = e.clientY;
        setCameraFromOrbit();
    });
    window.addEventListener('mouseup', function() { isDragging = false; });

    // ══════════════════════════════════════
    //  ANIMATION LOOP (부드러운 보간)
    // ══════════════════════════════════════

    var LERP = 0.08;

    function animate() {
        requestAnimationFrame(animate);
        for (var k = 0; k < bookMeshes.length; k++) {
            var m = bookMeshes[k];
            var t = targets[k];
            m.position.x += (t.posX - m.position.x) * LERP;
            m.position.y += (t.posY - m.position.y) * LERP;
            m.position.z += (t.posZ - m.position.z) * LERP;
            m.rotation.y += (t.rotY - m.rotation.y) * LERP;
            var s = m.scale.x + (t.scale - m.scale.x) * LERP;
            m.scale.set(s, s, s);
            // 그림자 애니메이션
            var sh = m.userData.shadowMesh;
            if (sh) {
                sh.material.opacity += (t.shadowOpacity - sh.material.opacity) * LERP;
                var ss = sh.scale.x + (t.shadowScale - sh.scale.x) * LERP;
                sh.scale.set(ss, ss, 1);
            }
        }
        renderer.render(scene, camera);
    }
    animate();

    // ── Resize ──
    window.addEventListener('resize', function() {
        width = container.clientWidth;
        height = container.clientHeight;
        if (width > 0 && height > 0) {
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        }
    });
})();
