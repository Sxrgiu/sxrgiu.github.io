import os
html_files = [f for f in os.listdir('.') if f.endswith('.html')]
for f in html_files:
    with open(f, 'r') as file:
        content = file.read()
    
    if 'google_translate_element' not in content:
        gt_script = """<div id="google_translate_element" style="display:none;"></div>
<script type="text/javascript">
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,fr,es', autoDisplay: false}, 'google_translate_element');
}
</script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>"""
        content = content.replace('</body>', gt_script)

    if 'lang-selector' not in content:
        lang_html = """<div class="lang-selector">
    <span onclick="doGTranslate('en')">EN</span>
    <span onclick="doGTranslate('fr')">FR</span>
    <span onclick="doGTranslate('es')">ES</span>
</div>"""
        content = content.replace('<nav class="main-nav">', lang_html + '\n    <nav class="main-nav">')
        
    with open(f, 'w') as file:
        file.write(content)
