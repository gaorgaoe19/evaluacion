<template>
    <div id="default-container" class="container">
        <router-view></router-view>
    </div>
</template>

<script src="./script.js"></script>

<style>
    #default-container {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
