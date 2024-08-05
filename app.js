let signaturePad1 = null;
let signaturePad2 = null;
let isSignaturePad1Enabled = true;
let isSignaturePad2Enabled = true;

function resizeCanvas(canvas) {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = canvas.clientWidth * ratio;
    canvas.height = canvas.clientHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
}

window.addEventListener('load', () => {
    const canvas1 = document.getElementById('signature-canvas');
    const canvas2 = document.getElementById('signature-canvas1');

    resizeCanvas(canvas1);
    resizeCanvas(canvas2);

    signaturePad1 = new SignaturePad(canvas1, {
        onEnd: () => console.log('Firma RECEPTOR terminada'),
        penColor: 'black'
    });

    signaturePad2 = new SignaturePad(canvas2, {
        onEnd: () => console.log('Firma EMISOR terminada'),
        penColor: 'black'
    });

    // Agrega soporte para eventos táctiles en dispositivos móviles
    canvas1.addEventListener('touchstart', (event) => handleTouch(event, signaturePad1, isSignaturePad1Enabled), { passive: true });
    canvas1.addEventListener('touchmove', (event) => handleTouch(event, signaturePad1, isSignaturePad1Enabled), { passive: true });
    canvas1.addEventListener('touchend', (event) => handleTouch(event, signaturePad1, isSignaturePad1Enabled), { passive: true });

    canvas2.addEventListener('touchstart', (event) => handleTouch(event, signaturePad2, isSignaturePad2Enabled), { passive: true });
    canvas2.addEventListener('touchmove', (event) => handleTouch(event, signaturePad2, isSignaturePad2Enabled), { passive: true });
    canvas2.addEventListener('touchend', (event) => handleTouch(event, signaturePad2, isSignaturePad2Enabled), { passive: true });
});

window.addEventListener('resize', () => {
    const canvas1 = document.getElementById('signature-canvas');
    const canvas2 = document.getElementById('signature-canvas1');

    resizeCanvas(canvas1);
    resizeCanvas(canvas2);
});

function handleTouch(event, signaturePad, isEnabled) {
    if (isEnabled) {
        signaturePad.handleEvent(event);
    }
}

function toggleSignature(canvasId, enable) {
    if (canvasId === 'signature-canvas') {
        isSignaturePad1Enabled = enable;
    } else if (canvasId === 'signature-canvas1') {
        isSignaturePad2Enabled = enable;
    }
}

function clearSignature(canvasId) {
    const signaturePad = canvasId === 'signature-canvas' ? signaturePad1 : signaturePad2;
    if (signaturePad) {
        signaturePad.clear();
    }
}

function saveSignatures() {
    const signature1 = signaturePad1.toDataURL();
    const signature2 = signaturePad2.toDataURL();

    // Aquí puedes manejar las firmas, por ejemplo, enviarlas a un servidor
    console.log('Firma RECEPTOR:', signature1);
    console.log('Firma EMISOR:', signature2);
}


function handleTouch(event, signaturePad, isEnabled) {
    if (isEnabled) {
        signaturePad.handleEvent(event);
    }
}

function toggleSignature(canvasId, enable) {
    if (canvasId === 'signature-canvas') {
        isSignaturePad1Enabled = enable;
    } else if (canvasId === 'signature-canvas1') {
        isSignaturePad2Enabled = enable;
    }
}

function clearSignature(canvasId) {
    const signaturePad = canvasId === 'signature-canvas' ? signaturePad1 : signaturePad2;
    if (signaturePad) {
        signaturePad.clear();
    }
}

function saveSignatures() {
    const signature1 = signaturePad1.toDataURL();
    const signature2 = signaturePad2.toDataURL();

    // Aquí puedes manejar las firmas, por ejemplo, enviarlas a un servidor
    console.log('Firma RECEPTOR:', signature1);
    console.log('Firma EMISOR:', signature2);
}


