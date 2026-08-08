import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, interest, message } = body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return NextResponse.json(
        { success: false, error: 'Nama wajib diisi.' },
        { status: 400 }
      );
    }

    if (!contact || typeof contact !== 'string' || !contact.trim()) {
      return NextResponse.json(
        { success: false, error: 'Kontak (Email/WhatsApp) wajib diisi.' },
        { status: 400 }
      );
    }

    // Insert to database if DATABASE_URL is available
    if (process.env.DATABASE_URL) {
      const lead = await prisma.lead.create({
        data: {
          name: name.trim(),
          contact: contact.trim(),
          interest: interest ? String(interest).trim() : null,
          message: message ? String(message).trim() : null,
        },
      });

      return NextResponse.json({
        success: true,
        message: 'Form kontak berhasil dikirim!',
        data: { id: lead.id, createdAt: lead.createdAt },
      });
    } else {
      // In dev environment when DATABASE_URL is not set yet
      console.warn('DATABASE_URL is not set. Submission logged locally:', {
        name,
        contact,
        interest,
        message,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json({
        success: true,
        message: 'Form kontak berhasil dikirim! Tim GerobakLink akan segera menghubungi Anda.',
        data: { name, contact, interest },
      });
    }
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Terjadi kesalahan sistem saat menyimpan data kontak.',
      },
      { status: 500 }
    );
  }
}
