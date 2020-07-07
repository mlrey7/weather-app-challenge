<template>
  <div class="bg-blue-500 flex flex-col px-6 py-6">
    <div class="flex justify-end">
      <button class="focus:outline-none" @click.prevent="$emit('search-exit')">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="h-6 w-6 fill-current text-white"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          />
        </svg>
      </button>
    </div>
    <div class="flex justify-between mt-8">
      <form class="w-5/6">
        <div class="flex border border-white p-3 align-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="h-6 w-6 fill-current text-gray-800 self-center"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
          </svg>
          <input
            class="appearance-none w-full px-2 text-white leading-tight focus:outline-none border-none bg-blue-500"
            id="location"
            type="text"
            placeholder="search location"
          />
        </div>
      </form>
      <button
        class="bg-indigo-500 font-sans text-base font-semibold text-white px-5 py-2 ml-5"
      >Search</button>
    </div>
    <div class="mt-6">
      <SearchItem cityName="London" />
      <SearchItem cityName="Barcelona" />
      <SearchItem cityName="Long Beach" />
    </div>
  </div>
</template>

<script>
import SearchItem from "@/components/SearchItem";
export default {
  name: "SearchSideBar",
  components: {
    SearchItem
  }
};
</script>

<style>
</style>
