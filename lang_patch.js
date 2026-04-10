const fs = require('fs');

const htmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));

htmlFiles.forEach(f => {
    let content = fs.readFileSync(f, 'utf-8');

    if (!content.includes('google_translate_element')) {
        const gt_script = `<div id="google_translate_element" style="display:none;"></div>
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,fr,es', autoDisplay: false}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>`;
        content = content.replace('</body>', gt_script);
    }

    if (!content.includes('lang-selector')) {
        const lang_html = `<div class="lang-selector">
    <span onclick="doGTranslate('en')">EN</span>
    <span onclick="doGTranslate('fr')">FR</span>
    <span onclick="doGTranslate('es')">ES</span>
</div>`;
        content = content.replace('<nav class="main-nav">', lang_html + '\n    <nav class="main-nav">');
    }

    fs.writeFileSync(f, content);
});

console.log('Successfully injected native translation framework.');
