let currentTheme = 'light';
let filteredServices = [...services];

const pageContent = document.getElementById('page-content');

async function loadPage(filePath, isHomePage = false) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Could not load page: ${filePath}`);
        }
        const html = await response.text();
        pageContent.innerHTML = html;
        window.scrollTo(0, 0);

        // If the loaded page is the home page, initialize its specific JS
        if (isHomePage) {
            initializeHomePage();
        }
    } catch (error) {
        console.error('Failed to load page:', error);
        pageContent.innerHTML = `<div class="container"><p>Error: Could not load content. Please try again later.</p></div>`;
    }
}

function initializeHomePage() {
    // Add event listeners for controls on the home page
    document.getElementById('categoryFilter').addEventListener('change', filterAndSort);
    document.getElementById('tagFilter').addEventListener('change', filterAndSort);
    document.getElementById('sortBy').addEventListener('change', filterAndSort);
    document.querySelector('.theme-toggle').addEventListener('click', toggleTheme);
    // Restore theme preference
    document.body.setAttribute('data-theme', currentTheme);
    document.querySelector('.theme-toggle').textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';

    filterAndSort();
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.setAttribute('data-theme', currentTheme);

    const button = document.querySelector('.theme-toggle');
    button.textContent = currentTheme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

function animateHomeBars() {
    const ratingFills = document.querySelectorAll('#servicesGrid .rating-fill');
    ratingFills.forEach(fill => {
        fill.style.width = '0%';
    });

    setTimeout(() => {
        document.querySelectorAll('#servicesGrid .service-card').forEach(card => {
            const serviceName = card.dataset.name;
            const service = services.find(s => s.name === serviceName);
            if (service) {
                const fill = card.querySelector('.rating-fill');
                const width = service.rating >= 10 ? 100 : (service.rating / 10) * 100;
                fill.style.width = width + '%';
            }
        });
    }, 100);
}

function getTags(service) {
    const tags = [];
    if (service.fiveEyes) tags.push({ class: 'five-eyes', text: '5 Eyes' });
    if (service.nineEyes) tags.push({ class: 'nine-eyes', text: '9 Eyes' });
    if (service.fourteenEyes) tags.push({ class: 'fourteen-eyes', text: '14 Eyes' });
    if (service.torAvailable) tags.push({ class: 'tor-available', text: 'Tor' });
    if (service.openSource) tags.push({ class: 'open-source', text: 'Fully Open Source' });
    if (service.partiallyOpenSource) tags.push({ class: 'partially-open-source', text: 'Partially Open Source' });
    if (!service.ads) tags.push({ class: 'no-ads', text: 'No Ads' });
    if (service.endToEndEncrypted) tags.push({ class: 'e2e-encrypted', text: 'E2E Encrypted' });
    return tags;
}

function createServiceCard(service) {
    const card = document.createElement('div');
    card.className = 'service-card';
    card.setAttribute('data-name', service.name);
    card.setAttribute('data-category', service.category);
    card.setAttribute('data-rating', service.rating);
    // The onclick now loads the specific page for the service
    card.onclick = () => loadPage(service.detailPage);

    // --- UPDATED: More robust logic for displaying category names ---
    let categoryDisplay = 'Service'; // Default fallback
    switch (service.category) {
        case 'social':
            categoryDisplay = 'Social Media';
            break;
        case 'messaging':
            categoryDisplay = 'Messaging';
            break;
        case 'search':
            categoryDisplay = 'Search Engine';
            break;
    }
    // --- END OF UPDATE ---

    const tags = getTags(service);
    const tagElements = tags.map(tag => `<span class="tag ${tag.class}">${tag.text}</span>`).join('');

    const alarmClass = service.rating >= 11 ? 'rating-alarm' : '';

    card.innerHTML = `
        <div class="service-header">
            <h3 class="service-name">${service.name}</h3>
            <span class="service-category">${categoryDisplay}</span>
        </div>

        <div class="rating-container">
            <div class="rating-label">
                <span>Privacy Rating</span>
                <span><strong>${service.rating}/10</strong></span>
            </div>
            <div class="rating-bar">
                <div class="rating-fill rating-${service.rating} ${alarmClass}" style="width: 0%"></div>
            </div>
        </div>

        <div class="service-details">
            <div class="detail-item"><span class="detail-label">Free:</span><span>${service.free ? '✅' : '❌'}</span></div>
            <div class="detail-item"><span class="detail-label">Fully Open Source:</span><span>${service.openSource ? '✅' : '❌'}</span></div>
            <div class="detail-item"><span class="detail-label">Ads:</span><span>${service.ads ? '✅' : '❌'}</span></div>
            
            <!-- --- UPDATED: E2E icon logic now includes Snapchat --- -->
            <div class="detail-item"><span class="detail-label">E2E Encrypted:</span><span>${['Discord', 'Snapchat'].includes(service.name) ? '🟡' : (service.endToEndEncrypted ? '✅' : '❌')}</span></div>
            <!-- --- END OF UPDATE --- -->
        </div>

        <div class="tags-container">${tagElements}</div>
        <div class="service-description">${service.description}</div>
    `;
    return card;
}

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    grid.innerHTML = '';

    filteredServices.forEach(service => {
        const card = createServiceCard(service);
        grid.appendChild(card);
    });

    animateHomeBars();
}

function updateStats() {
    const totalServicesEl = document.getElementById('totalServices');
    const averageRatingEl = document.getElementById('averageRating');

    if (!totalServicesEl || !averageRatingEl) return;

    const totalServices = filteredServices.length;
    const averageRating = totalServices > 0 ? (filteredServices.reduce((sum, s) => sum + s.rating, 0) / totalServices).toFixed(1) : '0.0';

    totalServicesEl.textContent = totalServices;
    averageRatingEl.textContent = averageRating;
}

function hasTag(service, tag) {
    switch(tag) {
        case 'five-eyes': return service.fiveEyes;
        case 'nine-eyes': return service.nineEyes;
        case 'fourteen-eyes': return service.fourteenEyes;
        case 'tor': return service.torAvailable;
        case 'open-source': return service.openSource;
        case 'partially-open-source': return service.partiallyOpenSource;
        case 'no-ads': return !service.ads;
        case 'e2e-encrypted': return service.endToEndEncrypted;
        default: return false;
    }
}

function filterAndSort() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const tagFilter = document.getElementById('tagFilter').value;
    const sortBy = document.getElementById('sortBy').value;

    filteredServices = services.filter(service => {
        const categoryMatch = categoryFilter === 'all' || service.category === categoryFilter;
        const tagMatch = tagFilter === 'all' || hasTag(service, tagFilter);
        return categoryMatch && tagMatch;
    });

    filteredServices.sort((a, b) => {
        switch(sortBy) {
            case 'rating-desc':
                return b.rating - a.rating || a.name.localeCompare(b.name);
            case 'rating-asc':
                return a.rating - b.rating || a.name.localeCompare(b.name);
            case 'popularity':
                return b.popularity - a.popularity;
            case 'alphabetical':
                return a.name.localeCompare(b.name);
            default:
                return 0;
        }
    });

    renderServices();
    updateStats();
}

// Initial page load
document.addEventListener('DOMContentLoaded', () => {
    loadPage('pages/home.html', true);
});
