import { useState } from "react";

// ─── CONFIG: Edit these to customize your app listing ───────────────────────
const APP_CONFIG = {
  name: "My Awesome App",
  tagline: "The Best Android App You'll Ever Use",
  description:
    "Experience the next level of mobile computing. Our app is fast, secure, and packed with powerful features designed to make your daily life easier.",
  version: "v1.0.0",
  size: "25 MB",
  androidVersion: "5.0+",
  lastUpdated: "June 2025",
  apkFileName: "app-release.apk", // Place your APK in the /public folder with this name
  features: [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Optimized performance for all Android devices.",
    },
    {
      icon: "🔒",
      title: "100% Secure",
      desc: "Your data is encrypted and never shared.",
    },
    {
      icon: "🌙",
      title: "Dark Mode",
      desc: "Beautiful dark & light themes included.",
    },
    {
      icon: "📴",
      title: "Works Offline",
      desc: "Full functionality without internet connection.",
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      desc: "Get notified only about what matters to you.",
    },
    {
      icon: "🌍",
      title: "Multi-Language",
      desc: "Available in English, Urdu, and more.",
    },
  ],
  howToInstall: [
    'Go to Settings → Security → Enable "Unknown Sources" or "Install Unknown Apps"',
    'Tap the Download APK button above and save the file.',
    "Open your Downloads folder and tap the APK file.",
    'Tap "Install" and wait for the installation to finish.',
    "Open the app and enjoy! 🎉",
  ],
};
// ────────────────────────────────────────────────────────────────────────────

function StarRating({ rating = 4.8 }: { rating?: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <svg
        key={i}
        className={`w-5 h-5 ${i <= Math.floor(rating) ? "text-yellow-400" : "text-gray-600"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }
  return <div className="flex items-center gap-0.5">{stars}</div>;
}

function DownloadButton({ apkFileName }: { apkFileName: string }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => setDownloading(false), 3000);
  };

  return (
    <a
      href={`/${apkFileName}`}
      download
      onClick={handleDownload}
      className="group inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-2xl shadow-violet-900/50 transition-all duration-300 hover:scale-105 active:scale-95"
    >
      {downloading ? (
        <>
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Downloading...
        </>
      ) : (
        <>
          <svg
            className="w-6 h-6 group-hover:animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download APK
        </>
      )}
    </a>
  );
}

function Badge({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-sm">
      <span className="text-2xl">{icon}</span>
      <span className="text-white font-bold text-lg">{value}</span>
      <span className="text-gray-400 text-sm">{label}</span>
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div
      className="min-h-screen text-white"
      style={{ fontFamily: "'Inter', sans-serif", background: "#0a0a14" }}
    >
      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/images/app-icon.png"
              alt="App Icon"
              className="w-9 h-9 rounded-xl shadow-lg"
            />
            <span className="font-bold text-lg text-white">{APP_CONFIG.name}</span>
          </div>
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-xl transition-all"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share Link
              </>
            )}
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0d0d2b 0%, #1a0533 50%, #0d0d2b 100%)",
        }}
      >
        {/* Background image overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Glowing orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: App info */}
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-violet-500/20 border border-violet-500/30 text-violet-300 text-sm px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Latest Version: {APP_CONFIG.version}
              </div>

              <img
                src="/images/app-icon.png"
                alt="App Icon"
                className="w-24 h-24 rounded-3xl shadow-2xl shadow-violet-900 mx-auto md:mx-0"
              />

              <h1 className="text-4xl md:text-6xl font-black leading-tight">
                {APP_CONFIG.name}
              </h1>
              <p className="text-xl text-violet-300 font-semibold">
                {APP_CONFIG.tagline}
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {APP_CONFIG.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <StarRating rating={4.8} />
                <span className="text-white font-bold text-lg">4.8</span>
                <span className="text-gray-500">/ 5.0</span>
              </div>

              {/* Download CTA */}
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                <DownloadButton apkFileName={APP_CONFIG.apkFileName} />
                <div className="text-sm text-gray-500 flex flex-col gap-1">
                  <span>✅ Free Download</span>
                  <span>✅ No Ads</span>
                  <span>✅ No Sign-up Required</span>
                </div>
              </div>
            </div>

            {/* Right: Screenshots */}
            <div className="flex-1 flex justify-center gap-4">
              <img
                src="/images/screenshot1.png"
                alt="Screenshot 1"
                className="w-44 md:w-52 rounded-3xl shadow-2xl shadow-violet-900/60 border border-white/10 -rotate-3"
              />
              <img
                src="/images/screenshot2.png"
                alt="Screenshot 2"
                className="w-44 md:w-52 rounded-3xl shadow-2xl shadow-indigo-900/60 border border-white/10 rotate-3 mt-8"
              />
            </div>
          </div>

          {/* App Stats */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Badge icon="📦" label="APK Size" value={APP_CONFIG.size} />
            <Badge icon="🤖" label="Android" value={APP_CONFIG.androidVersion} />
            <Badge icon="🏷️" label="Version" value={APP_CONFIG.version} />
            <Badge icon="📅" label="Updated" value={APP_CONFIG.lastUpdated} />
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why You'll Love It
          </h2>
          <p className="text-gray-400 text-lg">
            Packed with features that just work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {APP_CONFIG.features.map((f, i) => (
            <div
              key={i}
              className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW TO INSTALL ── */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(180deg, #0a0a14 0%, #120825 50%, #0a0a14 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How to Install
            </h2>
            <p className="text-gray-400 text-lg">
              Installing APK files is easy! Just follow these steps.
            </p>
          </div>
          <div className="space-y-4">
            {APP_CONFIG.howToInstall.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5"
              >
                <div className="w-10 h-10 min-w-10 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-300 leading-relaxed pt-2">{step}</p>
              </div>
            ))}
          </div>

          {/* Alert box */}
          <div className="mt-8 flex items-start gap-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-5">
            <span className="text-2xl flex-shrink-0">⚠️</span>
            <div>
              <p className="text-yellow-300 font-semibold mb-1">Security Notice</p>
              <p className="text-yellow-200/70 text-sm leading-relaxed">
                Android may show a warning when installing APK files from outside
                the Play Store. This is normal. Our app is completely safe and
                virus-free. You may need to enable "Install from Unknown Sources"
                in your phone settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div
          className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #4f35c2 0%, #7c3aed 50%, #4338ca 100%)",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10"
            style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }}
          />
          <h2 className="text-3xl md:text-4xl font-black mb-4 relative">
            Ready to Get Started? 🚀
          </h2>
          <p className="text-violet-200 text-lg mb-8 relative max-w-xl mx-auto">
            Join thousands of users already using {APP_CONFIG.name}. Download
            now for free — no account needed.
          </p>
          <DownloadButton apkFileName={APP_CONFIG.apkFileName} />

          {/* Share row */}
          <div className="mt-8 flex items-center justify-center gap-3 relative">
            <span className="text-violet-300 text-sm">Share this page:</span>
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 border border-white/30 text-white text-sm px-4 py-2 rounded-xl transition-all"
            >
              {copied ? "✅ Copied!" : "📋 Copy Link"}
            </button>
            <a
              href={`https://wa.me/?text=Download%20${encodeURIComponent(APP_CONFIG.name)}%20here%3A%20${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500/80 hover:bg-green-500 text-white text-sm px-4 py-2 rounded-xl transition-all"
            >
              📱 Share on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500 text-sm">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/images/app-icon.png" alt="icon" className="w-6 h-6 rounded-lg" />
          <span className="text-white font-semibold">{APP_CONFIG.name}</span>
        </div>
        <p>Version {APP_CONFIG.version} &bull; {APP_CONFIG.size} &bull; Android {APP_CONFIG.androidVersion}</p>
        <p className="mt-2">© {new Date().getFullYear()} {APP_CONFIG.name}. All rights reserved.</p>
      </footer>
    </div>
  );
}
