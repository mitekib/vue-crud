<template>
    <div>
        <h1>Update Employee</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2"><router-link :to="{ name: 'DisplayEmployee' }" class="btn btn-success">Return to Employees</router-link></div>
        </div>
        <form v-on:submit.prevent="updateEmployee">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" class="form-control" v-model="employee.fname">
            </div>
            <div class="form-group">
                <label>Last Name</label>
                <input type="text" class="form-control" v-model="employee.lname">
            </div>
            <div class="form-group">
                <label name="product_price">Phone</label>
                <input type="text" class="form-control" v-model="employee.phone">
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                employee:{}
            }
        },
        created: function(){
            this.getEmployee();
        },
        methods: {
            getEmployee()
            {
              let uri = `http://localhost:8000/employees/${this.$route.params.id}/edit`;
                this.axios.get(uri).then((response) => {
                    this.employee = response.data;
                });
            },
            updateEmployee()
            {
              let uri = 'http://localhost:8000/employees/'+this.$route.params.id;
                this.axios.patch(uri, this.employee).then((response) => {
                  this.$router.push({name: 'DisplayEmployee'});
                });
            }
        }
    }
</script>