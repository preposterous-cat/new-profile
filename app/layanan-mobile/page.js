export default function MobilePricing() {
    const mobilePackages = [
        {
            name: 'Mobile Basic',
            price: 'Rp 25–35 jt',
            tag: 'Android',
            desc: 'Aplikasi informasi ringan sebagai pendamping website.',
            includes: [
                'Platform: Android (publikasi ke Google Play 1x)',
                'Branding sesuai identitas instansi',
                'Halaman: Beranda, Profil, Berita/Agenda, Kontak',
                'Form ringan (opsional) & notifikasi dasar',
            ],
            timeline: '1–2 bulan',
        },
        {
            name: 'Mobile Standard',
            price: 'Rp 45–65 jt',
            tag: 'Android (+iOS opsional)',
            desc: 'Aplikasi dengan login & push notification. Siap bertumbuh.',
            includes: [
                'Login/registrasi, profil pengguna',
                'Form & penyimpanan data dasar',
                'Push notification & analytics',
                'Draft arsitektur backend/API',
            ],
            timeline: '2–3 bulan',
        },
        {
            name: 'Mobile Pro',
            price: 'Rp 80–120 jt',
            tag: 'Android + iOS',
            desc: 'Fitur lanjutan & integrasi: role, offline sync, unggah dokumen, maps, pembayaran.',
            includes: [
                'Role & perizinan, audit log',
                'Offline sync & antrian unggah dokumen',
                'Maps/GPS, integrasi payment/API',
                'Pengujian perangkat lebih luas',
            ],
            timeline: '3–6 bulan',
        },
    ];

    const mobileAddons = [
        { title: 'Build & Publish iOS', note: 'Butuh akun Apple Developer (biaya terpisah).', price: 'Rp 15–25 jt' },
        { title: 'Push Notification (FCM/APNs)', note: 'Broadcast & topik tertarget.', price: 'Rp 5–10 jt' },
        { title: 'Auth & Role Management', note: 'Email/OTP/SSO opsional.', price: 'Rp 8–15 jt' },
        { title: 'Offline Sync & File Upload', note: 'Sinkronisasi & antrian unggah.', price: 'Rp 10–18 jt' },
        { title: 'Maps & GPS', note: 'Lokasi, rute, geofencing dasar.', price: 'Rp 8–15 jt' },
        { title: 'Payment Integration', note: 'Gateway & in‑app purchase.', price: 'Rp 8–15 jt' },
        { title: 'Crash & Analytics', note: 'Sentry/Firebase Analytics.', price: 'Rp 3–6 jt' },
        { title: 'Release & Store Compliance', note: 'Listing, screenshot, privacy labels.', price: 'Rp 4–8 jt' },
    ];

    const process = [
        { step: 'Discovery', info: 'Klarifikasi tujuan, fitur prioritas, risiko, & deliverable. Hasil: scope ringkas + jadwal.', dur: '2–5 hari' },
        { step: 'Desain', info: 'Wireframe → UI visual (brand instansi), alur utama disepakati.', dur: '3–7 hari' },
        { step: 'Pengembangan', info: 'Implementasi fitur inti & integrasi API.', dur: '2–4 minggu' },
        { step: 'Uji & Rilis', info: 'UAT, perbaikan minor, build final, pengajuan ke store.', dur: '1–2 minggu' },
        { step: 'Stabilisasi', info: 'Masa pantau awal pasca rilis.', dur: '2 minggu' },
    ];

    return (
        <div className="mx-auto max-w-6xl px-4 py-12 font-sans">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Paket Mobile App</h1>
                <p className="mt-3 text-sm md:text-base text-gray-600">Android/iOS</p>
            </header>

            {/* Packages */}
            <div className="grid gap-6 md:grid-cols-3">
                {mobilePackages.map((m) => (
                    <div key={m.name} className="rounded-2xl border p-6 shadow-xl bg-white">
                        <div className="flex items-center justify-between">
                            <h2 className="text-xl font-semibold">{m.name}</h2>
                            <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">{m.tag}</span>
                        </div>
                        <p className="mt-1 text-sm text-gray-600">{m.desc}</p>
                        <div className="mt-4">
                            <div className="text-3xl font-bold">{m.price}</div>
                        </div>
                        <ul className="mt-6 space-y-2 text-sm">
                            {m.includes.map((it) => (<li key={it}>• {it}</li>))}
                        </ul>
                        <div className="mt-4 text-xs text-gray-500">Estimasi durasi: {m.timeline}</div>
                    </div>
                ))}
            </div>

            {/* Why mobile is different */}
            <section className="mt-12 rounded-2xl border p-6 bg-gray-50">
                <h3 className="text-lg font-semibold">Apa bedanya dengan paket website?</h3>
                <ul className="mt-3 grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li>• Distribusi melalui <b>Google Play/App Store</b> dengan proses review.</li>
                    <li>• Siklus rilis: versi, changelog, & kompatibilitas OS.</li>
                    <li>• Fitur perangkat: kamera, GPS, push notification, penyimpanan lokal.</li>
                    <li>• Biasanya butuh <b>backend/API</b> untuk data & autentikasi.</li>
                </ul>
            </section>

            {/* Process
            <section className="mt-12">
                <h3 className="text-xl font-semibold">Alur Proses & Timeline</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-5 text-sm">
                    {process.map((p) => (
                        <div key={p.step} className="rounded-xl border p-4 bg-white">
                            <div className="font-medium">{p.step}</div>
                            <p className="text-gray-700 mt-1">{p.info}</p>
                            <div className="text-xs text-gray-500 mt-2">{p.dur}</div>
                        </div>
                    ))}
                </div>
            </section> */}

            {/* Backend & Hosting */}
            <section className="mt-12 rounded-2xl border p-6 bg-gray-50">
                <h3 className="text-lg font-semibold">Backend/API & Hosting</h3>
                <p className="text-sm text-gray-700 mt-1">Kami menyediakan opsi infrastruktur sesuai kebutuhan:</p>
                <div className="grid md:grid-cols-2 gap-4 mt-3 text-sm text-gray-700">
                    <div className="rounded-xl border bg-white p-4">
                        <div className="font-medium">Opsi A — Dikelola Kami</div>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Paket <b>Hosting & Maintenance</b>: Server Biasa (Rp 2 jt/tahun) atau Server Khusus (Rp 3,5 jt/tahun)</li>
                            <li>API, database, backup, monitoring, & update keamanan</li>
                            <li>Direkomendasikan untuk aplikasi dengan login, unggah berkas, atau notifikasi</li>
                        </ul>
                    </div>
                    <div className="rounded-xl border bg-white p-4">
                        <div className="font-medium">Opsi B — Infrastruktur Klien</div>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            <li>Kami integrasikan ke API/server milik klien</li>
                            <li>Dokumentasi endpoint & kebutuhan keamanan disepakati</li>
                            <li>Tim klien bertanggung jawab atas uptime & biaya server</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Add-ons */}
            <section className="mt-12">
                <h3 className="text-xl font-semibold">Add‑on Mobile</h3>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                    {mobileAddons.map((x) => (
                        <div key={x.title} className="rounded-xl border p-4 bg-white">
                            <div className="flex items-center justify-between">
                                <div className="font-medium">{x.title}</div>
                                <div className="text-sm font-semibold">{x.price}</div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{x.note}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Store policy */}
            <section className="mt-12 rounded-2xl border p-6 bg-gray-50">
                <h3 className="text-lg font-semibold">Kebijakan Store & Akun Developer</h3>
                <ul className="mt-3 grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                    <li>• Pengajuan ke <b>Google Play</b> dan/atau <b>App Store</b> mengikuti kebijakan masing‑masing.</li>
                    <li>• Akun <b>Google Play</b> (sekali bayar) & <b>Apple Developer</b> (berlangganan tahunan) merupakan biaya terpisah.</li>
                    <li>• Waktu review store berada di luar kontrol kami, namun kami bantu persiapan compliance & listing.</li>
                    <li>• Update aplikasi (minor/patch) mengikuti jadwal rilis yang disepakati.</li>
                </ul>
            </section>

            {/* Maintenance for Mobile */}
            <section className="mt-12">
                <h3 className="text-xl font-semibold">Paket Maintenance Mobile</h3>
                <div className="grid md:grid-cols-2 gap-4 mt-3 text-sm">
                    <div className="rounded-xl border bg-white p-4">
                        <div className="font-medium">Mobile Care — Basic</div>
                        <div className="text-gray-700 mt-1">Rp <b>4.000.000</b> / tahun</div>
                        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                            <li>Bugfix minor, pembaruan dependensi kecil</li>
                            <li>Monitoring crash & performa (ringkas)</li>
                            <li>Bantuan update listing store (deskripsi/screenshot)</li>
                        </ul>
                    </div>
                    <div className="rounded-xl border bg-white p-4">
                        <div className="font-medium">Mobile Care — Pro</div>
                        <div className="text-gray-700 mt-1">Rp <b>8.000.000</b> / tahun</div>
                        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                            <li>Termasuk paket Basic</li>
                            <li>Pembaruan mayor kompatibilitas OS tahunan</li>
                            <li>Penyesuaian kebijakan store berkala (privacy/permission)</li>
                            <li>Support prioritas</li>
                        </ul>
                    </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">SLA: respons ≤ 1 hari kerja; perbaikan minor ≤ 3 hari kerja. Biaya infrastruktur (server/API) mengikuti paket Hosting & Maintenance.</p>
            </section>

            {/* Mobile App Packages (dipindah ke halaman terpisah) */}
            <section className="mt-14 rounded-2xl border p-6 bg-indigo-50">
                <h3 className="text-xl font-semibold">Paket Web App</h3>
                <a href="/layanan-web" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm">
                    Lihat Paket Web App
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5H19.5V10.5" /><path d="M19.5 4.5L12 12" /><path d="M6 6V18H18" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                </a>
            </section>

            {/* CTA */}
            {/* <section className="mt-12 text-center">
                <a href="/contact" className="inline-flex items-center rounded-xl bg-black text-white px-5 py-2.5 text-sm">Diskusikan Kebutuhan Mobile App Anda</a>
                <p className="text-xs text-gray-500 mt-2">Belum yakin paket mana? Kami bantu pilihkan berdasarkan kebutuhan & anggaran.</p>
            </section> */}
        </div>
    );
}
