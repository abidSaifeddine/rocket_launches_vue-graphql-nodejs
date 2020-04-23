<template>
    <ApolloQuery
        :query="this.query"
        :variables="{flight_number}"
    >
        <template
        v-slot="{result: {loading,error,data}}"
        >
            <div class="text-success" v-if="loading">Loading...</div>
            <div v-else-if="error">An error has occurred</div>
            <div v-else-if="data">
                <h1 class="display-4 my-3">
                    <span class="text-dark">Mission: </span>
                    {{ data.launch.mission_name}}
                </h1>
                <h4 class="mb-3">Launch Details:</h4>
                <ul class="list-group">
                    <li class="list-group-item">Flight number: {{ data.launch.flight_number }}</li>
                    <li class="list-group-item">Launch Year: {{ data.launch.launch_year }}</li>
                    <li class="list-group-item">Launch Success: <span :class="data.launch.launch_success ? 'text-success':'text-danger'">{{ data.launch.flight_number? 'yes':'no' }}</span></li>

                </ul>
                <h4 class="my-3">Rocket Details</h4>
                <ul class="list-group">
                    <li class="list-group-item">
                        Rocket ID: {{ data.launch.rocket.rocket_id }}
                    </li>
                    <li class="list-group-item">
                        Rocket Name: {{ data.launch.rocket.rocket_name }}
                    </li>
                    <li class="list-group-item">
                        Rocket Type: {{ data.launch.rocket.rocket_type }}
                    </li>
                </ul>

                <button class="btn btn-secondary mt-3" @click="goBack">Go back</button>
            </div>
        </template>

    </ApolloQuery>
</template>

<script>
    import gql from 'graphql-tag';

    export default {
        name: "DetailsComponent",
        data() {
            return {
                flight_number: parseInt(this.$route.params.flight_number),
                query: gql`
                query fetchLaunch($flight_number: Int!){
                    launch (flight_number: $flight_number) {
                        flight_number
                        mission_name
                        launch_year
                        launch_date_local
                        launch_success
                        rocket{
                            rocket_id
                            rocket_name
                            rocket_type
                        }
                    }
                }

                `
            }
        },
        methods: {
            goBack(){
                return this.$router.go(-1)
            }
        }


    }
</script>

<style scoped>

</style>
