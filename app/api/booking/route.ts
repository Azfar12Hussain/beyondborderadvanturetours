import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      tour_slug,
      travel_dates,
      group_size,
      special_requests
    } = body;

    if (!name || !email || !tour_slug) {
      return NextResponse.json(
        { error: 'Name, email, and tour selection are required' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          name,
          email,
          phone,
          tour_slug,
          travel_dates,
          group_size: group_size ? parseInt(group_size) : null,
          special_requests,
        }
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: `Failed to create booking: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Booking submitted successfully!', data },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
