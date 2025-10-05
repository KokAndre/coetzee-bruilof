import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class RsvpServiceService {
  private supabase: SupabaseClient;
  public supabaseUrl = 'https://ifigfsnfpgdtdwlxvevp.supabase.co';
  public supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmaWdmc25mcGdkdGR3bHh2ZXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyMzA5NTMsImV4cCI6MjA3NDgwNjk1M30.l3PfsB9KebYuVkyo81zBUF4iWpqABiiFJZK_cqMl5hY';

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseAnonKey);
  }

  public async getAllUsers() {
    //   let { data, error } = await this.supabase.from('attendees').select('*');

    // return data;


    try {
      const { data, error } = await this.supabase
        .from('attendees')
        .select('*');

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  public async searchUser(name: string, surname: string) {
    try {
      const { data, error } = await this.supabase
        .from('attendees')
        .select('*')
        .ilike('name', name)
        .ilike('surname', surname);

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(id: number, rsvpStatus: string, plusOneRsvpStatus: string) {
    const currentDate = new Date().toISOString();
    try {
      const { data, error } = await this.supabase
        .from('attendees')
        .update({ 'rsvpStatus': rsvpStatus, 'rsvpDate': currentDate, 'plusOneRSVStatus': plusOneRsvpStatus })
        .eq('id', id)
        .select();

      if (error) {
        throw error;
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

}

