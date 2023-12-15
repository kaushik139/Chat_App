<template>
    <div class="cont">
        <span prepend-icon="mdi-copyright">ChatON {{ year }}</span>
    </div>
</template>

<script>

export default {
    name: 'footer',

    computed: {
        year() {
            const dat = new Date();
            return dat.getFullYear();
        }
    }
}
</script>

<style scoped>
.cont{
    background: black;
    color: white;
    text-align: center;
    /* max-height: 40px; */
}
</style>