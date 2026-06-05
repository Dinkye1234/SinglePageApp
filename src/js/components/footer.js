import { t } from "../i18n/i18n.js";

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="app-footer">
      <div class="container">
        <div class="footer-content">
          <!-- Footer Main -->
          <div class="footer-grid">
            <!-- About Section -->
            <div class="footer-section">
              <h3 class="footer-title">${t("footer.aboutTitle") || "About"}</h3>
              <p class="footer-text">
                ${t("footer.aboutText") || "Mongolian Food Composition Database - comprehensive nutritional information for traditional and modern foods."}
              </p>
            </div>

            <!-- Quick Links -->
            <div class="footer-section">
              <h3 class="footer-title"> ${t("footer.linksTitle") || "Quick Links"}</h3>
              <ul class="footer-links">
                <li><a href="#/overview" class="footer-link"> ${t("nav.overview") || "Overview"}</a></li>
                <li><a href="#/search" class="footer-link"> ${t("nav.search") || "Search"}</a></li>
                <li><a href="#/calculation" class="footer-link"> ${t("nav.calculation") || "Calculation"}</a></li>
                <li><a href="#/books" class="footer-link"> ${t("nav.books") || "Books"}</a></li>
              </ul>
            </div>

            <!-- Resources -->
            <div class="footer-section">
              <h3 class="footer-title"> ${t("footer.resourcesTitle") || "Resources"}</h3>
              <ul class="footer-links">
                <li><a href="#/contact" class="footer-link"> ${t("nav.contact") || "Contact"}</a></li>
                <li><a href="#" class="footer-link"> ${t("footer.privacy") || "Privacy Policy"}</a></li>
                <li><a href="#" class="footer-link"> ${t("footer.terms") || "Terms of Service"}</a></li>
                <li><a href="#" class="footer-link"> ${t("footer.credits") || "Credits"}</a></li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div class="footer-section">
              <h3 class="footer-title">📞 Холбоо барих</h3>
              <div class="footer-contact">
                <p><i class="fas fa-envelope"></i> <a href="mailto:info@fooddb.mn" class="footer-link-text">info@fooddb.mn</a></p>
                <p><i class="fas fa-phone"></i> <a href="tel:+97654321098" class="footer-link-text">+976-5432-1098</a></p>
                <p><i class="fas fa-map-marker-alt"></i> <span class="footer-text-inline">Ulaanbaatar, Mongolia</span></p>
              </div>
            </div>
          </div>

          <!-- Footer Bottom -->
          <div class="footer-bottom">
            <div class="footer-copyright">
              <p>&copy; ${currentYear} ${t("footer.copyright") || "Mongolian Food Composition Database"}. ${"Бүх эрх хуулиар хамгаалагдасан"}</p>
            </div>
            <div class="footer-social">
              <a href="#" class="social-icon" title="Facebook"><i class="fab fa-facebook"></i></a>
              <a href="#" class="social-icon" title="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="#" class="social-icon" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" class="social-icon" title="GitHub"><i class="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function mountFooter(rootElement) {
  if (rootElement) {
    rootElement.innerHTML = renderFooter();
  }
}
