<template>
  <main grid grid-cols-3 mx-auto>
    <section sidebar>
      <p text-2xl>
        Menu
      </p>
    </section>

    <section bg-white sidebar>
      <p text-2xl>
        Today
      </p>
      <slot />
    </section>

    <section sidebar>
      <Form />
    </section>
  </main>
</template>
