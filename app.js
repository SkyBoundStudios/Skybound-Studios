const navItems = [
    ['home', 'Home'], ['projects', 'Projects'], ['skybound', 'Skybound'], ['development', 'Development'],
    ['team', 'Team'], ['media', 'Media'], ['community', 'Community'], ['join-us', 'Join Us']
];

const image = (src, alt) => `<img src="${src}" alt="${alt}" loading="lazy">`;
const stock = {
    flight: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
    aircraft: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&w=1200&q=80',
    cockpit: 'https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?auto=format&fit=crop&w=1200&q=80',
    mountains: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    cloud: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1200&q=80',
    runway: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?auto=format&fit=crop&w=1200&q=80'
};

function pageHero(eyebrow, title, intro) { return `<section class="page-hero"><div class="reveal"><div class="eyebrow">${eyebrow}</div><h1 class="page-title">${title}</h1><p class="page-intro">${intro}</p></div></section>`; }
function sectionHead(eyebrow, title, link = '') { return `<div class="section-head"><div><div class="eyebrow">${eyebrow}</div><h2>${title}</h2></div>${link ? `<a class="text-link" href="${link[0]}">${link[1]} ↗</a>` : ''}</div>`; }
function callout(title, href = '#contact', label = 'Start a conversation') { return `<div class="callout"><h2>${title}</h2><a class="button" href="${href}">${label} <span>↗</span></a></div>`; }

function home() { return `
<section class="hero hero-home"><div class="hero-atmosphere" aria-hidden="true"><span></span><span></span><span></span></div><div class="hero-aircraft" aria-hidden="true"><span></span></div><div class="hero-content reveal"><div class="eyebrow">Skybound Studios / 01</div><h1>SKYBOUND <span>STUDIOS</span></h1><p class="hero-lead">Building the skies of tomorrow.</p><p class="hero-support">An independent game studio creating immersive worlds, meaningful movement, and a new perspective on flight.</p><div class="actions"><a class="button" href="#skybound">Explore Skybound <span>→</span></a><a class="button secondary" href="#team">Our studio <span>→</span></a></div></div><div class="hero-meta"><div><span class="stat-value">SKY / 001</span><span class="stat-label">Flagship project</span></div><div><span class="stat-value">2026</span><span class="stat-label">Current flight plan</span></div><div><span class="stat-value">EARTH</span><span class="stat-label">Home base</span></div></div><div class="hero-scroll">Scroll to explore <span>↓</span></div></section>
<section class="section section-dark featured-section"><div class="section-head"><div><div class="eyebrow">Featured project / 02</div><h2>The freedom to<br>explore the sky.</h2></div><span class="section-index">SKYBOUND / 001</span></div><div class="project-feature"><div class="project-visual"><span class="visual-label">Skybound / flight deck 01</span><span class="project-status">In development</span></div><div class="project-copy"><div class="eyebrow">Flagship flight simulation</div><h3>SKYBOUND</h3><p>Skybound is an ambitious flight simulation experience focused on immersive aviation, detailed environments, and the freedom to explore the skies.</p><ul class="feature-list"><li>Authentic flight systems</li><li>Hand-crafted world</li><li>Shared skies</li><li>Build your story</li></ul><a class="button" href="#skybound">Explore project <span>→</span></a></div></div><div class="feature-strip">${homeFeatures.map((feature, index) => `<article class="feature-card"><span class="feature-icon" aria-hidden="true">${feature.icon}</span><span class="card-number">0${index + 1}</span><h3>${feature.title}</h3><p>${feature.description}</p></article>`).join('')}</div></section>
<section class="section updates-section"><div class="section-head"><div><div class="eyebrow">From the hangar / 03</div><h2>Latest development</h2></div><a class="text-link" href="#development">View all updates →</a></div><div class="update-grid">${developmentUpdates.map(update => `<article class="update-card"><div class="update-meta"><span>${update.date}</span><span>${update.category}</span></div><h3>${update.title}</h3><p>${update.description}</p><a class="text-link" href="#development">Read update →</a></article>`).join('')}</div></section>
<section class="section studio-section"><div class="studio-copy"><div class="eyebrow">The studio / 04</div><h2>We build experiences above the ordinary.</h2><p>Skybound Studios is an independent game development studio focused on creating immersive games and experiences with a strong sense of place, movement, and possibility.</p><a class="button secondary" href="#team">Meet the team <span>→</span></a></div><div class="studio-orbit" aria-hidden="true"><span>SKYBOUND<br>STUDIOS</span></div></section>
<section class="section team-preview-section section-dark"><div class="section-head"><div><div class="eyebrow">The crew / 05</div><h2>People behind<br>the horizon.</h2></div><a class="text-link" href="#team">Meet the team →</a></div><div class="team-preview">${teamMembers.map((member, index) => `<article class="team-preview-card"><div class="avatar" aria-hidden="true">${member.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase()}</div><span class="card-number">0${index + 1}</span><h3>${member.name}</h3><p>${member.role}</p></article>`).join('')}</div></section>
<section class="community-section"><div class="community-glow" aria-hidden="true"></div><div class="eyebrow">Community frequency / 06</div><h2>Join the flight.</h2><p>Follow the build, share your skies, and help shape what comes next.</p><div class="actions"><a class="button" href="#community">Discord <span>→</span></a><a class="button secondary" href="#media">YouTube <span>→</span></a></div><a class="community-email" href="mailto:${contactEmail}">${contactEmail}</a></section>`; }

const pages = {
    projects: () => pageHero('Our work / 02', 'Worlds worth exploring.', 'We make games about movement, discovery, and the quiet thrill of finding your way. Skybound is our first flight plan.') + `<section class="section">${sectionHead('Current projects', 'One project. A lot of sky.') }<div class="project-feature"><div class="project-visual"></div><div class="project-copy"><div class="eyebrow">Flagship / active</div><h3>SKYBOUND</h3><p>Take the controls in a flight simulation built around craft, exploration, and a world that rewards your attention.</p><a class="button" href="#skybound">Project details <span>↗</span></a></div></div></section>` + `<section class="section section-dark">${callout('The best stories start with a departure.')}</section>`,
    skybound: () => pageHero('Project skybound / 03', 'The sky is yours.', 'Skybound is an approachable, deeply considered flight simulation about mastering the machine and making a life above the clouds.') + `<section class="section"><div class="content-grid"><div class="info-block"><div class="eyebrow">01 / Overview</div><h3>Find your rhythm.</h3><p>From the first engine start to a long-haul journey through changing weather, every flight is a chance to learn the world.</p></div><div class="info-block"><div class="eyebrow">02 / World</div><h3>A living horizon.</h3><p>Explore dramatic coastlines, quiet airfields, and expansive weather systems shaped by the choices you make.</p></div><div class="info-block"><div class="eyebrow">03 / Status</div><h3>In active development.</h3><p>We are currently building the core flight model, world systems, and the first playable region.</p></div></div></section><section class="section section-dark">${sectionHead('Core systems', 'Built for the long way around.')}<div class="content-grid"><div class="dark-card"><span class="card-number">SYSTEM 01</span><h3>Feel the aircraft.</h3><p>Weight, energy, and weather come together in a flight model that asks you to stay present.</p></div><div class="dark-card"><span class="card-number">SYSTEM 02</span><h3>Read the world.</h3><p>Plan your route by landmarks, instruments, and the changing conditions around you.</p></div><div class="dark-card"><span class="card-number"> SYSTEM 03</span><h3>Make it yours.</h3><p>Shape your aircraft with liveries, loadouts, and the stories you collect along the way.</p></div></div></section><section class="section">${sectionHead('The flight deck', 'A world in progress.')}<div class="gallery"><div class="gallery-item">${image(stock.flight, 'Airliner above the clouds')}<span class="gallery-caption">High altitude / 001</span></div><div class="gallery-item">${image(stock.mountains, 'Mountain range')}<span class="gallery-caption">Frontier / 002</span></div><div class="gallery-item">${image(stock.cockpit, 'Aircraft cockpit')}<span class="gallery-caption">Cockpit / 003</span></div></div></section><section class="section section-dark">${sectionHead('Roadmap', 'The flight plan.')}<div class="timeline"><div class="timeline-item"><time>Q3 2026 / CURRENT</time><h3>Core flight systems</h3><p>Aircraft handling, weather foundation, and the first airfield experience.</p></div><div class="timeline-item"><time>Q4 2026</time><h3>First region</h3><p>Our initial handcrafted map, navigation tools, and expanded aircraft systems.</p></div><div class="timeline-item"><time>2027 / NEXT</time><h3>Shared skies</h3><p>Community testing, multiplayer foundations, and more ways to make the world yours.</p></div></div></section>`,
    development: () => pageHero('Studio signal / 04', 'The work behind the wonder.', 'We share the process as we go: the experiments, the breakthroughs, and the things that need another pass.') + `<section class="section">${sectionHead('Progress report', 'Current flight status.')}<div class="content-grid"><div class="dark-card"><span class="card-number">FLIGHT MODEL</span><div class="progress-row"><div class="progress-label"><span>Core systems</span><span>72%</span></div><div class="progress"><span style="width:72%"></span></div></div><p>Handling, propulsion, and instrument foundations are in place.</p></div><div class="dark-card"><span class="card-number">WORLD BUILDING</span><div class="progress-row"><div class="progress-label"><span>First region</span><span>38%</span></div><div class="progress"><span style="width:38%"></span></div></div><p>Terrain, weather, and points of interest are taking shape.</p></div><div class="dark-card"><span class="card-number">COMMUNITY</span><div class="progress-row"><div class="progress-label"><span>Playtest prep</span><span>24%</span></div><div class="progress"><span style="width:24%"></span></div></div><p>We are building the feedback loops that will help us fly further.</p></div></div></section><section class="section section-dark">${sectionHead('Dev log', 'Notes from the cockpit.')}<div class="update-grid"><article class="update-card"><span class="card-number">14 / 08.26</span><h3>Reading the weather</h3><p>Atmosphere is more than a backdrop. It is an active part of every flight.</p></article><article class="update-card"><span class="card-number">06 / 07.26</span><h3>Inside the cockpit</h3><p>Designing information that helps without getting in the way of the view.</p></article><article class="update-card"><span class="card-number">21 / 06.26</span><h3>Building a runway</h3><p>What makes an airfield feel like a place, not just a point on a map.</p></article></div></section><section class="section">${callout('Follow the build from the front row.', '#community', 'Join the community')}</section>`,
    team: () => pageHero('The crew / 05', 'Small team. Big horizon.', 'We are a distributed group of artists, designers, engineers, and lifelong aviation obsessives.') + `<section class="section"><div class="content-grid"><article class="team-card"><div class="avatar">JM</div><h3>Jamie Morgan</h3><p>Creative Director / Studio</p></article><article class="team-card"><div class="avatar">AS</div><h3>Alex Soto</h3><p>Technical Director / Engineering</p></article><article class="team-card"><div class="avatar">RK</div><h3>Riley Kim</h3><p>World Lead / Environment</p></article><article class="team-card"><div class="avatar">NP</div><h3>Noah Patel</h3><p>Aircraft Designer / Art</p></article><article class="team-card"><div class="avatar">EL</div><h3>Emery Lee</h3><p>Community Lead / Studio</p></article><article class="team-card"><div class="avatar">YOU?</div><h3>Your name here</h3><p>Maybe / Your department</p></article></div></section><section class="section section-dark">${callout('Bring your point of view.', '#join-us', 'See open roles')}</section>`,
    media: () => pageHero('Media library / 06', 'A glimpse beyond the wing.', 'Press assets, concept work, and moments from the world we are building. More will land here as Skybound gets closer to takeoff.') + `<section class="section"><div class="gallery"><div class="gallery-item">${image(stock.flight, 'Aircraft in flight')}<span class="gallery-caption">Skybound / Screenshot 01</span></div><div class="gallery-item">${image(stock.aircraft, 'Aircraft wing')}<span class="gallery-caption">Aircraft / Render 01</span></div><div class="gallery-item">${image(stock.mountains, 'Mountain valley')}<span class="gallery-caption">World / Concept 01</span></div><div class="gallery-item">${image(stock.cockpit, 'Flight cockpit')}<span class="gallery-caption">Systems / Screenshot 02</span></div><div class="gallery-item">${image(stock.cloud, 'Clouds from above')}<span class="gallery-caption">Atmosphere / Study 01</span></div><div class="gallery-item">${image(stock.runway, 'Runway')}<span class="gallery-caption">Airfield / Concept 02</span></div></div></section><section class="section section-dark">${sectionHead('Watch this space', 'The next transmission is coming.')}<div class="content-grid"><div class="dark-card"><span class="card-number">VIDEO / 001</span><h3>Teaser placeholder</h3><p>A first look at the feeling of Skybound. Coming when it is ready.</p></div><div class="dark-card"><span class="card-number">VIDEO / 002</span><h3>Dev diary placeholder</h3><p>Stories from the people making the systems and the spaces.</p></div></div></section>`,
    community: () => pageHero('Community frequency / 07', 'Find your flight crew.', 'The best part of building Skybound is sharing the process with people who care about the details.') + `<section class="section"><div class="content-grid"><div class="dark-card"><div class="eyebrow">Discord / Live</div><h3>Pull up a chair.</h3><p>Share your screenshots, ask questions, and help us shape the future of Skybound.</p><a class="button" href="#contact">Join Discord <span>↗</span></a></div><div class="dark-card"><div class="eyebrow">YouTube / Watch</div><h3>See the work.</h3><p>Development updates, flight tests, and conversations from inside the studio.</p><a class="button" href="#media">Visit channel <span>↗</span></a></div><div class="dark-card"><div class="eyebrow">Signal / Send</div><h3>Tell us what you think.</h3><p>Feedback and bug reports help us make a better, more generous flight experience.</p><a class="button" href="#contact">Send feedback <span>↗</span></a></div></div></section><section class="section section-dark">${sectionHead('Community updates', 'The latest from the channel.')}<div class="update-grid"><article class="update-card"><span class="card-number">COMMUNITY / 009</span><h3>Playtest planning</h3><p>We are building a small, thoughtful first test. Here is what we are looking for.</p></article><article class="update-card"><span class="card-number">COMMUNITY / 008</span><h3>Show us your skies</h3><p>Share the view that made you fall in love with flight.</p></article></div></section>`,
    'join-us': () => pageHero('Careers / 08', 'Come build the view.', 'We are looking for thoughtful collaborators who care about craft, curiosity, and making games with a point of view.') + `<section class="section"><div class="section-head"><div><div class="eyebrow">Open roles</div><h2>Bring your specialty.</h2></div></div><div class="role-grid">${['Aircraft Designers','Livery & Texture Artists','Terrain Designers','Unreal Engine Developers','Game Designers','Media Creators'].map((role, i) => `<article class="role-card"><div><h3>${role}</h3><p>Skybound / Remote-friendly</p></div><span>0${i + 1} ↗</span></article>`).join('')}</div></section><section class="section section-dark">${callout('No role for you yet? Say hello anyway.', '#contact', 'Contact the studio')}</section>`,
    contact: () => pageHero('Open channel / 09', 'Let’s talk flight.', 'For press, collaboration, community, or just a good aviation story, send a signal our way.') + `<section class="section"><div class="content-grid"><div class="info-block"><div class="eyebrow">General</div><h3>hello@skybound.studio</h3><p>Studio questions, partnerships, and everything in between.</p></div><div class="info-block"><div class="eyebrow">Press</div><h3>press@skybound.studio</h3><p>Assets, interviews, and coverage requests.</p></div><div class="info-block"><div class="eyebrow">Community</div><h3>community@skybound.studio</h3><p>Feedback, bugs, and your best screenshot.</p></div></div></section><section class="section section-dark"><div class="dark-card"><div class="eyebrow">Message center</div><h3>We are keeping the inbox human.</h3><p>For now, email is the best way to reach the team. We read everything and reply when we can.</p><a class="button" href="mailto:hello@skybound.studio">Compose email <span>↗</span></a></div></section>`
};

const contactEmail = 'skyboundstudios@outlook.com';
const teamMembers = [
    { name: 'Alex Cook', role: 'Founder / Developer', department: 'Development', description: "Founder of Skybound Studios and involved in the development and direction of the studio's projects." },
    { name: 'Alex Trimble', role: 'Team Member', department: 'Development', description: 'Member of the Skybound Studios development team.' },
    { name: 'Neo.Aviation', role: 'Team Member', department: 'Aviation / Development', description: 'Member of the Skybound Studios team with an interest in aviation and flight simulation.' }
];
const homeFeatures = [
    { icon: '✈', title: 'Flight', description: 'Immersive aviation and flight systems.' },
    { icon: '◎', title: 'World', description: 'A large world built for exploration.' },
    { icon: '⌁', title: 'Aircraft', description: 'Detailed aircraft and aviation experiences.' },
    { icon: '✦', title: 'Development', description: 'An actively evolving project with regular updates.' }
];
const developmentUpdates = [
    { date: '14 / 08.26', category: 'DEV LOG', title: 'Reading the weather', description: 'Atmosphere is more than a backdrop. It is an active part of every flight.' },
    { date: '06 / 07.26', category: 'FIELD NOTES', title: 'Inside the cockpit', description: 'Designing information that helps without getting in the way of the view.' },
    { date: '21 / 06.26', category: 'WORLD BUILDING', title: 'Building a runway', description: 'What makes an airfield feel like a place, not just a point on a map.' }
];

pages.team = () => pageHero('The crew / 05', 'Small team. Big horizon.', 'We are a focused group of developers and aviation enthusiasts building the future of flight.') + `<section class="section"><div class="team-grid">${teamMembers.map((member, index) => `<article class="team-card"><div class="avatar" aria-hidden="true">${member.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase()}</div><div class="team-card-number">0${index + 1}</div><h3>${member.name}</h3><p class="team-role">${member.role}</p><p class="team-department">${member.department}</p><p class="team-description">${member.description}</p></article>`).join('')}</div></section>` + `<section class="section section-dark">${callout('Bring your point of view.', '#join-us', 'See open roles')}</section>`;
pages.contact = () => pageHero('Open channel / 09', 'Let’s talk flight.', 'For press, collaboration, community, or just a good aviation story, send a signal our way.') + `<section class="section"><div class="contact-card"><div class="eyebrow">Official studio contact</div><h2><a href="mailto:${contactEmail}">${contactEmail}</a></h2><p>For studio questions, partnerships, press, community feedback, and everything in between.</p><a class="button" href="mailto:${contactEmail}">Compose email <span>↗</span></a></div></section>`;

function renderNav(route) {
    const projectsActive = route === 'projects' || route === 'skybound';
    document.querySelector('.site-nav').innerHTML = `
        <a href="#home" ${route === 'home' ? 'aria-current="page"' : ''}>Home</a>
        <div class="nav-dropdown">
            <button class="nav-dropdown-toggle" type="button" aria-expanded="false" aria-haspopup="true" ${projectsActive ? 'aria-current="page"' : ''}>Projects <span aria-hidden="true">⌄</span></button>
            <div class="nav-dropdown-menu">
                <a href="#projects" ${route === 'projects' ? 'aria-current="page"' : ''}><span>01</span>Projects</a>
                <a href="#skybound" ${route === 'skybound' ? 'aria-current="page"' : ''}><span>02</span>Skybound</a>
            </div>
        </div>
        ${[['development', 'Development'], ['team', 'Team'], ['media', 'Media'], ['community', 'Community']].map(([id, label]) => `<a href="#${id}" ${route === id ? 'aria-current="page"' : ''}>${label}</a>`).join('')}
        <a class="mobile-join" href="#join-us" ${route === 'join-us' ? 'aria-current="page"' : ''}>Join Us <span aria-hidden="true">→</span></a>`;
    document.querySelector('.header-cta').href = '#join-us';
}
function render() {
    const requested = window.location.hash.slice(1) || 'home';
    const route = requested === 'about' ? 'team' : requested;
    const renderer = route === 'home' ? home : pages[route] || home;
    renderNav(route);
    document.querySelector('#app').innerHTML = renderer();
    document.querySelectorAll('#app .section, #app .community-section').forEach(section => section.classList.add('scroll-reveal'));
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                revealObserver.unobserve(entry.target);
            }
        }), { threshold: 0.12 });
        document.querySelectorAll('#app .scroll-reveal').forEach(section => revealObserver.observe(section));
    }
    document.title = route === 'home' ? 'Skybound Studios | Building the skies of tomorrow.' : `${navItems.find(item => item[0] === route)?.[1] || 'Contact'} | Skybound Studios`;
    document.querySelector('#app').focus({ preventScroll: true });
    document.querySelector('.site-nav').classList.remove('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', 'false');
    document.querySelector('.menu-toggle').setAttribute('aria-label', 'Open navigation');
    window.scrollTo(0, 0);
}

document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('.site-nav');
    const open = nav.classList.toggle('open');
    document.querySelector('.menu-toggle').setAttribute('aria-expanded', String(open));
    document.querySelector('.menu-toggle').setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
document.querySelector('[data-header]').addEventListener('click', (event) => {
    const toggle = event.target.closest('.nav-dropdown-toggle');
    if (!toggle) return;
    const dropdown = toggle.closest('.nav-dropdown');
    const open = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
});
document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-dropdown')) {
        document.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
            dropdown.classList.remove('open');
            dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
        });
    }
});
document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    document.querySelectorAll('.nav-dropdown.open').forEach(dropdown => {
        dropdown.classList.remove('open');
        dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', 'false');
    });
});
const header = document.querySelector('[data-header]');
const updateHeaderState = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();
window.addEventListener('hashchange', render);
render();
