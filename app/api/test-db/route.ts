import { NextResponse } from 'next/server';
import { supabase } from '../../../lib/supabase';

export async function GET() {
  try {
    // Test 1: Check if we can connect and see table structure
    const { data: tableData, error: tableError } = await supabase
      .from('bookings')
      .select('*')
      .limit(1);

    // Test 2: Try to get table info (this might not work with anon key)
    const { data: infoData, error: infoError } = await supabase.rpc('get_table_info', { table_name: 'bookings' });

    // Test 3: Check RLS status
    const { data: rlsData, error: rlsError } = await supabase
      .from('pg_class')
      .select('relname, relrowsecurity')
      .eq('relname', 'bookings');

    return NextResponse.json({
      connection: 'OK',
      table_test: { data: tableData, error: tableError },
      info_test: { data: infoData, error: infoError },
      rls_test: { data: rlsData, error: rlsError },
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({
      connection: 'ERROR',
      error: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
