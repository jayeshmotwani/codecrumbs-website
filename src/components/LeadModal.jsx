import { useEffect, useState } from 'react'

const WEB3FORMS_ACCESS_KEY = 'f3722a90-3011-42bf-aba5-4dd1770f1849'

export default function LeadModal({ isOpen, onClose }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [botcheck, setBotcheck] = useState('')
  const [status, setStatus] = useState('idle') // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!isOpen) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (botcheck) return // honeypot tripped

    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New lead from CodeCrumbs — ${name}`,
          from_name: 'CodeCrumbs website',
          name,
          email,
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Could not reach the server. Please try again.')
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setName('')
      setEmail('')
      setBotcheck('')
      setStatus('idle')
      setErrorMessage('')
    }, 300)
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/70 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-white/30 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {status === 'success' ? (
          <div className="py-6 text-center">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#F97316]/10 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Got it.</h3>
            <p className="text-white/50 text-sm">
              Thanks, {name.split(' ')[0]}. I'll get back to you soon.
            </p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-black tracking-tight mb-2">Let's talk</h3>
            <p className="text-white/40 text-sm mb-6">
              Drop your name and email — I'll reach out to set up a quick call.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={botcheck}
                onChange={(e) => setBotcheck(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                style={{ display: 'none' }}
              />

              <div>
                <label htmlFor="lead-name" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                  Name
                </label>
                <input
                  id="lead-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F97316]/50 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lead-email" className="block text-xs text-white/40 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  id="lead-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-[#F97316]/50 transition-colors"
                />
              </div>

              {status === 'error' && (
                <p className="text-sm text-red-400">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full px-6 py-3.5 rounded-full bg-[#F97316] text-black font-bold text-sm hover:bg-[#fb923c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
