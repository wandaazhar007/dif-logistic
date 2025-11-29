"use client";

import { FormEvent, useState } from "react";
import styles from "./ContactSection.module.scss";

type FormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<Status>("idle");
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/kontak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setStatusMessage(
          data.message || "Terjadi kesalahan. Silakan coba lagi."
        );
        return;
      }

      setStatus("success");
      setStatusMessage(
        "Terima kasih! Pesan Anda sudah kami terima. Tim kami akan segera menghubungi Anda."
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
      setStatusMessage("Terjadi kesalahan jaringan. Silakan coba lagi.");
    }
  };

  return (
    <section className={styles.section} aria-labelledby="contact-heading">
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT BOX – COPYWRITING */}
          <div className={styles.copyCol}>
            <p className={styles.overline}>Hubungi Kami</p>
            <h1 id="contact-heading" className={styles.title}>
              Mari diskusikan kebutuhan logistik bisnis Anda.
            </h1>
            <p className={styles.subtitle}>
              PT DIF Logistics siap membantu merancang solusi logistik yang
              aman, cepat, dan efisien untuk operasional Anda di seluruh
              Indonesia.
            </p>
            <p className={styles.text}>
              Sampaikan detail singkat mengenai jenis barang, rute, dan
              frekuensi pengiriman. Tim kami akan menghubungi Anda melalui
              email atau telepon untuk memberikan rekomendasi terbaik.
            </p>

            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <i
                  className={`fa-solid fa-envelope ${styles.infoIcon}`}
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.infoLabel}>Email Layanan Pelanggan</p>
                  <p className={styles.infoValue}>cs@diftranslog.com</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <i
                  className={`fa-solid fa-phone ${styles.infoIcon}`}
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.infoLabel}>Telepon & WhatsApp</p>
                  <p className={styles.infoValue}>+62 813 9090 3900</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <i
                  className={`fa-solid fa-location-dot ${styles.infoIcon}`}
                  aria-hidden="true"
                />
                <div>
                  <p className={styles.infoLabel}>Kantor Operasional</p>
                  <p className={styles.infoValue}>
                    (Isi alamat sesuai company profile)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT BOX – FORM */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Formulir Kontak</h2>
              <p className={styles.formText}>
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda
                maksimal dalam 1–2 hari kerja.
              </p>

              <form onSubmit={handleSubmit} className={styles.form} noValidate>
                <div className={styles.fieldGroup}>
                  <label htmlFor="name">
                    Nama Lengkap <span>*</span>
                  </label>
                  <div className={styles.inputWrapper}>
                    <i
                      className={`fa-solid fa-user ${styles.fieldIcon}`}
                      aria-hidden="true"
                    />
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <div className={styles.inputWrapper}>
                    <i
                      className={`fa-solid fa-envelope ${styles.fieldIcon}`}
                      aria-hidden="true"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="nama@perusahaan.com"
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="phone">Nomor Telepon / WhatsApp</label>
                  <div className={styles.inputWrapper}>
                    <i
                      className={`fa-solid fa-phone ${styles.fieldIcon}`}
                      aria-hidden="true"
                    />
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+62 ..."
                    />
                  </div>
                </div>

                <div className={styles.fieldGroup}>
                  <label htmlFor="message">
                    Pesan / Kebutuhan Logistik <span>*</span>
                  </label>
                  <div className={styles.textareaWrapper}>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Ceritakan secara singkat jenis barang, rute, dan kebutuhan pengiriman Anda."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <i
                        className="fa-solid fa-spinner fa-spin"
                        aria-hidden="true"
                      />
                      <span>Mengirim...</span>
                    </>
                  ) : (
                    <>
                      <i
                        className="fa-solid fa-paper-plane"
                        aria-hidden="true"
                      />
                      <span>Kirim Pesan</span>
                    </>
                  )}
                </button>

                {status !== "idle" && statusMessage && (
                  <p
                    className={`${styles.statusMessage} ${status === "success"
                        ? styles.statusSuccess
                        : styles.statusError
                      }`}
                  >
                    {statusMessage}
                  </p>
                )}

                <p className={styles.privacyNote}>
                  Dengan mengirim formulir ini, Anda menyetujui bahwa kami
                  dapat menghubungi Anda terkait kebutuhan logistik yang
                  disampaikan.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}