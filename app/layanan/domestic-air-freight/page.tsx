import { Metadata } from "next";
import styles from "./DomesticAirFreightPage.module.scss";

export const metadata: Metadata = {
  title: "Domestic Air Freight | PT DIF Logistics",
  description:
    "Layanan Domestic Air Freight PT DIF Logistics untuk pengiriman cepat dan terukur di seluruh Indonesia melalui jalur udara.",
};

export default function DomesticAirFreightPage() {
  return (
    <main className={styles.page}>
      <div className="container">
        {/* HERO SECTION */}
        <section className={styles.hero} aria-labelledby="domestic-air-heading">
          <div className={styles.heroMain}>
            <p className={styles.breadcrumb}>
              <span>Beranda</span> <span>/</span> <span>Layanan</span>{" "}
              <span>/</span> <strong>Domestic Air Freight</strong>
            </p>

            <div className={styles.badgeRow}>
              <span className={styles.badge}>
                <i className="fa-solid fa-plane-up" aria-hidden="true" />
                <span>Domestic Air Freight</span>
              </span>
              <span className={styles.badgeSoft}>
                <i className="fa-solid fa-bolt" aria-hidden="true" />
                <span>Prioritas Kecepatan &amp; Kepastian</span>
              </span>
            </div>

            <h1 id="domestic-air-heading" className={styles.title}>
              Pengiriman Udara Cepat untuk Kebutuhan Bisnis yang Tak Bisa Menunggu.
            </h1>

            <p className={styles.lead}>
              Domestic Air Freight PT DIF Logistics hadir untuk menjawab kebutuhan
              pengiriman yang sensitif terhadap waktu. Dengan jaringan bandara
              domestik dan koordinasi operasional yang rapi, kami membantu bisnis
              menjaga kelancaran distribusi dengan lead time yang kompetitif.
            </p>

            <div className={styles.heroInfoGrid}>
              <div className={styles.heroInfoItem}>
                <i className="fa-solid fa-stopwatch" aria-hidden="true" />
                <div>
                  <p className={styles.infoLabel}>Estimasi Pengiriman</p>
                  <p className={styles.infoValue}>1–3 hari kerja (rute utama)</p>
                </div>
              </div>
              <div className={styles.heroInfoItem}>
                <i className="fa-solid fa-location-arrow" aria-hidden="true" />
                <div>
                  <p className={styles.infoLabel}>Jangkauan</p>
                  <p className={styles.infoValue}>
                    Kota-kota besar &amp; hub logistik di seluruh Indonesia.
                  </p>
                </div>
              </div>
              <div className={styles.heroInfoItem}>
                <i className="fa-solid fa-box-open" aria-hidden="true" />
                <div>
                  <p className={styles.infoLabel}>Jenis Barang</p>
                  <p className={styles.infoValue}>
                    Dokumen penting, sparepart, produk retail, dan barang bernilai.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.heroSide}>
            <div className={styles.metricCard}>
              <h2>Kenapa via udara?</h2>
              <p>
                Ketika kecepatan menjadi faktor utama, jalur udara memberikan
                solusi terbaik untuk menjaga komitmen layanan kepada pelanggan
                akhir Anda.
              </p>

              <ul className={styles.metricList}>
                <li>
                  <span className={styles.metricNumber}>01</span>
                  <div>
                    <h3>Lead Time Singkat</h3>
                    <p>
                      Ideal untuk pengiriman urgent yang tidak dapat menunggu
                      jadwal reguler via laut atau darat.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.metricNumber}>02</span>
                  <div>
                    <h3>Jadwal Penerbangan Rutin</h3>
                    <p>
                      Frekuensi penerbangan yang tinggi di rute utama membantu
                      menjaga konsistensi distribusi.
                    </p>
                  </div>
                </li>
                <li>
                  <span className={styles.metricNumber}>03</span>
                  <div>
                    <h3>Handling Lebih Terukur</h3>
                    <p>
                      Penanganan barang di bandara dengan prosedur yang jelas dan
                      diawasi ketat.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </section>

        {/* OVERVIEW + USE CASES */}
        <section className={styles.overviewSection}>
          <div className={styles.overviewGrid}>
            <div className={styles.overviewLeft}>
              <h2>Gambaran Layanan Domestic Air Freight</h2>
              <p>
                Layanan ini dirancang untuk perusahaan yang membutuhkan
                pengiriman cepat dan terukur antar kota di Indonesia. Melalui
                koordinasi rapat antara tim operasional, mitra penerbangan,
                serta jaringan distribusi darat, kami menjaga agar setiap
                pengiriman berjalan sesuai komitmen waktu.
              </p>
              <p>
                PT DIF Logistics membantu merencanakan rute, mengatur jadwal,
                mengelola konsolidasi barang, dan memberikan update status
                berkala agar Anda selalu mengetahui posisi pengiriman.
              </p>

              <div className={styles.calloutBox}>
                <i className="fa-solid fa-circle-info" aria-hidden="true" />
                <p>
                  Tim kami dapat membantu Anda memilih kombinasi jalur udara dan
                  darat yang paling efisien, berdasarkan karakteristik barang dan
                  tujuan pengiriman.
                </p>
              </div>
            </div>

            <div className={styles.overviewRight}>
              <h3>Contoh Kebutuhan yang Cocok</h3>
              <ul className={styles.useCaseList}>
                <li>
                  <i className="fa-solid fa-file-invoice" aria-hidden="true" />
                  <div>
                    <h4>Dokumen &amp; Kontrak Penting</h4>
                    <p>
                      Pengiriman dokumen legal atau kontrak bisnis yang harus
                      tiba tepat waktu.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-gears" aria-hidden="true" />
                  <div>
                    <h4>Sparepart &amp; Komponen Mesin</h4>
                    <p>
                      Suku cadang kritikal yang berpengaruh pada kelancaran
                      operasional pabrik atau cabang.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-bag-shopping" aria-hidden="true" />
                  <div>
                    <h4>Produk Retail Bernilai</h4>
                    <p>
                      Barang retail bernilai tinggi yang perlu dijaga baik dari
                      sisi kecepatan maupun keamanan.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-briefcase-medical" aria-hidden="true" />
                  <div>
                    <h4>Kebutuhan Khusus &amp; Urgent</h4>
                    <p>
                      Pengiriman yang memiliki batas waktu ketat dan berdampak
                      langsung pada pelayanan pelanggan Anda.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* BENEFITS / VALUE SECTION */}
        <section className={styles.valueSection}>
          <div className={styles.valueHeader}>
            <h2>Nilai Tambah Layanan Udara PT DIF Logistics</h2>
            <p>
              Kami tidak hanya mengandalkan kecepatan, tetapi juga ketepatan
              informasi dan transparansi dalam setiap pengiriman.
            </p>
          </div>

          <div className={styles.valueGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fa-solid fa-timeline" aria-hidden="true" />
              </div>
              <h3>Perencanaan Waktu yang Jelas</h3>
              <p>
                Estimasi keberangkatan dan kedatangan yang terstruktur membantu
                Anda menyusun komitmen layanan ke pelanggan.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fa-solid fa-arrows-split-up-and-left" aria-hidden="true" />
              </div>
              <h3>Integrasi Udara &amp; Darat</h3>
              <p>
                Pengiriman dari dan ke bandara didukung armada darat yang
                terkoordinasi, mengurangi bottleneck di titik transit.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fa-solid fa-eye" aria-hidden="true" />
              </div>
              <h3>Visibilitas Status Pengiriman</h3>
              <p>
                Update status pengiriman secara berkala melalui channel komunikasi
                yang telah disepakati.
              </p>
            </div>

            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>
                <i className="fa-solid fa-people-group" aria-hidden="true" />
              </div>
              <h3>Tim Operasional yang Proaktif</h3>
              <p>
                Tim kami siap membantu mengantisipasi perubahan jadwal dan
                memberikan opsi solusi terbaik jika terjadi kendala.
              </p>
            </div>
          </div>
        </section>

        {/* SIMPLE CTA SECTION */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h2>Butuh pengiriman udara untuk pengiriman berikutnya?</h2>
              <p>
                Sampaikan kebutuhan rute, jenis barang, dan target waktu
                pengiriman Anda. Tim kami akan membantu menyusun skema Domestic
                Air Freight yang paling sesuai.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <a href="/kontak" className={styles.ctaButtonPrimary}>
                <i className="fa-solid fa-paper-plane" aria-hidden="true" />
                <span>Konsultasi Layanan Udara</span>
              </a>
              <button
                type="button"
                className={styles.ctaButtonGhost}
              // onClick={() => (window.location.href = "tel:+6281390903900")}
              >
                <i className="fa-solid fa-phone" aria-hidden="true" />
                <span>Hubungi +62 813 9090 3900</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}