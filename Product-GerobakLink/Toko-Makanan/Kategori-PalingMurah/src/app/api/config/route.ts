import { NextResponse } from 'next/server';
import { DUMMY_STORE_CONFIG, DUMMY_MENU_ITEMS, DUMMY_CATEGORIES } from '@/data/dummyData';

export async function GET() {
  try {
    // In Tier 1, this API route is the single server-side endpoint.
    // If GOOGLE_SHEETS_ID and credentials are set in environment variables,
    // this endpoint can fetch real-time data from Google Sheets API securely.
    // Otherwise, it returns clean fallback dummy data for "Dapur Sambel Raja".

    return NextResponse.json({
      success: true,
      config: DUMMY_STORE_CONFIG,
      categories: DUMMY_CATEGORIES,
      items: DUMMY_MENU_ITEMS,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Gagal memuat konfigurasi toko.' },
      { status: 500 }
    );
  }
}
