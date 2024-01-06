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
  <h1>All Blog Posts</h1>
  <ul>
    <li v-for="post of filteredPosts">
      <a :href="post.url">{{ post.title }}</a>
      <span v-if="post.author" >by {{ post.author }}</span>
    </li>
  </ul>
  <Content />
</template>
