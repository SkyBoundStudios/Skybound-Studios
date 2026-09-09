(function () {
    const storageKey = 'skybound-intro-seen';
    const savedPreference = window.localStorage.getItem(storageKey) === 'true';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const overlay = document.createElement('section');
    overlay.className = 'intro-overlay';
    overlay.setAttribute('aria-label', 'Skybound Studios cinematic introduction');
    overlay.innerHTML = `
        <div class="intro-stage">
            <div class="intro-noise" aria-hidden="true"></div>
            <div class="intro-boot" aria-live="polite">
                <span class="intro-boot-line">INITIALIZING SKYBOUND SYSTEMS...</span>
                <span class="intro-boot-line">CALIBRATING ATMOSPHERIC SENSORS</span>
                <span class="intro-boot-line">FLIGHT NETWORK: ONLINE</span>
            </div>
            <div class="intro-coordinates"><span>LAT 27° 28' 07" N</span><span>LON 153° 01' 48" E</span></div>
            <div class="intro-systems"><span>ALT <b>12,400</b> FT <i></i></span><span>HDG <b>042°</b> <i></i></span><span>SYS <b>NOMINAL</b> <i></i></span></div>
            <div class="intro-hud" aria-hidden="true"><div class="hud-ticks"></div><div class="hud-ring"></div><div class="hud-crosshair"></div><div class="radar-sweep"></div><div class="radar-contact"></div><div class="intro-contact">CONTACT: 01<br>STATUS: TRACKING</div></div>
            <div class="intro-flight" aria-hidden="true"><div class="cloud-bank"></div><div class="intro-aircraft"></div></div>
            <div class="intro-logo" aria-label="Skybound Studios, building the skies of tomorrow."><div class="intro-logo-mark" aria-hidden="true"><span></span><span></span><span></span></div><h1>SKYBOUND STUDIOS</h1><p>BUILDING THE SKIES OF TOMORROW.</p></div>
            <div class="intro-preference"><label><input type="checkbox" name="intro-preference"> AUTO-SKIP NEXT TIME</label></div>
            <button class="intro-skip" type="button">SKIP INTRO <span aria-hidden="true">↗</span></button>
        </div>`;
    document.body.appendChild(overlay);

    let timer;
    const finish = (remember = false) => {
        window.clearTimeout(timer);
        if (remember || overlay.querySelector('[name="intro-preference"]').checked) window.localStorage.setItem(storageKey, 'true');
        overlay.classList.add('is-leaving');
        document.body.classList.remove('intro-active');
        window.setTimeout(() => overlay.remove(), 1200);
    };

    overlay.querySelector('.intro-skip').addEventListener('click', () => finish());
    if (savedPreference || reducedMotion) {
        overlay.classList.add('is-hidden');
        overlay.remove();
        return;
    }

    document.body.classList.add('intro-active');
    const stage = [
        [100, 'is-booting'], [1450, 'is-hud'], [2850, 'is-radar'], [4300, 'is-contact'],
        [5200, 'is-flight'], [7900, 'is-logo']
    ];
    stage.forEach(([delay, className]) => window.setTimeout(() => overlay.classList.add(className), delay));
    timer = window.setTimeout(() => finish(), 10600);
}());