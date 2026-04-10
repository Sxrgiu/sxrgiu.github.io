<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unfiltered Honesty</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
</head>

<body>

    <div class="lang-selector">
        <span onclick="doGTranslate('en')">EN</span>
        <span onclick="doGTranslate('fr')">FR</span>
        <span onclick="doGTranslate('es')">ES</span>
    </div>
    <nav class="main-nav">
        <a href="index.html" class="active">Home</a>
        <a href="vibeful.html">Vibeful</a>
        <a href="moments.html">Moments</a>
        <a href="collection.html">Collection</a>
        <a href="animation.html">Animation</a>
        <a href="vanishing.html">Vanishing</a>
        <a href="play.html">Play</a>
        <a href="why.html">Why</a>
    </nav>

    <main class="page-wrapper">
        <div class="header-section">
            <h1 class="hook-title">There’s nothing here to buy.</h1>
            <p class="core-message">
                There is no hidden subscription, no secret product, and completely no catch.
                <br><br>
                This is simply a space that exists for one reason: an experiment in unfiltered honesty. Most of the
                internet focuses on tricking you into value. This is simply a quiet concept where people choose to
                support something for no reason other than they actually want to.
                <br><br>
                <span style="font-weight: 500; color: #F1F5F9;">There’s nothing to gain here. That’s what makes it
                    interesting.</span>
            </p>
        </div>

        <div class="pricing-grid">
            <!-- Low Tier -->
            <div class="tier-card sleek-btn" data-link="https://buy.stripe.com/cNicMY1032kt34hggOdby08">
                <div class="tier-header">Just passing through</div>
                <div class="tier-price">$1</div>
                <div class="tier-desc">A completely optional nod of approval.</div>
                <button class="action-btn outline-btn">Why not</button>
            </div>

            <!-- Recommended Tier -->
            <div class="tier-card recommended sleek-btn" data-link="https://buy.stripe.com/dRm7sE7oraQZ34hfcKdby03">
                <div class="tier-header text-white">I like the idea</div>
                <div class="tier-price text-white">$5</div>
                <div class="tier-desc text-light">You appreciate the honesty.</div>
                <button class="action-btn solid-btn">I like this</button>
            </div>

            <!-- High Tier -->
            <div class="tier-card sleek-btn" data-link="https://buy.stripe.com/3cIaEQ7or4sB5cp5Cadby05">
                <div class="tier-header">Support this</div>
                <div class="tier-price">$25+</div>
                <div class="tier-desc">You heavily resonate with the concept.</div>
                <button class="action-btn outline-btn">I'll support this</button>
            </div>
        </div>

        <div class="section-divider"></div>

        <div class="pricing-grid">
            <!-- Whale Tier 1 -->
            <div class="tier-card sleek-btn" data-link="REPLACE_WITH_100_LINK_HERE">
                <div class="tier-header">Absolute Silence</div>
                <div class="tier-price">$100</div>
                <div class="tier-desc">You are keeping this server entirely ad-free and silent. For this, the void
                    thanks you.</div>
                <button class="action-btn outline-btn">Silence it</button>
            </div>

            <!-- Whale Tier 2 -->
            <div class="tier-card sleek-btn" data-link="REPLACE_WITH_250_LINK_HERE">
                <div class="tier-header text-white">The Void Enjoyer</div>
                <div class="tier-price text-white">$250</div>
                <div class="tier-desc text-light">You deeply understand the artistic weight of this project. You are
                    buying nothing but pure, unadulterated internet silence.</div>
                <button class="action-btn outline-btn">Embrace</button>
            </div>

            <!-- Whale Tier 3 -->
            <div class="tier-card sleek-btn" data-link="REPLACE_WITH_1000_LINK_HERE">
                <div class="tier-header">The Architect</div>
                <div class="tier-price">$1,000</div>
                <div class="tier-desc">An irrational level of support for a completely rational concept. No rewards.
                    Just ultimate conceptual bragging rights.</div>
                <button class="action-btn outline-btn">Ascend</button>
            </div>
        </div>

        <div class="share-section">
            <button class="share-btn"
                onclick="navigator.clipboard.writeText(window.location.href); alert('Link copied. Share the silence.');"><ion-icon
                    name="share-social-outline"></ion-icon> You should see this</button>
            <p style="margin-top: 15px; font-size: 0.8rem; color: #64748B; letter-spacing: 0.5px;">This is oddly
                interesting.</p>
        </div>

        <div class="social-proof-section">
            <p class="proof-numbers">1,284 people have supported this.</p>
            <p class="proof-stats"><ion-icon name="trending-up"></ion-icon> +73 this week</p>
            <p class="proof-sub">People just liked the idea.</p>
        </div>

        <div class="trust-footer">
            No ads. No tracking. No tricks. Just a simple idea.<br>
            <span class="stripe-badge"><ion-icon name="lock-closed"></ion-icon> Payments secured entirely by
                Stripe</span>
        </div>
    </main>

    <!-- Live Toast Notification Element -->
    <div id="live-toast" class="toast-notification hidden">
        <ion-icon name="heart" class="toast-icon"></ion-icon>
        <span id="toast-message">Someone chose to support</span>
    </div>

    <!-- Stripe SDK -->
    <script src="https://js.stripe.com/v3/"></script>
    <script src="script.js"></script>
    <div class="site-footer">
        <span class="footer-center">Made by Sxrgiu</span>
        <span class="footer-role">Creator of Value</span>
    </div>

    <div class="sale-popup-overlay" id="salePopup">
        <div class="sale-popup">
            <span class="popup-close"
                onclick="document.getElementById('salePopup').style.opacity='0'; setTimeout(()=>document.getElementById('salePopup').style.display='none',300)">&times;</span>
            <h3>There's a sale.</h3>
            <div class="sale-prices">
                <span class="old-price">$10.00</span>
                <span class="new-price">$0.50</span>
            </div>
            <div class="tier-desc">An entirely fictional discount for a fictional product.</div>
            <button class="action-btn solid-btn"
                onclick="window.location.href='https://buy.stripe.com/bJebIUgZ10clbAN5Cadby0k'">Claim</button>
        </div>
    </div>
    <script>
        setTimeout(() => {
            const el = document.getElementById('salePopup');
            el.style.display = 'flex';
            setTimeout(() => el.style.opacity = '1', 10);
        }, 4000);
    </script>

    <div id="google_translate_element" style="display:none;"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,fr,es', autoDisplay: false }, 'google_translate_element');
        }
    </script>
    <script type="text/javascript"
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>

</html>
