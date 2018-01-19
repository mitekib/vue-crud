<template>
    <div>
        <h1>Employees</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'CreateEmployee' }" class="btn btn-primary">Create an Employee</router-link>
          </div>
        </div><br />
        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>First Name</td>
                 <td>Last Name</td>
                <td>Phone</td>
                <td>Actions</td>
            </tr>
            </thead>
            <tbody>
                <tr v-for="employee in employees">
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.fname }}</td>
                    <td>{{ employee.lname }}</td>
                    <td>{{ employee.phone }}</td>
                    <td><router-link :to="{name: 'EditEmployee', params: { id: employee.id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger" v-on:click="deleteEmployee(employee.id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                employees: []
            }
        },
        created: function()
        {
            this.fetchEmployees();
        },
        methods: {
            fetchEmployees()
            {
              let uri = 'http://localhost:8000/employees';
              this.axios.get(uri).then((response) => {
                  this.employees = response.data;
              });
            },
            deleteEmployee(id)
            {
              let uri = `http://localhost:8000/employees/${id}`;
              this.employees.splice(id, 1);
              this.axios.delete(uri).then((response) => {
                  this.$router.push({name: 'DisplayEmployee'});
                });
            }
        }
    }
</script>
