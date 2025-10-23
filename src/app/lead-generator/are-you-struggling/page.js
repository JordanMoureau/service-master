import Contact from "../../components/Contact";

export default function AreYouStruggling() {
  return (
    <div className="are-you-struggling">
      <div className="inner">
        <h1>Water damage in your home? The next few Hours are critical.</h1>

        <h2>Every moment wasted after water damage is crucial</h2>
        <h2 className="arrow-list">Within 24 hours, mold begins forming</h2>
        <h2 className="arrow-list">By 48 hours, structural materials weaken</h2>
        <h2 className="arrow-list">
          AFter 72 hours, the cleanup cost can <em>triple</em>
        </h2>
        <p>
          <strong>Call now</strong> to speak with a disaster-response pro. We’ll
          tell you exactly what to do next and dispatch a{" "}
          <strong>tech asap</strong>.
        </p>
        <a
          className="btn"
          href="tel:1(509) 646-7488"
          aria-label="Call now for emergency water damage help"
        >
          Call 24/7: (509) 646-7488
        </a>
      </div>
    </div>
  );
}
