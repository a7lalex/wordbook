<template>
    <div class="card-list">
        <ul class="list" v-if="list.length">
            <draggable>
                <li class="list-item" v-for="item in list" :key="item.id">
                    <item :item="item"/>
                </li>
            </draggable>
        </ul>
        <div class="list" v-else>
            <p class="list-item list-error"> List null </p>
        </div>
    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    import item from './item'
    export default {
        name: 'ListFavorites.vue',
        props: ['list'],
        components: {item, draggable},
    }
</script>

