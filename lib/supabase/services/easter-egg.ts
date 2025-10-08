"use server";

import { createClient } from "../server";

export async function createEasterEggContact(
  nameInput: string,
  phoneInput: string,
  visitorId: string,
) {
  const supabase = await createClient();

  const { error } = await supabase.from("easter_egg_contacts").insert({
    name: nameInput,
    phone: phoneInput,
    visitor_id: visitorId,
  });

  if (error?.code === "23505") {
    return "이미 등록되었습니다";
  }

  if (error) {
    console.error("Error creating contact:", error);
    throw new Error(error.message);
  }
}
