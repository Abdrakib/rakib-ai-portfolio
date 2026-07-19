import './CitationVerifierPrivacy.css'

export default function CitationVerifierPrivacy() {
  return (
    <section className="privacy page">
      <h1 className="page-title">Privacy Policy — Citation Verifier</h1>
      <div className="privacy-content">
        <p className="privacy-updated">
          <em>Last updated: July 2026</em>
        </p>

        <h2>What this extension does</h2>
        <p>
          Citation Verifier scans web pages you visit to detect research paper
          citations (such as DOIs and paper titles), and checks whether each one
          is genuine, retracted, or likely fabricated. Scores and explanations
          are shown as badges directly on the page.
        </p>

        <h2>What information is collected</h2>
        <p>
          When the extension detects a citation on a page, it sends the
          following to our verification server for scoring:
        </p>
        <ul>
          <li>The paper&apos;s title</li>
          <li>The paper&apos;s DOI (if present on the page)</li>
        </ul>
        <p>
          <strong>
            No other page content is collected or transmitted.
          </strong>{' '}
          We do not collect, store, or transmit:
        </p>
        <ul>
          <li>Your browsing history</li>
          <li>Personal messages, chat content, or conversations</li>
          <li>Login credentials, passwords, or account information</li>
          <li>Any personally identifiable information about you</li>
        </ul>

        <h2>How the information is used</h2>
        <p>
          Paper titles and DOIs are sent to our API solely to check them against
          public academic databases (CrossRef, DataCite, Semantic Scholar) and
          generate a reliability score. This data is used only to return a score
          and explanation back to your browser — it is not sold, shared with
          advertisers, or used for any purpose beyond providing the citation
          check you requested.
        </p>

        <h2>Data storage</h2>
        <p>
          Score results may be temporarily stored on our server to generate the
          &quot;why this score&quot; report shown when you click a badge. No
          data is linked to your identity, browser, or IP address in a way that
          identifies you personally.
        </p>

        <h2>Third-party services</h2>
        <p>
          To verify citations, this extension&apos;s backend communicates with
          the following public services:
        </p>
        <ul>
          <li>CrossRef</li>
          <li>DataCite</li>
          <li>Semantic Scholar</li>
          <li>
            Google Gemini (for deeper semantic verification in some cases)
          </li>
        </ul>
        <p>
          Each of these services has its own privacy practices governing data
          sent to them.
        </p>

        <h2>Permissions</h2>
        <p>
          This extension requests broad host permissions (
          <code>&lt;all_urls&gt;</code>) because it needs to scan any page you
          choose to visit for research citations — including AI chat tools like
          ChatGPT, Gemini, and Claude, as well as academic sites like arXiv and
          PubMed. It does not use this access for any purpose other than
          detecting and scoring citations.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If this policy changes, the updated version will be posted at this
          same URL.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy or the extension can be sent to:{' '}
          <a href="mailto:Rakibabente8@gmail.com">Rakibabente8@gmail.com</a>
        </p>
      </div>
    </section>
  )
}
