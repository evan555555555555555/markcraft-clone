import * as THREE from 'three';

function brickTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#7a2418';
  ctx.fillRect(0, 0, 128, 128);
  // Brick rows (alternating offset)
  ctx.fillStyle = '#5a1408';
  for (let row = 0; row < 16; row++) {
    const y = row * 8;
    const off = (row % 2) * 16;
    ctx.fillRect(0, y, 128, 1); // mortar
    for (let col = 0; col < 5; col++) {
      const x = col * 32 + off;
      ctx.fillRect(x, y, 1, 8);
    }
  }
  // Subtle brick variation
  for (let i = 0; i < 60; i++) {
    ctx.fillStyle = `rgba(${100 + Math.random() * 40},${30 + Math.random() * 20},${20},${0.4})`;
    ctx.fillRect(Math.random() * 128, Math.random() * 128, 4 + Math.random() * 8, 4);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function windowedFacadeTexture(wWindows, hWindows) {
  const c = document.createElement('canvas');
  c.width = wWindows * 64;
  c.height = hWindows * 80;
  const ctx = c.getContext('2d');

  // Brick base
  const brick = '#7a2418';
  const mortar = '#5a1408';
  ctx.fillStyle = brick;
  ctx.fillRect(0, 0, c.width, c.height);
  for (let row = 0; row < c.height / 8; row++) {
    const y = row * 8;
    ctx.fillStyle = mortar;
    ctx.fillRect(0, y, c.width, 1);
    const off = (row % 2) * 16;
    for (let col = 0; col < c.width / 32; col++) {
      ctx.fillRect(col * 32 + off, y, 1, 8);
    }
  }
  // Brick variation
  for (let i = 0; i < c.width * c.height / 80; i++) {
    ctx.fillStyle = `rgba(${110 + Math.random() * 30},${30 + Math.random() * 20},${20},${0.35})`;
    ctx.fillRect(Math.random() * c.width, Math.random() * c.height, 4 + Math.random() * 6, 4);
  }
  // White-trimmed windows
  for (let wy = 0; wy < hWindows; wy++) {
    for (let wx = 0; wx < wWindows; wx++) {
      const x = wx * 64 + 14;
      const y = wy * 80 + 14;
      const w = 36, h = 52;
      ctx.fillStyle = '#fff';
      ctx.fillRect(x - 3, y - 3, w + 6, h + 6); // trim
      // Glass — gradient hint
      const grad = ctx.createLinearGradient(x, y, x, y + h);
      grad.addColorStop(0, '#1a1a2a');
      grad.addColorStop(0.5, '#3a3a55');
      grad.addColorStop(1, '#1a1a2a');
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, w, h);
      // Window cross divider
      ctx.fillStyle = '#fff';
      ctx.fillRect(x + w / 2 - 1, y, 2, h);
      ctx.fillRect(x, y + h / 2 - 1, w, 2);
    }
  }
  // Bottom ledge
  ctx.fillStyle = '#e8e0c8';
  ctx.fillRect(0, c.height - 6, c.width, 6);
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function roofTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#3a3a4a';
  ctx.fillRect(0, 0, 64, 64);
  // Slate shingles
  for (let row = 0; row < 16; row++) {
    const y = row * 4;
    ctx.fillStyle = `rgb(${40 + (row % 3) * 8},${40 + (row % 3) * 8},${55 + (row % 3) * 8})`;
    ctx.fillRect(0, y, 64, 4);
    ctx.fillStyle = '#1a1a25';
    ctx.fillRect(0, y, 64, 1);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function stoneFacadeTexture(wWindows, hWindows) {
  const c = document.createElement('canvas');
  c.width = wWindows * 64;
  c.height = hWindows * 80;
  const ctx = c.getContext('2d');
  // Light limestone base
  ctx.fillStyle = '#ddd2bb';
  ctx.fillRect(0, 0, c.width, c.height);
  // Block courses
  ctx.fillStyle = '#aea693';
  for (let row = 0; row < c.height / 16; row++) {
    const y = row * 16;
    ctx.fillRect(0, y, c.width, 1);
    const off = (row % 2) * 32;
    for (let col = 0; col < c.width / 64 + 1; col++) {
      ctx.fillRect(col * 64 + off, y, 1, 16);
    }
  }
  // Subtle weathering
  for (let i = 0; i < c.width * c.height / 200; i++) {
    ctx.fillStyle = `rgba(${160 + Math.random() * 30},${150 + Math.random() * 30},${130 + Math.random() * 30},${0.25})`;
    ctx.fillRect(Math.random() * c.width, Math.random() * c.height, 4 + Math.random() * 8, 4);
  }
  // Tall arched windows
  for (let wy = 0; wy < hWindows; wy++) {
    for (let wx = 0; wx < wWindows; wx++) {
      const x = wx * 64 + 14;
      const y = wy * 80 + 12;
      const w = 36, h = 60;
      ctx.fillStyle = '#5a5040';
      ctx.fillRect(x - 3, y - 3, w + 6, h + 6);
      const grad = ctx.createLinearGradient(x, y, x, y + h);
      grad.addColorStop(0, '#1a1a2a');
      grad.addColorStop(0.5, '#3a4055');
      grad.addColorStop(1, '#1a1a2a');
      ctx.fillStyle = grad;
      ctx.fillRect(x, y, w, h);
      // arched top
      ctx.fillStyle = '#ddd2bb';
      ctx.beginPath();
      ctx.arc(x + w / 2, y, w / 2 + 4, Math.PI, 0);
      ctx.fill();
      // window mullions
      ctx.fillStyle = '#aea693';
      ctx.fillRect(x + w / 2 - 1, y, 2, h);
      ctx.fillRect(x, y + h / 3 - 1, w, 2);
      ctx.fillRect(x, y + 2 * h / 3 - 1, w, 2);
    }
  }
  const tex = new THREE.CanvasTexture(c);
  tex.magFilter = THREE.NearestFilter;
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function buildBuilding(opts) {
  const {
    w = 14, d = 8, floors = 3, windowsPerSide = 5,
    hasCupola = false, hasColumns = true, signText = null,
    style = 'brick', columnCount = 2, hasGrandPortico = false
  } = opts;
  const group = new THREE.Group();

  const floorH = 3.2;
  const totalH = floors * floorH;

  const facadeFn = style === 'stone' ? stoneFacadeTexture : windowedFacadeTexture;
  const sideTex = facadeFn(windowsPerSide, floors);
  const endTex = facadeFn(Math.max(2, Math.floor(d / 2.8)), floors);
  const sideMat = new THREE.MeshLambertMaterial({ map: sideTex });
  const endMat = new THREE.MeshLambertMaterial({ map: endTex });
  const topColor = style === 'stone' ? 0xaea693 : 0x5a1408;
  const botColor = style === 'stone' ? 0x8a8270 : 0x3a0a04;

  // Body: materials in box order [+X, -X, +Y, -Y, +Z, -Z]
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(w, totalH, d),
    [endMat, endMat, new THREE.MeshLambertMaterial({ color: topColor }),
     new THREE.MeshLambertMaterial({ color: botColor }), sideMat, sideMat]
  );
  body.position.y = totalH / 2;
  body.castShadow = true;
  body.receiveShadow = true;
  group.add(body);

  // Roof — pitched (triangular prism approximated with two slanted boxes)
  const roofH = 2.6;
  const roofTex = roofTexture();
  roofTex.repeat.set(w / 4, roofH / 2);
  const roofMat = new THREE.MeshLambertMaterial({ map: roofTex });
  const roofW = w + 0.6;
  const roofD = d + 0.6;

  // Front and back roof slopes
  const slopeGeo = new THREE.PlaneGeometry(roofW, Math.sqrt((roofD / 2) ** 2 + roofH ** 2));
  const slopeF = new THREE.Mesh(slopeGeo, roofMat);
  slopeF.position.set(0, totalH + roofH / 2, roofD / 4);
  slopeF.rotation.x = -Math.atan2(roofH, roofD / 2);
  slopeF.castShadow = true;
  group.add(slopeF);
  const slopeB = new THREE.Mesh(slopeGeo, roofMat);
  slopeB.position.set(0, totalH + roofH / 2, -roofD / 4);
  slopeB.rotation.x = Math.atan2(roofH, roofD / 2);
  slopeB.castShadow = true;
  group.add(slopeB);

  // Gable ends (triangles)
  const gableShape = new THREE.Shape();
  gableShape.moveTo(-roofW / 2, 0);
  gableShape.lineTo(roofW / 2, 0);
  gableShape.lineTo(0, roofH);
  gableShape.closePath();
  const gableGeo = new THREE.ShapeGeometry(gableShape);
  const gableMat = new THREE.MeshLambertMaterial({ color: style === 'stone' ? 0xddd2bb : 0x7a2418 });
  const gableL = new THREE.Mesh(gableGeo, gableMat);
  gableL.position.set(0, totalH, -roofD / 2);
  gableL.rotation.y = Math.PI;
  group.add(gableL);
  const gableR = new THREE.Mesh(gableGeo, gableMat);
  gableR.position.set(0, totalH, roofD / 2);
  group.add(gableR);

  // Chimneys
  const chimMat = new THREE.MeshLambertMaterial({ color: 0x3a1008 });
  const chimL = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.6, 0.8), chimMat);
  chimL.position.set(-w * 0.32, totalH + roofH + 0.4, 0);
  group.add(chimL);
  const chimR = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.6, 0.8), chimMat);
  chimR.position.set(w * 0.32, totalH + roofH + 0.4, 0);
  group.add(chimR);

  // White entrance with columns
  if (hasColumns || hasGrandPortico) {
    const portMat = new THREE.MeshLambertMaterial({ color: 0xf4ebd0 });
    const colHeight = hasGrandPortico ? totalH : 3.6;
    const portDepth = hasGrandPortico ? 1.6 : 0.4;
    // Door
    const door = new THREE.Mesh(new THREE.BoxGeometry(2.0, 3.2, 0.2), new THREE.MeshLambertMaterial({ color: 0x3a1008 }));
    door.position.set(0, 1.6, d / 2 + 0.11);
    group.add(door);
    // Door frame
    const frame = new THREE.Mesh(new THREE.BoxGeometry(2.4, 3.6, 0.15), portMat);
    frame.position.set(0, 1.8, d / 2 + 0.06);
    group.add(frame);
    // Columns — columnCount evenly spaced across facade
    const span = hasGrandPortico ? w * 0.85 : 3.8;
    const radius = hasGrandPortico ? 0.32 : 0.2;
    const capSize = hasGrandPortico ? 1.0 : 0.6;
    for (let i = 0; i < columnCount; i++) {
      const t = columnCount === 1 ? 0.5 : i / (columnCount - 1);
      const x = -span / 2 + span * t;
      const col = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, colHeight, 12), portMat);
      col.position.set(x, colHeight / 2, d / 2 + portDepth);
      col.castShadow = true;
      group.add(col);
      // Capital
      const cap = new THREE.Mesh(new THREE.BoxGeometry(capSize, 0.25, capSize), portMat);
      cap.position.set(x, colHeight + 0.12, d / 2 + portDepth);
      group.add(cap);
      // Base
      const base = new THREE.Mesh(new THREE.BoxGeometry(capSize, 0.18, capSize), portMat);
      base.position.set(x, 0.09, d / 2 + portDepth);
      group.add(base);
    }
    // Pediment / entablature
    const pedW = hasGrandPortico ? span + 1.2 : 4.6;
    const ped = new THREE.Mesh(new THREE.BoxGeometry(pedW, 0.6, portDepth + 0.6), portMat);
    ped.position.set(0, colHeight + 0.5, d / 2 + portDepth);
    group.add(ped);
    if (hasGrandPortico) {
      // Triangular pediment on top
      const triShape = new THREE.Shape();
      triShape.moveTo(-pedW / 2, 0);
      triShape.lineTo(pedW / 2, 0);
      triShape.lineTo(0, 1.6);
      triShape.closePath();
      const triGeo = new THREE.ShapeGeometry(triShape);
      const tri = new THREE.Mesh(triGeo, portMat);
      tri.position.set(0, colHeight + 0.8, d / 2 + portDepth + 0.31);
      group.add(tri);
    }
    // Steps
    const stepCount = hasGrandPortico ? 6 : 3;
    const stepWidth = hasGrandPortico ? span + 0.8 : 4.0;
    for (let i = 0; i < stepCount; i++) {
      const step = new THREE.Mesh(
        new THREE.BoxGeometry(stepWidth - i * 0.3, 0.2, 1.2 - i * 0.15),
        new THREE.MeshLambertMaterial({ color: 0xaaaaaa })
      );
      step.position.set(0, 0.1 + i * 0.2, d / 2 + portDepth + 1.0 - i * 0.15);
      step.receiveShadow = true;
      group.add(step);
    }
  }

  if (hasCupola) {
    const cupolaMat = new THREE.MeshLambertMaterial({ color: 0xf4ebd0 });
    const tower = new THREE.Mesh(new THREE.BoxGeometry(2.6, 3.0, 2.6), cupolaMat);
    tower.position.set(0, totalH + roofH + 1.5, 0);
    tower.castShadow = true;
    group.add(tower);
    // Clock face on front
    const clockC = document.createElement('canvas');
    clockC.width = clockC.height = 128;
    const cx2 = clockC.getContext('2d');
    cx2.fillStyle = '#f4ebd0'; cx2.fillRect(0, 0, 128, 128);
    cx2.fillStyle = '#fff';
    cx2.beginPath(); cx2.arc(64, 64, 42, 0, Math.PI * 2); cx2.fill();
    cx2.strokeStyle = '#000'; cx2.lineWidth = 4;
    cx2.beginPath(); cx2.arc(64, 64, 42, 0, Math.PI * 2); cx2.stroke();
    cx2.fillStyle = '#000';
    for (let h = 0; h < 12; h++) {
      const a = h * Math.PI / 6 - Math.PI / 2;
      cx2.fillRect(64 + Math.cos(a) * 36 - 2, 64 + Math.sin(a) * 36 - 2, 4, 4);
    }
    cx2.lineWidth = 4;
    cx2.beginPath(); cx2.moveTo(64, 64); cx2.lineTo(64, 32); cx2.stroke();
    cx2.beginPath(); cx2.moveTo(64, 64); cx2.lineTo(86, 70); cx2.stroke();
    const clockTex = new THREE.CanvasTexture(clockC);
    clockTex.colorSpace = THREE.SRGBColorSpace;
    const clock = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 1.8),
      new THREE.MeshLambertMaterial({ map: clockTex }));
    clock.position.set(0, totalH + roofH + 1.5, 1.32);
    group.add(clock);

    // Dome
    const dome = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
      new THREE.MeshLambertMaterial({ color: 0xc0c8b0 })
    );
    dome.position.set(0, totalH + roofH + 3.0, 0);
    group.add(dome);

    // Spire + flag
    const spire = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 2.4, 6),
      new THREE.MeshLambertMaterial({ color: 0x222 })
    );
    spire.position.set(0, totalH + roofH + 4.5, 0);
    group.add(spire);
    const flag = new THREE.Mesh(
      new THREE.PlaneGeometry(1.2, 0.7),
      new THREE.MeshBasicMaterial({ color: 0xa01818, side: THREE.DoubleSide })
    );
    flag.position.set(0.65, totalH + roofH + 5.2, 0);
    group.add(flag);
  }

  // Building name plaque
  if (signText) {
    const sc = document.createElement('canvas');
    sc.width = 256; sc.height = 64;
    const sx = sc.getContext('2d');
    sx.fillStyle = '#f4ebd0'; sx.fillRect(0, 0, 256, 64);
    sx.fillStyle = '#3a1008';
    sx.font = 'bold 22px serif';
    sx.textAlign = 'center';
    sx.textBaseline = 'middle';
    sx.fillText(signText, 128, 34);
    const stex = new THREE.CanvasTexture(sc);
    stex.colorSpace = THREE.SRGBColorSpace;
    const plaque = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 0.9),
      new THREE.MeshLambertMaterial({ map: stex })
    );
    plaque.position.set(0, 4.6, d / 2 + 0.12);
    group.add(plaque);
  }

  return group;
}

function buildTree(scale = 1) {
  const g = new THREE.Group();
  const trunk = new THREE.Mesh(
    new THREE.CylinderGeometry(0.25 * scale, 0.32 * scale, 2.4 * scale, 8),
    new THREE.MeshLambertMaterial({ color: 0x5a3010 })
  );
  trunk.position.y = 1.2 * scale;
  trunk.castShadow = true;
  g.add(trunk);
  for (let i = 0; i < 4; i++) {
    const leaf = new THREE.Mesh(
      new THREE.SphereGeometry(1.0 * scale + Math.random() * 0.3, 8, 6),
      new THREE.MeshLambertMaterial({ color: 0x2d6a2d })
    );
    leaf.position.set(
      (Math.random() - 0.5) * 1.0 * scale,
      2.6 * scale + (Math.random() - 0.3) * 0.8,
      (Math.random() - 0.5) * 1.0 * scale
    );
    leaf.castShadow = true;
    g.add(leaf);
  }
  return g;
}

function buildPath(cx, cy, cz, w, d, scene) {
  const pathTex = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#a89070';
    ctx.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = `rgba(${100 + Math.random() * 60},${80 + Math.random() * 40},${50 + Math.random() * 30},0.5)`;
      ctx.fillRect(Math.random() * 64, Math.random() * 64, 2, 2);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(w / 2, d / 2);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.magFilter = THREE.NearestFilter;
    return tex;
  })();
  const path = new THREE.Mesh(
    new THREE.PlaneGeometry(w, d),
    new THREE.MeshLambertMaterial({ map: pathTex })
  );
  path.rotation.x = -Math.PI / 2;
  path.position.set(cx, cy + 0.05, cz);
  path.receiveShadow = true;
  scene.add(path);
  return path;
}

// === 1999 Harvard dorm Easter egg ===
// Pre-internet vibes: CRT TV with static, bunk beds, boombox, AOL CD,
// dial-up modem, NES console, landline, milk-crate bookshelves, posters.
// Sits open-faced (no front wall) so anyone walking into the quad can peek in.
function buildDorm1999(cx, cy, cz, parent) {
  const group = new THREE.Group();
  const w = 9, d = 7, h = 4.2;

  // Cinderblock walls — three sides + floor
  const wallMat = new THREE.MeshLambertMaterial({ color: 0xd8d2bc });
  const floorMat = new THREE.MeshLambertMaterial({ color: 0x6a4030 });
  const ceilMat = new THREE.MeshLambertMaterial({ color: 0xc8c0a8 });

  const floor = new THREE.Mesh(new THREE.BoxGeometry(w, 0.2, d), floorMat);
  floor.position.set(0, 0.1, 0); floor.receiveShadow = true; group.add(floor);
  const ceil = new THREE.Mesh(new THREE.BoxGeometry(w, 0.2, d), ceilMat);
  ceil.position.set(0, h, 0); group.add(ceil);

  const back = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.2), wallMat);
  back.position.set(0, h / 2, -d / 2); group.add(back);
  const left = new THREE.Mesh(new THREE.BoxGeometry(0.2, h, d), wallMat);
  left.position.set(-w / 2, h / 2, 0); group.add(left);
  const right = new THREE.Mesh(new THREE.BoxGeometry(0.2, h, d), wallMat);
  right.position.set(w / 2, h / 2, 0); group.add(right);

  // Twin bunk beds along the back wall
  const bedFrameMat = new THREE.MeshLambertMaterial({ color: 0x222222 });
  const mattressMat = new THREE.MeshLambertMaterial({ color: 0xa01818 });
  const sheetMat = new THREE.MeshLambertMaterial({ color: 0xf4ebd0 });
  function bunk(x) {
    const grp = new THREE.Group();
    // Lower frame
    const lf = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 1.2), bedFrameMat);
    lf.position.set(0, 0.7, 0); grp.add(lf);
    const lm = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.25, 1.0), mattressMat);
    lm.position.set(0, 0.95, 0); grp.add(lm);
    const lp = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.05, 0.85), sheetMat);
    lp.position.set(0, 1.1, 0.05); grp.add(lp);
    // Upper frame
    const uf = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.15, 1.2), bedFrameMat);
    uf.position.set(0, 2.4, 0); grp.add(uf);
    const um = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.25, 1.0), mattressMat);
    um.position.set(0, 2.65, 0); grp.add(um);
    // Posts
    for (const px of [-1.0, 1.0]) for (const pz of [-0.5, 0.5]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.12, 2.6, 0.12), bedFrameMat);
      post.position.set(px, 1.5, pz); grp.add(post);
    }
    grp.position.set(x, 0.2, -d / 2 + 0.7);
    return grp;
  }
  group.add(bunk(-2.2));
  group.add(bunk(2.2));

  // Desk along left wall with CRT TV showing static
  const deskMat = new THREE.MeshLambertMaterial({ color: 0x8b6020 });
  const desk = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 3.0), deskMat);
  desk.position.set(-w / 2 + 0.55, 1.1, 1.0); group.add(desk);
  const deskLeg1 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.1, 0.1), deskMat);
  deskLeg1.position.set(-w / 2 + 0.55, 0.55, 2.45); group.add(deskLeg1);
  const deskLeg2 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.1, 0.1), deskMat);
  deskLeg2.position.set(-w / 2 + 0.55, 0.55, -0.45); group.add(deskLeg2);

  // CRT TV — static texture
  const staticC = document.createElement('canvas');
  staticC.width = staticC.height = 64;
  const sxc = staticC.getContext('2d');
  for (let py = 0; py < 64; py++) for (let px = 0; px < 64; px++) {
    const v = Math.floor(Math.random() * 255);
    sxc.fillStyle = `rgb(${v},${v},${v})`;
    sxc.fillRect(px, py, 1, 1);
  }
  // SOS bars
  sxc.fillStyle = '#ff5252'; sxc.fillRect(0, 26, 64, 4);
  sxc.fillStyle = '#5ad8e0'; sxc.fillRect(0, 30, 64, 4);
  sxc.fillStyle = '#ffd54a'; sxc.fillRect(0, 34, 64, 4);
  const staticTex = new THREE.CanvasTexture(staticC);
  staticTex.colorSpace = THREE.SRGBColorSpace;
  staticTex.magFilter = THREE.NearestFilter;

  const crtBody = new THREE.Mesh(
    new THREE.BoxGeometry(1.4, 1.3, 1.2),
    new THREE.MeshLambertMaterial({ color: 0x3a3a40 })
  );
  crtBody.position.set(-w / 2 + 0.7, 1.85, 1.0); group.add(crtBody);
  const crtScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(1.0, 0.85),
    new THREE.MeshBasicMaterial({ map: staticTex })
  );
  crtScreen.rotation.y = Math.PI / 2;
  crtScreen.position.set(-w / 2 + 1.42, 1.95, 1.0); group.add(crtScreen);
  // CRT antennae (rabbit ears)
  const antMat = new THREE.MeshLambertMaterial({ color: 0xaaaaaa });
  const ant1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 6), antMat);
  ant1.position.set(-w / 2 + 0.7, 3.1, 1.2); ant1.rotation.z = -0.4; group.add(ant1);
  const ant2 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 1.2, 6), antMat);
  ant2.position.set(-w / 2 + 0.7, 3.1, 0.8); ant2.rotation.z = 0.4; group.add(ant2);

  // NES console + controller below the TV
  const nes = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 0.18, 0.7),
    new THREE.MeshLambertMaterial({ color: 0xe6e0d0 })
  );
  nes.position.set(-w / 2 + 0.6, 1.25, 1.0); group.add(nes);
  const nesStripe = new THREE.Mesh(
    new THREE.BoxGeometry(1.21, 0.03, 0.7),
    new THREE.MeshLambertMaterial({ color: 0x222222 })
  );
  nesStripe.position.set(-w / 2 + 0.6, 1.16, 1.0); group.add(nesStripe);

  // Boombox on the desk
  const boom = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.4, 1.2),
    new THREE.MeshLambertMaterial({ color: 0x111111 })
  );
  boom.position.set(-w / 2 + 0.55, 1.35, 2.2); group.add(boom);
  for (const sx of [-0.4, 0.4]) {
    const sp = new THREE.Mesh(
      new THREE.CircleGeometry(0.13, 12),
      new THREE.MeshBasicMaterial({ color: 0xff8c1a })
    );
    sp.rotation.y = Math.PI / 2;
    sp.position.set(-w / 2 + 0.86, 1.35, 2.2 + sx * 0.5); group.add(sp);
  }

  // Right wall: milk-crate bookshelves + landline + AOL CD + dial-up modem
  const crateMat = new THREE.MeshLambertMaterial({ color: 0x5a3010 });
  for (let i = 0; i < 3; i++) {
    const crate = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.0, 0.9), crateMat);
    crate.position.set(w / 2 - 0.6, 0.7 + i * 1.05, -1.5); group.add(crate);
    // Books peeking out
    for (let k = 0; k < 3; k++) {
      const book = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.8, 0.2),
        new THREE.MeshLambertMaterial({ color: ['#a01818','#1a1a8a','#1a6a2a','#ffd54a'][(i+k)%4] })
      );
      book.position.set(w / 2 - 0.65, 0.7 + i * 1.05, -1.85 + k * 0.3); group.add(book);
    }
  }

  // Beige Dell-ish CRT monitor + tower with dial-up modem on top
  const monitor = new THREE.Mesh(
    new THREE.BoxGeometry(1.2, 1.0, 1.0),
    new THREE.MeshLambertMaterial({ color: 0xe6e0d0 })
  );
  monitor.position.set(w / 2 - 0.7, 1.65, 1.5); group.add(monitor);
  const monScreen = new THREE.Mesh(
    new THREE.PlaneGeometry(0.85, 0.7),
    new THREE.MeshBasicMaterial({ color: 0x0a1a4a })
  );
  monScreen.rotation.y = -Math.PI / 2;
  monScreen.position.set(w / 2 - 1.31, 1.7, 1.5); group.add(monScreen);
  // "Welcome AOL" label baked into a sprite later — keep it lightweight
  const aolLabel = (() => {
    const c = document.createElement('canvas');
    c.width = 128; c.height = 64;
    const x = c.getContext('2d');
    x.fillStyle = '#0a1a4a'; x.fillRect(0, 0, 128, 64);
    x.fillStyle = '#fff'; x.font = 'bold 14px monospace';
    x.textAlign = 'center';
    x.fillText("YOU'VE GOT", 64, 24);
    x.fillStyle = '#ffd54a';
    x.fillText('MAIL', 64, 42);
    x.fillStyle = '#fff'; x.font = '8px monospace';
    x.fillText('— AOL 4.0 —', 64, 58);
    return new THREE.CanvasTexture(c);
  })();
  aolLabel.colorSpace = THREE.SRGBColorSpace;
  aolLabel.magFilter = THREE.NearestFilter;
  monScreen.material = new THREE.MeshBasicMaterial({ map: aolLabel });

  // PC tower
  const tower = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 1.3, 1.2),
    new THREE.MeshLambertMaterial({ color: 0xe6e0d0 })
  );
  tower.position.set(w / 2 - 0.4, 0.85, 2.5); group.add(tower);
  // Dial-up modem (small flat box with LEDs)
  const modem = new THREE.Mesh(
    new THREE.BoxGeometry(0.7, 0.12, 0.5),
    new THREE.MeshLambertMaterial({ color: 0x222222 })
  );
  modem.position.set(w / 2 - 0.5, 1.56, 2.5); group.add(modem);
  for (let i = 0; i < 4; i++) {
    const led = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.04, 0.06),
      new THREE.MeshBasicMaterial({ color: [0x33ff33, 0xffaa22, 0xff2222, 0x33ddff][i] })
    );
    led.position.set(w / 2 - 0.7, 1.62, 2.3 + i * 0.1); group.add(led);
  }

  // AOL trial CD on the desk
  const cd = new THREE.Mesh(
    new THREE.CylinderGeometry(0.3, 0.3, 0.02, 24),
    new THREE.MeshBasicMaterial({ color: 0xc0d8ff })
  );
  cd.position.set(-w / 2 + 0.7, 1.16, 0.0); cd.rotation.x = -0.05; group.add(cd);

  // Landline phone (corded, beige)
  const phoneBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.12, 0.7),
    new THREE.MeshLambertMaterial({ color: 0xc8c0a8 })
  );
  phoneBase.position.set(w / 2 - 0.6, 1.16, 0.5); group.add(phoneBase);
  const handset = new THREE.Mesh(
    new THREE.BoxGeometry(0.5, 0.12, 0.18),
    new THREE.MeshLambertMaterial({ color: 0xb8b0a0 })
  );
  handset.position.set(w / 2 - 0.6, 1.28, 0.5); group.add(handset);

  // Wall posters: Bulls (1996), pre-2000 Tupac, Pulp Fiction-y
  function poster(title, sub, bg, fg, x, y, z, ry = 0) {
    const c = document.createElement('canvas');
    c.width = 128; c.height = 192;
    const xc = c.getContext('2d');
    xc.fillStyle = bg; xc.fillRect(0, 0, 128, 192);
    xc.fillStyle = fg; xc.font = 'bold 22px monospace';
    xc.textAlign = 'center';
    xc.fillText(title, 64, 110);
    xc.font = '11px monospace';
    xc.fillText(sub, 64, 160);
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter;
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 1.5),
      new THREE.MeshLambertMaterial({ map: t }));
    m.position.set(x, y, z);
    m.rotation.y = ry;
    group.add(m);
  }
  poster('BULLS', '1996 NBA CHAMPS', '#a01818', '#fff', 0, 3.0, -d / 2 + 0.12);
  poster('CALIFORNIA', 'LOVE \'96', '#000', '#ffd54a', -1.2, 3.0, -d / 2 + 0.12);
  poster('Y2K', 'plan accordingly', '#1a1a8a', '#fff', 1.2, 3.0, -d / 2 + 0.12);

  // Sign above the doorway: "1999 — pre-internet"
  const sc = document.createElement('canvas');
  sc.width = 256; sc.height = 64;
  const sxg = sc.getContext('2d');
  sxg.fillStyle = '#1a0a05'; sxg.fillRect(0, 0, 256, 64);
  sxg.fillStyle = '#ffd54a';
  sxg.font = 'bold 20px monospace';
  sxg.textAlign = 'center';
  sxg.fillText('UNC MARKS — DORM, 1999', 128, 28);
  sxg.fillStyle = '#fff'; sxg.font = 'italic 12px monospace';
  sxg.fillText('pre-internet · Easter egg', 128, 50);
  const stex = new THREE.CanvasTexture(sc);
  stex.colorSpace = THREE.SRGBColorSpace; stex.magFilter = THREE.NearestFilter;
  const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: stex, depthTest: false }));
  sign.scale.set(5, 1.25, 1);
  sign.position.set(0, h + 1.4, d / 2 - 0.2);
  sign.renderOrder = 998;
  group.add(sign);

  // Warm interior light
  const lamp = new THREE.PointLight(0xffd09a, 1.4, 14, 2);
  lamp.position.set(0, h - 0.4, 0); group.add(lamp);

  group.position.set(cx, cy, cz);
  parent.add(group);
  return group;
}

function buildPoster(title, body, accent, x, y, z) {
  const group = new THREE.Group();
  const pole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.08, 0.1, 4.0, 8),
    new THREE.MeshLambertMaterial({ color: 0x222222 })
  );
  pole.position.y = 2.0;
  pole.castShadow = true;
  group.add(pole);

  const c = document.createElement('canvas');
  c.width = 256; c.height = 192;
  const ctx = c.getContext('2d');
  ctx.fillStyle = '#f4ebd0';
  ctx.fillRect(0, 0, 256, 192);
  ctx.fillStyle = accent;
  ctx.fillRect(0, 0, 256, 8);
  ctx.fillRect(0, 184, 256, 8);
  ctx.fillStyle = '#000';
  ctx.font = 'bold 14px monospace';
  ctx.textAlign = 'center';
  ctx.fillText('LIS3353', 128, 30);
  ctx.fillStyle = accent;
  ctx.font = 'bold 22px monospace';
  ctx.fillText(title, 128, 78);
  ctx.fillStyle = '#000';
  ctx.font = '14px monospace';
  const words = body.split(' ');
  let line = '';
  let yy = 110;
  for (const w of words) {
    const test = line + w + ' ';
    if (ctx.measureText(test).width > 230) {
      ctx.fillText(line, 128, yy);
      line = w + ' ';
      yy += 20;
    } else line = test;
  }
  ctx.fillText(line, 128, yy);
  ctx.font = 'italic 11px monospace';
  ctx.fillStyle = '#5a3010';
  ctx.fillText('\u2014 Prof. Marks', 128, 174);

  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.magFilter = THREE.NearestFilter;
  const board = new THREE.Mesh(
    new THREE.PlaneGeometry(2.0, 1.5),
    new THREE.MeshLambertMaterial({ map: tex, side: THREE.DoubleSide })
  );
  board.position.set(0, 3.4, 0);
  board.castShadow = true;
  group.add(board);

  group.rotation.y = Math.random() * Math.PI * 2;
  group.position.set(x, y, z);
  return group;
}

export function buildHarvardCampus(scene, cx, cy, cz) {
  const group = new THREE.Group();

  // Yard grass tint
  const yardTex = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const ctx = c.getContext('2d');
    ctx.fillStyle = '#3a7a2a';
    ctx.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 200; i++) {
      ctx.fillStyle = `rgba(${30 + Math.random() * 40},${100 + Math.random() * 40},${30 + Math.random() * 20},0.7)`;
      ctx.fillRect(Math.random() * 64, Math.random() * 64, 2, 2);
    }
    const tex = new THREE.CanvasTexture(c);
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(8, 8);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  })();
  const yard = new THREE.Mesh(
    new THREE.PlaneGeometry(48, 36),
    new THREE.MeshLambertMaterial({ map: yardTex })
  );
  yard.rotation.x = -Math.PI / 2;
  yard.position.set(cx, cy + 0.02, cz);
  yard.receiveShadow = true;
  scene.add(yard);

  // Massey Hall (central building with cupola — University Hall vibes)
  const massey = buildBuilding({
    w: 18, d: 9, floors: 4, windowsPerSide: 7,
    hasCupola: true, hasColumns: true, signText: 'MASSEY HALL'
  });
  massey.position.set(cx, cy, cz - 12);
  scene.add(massey);

  // Wigglesworth Dorm — left
  const wiggles = buildBuilding({
    w: 12, d: 7, floors: 3, windowsPerSide: 4,
    hasCupola: false, hasColumns: true, signText: 'WIGGLESWORTH'
  });
  wiggles.position.set(cx - 16, cy, cz - 4);
  wiggles.rotation.y = Math.PI / 2;
  scene.add(wiggles);

  // Sever Hall — right
  const sever = buildBuilding({
    w: 12, d: 7, floors: 3, windowsPerSide: 4,
    hasCupola: false, hasColumns: true, signText: 'SEVER HALL'
  });
  sever.position.set(cx + 16, cy, cz - 4);
  sever.rotation.y = -Math.PI / 2;
  scene.add(sever);

  // Widener Library (front, smaller, with columns)
  const widener = buildBuilding({
    w: 14, d: 6, floors: 2, windowsPerSide: 5,
    hasCupola: false, hasColumns: true, signText: 'WIDENER LIBRARY'
  });
  widener.position.set(cx, cy, cz + 8);
  widener.rotation.y = Math.PI;
  scene.add(widener);

  // LIS3353 syllabus posters mounted on poles around the quad
  const posters = [
    { title: 'BASH ASSIGNMENT', body: 'due Friday — pipes & grep', fg: '#1a6a2a' },
    { title: 'GET LINUX', body: 'install Ubuntu or get out', fg: '#a01818' },
    { title: 'GNU GPL v3', body: 'free as in freedom', fg: '#000' },
    { title: 'TOR & ENCRYPTION', body: 'know your threat model', fg: '#1a1a8a' },
    { title: 'P2P · IoT · IPv6', body: 'the protocols that matter', fg: '#7a2418' },
    { title: 'FAIR USE', body: 'cite, don\u2019t plagiarize', fg: '#000' },
    { title: 'HELLO, WORLD', body: 'every algorithm starts here', fg: '#1a6a2a' },
    { title: 'OFFICE HOURS', body: 'by appt — see syllabus', fg: '#a01818' }
  ];
  const posterSpots = [
    [-22, -16], [22, -16], [-18, 14], [18, 14],
    [0, 16], [-24, 0], [24, 12], [10, -16]
  ];
  posters.forEach((p, i) => {
    const [px, pz] = posterSpots[i];
    scene.add(buildPoster(p.title, p.body, p.fg, cx + px, cy, cz + pz));
  });

  // Cross paths
  buildPath(cx, cy, cz, 4, 36, scene);
  buildPath(cx, cy, cz, 48, 4, scene);

  // Trees scattered in the quad
  const treeSpots = [
    [-10, 4], [10, 4], [-12, -2], [12, -2], [-8, -10], [8, -10],
    [-20, 6], [20, 6], [-4, 10], [4, 10]
  ];
  for (const [tx, tz] of treeSpots) {
    const tree = buildTree(0.9 + Math.random() * 0.4);
    tree.position.set(cx + tx, cy, cz + tz);
    scene.add(tree);
  }

  // John Harvard statue (in front of Massey)
  const stMat = new THREE.MeshLambertMaterial({ color: 0x4a4030 });
  const statueBase = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.2, 1.4),
    new THREE.MeshLambertMaterial({ color: 0x6a6a6a }));
  statueBase.position.set(cx, cy + 0.6, cz - 6);
  scene.add(statueBase);
  const statueBody = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.6, 0.6), stMat);
  statueBody.position.set(cx, cy + 2.0, cz - 6);
  scene.add(statueBody);
  const statueHead = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5),
    new THREE.MeshLambertMaterial({ color: 0x6a4830 }));
  statueHead.position.set(cx, cy + 3.05, cz - 6);
  scene.add(statueHead);
  // Statue plaque
  const psc = document.createElement('canvas');
  psc.width = 256; psc.height = 80;
  const psx = psc.getContext('2d');
  psx.fillStyle = '#8b6020'; psx.fillRect(0, 0, 256, 80);
  psx.fillStyle = '#f4e3b2';
  psx.font = 'bold 18px serif';
  psx.textAlign = 'center';
  psx.fillText('JOHN HARVARD', 128, 28);
  psx.font = 'bold 13px serif';
  psx.fillText('Founder · 1638', 128, 50);
  psx.font = 'italic 11px serif';
  psx.fillText('(statue of 3 lies)', 128, 68);
  const ptex = new THREE.CanvasTexture(psc);
  ptex.colorSpace = THREE.SRGBColorSpace;
  const plaque = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 0.5),
    new THREE.MeshLambertMaterial({ map: ptex }));
  plaque.position.set(cx, cy + 0.7, cz - 5.27);
  scene.add(plaque);

  // VERITAS gate sign at the entrance
  const gateC = document.createElement('canvas');
  gateC.width = 512; gateC.height = 128;
  const gx = gateC.getContext('2d');
  gx.fillStyle = '#1a0a05'; gx.fillRect(0, 0, 512, 128);
  gx.fillStyle = '#7a2418';
  gx.fillRect(8, 8, 496, 112);
  gx.fillStyle = '#f4ebd0';
  gx.font = 'bold 56px serif';
  gx.textAlign = 'center';
  gx.fillText('VERITAS', 256, 60);
  gx.font = 'italic 18px serif';
  gx.fillText('— Harvard University —', 256, 96);
  const gtex = new THREE.CanvasTexture(gateC);
  gtex.colorSpace = THREE.SRGBColorSpace;
  const gateSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: gtex, depthTest: false
  }));
  gateSprite.scale.set(8, 2, 1);
  gateSprite.position.set(cx, cy + 6, cz + 16);
  gateSprite.renderOrder = 996;
  scene.add(gateSprite);

  // 1999 dorm Easter egg — open-faced toward the quad so visitors can peek in.
  // Tucked west of Wigglesworth on the back row.
  buildDorm1999(cx - 28, cy, cz - 14, scene);
}

export { buildDorm1999 };

// === Columbia Law (standalone in the campus ring) ===
// Stone Beaux-Arts mass with a 6-column grand portico. Placed standalone in
// the ring around the arena so it stands on its own (not glued to Harvard).
export function buildColumbiaLaw(scene, cx, cy, cz) {
  const columbia = buildBuilding({
    w: 16, d: 8, floors: 4, windowsPerSide: 6, style: 'stone',
    hasCupola: false, hasColumns: false, hasGrandPortico: true, columnCount: 6,
    signText: 'COLUMBIA LAW'
  });
  columbia.position.set(cx, cy, cz);
  scene.add(columbia);

  // Plaza in front (south side, facing the arena)
  buildPath(cx, cy, cz + 6, 12, 6, scene);

  // Lion statues flanking the entrance
  const lionMat = new THREE.MeshLambertMaterial({ color: 0xa89478 });
  for (const dx of [-3.6, 3.6]) {
    const base = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 1.2), lionMat);
    base.position.set(cx + dx, cy + 0.4, cz + 4.6);
    scene.add(base);
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.7, 1.6),
      new THREE.MeshLambertMaterial({ color: 0xb8a484 }));
    body.position.set(cx + dx, cy + 1.15, cz + 4.6);
    scene.add(body);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.7, 0.7),
      new THREE.MeshLambertMaterial({ color: 0xb8a484 }));
    head.position.set(cx + dx, cy + 1.85, cz + 5.3);
    scene.add(head);
  }

  // Big banner sign
  const sc = document.createElement('canvas');
  sc.width = 512; sc.height = 96;
  const sx = sc.getContext('2d');
  sx.fillStyle = '#1a3a8a'; sx.fillRect(0, 0, 512, 96);
  sx.fillStyle = '#fff';
  sx.font = 'bold 44px serif';
  sx.textAlign = 'center';
  sx.fillText('COLUMBIA LAW', 256, 50);
  sx.font = 'italic 18px serif';
  sx.fillText('In lumine Tuo videbimus lumen', 256, 78);
  const tex = new THREE.CanvasTexture(sc);
  tex.colorSpace = THREE.SRGBColorSpace;
  const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false }));
  sign.scale.set(8, 1.5, 1);
  sign.position.set(cx, cy + 12, cz);
  sign.renderOrder = 996;
  scene.add(sign);
}

// === Tallahassee Capitol ===
// The iconic 22-story white modernist tower of the FL State Capitol with the
// older domed Capitol building at its base. Sits west of the arena so it
// dominates the skyline from the spawn point.
export function buildTallahasseeCapitol(scene, cx, cy, cz) {
  const group = new THREE.Group();

  // Concrete plaza
  const plaza = new THREE.Mesh(
    new THREE.BoxGeometry(20, 0.3, 16),
    new THREE.MeshLambertMaterial({ color: 0xc8c0a8 })
  );
  plaza.position.set(0, 0.15, 0);
  plaza.receiveShadow = true;
  group.add(plaza);

  // Tall main tower — 22 floors at 1.4u each = 30.8u tall
  const towerH = 30;
  const towerW = 5;
  const towerD = 4.5;
  const towerTex = (() => {
    const c = document.createElement('canvas');
    c.width = 64; c.height = 256;
    const x = c.getContext('2d');
    x.fillStyle = '#f0ebe0'; x.fillRect(0, 0, 64, 256);
    // Vertical window strips
    for (let row = 0; row < 24; row++) {
      const y = row * 10 + 4;
      x.fillStyle = '#3a4055';
      x.fillRect(8, y, 8, 6);
      x.fillRect(20, y, 8, 6);
      x.fillRect(36, y, 8, 6);
      x.fillRect(48, y, 8, 6);
    }
    // Horizontal banding
    for (let row = 0; row < 24; row++) {
      x.fillStyle = '#d8d0bc';
      x.fillRect(0, row * 10 + 11, 64, 1);
    }
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = THREE.SRGBColorSpace;
    t.magFilter = THREE.NearestFilter;
    return t;
  })();
  const towerMat = new THREE.MeshLambertMaterial({ map: towerTex });
  const tower = new THREE.Mesh(
    new THREE.BoxGeometry(towerW, towerH, towerD),
    [towerMat, towerMat,
     new THREE.MeshLambertMaterial({ color: 0xc8c0a8 }),
     new THREE.MeshLambertMaterial({ color: 0xa89d80 }),
     towerMat, towerMat]
  );
  tower.position.set(0, towerH / 2 + 0.3, 0);
  tower.castShadow = true;
  group.add(tower);

  // Iconic flanking wings (the round chambers — House on left, Senate on right)
  const wingMat = new THREE.MeshLambertMaterial({ color: 0xeae5d6 });
  const wingL = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 5, 24), wingMat);
  wingL.position.set(-4.6, 2.8, 1.5);
  wingL.castShadow = true;
  group.add(wingL);
  const domeL = new THREE.Mesh(
    new THREE.SphereGeometry(2.6, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    wingMat
  );
  domeL.position.set(-4.6, 5.3, 1.5);
  group.add(domeL);
  const wingR = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 5, 24), wingMat);
  wingR.position.set(4.6, 2.8, 1.5);
  wingR.castShadow = true;
  group.add(wingR);
  const domeR = new THREE.Mesh(
    new THREE.SphereGeometry(2.6, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2),
    wingMat
  );
  domeR.position.set(4.6, 5.3, 1.5);
  group.add(domeR);

  // Old Capitol dome at the front base — small classical white building
  const oldBaseMat = new THREE.MeshLambertMaterial({ color: 0xf4ebd0 });
  const oldBase = new THREE.Mesh(
    new THREE.BoxGeometry(6.5, 3.0, 4.0),
    oldBaseMat
  );
  oldBase.position.set(0, 1.65, 5.0);
  oldBase.castShadow = true;
  group.add(oldBase);
  // Columns across the front of the Old Capitol
  for (let i = -2; i <= 2; i++) {
    const col = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 3.0, 12),
      oldBaseMat
    );
    col.position.set(i * 1.1, 1.65, 7.05);
    group.add(col);
  }
  // Pediment
  const pediment = new THREE.Mesh(
    new THREE.BoxGeometry(6.5, 0.5, 0.6),
    oldBaseMat
  );
  pediment.position.set(0, 3.4, 7.0);
  group.add(pediment);
  // Old Capitol dome on top
  const oldDome = new THREE.Mesh(
    new THREE.SphereGeometry(1.6, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2),
    new THREE.MeshLambertMaterial({ color: 0xeae0c8 })
  );
  oldDome.position.set(0, 3.5, 5.0);
  group.add(oldDome);
  // Cupola on dome
  const cup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.4, 0.5, 0.8, 12),
    new THREE.MeshLambertMaterial({ color: 0xeae0c8 })
  );
  cup.position.set(0, 5.1, 5.0);
  group.add(cup);
  // Spire
  const spire = new THREE.Mesh(
    new THREE.ConeGeometry(0.18, 1.2, 8),
    new THREE.MeshLambertMaterial({ color: 0xc8b870 })
  );
  spire.position.set(0, 6.1, 5.0);
  group.add(spire);

  // FL state flag on top of the tower
  const flagPole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.06, 0.06, 3, 6),
    new THREE.MeshLambertMaterial({ color: 0x222222 })
  );
  flagPole.position.set(0, towerH + 1.8, 0);
  group.add(flagPole);
  const flag = new THREE.Mesh(
    new THREE.PlaneGeometry(2, 1.2),
    new THREE.MeshBasicMaterial({ color: 0xa01818, side: THREE.DoubleSide })
  );
  flag.position.set(1.05, towerH + 2.5, 0);
  group.add(flag);

  // Marker sign
  const sc = document.createElement('canvas');
  sc.width = 512; sc.height = 96;
  const sx = sc.getContext('2d');
  sx.fillStyle = '#1a0a05'; sx.fillRect(0, 0, 512, 96);
  sx.fillStyle = '#f4ebd0'; sx.fillRect(8, 8, 496, 80);
  sx.fillStyle = '#1a0a05';
  sx.font = 'bold 36px serif'; sx.textAlign = 'center';
  sx.fillText('TALLAHASSEE CAPITOL', 256, 48);
  sx.font = 'italic 16px serif';
  sx.fillText('— Capital of the Free State of Florida —', 256, 76);
  const stex = new THREE.CanvasTexture(sc);
  stex.colorSpace = THREE.SRGBColorSpace;
  const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: stex, depthTest: false }));
  sign.scale.set(10, 1.9, 1);
  sign.position.set(0, 9.5, 7.5);
  sign.renderOrder = 996;
  group.add(sign);

  group.position.set(cx, cy, cz);
  scene.add(group);
  return group;
}

// === FSU campus ===
// Westcott Building (FSU's iconic red-brick admin building with the bell
// tower) + Doak Campbell Stadium-ish bowl. Sits south of the arena.
export function buildFsuCampus(scene, cx, cy, cz) {
  const group = new THREE.Group();

  // Quad grass tint (garnet-and-gold accent on path)
  const lawn = new THREE.Mesh(
    new THREE.PlaneGeometry(36, 24),
    new THREE.MeshLambertMaterial({ color: 0x3a7a2a })
  );
  lawn.rotation.x = -Math.PI / 2;
  lawn.position.set(0, 0.02, 0);
  lawn.receiveShadow = true;
  group.add(lawn);

  // === Westcott Building (red brick + bell tower) ===
  const westcott = buildBuilding({
    w: 16, d: 8, floors: 3, windowsPerSide: 6,
    hasCupola: true, hasColumns: true, signText: 'WESTCOTT'
  });
  westcott.position.set(0, 0, -6);
  group.add(westcott);

  // Banner over the building: "FLORIDA STATE UNIVERSITY"
  const bc = document.createElement('canvas');
  bc.width = 512; bc.height = 96;
  const bx = bc.getContext('2d');
  bx.fillStyle = '#8b1818'; bx.fillRect(0, 0, 512, 96);
  bx.strokeStyle = '#f4d54a'; bx.lineWidth = 8;
  bx.strokeRect(4, 4, 504, 88);
  bx.fillStyle = '#f4d54a';
  bx.font = 'bold 36px serif'; bx.textAlign = 'center';
  bx.fillText('FLORIDA STATE', 256, 48);
  bx.font = 'bold 22px serif';
  bx.fillText('U N I V E R S I T Y', 256, 78);
  const btex = new THREE.CanvasTexture(bc);
  btex.colorSpace = THREE.SRGBColorSpace;
  const banner = new THREE.Sprite(new THREE.SpriteMaterial({ map: btex, depthTest: false }));
  banner.scale.set(10, 1.9, 1);
  banner.position.set(0, 16, -6);
  banner.renderOrder = 996;
  group.add(banner);

  // === Doak Campbell mini-stadium (oval bowl with field) ===
  const fieldMat = new THREE.MeshLambertMaterial({ color: 0x2d6a2d });
  const field = new THREE.Mesh(new THREE.PlaneGeometry(14, 8), fieldMat);
  field.rotation.x = -Math.PI / 2;
  field.position.set(0, 0.04, 8);
  field.receiveShadow = true;
  group.add(field);
  // Yard lines
  for (let i = -3; i <= 3; i++) {
    const line = new THREE.Mesh(
      new THREE.PlaneGeometry(0.1, 7),
      new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    line.rotation.x = -Math.PI / 2;
    line.position.set(i * 1.8, 0.06, 8);
    group.add(line);
  }
  // 50-yard mid-field FSU spear logo (canvas)
  const lc = document.createElement('canvas');
  lc.width = lc.height = 128;
  const lx = lc.getContext('2d');
  lx.fillStyle = 'rgba(0,0,0,0)'; lx.fillRect(0, 0, 128, 128);
  lx.fillStyle = '#8b1818';
  lx.beginPath(); lx.moveTo(20, 64); lx.lineTo(108, 30); lx.lineTo(108, 98); lx.closePath(); lx.fill();
  lx.fillStyle = '#f4d54a';
  lx.font = 'bold 22px serif'; lx.textAlign = 'center';
  lx.fillText('FSU', 70, 70);
  const ltex = new THREE.CanvasTexture(lc);
  ltex.colorSpace = THREE.SRGBColorSpace;
  const logo = new THREE.Mesh(
    new THREE.PlaneGeometry(2.5, 2.5),
    new THREE.MeshBasicMaterial({ map: ltex, transparent: true })
  );
  logo.rotation.x = -Math.PI / 2;
  logo.position.set(0, 0.07, 8);
  group.add(logo);

  // Stadium walls — semi-circle bowl
  const wallMat = new THREE.MeshLambertMaterial({ color: 0x8b1818 });
  for (let theta = -Math.PI / 2; theta <= Math.PI / 2; theta += Math.PI / 16) {
    const r = 8.5;
    const x = Math.cos(theta) * r;
    const z = 8 + Math.sin(theta) * 5.5;
    const seg = new THREE.Mesh(new THREE.BoxGeometry(0.6, 3, 1.4), wallMat);
    seg.position.set(x, 1.5, z);
    seg.rotation.y = -theta;
    group.add(seg);
  }
  // Goal posts
  const postMat = new THREE.MeshLambertMaterial({ color: 0xf4d54a });
  for (const xx of [-7, 7]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 4, 6), postMat);
    post.position.set(xx, 2, 8); group.add(post);
    const cross = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.2, 2.6), postMat);
    cross.position.set(xx, 3.5, 8); group.add(cross);
  }

  // Marker sign
  const sc = document.createElement('canvas');
  sc.width = 512; sc.height = 96;
  const sx = sc.getContext('2d');
  sx.fillStyle = '#8b1818'; sx.fillRect(0, 0, 512, 96);
  sx.fillStyle = '#f4d54a';
  sx.font = 'bold 36px serif'; sx.textAlign = 'center';
  sx.fillText('FSU CAMPUS', 256, 48);
  sx.font = 'italic 18px serif';
  sx.fillText('Go Noles \u00b7 LIS3353 represent', 256, 78);
  const stex = new THREE.CanvasTexture(sc);
  stex.colorSpace = THREE.SRGBColorSpace;
  const sign = new THREE.Sprite(new THREE.SpriteMaterial({ map: stex, depthTest: false }));
  sign.scale.set(10, 1.9, 1);
  sign.position.set(0, 6, 14);
  sign.renderOrder = 996;
  group.add(sign);

  group.position.set(cx, cy, cz);
  scene.add(group);
  return group;
}
