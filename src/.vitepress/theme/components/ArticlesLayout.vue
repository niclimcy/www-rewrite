<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { data as posts } from '../posts.data'

const { frontmatter } = useData()

const filteredPosts = computed(() => {
  return posts.filter((post) => {
    return post.category === frontmatter.value.category
  })
})
</script>

<template>
  <div class="container mx-auto p-8">
    <div class="mb-8">
      <h1 class="text-4xl text-gray-800 dark:text-white">
        {{ frontmatter.title }}
      </h1>
      <p class="mt-2 text-gray-500 dark:text-brand-soft">
        {{ frontmatter.description }}
      </p>
    </div>
    <div class="grid grid-cols-1 gap-8">
      <div
        v-for="post in filteredPosts"
        class="flex flex-col bg-white border border-t-4 border-t-brand-1 shadow-sm rounded-xl dark:bg-brand-3 dark:border-gray-700 dark:border-t-brand-soft dark:shadow-slate-700/[.7]"
      >
        <div class="p-4 md:p-5">
          <h3 class="text-lg font-bold text-gray-800 dark:text-white">
            <a :href="post.url">
              {{ post.title }}
            </a>
          </h3>
          <p class="mt-2 text-gray-500 dark:text-brand-soft">
            {{ post.excerpt }}
          </p>
          <div class="mt-2 text-gray-800 dark:text-white flex flex-wrap">
            <div class="flex flex-grow-0 items-center">
              <span class="material-symbols-outlined mr-1 text-[1.4rem]">
                calendar_today
              </span>
              {{ post.date.string }}&nbsp;
            </div>
            <div class="flex flex-grow items-center">
              <span class="material-symbols-outlined mr-1 text-[1.4rem]">
                person
              </span>
              {{ post.author }}
            </div>
          </div>
          <a
            class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-brand-2 hover:text-brand-3 disabled:opacity-50 disabled:pointer-events-none dark:text-brand-soft dark:hover:text-brand-1 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            :href="post.url"
          >
            Read more
            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
