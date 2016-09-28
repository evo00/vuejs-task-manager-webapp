<template>
    <div id="app">

        <header>
            <nav>
                <a v-link="{ path: '/dashboard' }">Dashboard</a>
                <a v-link="{ path: '/tasks' }">Tasks</a>
            </nav>
        </header>

        <br/>

        <router-view></router-view>

    </div>
</template>

<script type="text/babel">
    import 'font-awesome/css/font-awesome.min.css'

    export default {}
</script>

<style lang="scss">
    @import '../styles/components/app.scss';
</style>
