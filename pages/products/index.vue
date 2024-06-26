<template>
    <div class="container">
        <div v-for="product in productData.products">
            <NuxtLink :to="`/products/${product.id}`" >
                <h2 class="title">{{ product.title }}</h2>
            </NuxtLink>
            <img :src="product.thumbnail" :alt="product.title">
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'สินค้าทั้งหมด',
        meta: [
            {
                name: 'descripton',
                content: 'ร้านค้าขายสินค้าออนไลน์'
            }
        ]
    })
    const { data: productData } = await useFetch("https://dummyjson.com/products?limit=12")
    console.log(productData)

</script>

<style scoped>

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.container div {
    width: 300px;
    height: 300px;
    margin: 30px 15px;
    background: #333;
}

.title {
    color: white;
    text-align: center;
    font-size: 1.2em;
}

.container div:hover {
    background: orange;
    cursor: pointer;
}

img {
    width: 300px;
    height: 300px;
}

a {
    text-decoration: none;
}

</style>