<template>
    <div class="cont_footer">
        <a class="text">&copy; ChatON  {{ year }}</a>
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
.cont_footer{
    background: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    text-align: center;
    padding-top: 15px;
}
a{
        text-decoration: none;
}
</style>