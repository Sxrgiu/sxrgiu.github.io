const fs = require('fs');

const links = {
    'Absolute Silence': 'https://buy.stripe.com/28EcMY4cf5wFawJ9Sqdby06',
    'The Void Enjoyer': 'https://buy.stripe.com/4gM9AM5gjgbj20d6Gedby07',
    'The Architect': 'https://buy.stripe.com/cNicMY1032kt34hggOdby08',
    'Digital Air': 'https://buy.stripe.com/3cI6oA6kn1gp20d5Cadby09',
    'A moment of silence': 'https://buy.stripe.com/bJe3co2476AJ7kx5Cadby0a',
    'You made it this far': 'https://buy.stripe.com/cNi8wI5gj8IR48lfcKdby0b',
    'A quiet yes': 'https://buy.stripe.com/14A5kwgZ1e3b34h6Gedby0c',
    'Unseen Effort': 'https://buy.stripe.com/7sY9AM9wze3bdIV3u2dby0e',
    'Intentional Nothing': 'https://buy.stripe.com/fZu00c4cff7ffR36Gedby0f',
    'You noticed this': 'https://buy.stripe.com/6oU00cdMP0cl20d8Omdby0g',
    'A Second of Your Time': 'https://buy.stripe.com/fZueV6bEH6AJ5cpe8Gdby0h',
    'Buy Panic': 'https://buy.stripe.com/28EbIU6kn7ENawJggOdby0i',
    'A Quiet Decision': 'https://buy.stripe.com/00wbIU38b2kteMZd4Cdby0j'
};

const footers = {
    'index.html': 'Creator of Value',
    'vibeful.html': 'Architect of Nothing',
    'moments.html': 'Self-Directed',
    'why.html': 'Silently Built',
    'collection.html': 'Digital Archivist',
    'animation.html': 'Observer',
    'vanishing.html': 'Timekeeper',
    'play.html': 'Player One'
};

function processHtml(file) {
    if(!fs.existsSync(file)) return;
    let content = fs.readFileSync(file, 'utf-8');
    
    if(file === 'index.html') {
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header">Absolute Silence<\/div>/i, `data-link="${links['Absolute Silence']}"$1<div class="tier-header">Absolute Silence</div>`);
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header text-white">The Void Enjoyer<\/div>/i, `data-link="${links['The Void Enjoyer']}"$1<div class="tier-header text-white">The Void Enjoyer</div>`);
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header">The Architect<\/div>/i, `data-link="${links['The Architect']}"$1<div class="tier-header">The Architect</div>`);
    } else if(file === 'vibeful.html') {
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header">Digital Air<\/div>/i, `data-link="${links['Digital Air']}"$1<div class="tier-header">Digital Air</div>`);
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header">A moment of silence<\/div>/i, `data-link="${links['A moment of silence']}"$1<div class="tier-header">A moment of silence</div>`);
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header">You made it this far<\/div>/i, `data-link="${links['You made it this far']}"$1<div class="tier-header">You made it this far</div>`);
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header text-white">A quiet yes<\/div>/i, `data-link="${links['A quiet yes']}"$1<div class="tier-header text-white">A quiet yes</div>`);
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header">Intentional Nothing<\/div>/i, `data-link="${links['Intentional Nothing']}"$1<div class="tier-header">Intentional Nothing</div>`);
        content = content.replace(/data-link="[^"]*"([\s\S]*?)<div class="tier-header">Unseen Effort<\/div>/i, `data-link="${links['Unseen Effort']}"$1<div class="tier-header">Unseen Effort</div>`);
    } else if (file === 'moments.html') {
        content = content.replace(/data-link="[^"]*"[\s\S]*?<div class="tier-header">A Second of Your Time<\/div>/ig, match => match.replace(/data-link="[^"]*"/, `data-link="${links['A Second of Your Time']}"`));
    } else if (file === 'collection.html') {
        content = content.replace(/data-link="[^"]*"[\s\S]*?<div class="tier-header">A Quiet Decision<\/div>/ig, match => match.replace(/data-link="[^"]*"/, `data-link="${links['A Quiet Decision']}"`));
    } else if (file === 'animation.html') {
        content = content.replace(/data-link="[^"]*"[\s\S]*?<div class="tier-header">You noticed this<\/div>/ig, match => match.replace(/data-link="[^"]*"/, `data-link="${links['You noticed this']}"`));
    } else if (file === 'vanishing.html') {
        content = content.replace(/onclick="window\.location\.href='[^']*'"/ig, `onclick="window.location.href='${links['Buy Panic']}'"`);
    }

    const footerRole = footers[file] || 'Creator of Value';
    const footerHtml = `<div class="site-footer">
        <span class="footer-center">Made by Sxrgiu</span>
        <span class="footer-role">${footerRole}</span>
    </div>`;

    if(!content.includes('site-footer')) {
        content = content.replace(/<div id="google_translate_element"/, `${footerHtml}\n<div id="google_translate_element"`);
    }

    if(file === 'index.html' && !content.includes('sale-popup-overlay')) {
        const popupHtml = `
            <div class="sale-popup-overlay" id="salePopup">
                <div class="sale-popup">
                    <span class="popup-close" onclick="document.getElementById('salePopup').style.opacity='0'; setTimeout(()=>document.getElementById('salePopup').style.display='none',300)">&times;</span>
                    <h3>There's a sale.</h3>
                    <div class="sale-prices">
                        <span class="old-price">$10.00</span>
                        <span class="new-price">$0.50</span>
                    </div>
                    <div class="tier-desc">An entirely fictional discount for a fictional product.</div>
                    <button class="action-btn solid-btn" onclick="window.location.href='${links['Digital Air']}'">Claim</button>
                </div>
            </div>
            <script>
                setTimeout(() => {
                    const el = document.getElementById('salePopup');
                    el.style.display = 'flex';
                    setTimeout(() => el.style.opacity = '1', 10);
                }, 4000);
            </script>
        `;
        content = content.replace(/<div id="google_translate_element"/, `${popupHtml}\n<div id="google_translate_element"`);
    }

    if (!content.includes('>Play</a>')) {
        content = content.replace(/<a href="why.html"/g, '<a href="play.html">Play</a>\n        <a href="why.html"');
    }

    fs.writeFileSync(file, content);
}

['index.html', 'vibeful.html', 'moments.html', 'collection.html', 'animation.html', 'vanishing.html', 'why.html'].forEach(processHtml);
console.log('Update complete.');
