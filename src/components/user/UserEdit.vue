<template>
<div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>Analytics: {{ $route.query.q }}</p>
    <hr>
    <button class="btn btn-primary" @click="confirmed = true;">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some extra Data</p>
</div>
</template>

<script>
export default {
    date() {
        return{
            confirmed: false,
        };
    },
    beforeRouteleave(to, from, next) {
        if(this.confirmed){
            next();
        } else {
            if(confirm('Are u sure?')) next();
            else next(false);
        }
    }
}
</script>

<style>

</style>
