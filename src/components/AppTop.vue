<template>
    <v-toolbar app color="primary" dark>
        <v-toolbar-title>
            <v-icon>mdi-view-dashboard</v-icon>
            MEU APP
        </v-toolbar-title>

        <v-spacer />
        <v-btn to="/dashboard">
            Dashboard
            <v-icon>mdi-account-multiple</v-icon>
        </v-btn>
        <v-btn to="/customer" class="ml-2">
            Add Customer
            <v-icon>mdi-plus</v-icon>
        </v-btn>

        <v-btn icon href="https://ivanpires.dev/">
            <v-icon>mdi-link-variant</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script setup>
const items = [
    {
        title: 'Vuetify Documentation',
        icon: `$vuetify`,
        href: 'https://vuetifyjs.com/',
    },
    {
        title: 'Vuetify Support',
        icon: 'mdi-shield-star-outline',
        href: 'https://support.vuetifyjs.com/',
    },
    {
        title: 'Vuetify X',
        icon: `svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z`,
        href: 'https://x.com/vuetifyjs',
    },
    {
        title: 'Vuetify GitHub',
        icon: `mdi-github`,
        href: 'https://github.com/vuetifyjs/vuetify',
    },
    {
        title: 'Vuetify Discord',
        icon: `mdi-discord`,
        href: 'https://community.vuetifyjs.com/',
    },
    {
        title: 'Vuetify Reddit',
        icon: `mdi-reddit`,
        href: 'https://reddit.com/r/vuetifyjs',
    },
]
</script>

<style scoped lang="sass">
    .social-link :deep(.v-icon)
      color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
      text-decoration: none
      transition: .2s ease-in-out
  
      &:hover
        color: rgba(25, 118, 210, 1)
  </style>