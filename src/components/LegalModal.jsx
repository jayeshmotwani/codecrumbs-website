import { useEffect } from 'react'

const LAST_UPDATED = 'August 26, 2026'
const CONTACT_EMAIL = 'jayeshbydefault@gmail.com'

function PrivacyContent() {
  return (
    <>
      <p className="text-white/30 text-xs mb-6">Last updated: {LAST_UPDATED}</p>

      <h4 className="text-white font-bold mb-2">What we collect</h4>
      <p>
        This site does not use cookies, analytics, or tracking scripts. The only personal data we
        collect is what you choose to give us: your <strong className="text-white/70">name</strong> and{' '}
        <strong className="text-white/70">email address</strong>, submitted voluntarily through the
        "Say hi" contact form.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">How we use it</h4>
      <p>
        We use your name and email solely to respond to your inquiry — to reach out about your
        project or question. We don't use it for marketing, and we don't sell or rent it to anyone.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Third-party processor</h4>
      <p>
        The contact form is powered by{' '}
        <a
          href="https://web3forms.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F97316] hover:underline"
        >
          Web3Forms
        </a>
        , a third-party service that relays your submission to our inbox by email. Web3Forms
        processes the data you submit on our behalf — please review their{' '}
        <a
          href="https://web3forms.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F97316] hover:underline"
        >
          privacy policy
        </a>{' '}
        for details on how they handle it.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Legal basis &amp; your rights</h4>
      <p>
        We process this data based on your consent, given when you submit the form. Depending on
        where you're located, you may have rights under applicable law — such as the EU/UK GDPR or
        India's Digital Personal Data Protection Act, 2023 — to access, correct, or request deletion
        of your data, or to withdraw consent at any time. To exercise any of these, email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#F97316] hover:underline">
          {CONTACT_EMAIL}
        </a>{' '}
        and we'll act on it promptly.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Retention</h4>
      <p>
        We keep submitted details only as long as needed to respond to your inquiry, unless you
        become a client (in which case ordinary business record-keeping applies) or ask us to delete
        it sooner.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Children</h4>
      <p>This site isn't directed at children, and we don't knowingly collect data from minors.</p>

      <h4 className="text-white font-bold mb-2 mt-6">Changes</h4>
      <p>
        If this policy changes, we'll update the date above. Continued use of the site after a
        change means you accept the update.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Contact</h4>
      <p>
        Questions about this policy? Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#F97316] hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </>
  )
}

function TermsContent() {
  return (
    <>
      <p className="text-white/30 text-xs mb-6">Last updated: {LAST_UPDATED}</p>

      <h4 className="text-white font-bold mb-2">Who this is</h4>
      <p>
        CodeCrumbs is the freelance practice of Jayesh Motwani, based in Pune, India. This site is a
        portfolio and contact point — using it doesn't create any client relationship or contract.
        Any actual work is agreed separately, in writing, between you and Jayesh.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Content &amp; ownership</h4>
      <p>
        The design, text, and code samples shown on this site belong to Jayesh Motwani unless
        otherwise credited. Project names, logos, and screenshots referenced belong to their
        respective owners and are shown for portfolio purposes only.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">External links</h4>
      <p>
        Links to GitHub, LinkedIn, and other external sites are provided for convenience. We aren't
        responsible for the content or practices of sites we don't control.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">No warranty</h4>
      <p>
        This site is provided "as is," without warranties of any kind. We make reasonable efforts to
        keep it accurate and available but don't guarantee uninterrupted or error-free access.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Limitation of liability</h4>
      <p>
        To the extent permitted by law, we aren't liable for any indirect or consequential loss
        arising from your use of this site.
      </p>

      <h4 className="text-white font-bold mb-2 mt-6">Governing law</h4>
      <p>These terms are governed by the laws of India.</p>

      <h4 className="text-white font-bold mb-2 mt-6">Changes</h4>
      <p>We may update these terms from time to time; the date above reflects the latest revision.</p>

      <h4 className="text-white font-bold mb-2 mt-6">Contact</h4>
      <p>
        Questions? Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#F97316] hover:underline">
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    </>
  )
}

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    if (!type) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [type, onClose])

  if (!type) return null

  const title = type === 'terms' ? 'Terms of Use' : 'Privacy Policy'

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg max-h-[80vh] flex flex-col rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-black tracking-tight mb-6 shrink-0">{title}</h3>

        <div className="overflow-y-auto pr-2 text-sm text-white/50 leading-relaxed">
          {type === 'terms' ? <TermsContent /> : <PrivacyContent />}
        </div>
      </div>
    </div>
  )
}
