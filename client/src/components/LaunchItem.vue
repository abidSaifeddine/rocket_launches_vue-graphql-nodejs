<template>
    <div class="card card-body mb-3">
        <div class="row">
            <div class="col-md-9">
                <h4>Mission: <span :class="item.launch_success ? 'text-success':'text-danger'">{{ item.mission_name }}</span></h4>
                <p>Date: {{ formatDate(item.launch_date_local) }}</p>
            </div>
            <div class="col-md-3">
                <router-link
                        :to="{name: 'Details',
                         params: {flight_number: item.flight_number}}"
                        class="btn btn-secondary">
                    Launch details
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import Moment from 'moment';
    export default {
        name: "LaunchItem",
        props: ['item'],
        methods: {
            formatDate(date){
                return Moment(date).format("DD--MM--YYYY HH:mm")
            }
        }
    }
</script>

<style scoped>

</style>
