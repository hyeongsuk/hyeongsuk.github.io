(function() {
    'use strict';

    // ── Color Scheme: B. Brand base + warm accent ──
    var ACCENT = {
        'INTERVIEW': { strip: '#c0945e', badge: '#fdf3e7', badgeText: '#8a6530', icon: 'fa-microphone', label: 'Interview' },
        'LECTURE':   { strip: '#5b8c85', badge: '#e8f4f2', badgeText: '#3a6b64', icon: 'fa-chalkboard-teacher', label: 'Lecture' },
        'SEMINAR':   { strip: '#7c8ea0', badge: '#eef1f5', badgeText: '#4e6070', icon: 'fa-users', label: 'Seminar' }
    };

    // ── Book Data (최신순, 실제 언론 보도 기반) ──
    var BOOKS = [
        {
            title: '근시교정렌즈\n시각 피로 완화',
            date: '2024',
            type: 'INTERVIEW',
            source: '한국안경신문',
            content: '서울아산병원 신경과·고려대학교 뇌공학과 유형석 박사, 경희대학교 주의종 교수, 고려대 Christian Wallraven 교수가 공동 수행한 연구로, 근시교정렌즈가 시각 피로 완화에 큰 영향을 미친다는 결과가 SCI저널 Frontiers in Neuroscience에 게재되었다.\n\n연구진은 fMRI(기능적 자기공명영상)를 이용해 난이도별 시각검색 과제를 수행하는 동안 렌즈 착용 시 시각 피로가 눈에 띄게 감소하는 것을 확인했다. 특히 Cuneus, lingual gyrus, MOG(middle occipital gyrus), declive 등 시각 및 인지 처리 조절에 중요한 뇌 영역이 연관되어 있음을 규명했다.\n\n이번 연구는 기존 근시 억제 연구와 달리 근시 교정렌즈의 시각 피로에 대한 신경학적 메커니즘을 탐색했다는 점에서 의의가 있으며, 근시 환자의 생산성과 삶의 질 향상에 기여할 것으로 기대된다.',
            sourceLabel: '출처: 한국안경신문 (2024.05.13)',
            link: 'https://www.opticnews.co.kr/news/articleView.html?idxno=42116'
        },
        {
            title: '호야 마이오스마트\n근시 억제 렌즈',
            date: '2022',
            type: 'LECTURE',
            source: '의학신문',
            content: '한국호야렌즈가 인터컨티넨탈 서울 코엑스에서 마이오스마트(MiYOSMART) 렌즈 론칭 세미나를 개최했다. 마이오스마트는 DIMS(Defocus Incorporated Multiple Segments) 특허 기술을 적용하여 근시 억제율 59%, 안축장 길이 성장 억제율 60% 효과를 보인다.\n\n세미나에서 고려대 뇌공학과 유형석 박사는 한국에서 진행된 행동 연구 결과를 발표했다. 축성 근시 억제를 위한 DIMS 렌즈에 대해 소비자가 느끼는 주관적 피로도를 뇌과학적 방법론으로 평가한 연구 결과를 공개하며, 렌즈 착용이 시각 피로에 미치는 영향을 객관적으로 검증했다.\n\n2년간 마이오스마트를 착용한 참가자의 근시 진행은 꾸준히 줄어들었고, 3년 차에는 일반 안경에서 전환한 참가자의 근시 진행도 현저하게 느려지는 것으로 나타났다.',
            sourceLabel: '출처: 의학신문 (2022.04.27)',
            link: 'https://www.bosa.co.kr/news/articleView.html?idxno=2172545'
        },
        {
            title: '비전케어 OTTC\n에티오피아 교육',
            date: '2018',
            type: 'INTERVIEW',
            source: '비전케어',
            content: '\'교육으로 함께 밝은 세상을 봅니다\' — 국제실명구호기구 비전케어 OTTC(Ophthalmic Technician Training Course) 프로그램 담당자 유형석 매니저 인터뷰이다. 당시 고려대 뇌공학과 박사과정·극동대 안경광학과 외래교수로 재직 중이었다.\n\nOTTC는 2015년 에티오피아에서 시작되어 4년째 운영된 안경사 교육 프로그램이다. 인구 1억이 넘는 에티오피아에 안경사 직군 자체가 존재하지 않아, 검안사 처방 후 비전문가에게 안경 제작을 맡겨야 하는 현실을 개선하기 위해 기획되었다.\n\n유형석 매니저는 비전아이캠프 참여 경험에서 "캠프 종료 후 환자를 계속 관리할 수 없다"는 한계를 인식하고, 현지 인력 교육을 통한 근본적 해결이 필요하다고 판단했다. 시력 이상 학생의 절반 이상이 시력교정만으로 치료 가능하다는 에티오피아 연구를 계기로, 안경 조제·가공 기술 교육과 강사 양성(심화과정)을 병행하여 현지 자립 체계 구축에 주력했다.',
            sourceLabel: '출처: 비전케어 블로그 (2018)',
            link: 'https://blog.naver.com/visioncare2020/221349653505'
        },
        {
            title: 'ARVO 국제\n학술상 수상',
            date: '2017',
            type: 'INTERVIEW',
            source: '데일리안',
            content: '고려대학교 대학원 뇌공학과 유형석 박사연구생이 안과·시과학 분야 세계 최대 학술단체 ARVO(The Association for Research in Vision and Ophthalmology)에서 International Travel Grant Award를 수상했다.\n\n수상 논문 \'Out of the blue: Effects of blue-filtering lenses on EEG and eye movements during reading\'은 단파장(청색광) 감소가 컴퓨터 독서 시 뇌와 눈에 미치는 영향을 규명한 연구다. 청색광을 감소시킨 렌즈를 통해 문자를 읽을 경우, 뇌가 편안하게 사고하면서도 효율은 유지되며, 동일 시간 내 같은 글자를 반복적으로 더 많이 읽는 현상을 확인했다.\n\n이 연구는 ARVO 위원회에서 선정한 상위 2% Hot Topic으로 선정되었으며, 안경계 최초의 동시 수상·선정 사례로 주목받았다. ARVO는 전 세계 75개국 12,000여 명의 연구자로 구성된 최대 규모의 안과·시과학 학회이다.',
            sourceLabel: '출처: 데일리안 (2017.06.05)',
            link: 'https://www.dailian.co.kr/news/view/637850/?sc=naver'
        },
        {
            title: '월요초대석\n시과학 연구자',
            date: '2017',
            type: 'INTERVIEW',
            source: '한국안경신문',
            content: '한국안경신문 월요초대석에서 고려대학교 인지시스템연구실 유형석 연구원을 초대해 인터뷰를 진행했다. 할아버지와 아버지가 안경사인 집안에서 자라 자연스럽게 안경사가 되었고, 이후 눈과 뇌를 연결시켜 환자를 돕는 시과학 연구의 길을 걷게 된 배경을 전했다.\n\n유 연구원은 "시력이 \'본다\'에서 끝나면 시력이지만, \'어떻게 보는지\'가 되면 시과학"이라며, 복시 환자의 비수술적 시각 훈련, 황반변성 환자를 위한 뇌공학 기반 연구 등 안경사가 담당할 수 있는 시과학 영역의 가능성을 설명했다.\n\n"외국에 비해 우리나라 안경사분들의 이미지가 너무 저평가되어 있다"며 "안경사 후배들이 좀 더 넓은 분야에 도전하는 데 자극제가 됐으면 한다"고 밝혔다.',
            sourceLabel: '출처: 한국안경신문 (2017.05.01)',
            link: 'https://www.opticnews.co.kr/news/articleView.html?idxno=28551'
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
    var bookW = 1.5, bookH = 2.1, bookD = 0.25;
    var total = BOOKS.length;

    // 배치 파라미터
    var BOOK_ANGLE = -0.4;        // Y축 회전 (표지가 카메라 쪽을 향하도록)
    var BASE_SPACING_X = 2.0;     // 기본 가로 간격
    var SPACING_Z = 0.5;          // Z축 간격 (앞→뒤)
    var DAMPING = 0.93;           // X 간격 감쇠율

    var xOffsets = [0];
    for (var p = 1; p < total; p++) {
        var dampedStep = BASE_SPACING_X * Math.pow(DAMPING, p - 1);
        xOffsets.push(xOffsets[p - 1] + dampedStep);
    }
    var totalWidth = Math.abs(xOffsets[total - 1]);
    var centerOffset = -totalWidth * 0.5;

    for (var i = 0; i < total; i++) {
        var book = BOOKS[i];
        var coverTex = createCoverTexture(book);
        var spineTex = createSpineTexture(book);

        // BoxGeometry(width, height, depth)
        // ±X faces = height × depth (thin spine/pages edges)
        // ±Z faces = width × height (large cover/back faces)
        var geo = new THREE.BoxGeometry(bookW, bookH, bookD);

        var materials = [
            new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.95 }),  // +X pages edge
            new THREE.MeshStandardMaterial({ map: spineTex, roughness: 0.55 }),     // -X spine edge
            new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.95 }),  // +Y top
            new THREE.MeshStandardMaterial({ color: 0xf5f0e8, roughness: 0.95 }),  // -Y bottom
            new THREE.MeshStandardMaterial({ map: coverTex, roughness: 0.4 }),      // +Z front cover (LARGE)
            new THREE.MeshStandardMaterial({ color: 0x1f2d3a, roughness: 0.7 })     // -Z back (LARGE)
        ];

        var mesh = new THREE.Mesh(geo, materials);

        var posX = xOffsets[i] + centerOffset;
        var posY = bookH / 2;
        var posZ = -i * SPACING_Z;

        mesh.position.set(posX, posY, posZ);
        mesh.rotation.y = BOOK_ANGLE;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        // 각 카드 하단 그림자
        var shadowGeo = new THREE.PlaneGeometry(1.8, 0.9);
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

    // ── Camera ──
    camera.position.set(-1.0, 3.0, 9.0);
    camera.lookAt(0, 0.8, -1.0);

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
                t.posZ = obj.userData.originalPos.z + 1.5; // 카메라 쪽(+Z)으로 튀어나옴
                t.posY = obj.userData.originalPos.y + 0.15; // 약간 위로
                t.scale = 1.08;                            // 확대
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

        // Source + Link
        var sourceHtml = '<i class="fas fa-quote-left"></i> ' + book.sourceLabel;
        if (book.link) {
            sourceHtml += ' <a href="' + book.link + '" target="_blank" rel="noopener noreferrer" style="display:inline-block;margin-left:8px;color:#5b8c85;font-size:0.85rem;text-decoration:none;border-bottom:1px solid #5b8c85;">' +
                '<i class="fas fa-external-link-alt"></i> 기사 보기</a>';
        }
        document.getElementById('detailSource').innerHTML = sourceHtml;
    }

    // ══════════════════════════════════════
    //  CAMERA ORBIT (드래그)
    // ══════════════════════════════════════

    var isDragging = false;
    var prevMouse = { x: 0, y: 0 };
    var orbitTheta = -0.06;
    var orbitPhi = 0.32;
    var orbitRadius = 9.5;
    var orbitTarget = new THREE.Vector3(0, 0.8, -1.0);

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
