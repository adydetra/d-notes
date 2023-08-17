<template>
  <form @submit.prevent="signIn"></form>
</template>

<script setup>
const client = useSupabaseAuthClient();
const router = useRouter();
const email = ref("");
const password = ref(null);
const errorMsg = ref(null);

async function signIn() {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) throw error;
    route.push("/index");
  } catch (error) {
    errorMsg.value = error.message;
  }
}
</script>
