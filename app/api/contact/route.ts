// // app/api/contact/route.ts
// import { NextResponse } from "next/server";
// import { z } from "zod";
// import { addContact } from "@/lib/firestore";

// const ContactSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   phone: z.string().optional(),
//   message: z.string().min(10),
// });

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const parsed = ContactSchema.parse(body);

//     const id = await addContact(parsed);

//     // OPTIONAL: send email via SendGrid or Firebase Function here
//     // await sendNotificationEmail(parsed);

//     return NextResponse.json({ ok: true, id }, { status: 201 });
//   } catch (err: any) {
//     if (err?.issues) {
//       return NextResponse.json({ ok: false, errors: err.issues }, { status: 422 });
//     }
//     return NextResponse.json({ ok: false, message: err?.message || "Server error" }, { status: 500 });
//   }
// }


// app/api/kontak/route.ts
import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Nama, email, dan pesan wajib diisi." },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.error("WEB3FORMS_ACCESS_KEY is not set");
      return NextResponse.json(
        {
          success: false,
          message:
            "Konfigurasi server belum lengkap. Hubungi admin untuk memperbaikinya.",
        },
        { status: 500 }
      );
    }

    const payload = {
      access_key: accessKey,
      subject: "Pesan baru dari Form Kontak DIF Logistics",
      from_name: "PT DIF Logistics Website",
      name,
      email,
      phone,
      message,
      replyto: email,
    };

    const web3Res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const web3Json = await web3Res.json();

    if (!web3Res.ok || !web3Json.success) {
      console.error("Web3Forms error:", web3Json);
      return NextResponse.json(
        {
          success: false,
          message:
            web3Json.message ||
            "Gagal mengirim formulir. Silakan coba beberapa saat lagi.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: web3Json.message ?? "Berhasil mengirim pesan.",
    });
  } catch (error) {
    console.error("Error in /api/kontak:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Terjadi kesalahan pada server. Silakan coba lagi.",
      },
      { status: 500 }
    );
  }
}