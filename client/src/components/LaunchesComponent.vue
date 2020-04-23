<template>
    <div>
        <MissionKey />
        <h1 class="display-4 my-3">Launches</h1>
        <div v-for="launch in launches" :key="launch.flight_number">
            <LaunchItem :item="launch"/>
        </div>
    </div>
</template>

<script>
    import gql from 'graphql-tag';
    import LaunchItem from "./LaunchItem";
    import MissionKey from "./MissionKey";
    export default {
        name: "LaunchesComponent",
        components: {MissionKey, LaunchItem},
        apollo: {
            launches: gql`
                query {
                    launches {
                        flight_number,
                        mission_name,
                        launch_year,
                        launch_date_local,
                        launch_success
                    }
                }
            `
        },

    }
</script>

<style scoped>

</style>
