<template>
    <v-form @submit.prevent>
        <v-card class="mx-auto" max-width="344" title="User Registration">
            <v-container>
                <v-text-field :rules="ruleText" v-model="first" color="primary" label="Primeiro Nome"
                    variant="underlined"></v-text-field>

                <v-text-field v-model="last" color="primary" label="Last name" variant="underlined"></v-text-field>

                <v-text-field v-model="email" color="primary" label="Email" variant="underlined"></v-text-field>

                <v-text-field v-model="age" color="primary" label="Age" variant="underlined"></v-text-field>

                <v-text-field v-model="password" color="primary" label="Password" placeholder="Enter your password"
                    variant="underlined" @click:append="show1 = !show1" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show1 ? 'text' : 'password'">
                </v-text-field>

                <v-checkbox v-model="terms" color="secondary" label="I agree to site terms and conditions"></v-checkbox>
            </v-container>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn @click="save()" color="success" :disabled="disable">
                    Cadastrar

                    <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>

                <v-btn color="success" type="submit">
                    Enviar
                    <v-icon icon="mdi-chevron-right" end></v-icon>
                </v-btn>

            </v-card-actions>
        </v-card>
    </v-form>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useAppStore } from '@/stores/app.js'

const first = ref(null)
const last = ref(null)
const email = ref(null)
const password = ref(null)
const terms = ref(false)
const show1 = ref(false)
const age = ref(0)
const store = useAppStore()

const save = () => {
    let newUser = {
        first: first.value,
        last: last.value,
        email: email.value,
        password: password.value,
        age: age.value,
    };
    store.addUser(newUser)

}

const ruleText = [
    (v) => !!v || 'Campo obrigatório',
    (v) => (v && v.length >= 3) || 'Mínimo de 3 caracteres',
]

const disable = computed(() => {

    return !first.value || !last.value || !email.value || !password.value || !terms.value;

});

watch(age, (newvalue, oldvalue) => {
    if (age.value < 18) {
        age.value = 18
    }
})

</script>