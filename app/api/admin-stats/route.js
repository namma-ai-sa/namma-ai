import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

export async function GET() {
  try {

    const { count: usersCount } =
      await supabase
        .from("users")
        .select("*", {
          count:"exact",
          head:true
        });

    const { count: crmCount } =
      await supabase
        .from("crm_leads")
        .select("*", {
          count:"exact",
          head:true
        });

    const { count: conversationsCount } =
      await supabase
        .from("conversations")
        .select("*", {
          count:"exact",
          head:true
        });

    const { data: leads } =
      await supabase
        .from("crm_leads")
        .select("status");

    const stats = {
      newLeads:0,
      followup:0,
      interested:0,
      closed:0
    };

    (leads || []).forEach((lead)=>{

      if(lead.status === "جديد"){
        stats.newLeads++;
      }

      if(lead.status === "متابعة"){
        stats.followup++;
      }

      if(lead.status === "مهتم"){
        stats.interested++;
      }

      if(lead.status === "تم الإغلاق"){
        stats.closed++;
      }

    });

    return NextResponse.json({
      success:true,
      users:usersCount || 0,
      crm:crmCount || 0,
      conversations:
        conversationsCount || 0,
      ...stats
    });

  } catch(error) {

    return NextResponse.json({
      success:false,
      message:error.message
    });

  }
}
