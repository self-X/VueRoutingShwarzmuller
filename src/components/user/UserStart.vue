<template>
    <div>
        <p>Please select a User</p>
        <hr>
        <ul class="list-group">
            <router-link class="list-group-item" 
                        to="/user/1"
                        style="cursor: pointer" 
                        tag="li">User 1</router-link>
            <router-link class="list-group-item"
                        to="/user/2"
                        style="cursor: pointer"
                        tag="li">User 2</router-link>
            <router-link class="list-group-item"
                        to="/user/3"
                        style="cursor: pointer"
                        tag="li">User 3</router-link>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>
