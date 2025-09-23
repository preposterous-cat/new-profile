export default function LayananWeb() {
    const addons = [
        { title: 'E‑commerce / Online Shop', desc: 'Katalog, keranjang, checkout, manajemen pesanan.', price: 'Rp 10–15 jt', auto: true },
        { title: 'Integrasi WhatsApp API', desc: 'Kirim notifikasi, status tiket, atau tanya‑jawab otomatis.', price: 'Rp 3–5 jt', auto: true },
        { title: 'Sistem Booking / Registrasi Event', desc: 'Jadwal & slot, formulir pendaftaran, notifikasi peserta, ekspor data.', price: 'Rp 7–12 jt', auto: true },
        { title: 'Integrasi Payment Gateway', desc: 'Midtrans/Xendit/Duitku; pembayaran kartu, VA, QRIS.', price: 'Rp 5–7 jt', auto: true },
        { title: 'Portal Dokumen Resmi', desc: 'Kategori dokumen, pencarian, viewer PDF, unduhan publik.', price: 'Rp 8–12 jt', auto: false },
        { title: 'Chatbot / Helpdesk', desc: 'FAQ otomatis, routing ke petugas, notifikasi progres.', price: 'Rp 8–15 jt', auto: true },
        { title: 'Integrasi GIS / Peta Interaktif', desc: 'Layer peta, marker lokasi, filter & pencarian lokasi.', price: 'Rp 15–25 jt', auto: true },
        { title: 'Desain UI/UX animatif (Next.js, Tailwind, motion)', desc: 'Animasi interaktif, transisi halus, micro‑interaction untuk pengalaman premium.', price: 'Rp 10–20 jt', auto: false },
    ];

    return (
        <div className="mx-auto max-w-6xl px-4 py-12 font-sans">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Paket Website</h1>
                <p className="mt-3 text-sm md:text-base text-gray-600">Model Paket Dasar + Add‑on</p>
            </header>

            {/* Pricing Grid */}
            <div className="grid gap-6 md:grid-cols-3">
                {/* Basic */}
                <div className="rounded-2xl border p-6 shadow-xl bg-white">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Basic</h2>
                        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">Entry</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">Untuk website profil sederhana.</p>
                    <div className="mt-4">
                        <div className="text-3xl font-bold mb-2">Rp 8,5 jt</div>
                        <div className="text-xs text-gray-500">termasuk domain & hosting 1 tahun</div>
                    </div>
                    <ul className="mt-6 space-y-2 text-sm list-disc">
                        <li>Domain .com/.id (1 tahun)</li>
                        <li>Hosting (±10–15 GB SSD, SSL, backup mingguan, 1 email)</li>
                        <li>Desain responsif (template premium + kustom logo/warna)</li>
                        <li>5 halaman: Home, Profil, Layanan, Berita/Blog, Kontak (form + maps)</li>
                        <li>Panel kelola konten yang mudah (ubah teks, ganti foto, tambah artikel)</li>
                        <li>Pelatihan 2 jam untuk pengelola</li>
                        <li>Buku Panduan (PDF)</li>
                        <li>Free maintenance 1 bulan (update keamanan, cek backup, bugfix minor)</li>
                    </ul>
                    {/* <div className="mt-6 rounded-xl bg-orange-50 border border-orange-200 p-3 text-xs leading-relaxed">
                        <div className="font-medium">Catatan performa & keamanan</div>
                        Jika memilih add‑on tertentu (mis. Form Aduan + unggah bukti, Panel Admin, E‑commerce, Integrasi API), paket Basic otomatis memakai <b>Server Khusus</b> demi kecepatan & keamanan.
                    </div> */}
                    <div className="mt-4 text-xs text-gray-500">Estimasi durasi: 7–21 hari kerja (setelah materi lengkap).</div>
                </div>

                {/* Standard */}
                <div className="rounded-2xl border p-6 shadow-xl bg-white relative">
                    {/* <div className="absolute -top-3 right-4">
                        <span className="inline-flex items-center rounded-full bg-black text-white px-2.5 py-1 text-[10px] uppercase tracking-wide">Most Popular</span>
                    </div> */}
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Standard</h2>
                        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">Value</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">Lebih fleksibel untuk konten & pertumbuhan.</p>
                    <div className="mt-4">
                        <div className="text-3xl font-bold mb-2">Rp 14 jt</div>
                        <div className="text-xs text-gray-500">termasuk domain & hosting 1 tahun</div>
                    </div>
                    <ul className="mt-6 space-y-2 text-sm list-disc">
                        <li className="font-bold text-success">Semua fitur Basic</li>
                        <li>Hosting (±30–50 GB SSD, backup mingguan, domain gratis, beberapa email)</li>
                        <li>Desain semi‑kustom (layout disesuaikan instansi)</li>
                        <li>Hingga 10 halaman (Galeri, Agenda, Dokumen Publik, dsb.)</li>
                        <li>SEO dasar (metadata, sitemap) & Integrasi Google Analytics</li>
                        <li>Migrasi & input konten awal hingga 10 halaman/artikel</li>
                        <li>Laporan kunjungan bulanan (ringkas) 3 bulan pertama</li>
                        <li>Free maintenance 3 bulan (update keamanan, cek backup, bugfix minor)</li>
                    </ul>
                    <div className="mt-4 text-xs text-gray-500">Estimasi durasi: 14–30 hari kerja.</div>
                </div>

                {/* Premium */}
                <div className="rounded-2xl border p-6 shadow-xl bg-white">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Premium</h2>
                        <span className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs">Complete</span>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">Siap tayang besar & scalable.</p>
                    <div className="mt-4">
                        <div className="text-3xl font-bold mb-2">Rp 20 jt</div>
                        <div className="text-xs text-gray-500">termasuk <b>Server Khusus</b> (VPS 2vCPU/8GB RAM/100GB NVme disk space) + domain 1 tahun</div>
                    </div>
                    <ul className="mt-6 space-y-2 text-sm list-disc">
                        <li className="font-bold text-success">Semua fitur Standard</li>
                        <li>Desain full kustom (bukan template)</li>
                        <li>Halaman unlimited</li>
                        <li>Migrasi & input konten awal hingga 30 halaman / 50 dokumen</li>
                        <li>Optimasi kecepatan lanjutan (caching, CDN, minifikasi)</li>
                        <li>Keamanan tambahan (pembatasan login, proteksi serangan umum)</li>
                        <li>Laporan performa & kunjungan bulanan 6 bulan + support prioritas</li>
                        <li>Free maintenance 6 bulan (update keamanan, cek backup, bugfix minor)</li>
                    </ul>
                    <div className="mt-4 text-xs text-gray-500">Estimasi durasi: 1–3 bulan (tergantung kompleksitas).</div>
                </div>
            </div>



            {/* Add-ons */}
            <section className="mt-12">
                <h3 className="text-xl font-semibold ">Add‑on Website Populer</h3>
                <p className="text-sm text-gray-600 mt-1">Pilih sesuai kebutuhan. Beberapa add‑on memicu Auto‑Upgrade ke Server Khusus pada paket Basic dan Standard agar website lebih <b>cepat</b>, <b>aman</b>, dan <b>siap trafik tinggi</b>.</p>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {addons.map((a) => (
                        <div key={a.title} className="rounded-xl border p-4">
                            <div className="flex items-center justify-between">
                                <div className="font-medium">{a.title}</div>
                                <span className={a.auto ? 'text-xs rounded-full bg-orange-100 text-orange-700 px-2 py-0.5' : 'text-xs rounded-full border px-2 py-0.5'}>
                                    {a.auto ? 'Auto‑Upgrade*' : 'Opsional'}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{a.desc}</p>
                            <div className="text-sm mt-2 ">Mulai <b>{a.price}</b></div>
                        </div>
                    ))}
                </div>
                <p className="text-xs text-gray-600 mt-2">*Auto‑Upgrade: add‑on tertentu membuat paket Basic memakai <b>Server Khusus</b> demi performa & keamanan.</p>
            </section>

            {/* Hosting & Maintenance (Ringkas) */}
            <section className="mt-10 rounded-2xl border p-6 bg-gray-50">
                <h3 className="text-lg font-semibold">Paket Hosting & Maintenance</h3>
                <p className="mt-1 text-sm text-gray-700">Kami menyediakan layanan hosting & maintenance untuk memastikan website tetap cepat, aman, dan selalu up‑to‑date.</p>

                <div className="mt-4 grid gap-3 md:grid-cols-2 text-sm">
                    {/* Server Biasa */}
                    <div className="rounded-xl border bg-white p-4">
                        <div className="font-medium">Server Biasa</div>
                        <div className="text-gray-700 mt-1">Rp <b>2.000.000</b> / tahun</div>
                        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                            <li>Perpanjangan domain + hosting standar</li>
                            <li>Update keamanan bulanan</li>
                            <li>Backup mingguan & restore cepat</li>
                            <li>Monitoring dasar & support jam kerja</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-2">Cocok untuk website profil tanpa add‑on berat.</p>
                    </div>

                    {/* Server Khusus */}
                    <div className="rounded-xl border bg-white p-4">
                        <div className="font-medium">Server Khusus</div>
                        <div className="text-gray-700 mt-1">Rp <b>3.500.000</b> / tahun</div>
                        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                            <li>Perpanjangan domain + server khusus</li>
                            <li>Firewall dasar & monitoring uptime</li>
                            <li>Backup mingguan & prioritas pemulihan</li>
                            <li>Update keamanan rutin & optimasi performa dasar</li>
                        </ul>
                        <p className="text-xs text-gray-500 mt-2">Direkomendasikan bila memakai add‑on pemrosesan data (E‑commerce, Panel Admin, Form dengan unggah bukti, Integrasi API, dll.).</p>
                    </div>
                </div>

                <p className="text-xs text-gray-600 mt-4">Catatan: Tahun pertama domain & hosting <b>sudah termasuk</b> dalam harga paket pembuatan website. SLA: respons ≤ 1 hari kerja; perbaikan minor ≤ 3 hari kerja.</p>
            </section>

            {/* FAQ */}
            <section className="mt-10">
                <h3 className="text-xl font-semibold">FAQ</h3>
                <div className="mt-4 space-y-4">
                    <div>
                        <div className="font-medium">Apa itu Server Khusus?</div>
                        <p className="text-sm text-gray-600">Server Khusus adalah lingkungan server yang <b>tidak dibagi</b> dengan banyak situs lain, sehingga website Anda lebih <b>cepat</b>, <b>stabil</b>, dan lebih <b>terlindungi</b> (isolasi & firewall). Istilah teknisnya sering disebut VPS/managed server.</p>
                    </div>
                    <div>
                        <div className="font-medium">Apakah harus pakai server khusus?</div>
                        <p className="text-sm text-gray-600">Tidak untuk Basic dan Standard. Namun saat fitur bertambah (add-on seperti upload bukti, panel admin, pembayaran), kami aktifkan <b>Server Khusus</b> agar website lebih cepat, aman, dan stabil.</p>
                    </div>
                    <div>
                        <div className="font-medium">Apakah bisa ambil paket website tanpa paket Hosting & Maintenance?</div>
                        <p className="text-sm text-gray-600">Bisa. Anda dapat menggunakan hosting sendiri/oleh tim internal. Kami akan serahkan akses admin & kode (sesuai paket) saat serah‑terima dan tetap memberi pelatihan singkat. Namun, perpanjangan server, update keamanan, backup, dan pemantauan menjadi tanggung jawab Anda. Jika tidak ingin repot, Anda bisa menggunakan paket <b>Hosting & Maintenance</b> agar semua urusan teknis kami yang tangani.</p>
                    </div>
                    <div>
                        <div className="font-medium">Bagaimana biaya tahun berikutnya?</div>
                        <p className="text-sm text-gray-600">Kami menyediakan layanan Hosting & Maintenance <b>terima beres</b> dengan spesifikasi → Server Biasa: <b>Rp 2.000.000/tahun</b>. Dengan Server Khusus: <b>Rp 3.500.000/tahun</b> (termasuk perpanjangan domain+server, update keamanan, backup, monitoring, support).</p>
                    </div>
                    <div>
                        <div className="font-medium">Bisa downgrade dari Server Khusus?</div>
                        <p className="text-sm text-gray-600">Bisa, jika add‑on pemicu dihentikan. Penyesuaian dilakukan saat periode perpanjangan berikutnya.</p>
                    </div>
                </div>
            </section>

            {/* Mobile App Packages (dipindah ke halaman terpisah) */}
            <section className="mt-14 rounded-2xl border p-6 bg-indigo-50">
                <h3 className="text-xl font-semibold">Paket Mobile App</h3>
                <a href="/layanan-mobile" className="mt-3 inline-flex items-center gap-2 rounded-xl bg-black text-white px-4 py-2 text-sm">
                    Lihat Paket Mobile App
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5H19.5V10.5" /><path d="M19.5 4.5L12 12" /><path d="M6 6V18H18" stroke="currentColor" strokeWidth="1.5" fill="none" /></svg>
                </a>
            </section>
        </div>
    );
}
