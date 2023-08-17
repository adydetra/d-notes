<template>
  <form @submit.prevent="signUp"></form>
</template>

<script setup>
const client = useSupabaseAuthClient();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);
const successMsg = ref(null);

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    successMsg.value = "Check your email to confirm your account.";
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
