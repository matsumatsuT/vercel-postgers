"use server";

export async function createUser(formData: FormData) {
  const name = formData.get("name");
  const email = formData.get("email");
  console.log("name", name);
  console.log("email", email);
}
