import * as THREE from 'three';

function faceMaterials(faceTexture, sideColor = '#7a4a2a') {
  const sideMat = new THREE.MeshLambertMaterial({ color: sideColor });
  const frontMat = new THREE.MeshLambertMaterial({ map: faceTexture });
  return [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat];
}

function chestMaterials(chestTexture, sideColor) {
  const side = new THREE.MeshLambertMaterial({ color: sideColor });
  const front = new THREE.MeshLambertMaterial({ map: chestTexture });
  return [side, side, side, side, front, side];
}

export function buildHumanoid(skin, opts = {}) {
  const group = new THREE.Group();
  const scale = opts.scale || 1;

  const headGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
  const head = new THREE.Mesh(headGeo, faceMaterials(skin.face, skin.arms));
  head.position.y = 1.85;
  head.castShadow = true;
  group.add(head);
  group.userData.head = head;

  const bodyGeo = new THREE.BoxGeometry(1, 1.4, 0.5);
  const body = new THREE.Mesh(bodyGeo, chestMaterials(skin.chest, skin.body));
  body.position.y = 0.7;
  body.castShadow = true;
  group.add(body);

  const armGeo = new THREE.BoxGeometry(0.3, 1.4, 0.4);
  const armMat = new THREE.MeshLambertMaterial({ color: skin.arms });
  const armL = new THREE.Mesh(armGeo, armMat);
  armL.position.set(-0.65, 0.7, 0);
  armL.castShadow = true;
  group.add(armL);
  const armR = new THREE.Mesh(armGeo, armMat);
  armR.position.set(0.65, 0.7, 0);
  armR.castShadow = true;
  group.add(armR);
  group.userData.arms = [armL, armR];

  const legGeo = new THREE.BoxGeometry(0.45, 1.0, 0.45);
  const legMat = new THREE.MeshLambertMaterial({ color: skin.legs });
  const legL = new THREE.Mesh(legGeo, legMat);
  legL.position.set(-0.25, -0.5, 0);
  legL.castShadow = true;
  group.add(legL);
  const legR = new THREE.Mesh(legGeo, legMat);
  legR.position.set(0.25, -0.5, 0);
  legR.castShadow = true;
  group.add(legR);
  group.userData.legs = [legL, legR];

  if (opts.holdBook) {
    const bookGeo = new THREE.BoxGeometry(0.7, 0.5, 0.15);
    const bookCanvas = document.createElement('canvas');
    bookCanvas.width = 128; bookCanvas.height = 128;
    const bx = bookCanvas.getContext('2d');
    bx.fillStyle = '#8b1a1a'; bx.fillRect(0, 0, 128, 128);
    bx.fillStyle = '#f4e3b2'; bx.font = 'bold 18px serif';
    bx.textAlign = 'center';
    bx.fillText('HARVARD', 64, 50);
    bx.fillText('ECON', 64, 78);
    bx.fillText('PhD', 64, 102);
    const bookTex = new THREE.CanvasTexture(bookCanvas);
    bookTex.magFilter = THREE.NearestFilter;
    const bookMat = new THREE.MeshLambertMaterial({ map: bookTex });
    const book = new THREE.Mesh(bookGeo, bookMat);
    book.position.set(0.65, 0.95, 0.5);
    book.castShadow = true;
    group.add(book);
  }

  if (opts.holdSword) {
    const swordGeo = new THREE.BoxGeometry(0.15, 1.6, 0.1);
    const swordCanvas = document.createElement('canvas');
    swordCanvas.width = 64; swordCanvas.height = 256;
    const sx = swordCanvas.getContext('2d');
    sx.fillStyle = '#5ad8e0'; sx.fillRect(0, 0, 64, 200);
    sx.fillStyle = '#8b6020'; sx.fillRect(0, 200, 64, 56);
    sx.fillStyle = '#fff'; sx.font = 'bold 14px monospace';
    sx.save(); sx.translate(32, 100); sx.rotate(-Math.PI / 2);
    sx.textAlign = 'center'; sx.fillText('ADA COMPLIANCE', 0, 5);
    sx.restore();
    const swordTex = new THREE.CanvasTexture(swordCanvas);
    swordTex.magFilter = THREE.NearestFilter;
    const swordMat = new THREE.MeshLambertMaterial({ map: swordTex });
    const sword = new THREE.Mesh(swordGeo, swordMat);
    sword.position.set(-0.65, 1.4, 0.5);
    sword.rotation.z = -0.3;
    sword.castShadow = true;
    group.add(sword);
  }

  if (opts.holdMic) {
    const micGeo = new THREE.BoxGeometry(0.18, 0.6, 0.18);
    const mic = new THREE.Mesh(micGeo, new THREE.MeshLambertMaterial({ color: '#222' }));
    const micHead = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 8, 6),
      new THREE.MeshLambertMaterial({ color: '#888' })
    );
    micHead.position.y = 0.4;
    mic.add(micHead);
    mic.position.set(0.65, 1.1, 0.4);
    mic.rotation.x = -0.4;
    group.add(mic);
  }

  group.scale.set(scale, scale, scale);
  return group;
}

export function buildPenguin(skin, opts = {}) {
  const group = new THREE.Group();
  const scale = opts.scale || 0.9;

  const bodyGeo = new THREE.BoxGeometry(1, 1.6, 0.9);
  const body = new THREE.Mesh(bodyGeo, chestMaterials(skin.chest, skin.body));
  body.position.y = 0.8;
  body.castShadow = true;
  group.add(body);

  const headGeo = new THREE.BoxGeometry(0.85, 0.85, 0.85);
  const head = new THREE.Mesh(headGeo, faceMaterials(skin.face, skin.body));
  head.position.y = 2.0;
  head.castShadow = true;
  group.add(head);
  group.userData.head = head;

  const wingGeo = new THREE.BoxGeometry(0.2, 1.0, 0.5);
  const wingMat = new THREE.MeshLambertMaterial({ color: skin.arms });
  const wingL = new THREE.Mesh(wingGeo, wingMat);
  wingL.position.set(-0.6, 0.9, 0);
  group.add(wingL);
  const wingR = new THREE.Mesh(wingGeo, wingMat);
  wingR.position.set(0.6, 0.9, 0);
  group.add(wingR);

  const footGeo = new THREE.BoxGeometry(0.3, 0.15, 0.5);
  const footMat = new THREE.MeshLambertMaterial({ color: skin.legs });
  const footL = new THREE.Mesh(footGeo, footMat);
  footL.position.set(-0.25, -0.05, 0.15);
  group.add(footL);
  const footR = new THREE.Mesh(footGeo, footMat);
  footR.position.set(0.25, -0.05, 0.15);
  group.add(footR);

  group.scale.set(scale, scale, scale);
  return group;
}

export function buildTalebDragon(skin) {
  const group = new THREE.Group();

  const bodyGeo = new THREE.BoxGeometry(3.0, 1.8, 5.5);
  const bodyMat = new THREE.MeshLambertMaterial({ color: 0x0a0a14 });
  const body = new THREE.Mesh(bodyGeo, bodyMat);
  body.castShadow = true;
  group.add(body);

  const neckMat = new THREE.MeshLambertMaterial({ color: 0x141420 });
  const neck1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.2, 1.2), neckMat);
  neck1.position.set(0, 0.7, 3.0);
  group.add(neck1);
  const neck2 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), neckMat);
  neck2.position.set(0, 1.2, 3.9);
  group.add(neck2);

  // Big Taleb face — front-facing, oversized so you can see it from the ground
  const headGeo = new THREE.BoxGeometry(2.4, 2.4, 2.4);
  const head = new THREE.Mesh(headGeo, faceMaterials(skin.face, '#d8b193'));
  head.position.set(0, 1.8, 5.0);
  head.castShadow = true;
  group.add(head);
  group.userData.head = head;

  // Side faces also use the Taleb texture so it's recognizable from any angle
  const headSideMat = new THREE.MeshLambertMaterial({ map: skin.face });
  const headSideR = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), headSideMat);
  headSideR.position.set(1.21, 1.8, 5.0);
  headSideR.rotation.y = Math.PI / 2;
  group.add(headSideR);
  const headSideL = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 2.4), headSideMat);
  headSideL.position.set(-1.21, 1.8, 5.0);
  headSideL.rotation.y = -Math.PI / 2;
  group.add(headSideL);

  // Glowing red eyes for menace
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xff3030 });
  const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.05), eyeMat);
  eyeL.position.set(-0.45, 2.0, 6.22);
  group.add(eyeL);
  const eyeR = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.05), eyeMat);
  eyeR.position.set(0.45, 2.0, 6.22);
  group.add(eyeR);

  // Dragon horns
  const hornMat = new THREE.MeshLambertMaterial({ color: 0x1a0a08 });
  const hornL = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.2, 5), hornMat);
  hornL.position.set(-0.9, 3.2, 5.0);
  hornL.rotation.z = 0.3;
  group.add(hornL);
  const hornR = new THREE.Mesh(new THREE.ConeGeometry(0.3, 1.2, 5), hornMat);
  hornR.position.set(0.9, 3.2, 5.0);
  hornR.rotation.z = -0.3;
  group.add(hornR);

  // Tweet symbol floating behind head
  const tweetCanvas = document.createElement('canvas');
  tweetCanvas.width = 128; tweetCanvas.height = 128;
  const tx = tweetCanvas.getContext('2d');
  tx.fillStyle = '#1da1f2';
  tx.font = 'bold 100px sans-serif';
  tx.textAlign = 'center';
  tx.textBaseline = 'middle';
  tx.fillText('𝕏', 64, 70);
  const tweetTex = new THREE.CanvasTexture(tweetCanvas);
  tweetTex.colorSpace = THREE.SRGBColorSpace;
  const tweetSprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tweetTex, transparent: true
  }));
  tweetSprite.scale.set(1.5, 1.5, 1);
  tweetSprite.position.set(0, 4.0, 4.0);
  group.add(tweetSprite);

  const wingMat = new THREE.MeshLambertMaterial({
    color: 0x080810, side: THREE.DoubleSide, transparent: true, opacity: 0.95
  });
  const wingGeo = new THREE.PlaneGeometry(5.5, 3.2);
  const wingL = new THREE.Mesh(wingGeo, wingMat);
  wingL.position.set(-3.2, 1.4, 0);
  wingL.rotation.y = Math.PI / 2;
  group.add(wingL);
  const wingR = new THREE.Mesh(wingGeo, wingMat);
  wingR.position.set(3.2, 1.4, 0);
  wingR.rotation.y = -Math.PI / 2;
  group.add(wingR);
  group.userData.wings = [wingL, wingR];

  // Tail
  for (let i = 0; i < 7; i++) {
    const seg = new THREE.Mesh(
      new THREE.BoxGeometry(0.7 - i * 0.07, 0.7 - i * 0.07, 0.7),
      bodyMat
    );
    seg.position.set(0, 0.3 - i * 0.06, -3.0 - i * 0.65);
    group.add(seg);
  }

  // Legs/claws
  const legGeo = new THREE.BoxGeometry(0.5, 0.9, 0.5);
  for (const [x, z] of [[-1.1, 1.6], [1.1, 1.6], [-1.1, -1.6], [1.1, -1.6]]) {
    const leg = new THREE.Mesh(legGeo, bodyMat);
    leg.position.set(x, -1.1, z);
    group.add(leg);
  }

  return group;
}
