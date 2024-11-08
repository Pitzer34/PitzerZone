<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue/dist/iconify.js';
import Card from 'primevue/card';
// import InputText from 'primevue/inputtext';
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { useFirebaseAuth, useDocument, useCollection } from 'vuefire'
// import { collection, doc, getFirestore } from 'firebase/firestore';
// import { database } from '../services/firebaseApp';

// const account = ref('');
// const password = ref('');

// const auth = useFirebaseAuth();
// const signUp = async () => {
//   try {
//     const res = await createUserWithEmailAndPassword(auth, account.value, password.value)
//     console.log(res.user)
//   } catch (error) {
//     console.log(error.message)
//     console.log(error.code)
//   }
// }

// const signIn = async () => {
//   try {
//     const res = await signInWithEmailAndPassword(auth, account.value, password.value);
//     console.log(res.user)
//   } catch (error) {
//     console.log(error.message)
//     console.log(error.code)
//   }
// };

// const db = getFirestore();
// const table = collection(db, 'testData');
// const data = useCollection(table);
// console.log(data);

const block1Data = ref([{
  title: 'function',
  img: '',
  content: 'this function feature content test1 test2 test3',
}, {
  title: 'function',
  img: '',
  content: 'this function feature content',
}, {
  title: 'function',
  img: '',
  content: 'this function feature content',
}, {
  title: 'function',
  img: '',
  content: 'this function feature content',
}, {
  title: 'function',
  img: '',
  content: 'this function feature content',
}])


</script>

<template>
  <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-6">
    <div class="flex flex-col gap-8 m-6">
      <div class="">
        <div class="flex gap-20">
          <div class="">
            <!-- <img src="../assets/HomeMark.jpg" /> -->
            <Icon icon="mdi:application-cog-outline" width="10rem" heigth="10rem" />
          </div>
          <div class="flex-1">
            <div class="text-3xl font-bold mb-4">
              {{ "首頁" }}
            </div>
            <div class="text-2xl">
              {{ "撰寫一些自我學習的小專案與技術筆記, 希望讓自己永遠保持動力, 歡迎參觀~~" }}
            </div>
          </div>
        </div>
      </div>
      <div class="py-1">
        <div class="py-4">
          {{ "區塊一" }}
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(item, index) in block1Data" :key="index" class="">
            <Card>
              <template #title>{{ item.title }}</template>
              <template #content>
                <p class="m-0">
                  {{ item.content }}
                </p>
              </template>
            </Card>
          </div>
        </div>
      </div>
      <div class="py-1">
        <div class="py-4">
          {{ "區塊二" }}
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div v-for="(item, index) in block1Data" :key="index">
            <Card>
              <template #title>{{ item.title }}</template>
              <template #content>
                <p class="m-0">
                  {{ item.content }}
                </p>
              </template>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>