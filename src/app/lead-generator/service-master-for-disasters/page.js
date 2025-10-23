export default function WaterDamageV2() {
  return (
    <main className="for-disasters">
      <header>
        <h1>
          Spokane’s trusted water-damage team — on-site in just a few hours
        </h1>
        <p>Stop damage, prevent mold, and get your life back tonight.</p>
        <div>
          {/* Swap for real review widget */}
          <div aria-label="Rating">★★★★★ 4.9/5 (182 local reviews)</div>
          <div>Insurance-friendly · Licensed & Insured</div>
        </div>
        <a href="tel:15092608166">Call 24/7: (509) 260-8166</a>
      </header>

      <section>
        <div>
          <h2>Why homeowners choose us</h2>
          <ul>
            <li>
              <strong>Rapid response:</strong> minimize repairs & cost
            </li>
            <li>
              <strong>Mold prevention:</strong> proper drying & dehumidification
            </li>
            <li>
              <strong>We handle insurance:</strong> photos, documentation,
              billing
            </li>
            <li>
              <strong>Full service:</strong> extraction, drying, cleanup,
              repairs
            </li>
          </ul>
        </div>
        <div>
          <h2>What we’ll do today</h2>
          <ol>
            <li>Immediate phone triage & safety checklist</li>
            <li>On-site assessment + water extraction</li>
            <li>Drying plan with clear timeline & costs</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Real Spokane results</h2>
        <blockquote>
          “They were at our door in under an hour and saved our basement carpet.
          Handled insurance so we didn’t have to.”
          <div>— Emily R., South Hill</div>
        </blockquote>
        <blockquote>
          “Clear, fast, professional. The only call I’ll make for water issues.”
          <div>— Mark S., Spokane Valley</div>
        </blockquote>
      </section>

      <section>
        <div aria-label="Request help form">{/* <ContactForm /> */}</div>
        <aside>
          <h3>Service area</h3>
          <p>Spokane • Spokane Valley • Liberty Lake • Airway Heights • CDA</p>
          <h3>Questions</h3>
          <details>
            <summary>Do you work with my insurance?</summary>
            <p>Yes, we coordinate directly and provide full documentation.</p>
          </details>
          <details>
            <summary>How fast can you get here?</summary>
            <p>Typically within 45–90 minutes depending on location.</p>
          </details>
        </aside>
      </section>
    </main>
  );
}
