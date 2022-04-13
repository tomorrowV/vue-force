<template>
    <div>
        <button class="light-button btn-reset">
            <img src="@/assets/search.png" width="24" height="24" alt="">
        </button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .light-button {
        padding: 8px;
        height: 40px;
        background-color: var(--color-yellow);
        border-radius: 5px;
        color: var(--color-white);
        transition: background-color .25s ease-in-out;

        &:hover {
            background-color: rgba(#FEDD00, 0.8);
        }
    }
</style>
