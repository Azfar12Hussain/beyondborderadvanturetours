import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, tour_slug, travel_dates, group_size, special_requests } = body;

    // Validate required fields
    if (!name || !email || !tour_slug) {
      return NextResponse.json(
        { error: 'Name, email, and tour selection are required' },
        { status: 400 }
      );
    }

    // First, let's test the connection and check table policies
    console.log('Testing Supabase connection...');
    const { data: testData, error: testError } = await supabase
      .from('bookings')
      .select('id')
      .limit(1);

    console.log('Connection test result:', { testData, testError });

    // Insert booking into Supabase
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
      .select();

    if (error) {
      console.error('Supabase error:', error);
      console.error('Error details:', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code
      });
      return NextResponse.json(
        { error: `Failed to create booking: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Booking submitted successfully!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
