(function() {
    'use strict';

    // ── Book Data (최신순) ──
    const BOOKS = [
        {
            title: 'VR 시야검사\n기술의 미래',
            titleEn: 'Future of VR\nPerimetry',
            date: '2025.11',
            type: 'INTERVIEW',
            source: '옵틱뉴스',
            desc: 'VR 기반 시야검사 플랫폼의 개발 과정과 기존 대면 검사 대비 장점, 향후 원격 의료에서의 활용 가능성에 대해 논의한 인터뷰입니다.',
            descEn: 'Interview discussing VR-based perimetry platform development, advantages over conventional testing, and telemedicine applications.',
            url: '#',
            color: 0x2c3e50
        },
        {
            title: '디지털 치료제와\n임상 연구',
            titleEn: 'Digital\nTherapeutics &\nClinical Research',
            date: '2025.08',
            type: 'LECTURE',
            source: '대한안경사협회',
            desc: '디지털 치료제 개발의 최신 동향과 임상시험 설계에 대한 강연 내용입니다.',
            descEn: 'Lecture on the latest trends in digital therapeutics development and clinical trial design.',
            url: '#',
            color: 0x1a5276
        },
        {
            title: '뇌공학 기반\n시기능 평가',
            titleEn: 'Brain Engineering\nVisual Function\nAssessment',
            date: '2025.05',
            type: 'SEMINAR',
            source: '경희대학교',
            desc: 'EEG와 Eye Tracking을 결합한 객관적 시기능 평가 방법론에 대한 세미나입니다.',
            descEn: 'Seminar on objective visual function assessment combining EEG and eye tracking.',
            url: '#',
            color: 0x1e3a4f
        },
        {
            title: '안경광학의\n연구 방향',
            titleEn: 'Research\nDirections in\nOptometry',
            date: '2024.12',
            type: 'INTERVIEW',
            source: '보사뉴스',
            desc: '안경광학 분야의 연구 동향과 미래 방향에 대해 논의한 인터뷰입니다.',
            descEn: 'Interview on research trends and future directions in optometry.',
            url: '#',
            color: 0x2c3e50
        },
        {
            title: 'AI 진단 모델\n개발 사례',
            titleEn: 'AI Diagnostic\nModel Case\nStudy',
            date: '2024.09',
            type: 'LECTURE',
            source: '한국뇌공학회',
            desc: '인공지능 기반 진단 모델의 실제 개발 사례와 임상 적용에 대한 강연입니다.',
            descEn: 'Lecture on real-world development cases and clinical application of AI diagnostic models.',
            url: '#',
            color: 0x1a5276
        },
        {
            title: '수면 의학과\n뇌파 분석',
            titleEn: 'Sleep Medicine\n& EEG Analysis',
            date: '2024.06',
            type: 'SEMINAR',
            source: '분당서울대병원',
            desc: '수면 다원검사에서의 뇌파 분석 자동화와 AI 활용에 대한 세미나입니다.',
            descEn: 'Seminar on automating EEG analysis in polysomnography and AI applications.',
            url: '#',
            color: 0x1e3a4f
        }
    ];

    const TYPE_COLORS = {
        'INTERVIEW': { bg: '#2c3e50', badge: '#e8f0fe', badgeText: '#2c3e50', icon: 'fa-microphone' },
        'LECTURE':   { bg: '#1a5276', badge: '#e8f4f8', badgeText: '#1a5276', icon: 'fa-chalkboard-teacher' },
        'SEMINAR':   { bg: '#1e3a4f', badge: '#eef2f5', badgeText: '#1e3a4f', icon: 'fa-users' }
    };

    // ── Three.js Setup ──
    const canvas = document.getElementById('bookCanvas');
    if (!canvas) return;
    const container = canvas.parentElement;
    const tooltip = document.getElementById('bookTooltip');
    const modal = document.getElementById('bookModal');
    const modalClose = document.getElementById('bookModalClose');

    let width = container.clientWidth;
    let height = container.clientHeight;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f8fa);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(4, 3.5, 9);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputEncoding = THREE.sRGBEncoding;

    // ── Lighting ──
    const ambient = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.7);
    dirLight.position.set(6, 10, 8);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 30;
    dirLight.shadow.camera.left = -8;
    dirLight.shadow.camera.right = 8;
    dirLight.shadow.camera.top = 8;
    dirLight.shadow.camera.bottom = -4;
    dirLight.shadow.bias = -0.001;
    dirLight.shadow.radius = 3;
    scene.add(dirLight);

    const fillLight = new THREE.DirectionalLight(0xd4e4f7, 0.25);
    fillLight.position.set(-4, 5, -3);
    scene.add(fillLight);

    // ── Ground Plane ──
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.12 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.01;
    ground.receiveShadow = true;
    scene.add(ground);

    // Shelf surface (subtle)
    const shelfGeo = new THREE.BoxGeometry(14, 0.08, 3.2);
    const shelfMat = new THREE.MeshStandardMaterial({ color: 0xe8e8e8, roughness: 0.9, metalness: 0.0 });
    const shelf = new THREE.Mesh(shelfGeo, shelfMat);
    shelf.position.set(0, -0.04, 0);
    shelf.receiveShadow = true;
    scene.add(shelf);

    // ── Create Book Cover Texture ──
    function createCoverTexture(book) {
        var c = document.createElement('canvas');
        c.width = 320;
        c.height = 448;
        var ctx = c.getContext('2d');

        // Background
        var color = new THREE.Color(book.color);
        ctx.fillStyle = '#' + color.getHexString();
        ctx.fillRect(0, 0, 320, 448);

        // Subtle gradient overlay
        var grad = ctx.createLinearGradient(0, 0, 320, 448);
        grad.addColorStop(0, 'rgba(255,255,255,0.08)');
        grad.addColorStop(0.5, 'rgba(255,255,255,0)');
        grad.addColorStop(1, 'rgba(0,0,0,0.12)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 320, 448);

        // Top accent line
        ctx.fillStyle = 'rgba(255,255,255,0.25)';
        ctx.fillRect(24, 30, 60, 3);

        // Type label
        ctx.font = '600 16px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.6)';
        ctx.textAlign = 'left';
        ctx.fillText(book.type, 24, 64);

        // Title
        ctx.font = '700 26px "Noto Sans KR", sans-serif';
        ctx.fillStyle = '#ffffff';
        var lines = book.title.split('\n');
        var y = 180;
        for (var i = 0; i < lines.length; i++) {
            ctx.fillText(lines[i], 24, y);
            y += 36;
        }

        // Date
        ctx.font = '400 16px Inter, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.fillText(book.date, 24, 410);

        // Source
        ctx.font = '400 14px "Noto Sans KR", sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.45)';
        ctx.fillText(book.source, 24, 432);

        var texture = new THREE.CanvasTexture(c);
        texture.encoding = THREE.sRGBEncoding;
        return texture;
    }

    // ── Create Spine Texture ──
    function createSpineTexture(book) {
        var c = document.createElement('canvas');
        c.width = 64;
        c.height = 448;
        var ctx = c.getContext('2d');

        var color = new THREE.Color(book.color);
        var r = Math.max(0, color.r - 0.06);
        var g = Math.max(0, color.g - 0.06);
        var b = Math.max(0, color.b - 0.06);
        ctx.fillStyle = 'rgb(' + Math.round(r*255) + ',' + Math.round(g*255) + ',' + Math.round(b*255) + ')';
        ctx.fillRect(0, 0, 64, 448);

        // Spine text (rotated)
        ctx.save();
        ctx.translate(32, 224);
        ctx.rotate(-Math.PI / 2);
        ctx.font = '500 14px "Noto Sans KR", sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var spineText = book.title.replace(/\n/g, ' ');
        if (spineText.length > 16) spineText = spineText.substring(0, 15) + '…';
        ctx.fillText(spineText, 0, 0);
        ctx.restore();

        var texture = new THREE.CanvasTexture(c);
        texture.encoding = THREE.sRGBEncoding;
        return texture;
    }

    // ── Build Book Meshes ──
    var bookMeshes = [];
    var bookWidth = 1.4;
    var bookHeight = 2.0;
    var bookDepth = 0.22;

    var totalBooks = BOOKS.length;
    var startX = -(totalBooks - 1) * 0.95;

    for (var i = 0; i < totalBooks; i++) {
        var book = BOOKS[i];
        var coverTex = createCoverTexture(book);
        var spineTex = createSpineTexture(book);
        var bookColor = new THREE.Color(book.color);

        var darkerColor = new THREE.Color(book.color);
        darkerColor.r = Math.max(0, darkerColor.r - 0.05);
        darkerColor.g = Math.max(0, darkerColor.g - 0.05);
        darkerColor.b = Math.max(0, darkerColor.b - 0.05);

        var pageColor = 0xf5f0e8;

        // Materials: [+X right, -X left, +Y top, -Y bottom, +Z front, -Z back]
        var materials = [
            new THREE.MeshStandardMaterial({ color: pageColor, roughness: 0.95 }),       // right (pages)
            new THREE.MeshStandardMaterial({ map: spineTex, roughness: 0.6 }),            // left (spine)
            new THREE.MeshStandardMaterial({ color: pageColor, roughness: 0.95 }),       // top (pages)
            new THREE.MeshStandardMaterial({ color: pageColor, roughness: 0.95 }),       // bottom
            new THREE.MeshStandardMaterial({ map: coverTex, roughness: 0.45 }),           // front (cover)
            new THREE.MeshStandardMaterial({ color: darkerColor, roughness: 0.6 })        // back
        ];

        var geo = new THREE.BoxGeometry(bookDepth, bookHeight, bookWidth);
        var mesh = new THREE.Mesh(geo, materials);

        // Position: newest (i=0) at front-right, oldest at back-left
        var posX = startX + i * 1.9;
        var posZ = -i * 0.45;
        var posY = bookHeight / 2;

        mesh.position.set(posX, posY, posZ);
        mesh.rotation.y = 0.15 + i * 0.03;

        mesh.castShadow = true;
        mesh.receiveShadow = true;

        mesh.userData = {
            index: i,
            bookData: book,
            originalPos: new THREE.Vector3(posX, posY, posZ),
            originalRot: new THREE.Euler(0, 0.15 + i * 0.03, 0)
        };

        scene.add(mesh);
        bookMeshes.push(mesh);
    }

    // ── Raycaster & Hover ──
    var raycaster = new THREE.Raycaster();
    var mouse = new THREE.Vector2();
    var hoveredBook = null;
    var targetPositions = {};
    var targetRotations = {};

    for (var j = 0; j < bookMeshes.length; j++) {
        var id = bookMeshes[j].id;
        targetPositions[id] = bookMeshes[j].position.clone();
        targetRotations[id] = { y: bookMeshes[j].rotation.y };
    }

    function onMouseMove(event) {
        var rect = canvas.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(bookMeshes);

        if (intersects.length > 0) {
            var obj = intersects[0].object;
            if (hoveredBook !== obj) {
                // Reset previous
                if (hoveredBook) {
                    var prevData = hoveredBook.userData;
                    targetPositions[hoveredBook.id].copy(prevData.originalPos);
                    targetRotations[hoveredBook.id].y = prevData.originalRot.y;
                }
                hoveredBook = obj;
                // Move forward
                var hoverPos = obj.userData.originalPos.clone();
                hoverPos.z += 1.0;
                hoverPos.y += 0.15;
                targetPositions[obj.id].copy(hoverPos);
                targetRotations[obj.id].y = 0;
            }

            // Tooltip
            tooltip.style.display = 'block';
            tooltip.textContent = obj.userData.bookData.title.replace(/\n/g, ' ') + '  (' + obj.userData.bookData.date + ')';
            tooltip.style.left = (event.clientX - rect.left + 15) + 'px';
            tooltip.style.top = (event.clientY - rect.top - 35) + 'px';

            canvas.style.cursor = 'pointer';
        } else {
            if (hoveredBook) {
                var prevData2 = hoveredBook.userData;
                targetPositions[hoveredBook.id].copy(prevData2.originalPos);
                targetRotations[hoveredBook.id].y = prevData2.originalRot.y;
                hoveredBook = null;
            }
            tooltip.style.display = 'none';
            canvas.style.cursor = 'grab';
        }
    }

    function onClick(event) {
        if (!hoveredBook) return;
        var book = hoveredBook.userData.bookData;
        var typeInfo = TYPE_COLORS[book.type];

        var coverEl = document.getElementById('modalCover');
        coverEl.style.background = typeInfo.bg;
        coverEl.innerHTML = '<i class="fas ' + typeInfo.icon + '" style="font-size:2rem;margin-bottom:8px;"></i><span style="font-size:0.7rem;opacity:0.8;">' + book.type + '</span>';

        var badgeEl = document.getElementById('modalBadge');
        badgeEl.textContent = book.type;
        badgeEl.style.background = typeInfo.badge;
        badgeEl.style.color = typeInfo.badgeText;

        document.getElementById('modalTitle').textContent = book.title.replace(/\n/g, ' ');
        document.getElementById('modalDate').innerHTML = '<i class="fas fa-calendar-alt"></i> ' + book.date + ' | ' + book.source;
        document.getElementById('modalDesc').textContent = book.desc;
        document.getElementById('modalLink').href = book.url;

        modal.classList.add('active');
    }

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('click', onClick);

    // Close modal
    modalClose.addEventListener('click', function() {
        modal.classList.remove('active');
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.classList.remove('active');
    });

    // Touch events for mobile
    canvas.addEventListener('touchstart', function(e) {
        var touch = e.touches[0];
        var rect = canvas.getBoundingClientRect();
        mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(bookMeshes);
        if (intersects.length > 0) {
            hoveredBook = intersects[0].object;
            onClick(e);
        }
    });

    // ── Camera Orbit (drag) ──
    var isDragging = false;
    var prevMouse = { x: 0, y: 0 };
    var cameraAngle = { theta: 0.42, phi: 0.36 };
    var cameraRadius = 10;
    var cameraTarget = new THREE.Vector3(0, 0.5, -0.8);

    function updateCameraFromAngles() {
        camera.position.x = cameraTarget.x + cameraRadius * Math.sin(cameraAngle.theta) * Math.cos(cameraAngle.phi);
        camera.position.y = cameraTarget.y + cameraRadius * Math.sin(cameraAngle.phi);
        camera.position.z = cameraTarget.z + cameraRadius * Math.cos(cameraAngle.theta) * Math.cos(cameraAngle.phi);
        camera.lookAt(cameraTarget);
    }
    updateCameraFromAngles();

    canvas.addEventListener('mousedown', function(e) {
        if (hoveredBook) return;
        isDragging = true;
        prevMouse.x = e.clientX;
        prevMouse.y = e.clientY;
    });

    window.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        var dx = (e.clientX - prevMouse.x) * 0.005;
        var dy = (e.clientY - prevMouse.y) * 0.005;
        cameraAngle.theta -= dx;
        cameraAngle.phi = Math.max(0.1, Math.min(0.8, cameraAngle.phi + dy));
        prevMouse.x = e.clientX;
        prevMouse.y = e.clientY;
        updateCameraFromAngles();
    });

    window.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // ── Smooth Animation ──
    function animate() {
        requestAnimationFrame(animate);

        for (var k = 0; k < bookMeshes.length; k++) {
            var m = bookMeshes[k];
            var tp = targetPositions[m.id];
            var tr = targetRotations[m.id];

            m.position.x += (tp.x - m.position.x) * 0.08;
            m.position.y += (tp.y - m.position.y) * 0.08;
            m.position.z += (tp.z - m.position.z) * 0.08;

            var dy = tr.y - m.rotation.y;
            m.rotation.y += dy * 0.08;
        }

        renderer.render(scene, camera);
    }
    animate();

    // ── Resize ──
    window.addEventListener('resize', function() {
        width = container.clientWidth;
        height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    });

    // ── Mouse leave ──
    canvas.addEventListener('mouseleave', function() {
        if (hoveredBook) {
            var pd = hoveredBook.userData;
            targetPositions[hoveredBook.id].copy(pd.originalPos);
            targetRotations[hoveredBook.id].y = pd.originalRot.y;
            hoveredBook = null;
        }
        tooltip.style.display = 'none';
    });
})();
