<template>
    <div>
        <div class="container">
             <img :src="product.thumbnail" :alt="product.title">
             <div class="detail">
                    <h1>Name : {{ product.title }}</h1>
                    <h2>Price : ${{ product.price }}</h2>
                    <h2>Category : {{ product.category }}</h2>
                    <h3>Brand : {{ product.brand }}</h3>
                    <h4>Description : {{ product.description }}</h4>
                </div>
            </div>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const { data: product } = useFetch('https://dummyjson.com/products/' + id)
    console.log(product)
</script>

<style scoped>

.container {
    display: flex;
    justify-content: center;
}

.detail {
    padding-left: 10px;
}

</style>