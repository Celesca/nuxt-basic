<template>
    <div class="container">
        <h1>หน้าแรกของเว็บไซต์</h1>
        <img src="/image/shinomiya.png" alt="Shinomiya Kaguya" width="300" height="300">
    </div>
</template>

<script setup>
useHead({
    title: 'หน้าแรก',
    meta: [
        {
            name: 'descripton',
            content: 'ร้านค้าขายสินค้าออนไลน์'
        }
    ]
})

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

img {
    width: 500px;
    height: 500px;
}

</style>
