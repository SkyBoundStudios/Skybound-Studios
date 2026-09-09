(function () {
    const storageKey = 'skybound-intro-seen';
    const saved = window.localStorage.getItem(storageKey) === 'true';
    const replayRequested = new URLSearchParams(window.location.search).get('intro') === 'replay';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let overlay;
    let finishTimer;

    function createIntro() {
        overlay = document.createElement('section');
        overlay.className = 'intro-overlay';
        overlay.setAttribute('aria-label', 'Skybound Studios cinematic introduction');
        overlay.innerHTML = `
            <div class="intro-scene">
                <div class="intro-atmosphere" aria-hidden="true"></div>
                <div class="intro-particles" aria-hidden="true"></div>
                <div class="intro-cloud-field" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
                <div class="intro-sunrise" aria-hidden="true"></div>
                <div class="intro-light-path" aria-hidden="true"></div>
                <div class="intro-orbit-line" aria-hidden="true"><i></i></div>
                <div class="intro-logo" aria-label="Skybound Studios, building the skies of tomorrow.">
                    <div class="intro-logo-mark" aria-hidden="true"><span></span><span></span><span></span></div>
                    <h1>SKYBOUND <b>STUDIOS</b></h1>
                    <p>BUILDING THE SKIES OF TOMORROW.</p>
                </div>
                <div class="intro-controls">
                    <label><input type="checkbox" name="intro-remember"> Remember my choice</label>
                    <button class="intro-skip" type="button">SKIP INTRO <span aria-hidden="true">→</span></button>
                </div>
            </div>`;
        document.body.appendChild(overlay);
        overlay.querySelector('.intro-skip').addEventListener('click', () => finish(true));
    }

    function finish(remember) {
        if (!overlay) return;
        window.clearTimeout(finishTimer);
        if (remember || overlay.querySelector('[name="intro-remember"]').checked) window.localStorage.setItem(storageKey, 'true');
        overlay.classList.add('is-exiting');
        document.body.classList.remove('intro-active');
        window.setTimeout(() => {
            overlay.remove();
            overlay = null;
        }, 1300);
    }

    function play() {
        if (overlay) return;
        createIntro();
        document.body.classList.add('intro-active');
        const phases = [
            [100, 'phase-glow'],
            [2000, 'phase-logo-build'],
            [5000, 'phase-clouds'],
            [9000, 'phase-flight'],
            [12000, 'phase-destination'],
            [13200, 'phase-final-logo']
        ];
        phases.forEach(([delay, className]) => window.setTimeout(() => overlay?.classList.add(className), delay));
        finishTimer = window.setTimeout(() => finish(false), 17000);
    }

    window.SkyboundIntro = { replay: play };
    if (reducedMotion || (saved && !replayRequested)) return;
    play();
}());
