<template>
  <div>
    <h1>Create An Employye</h1>
    <form v-on:submit.prevent="addEmployee">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>First Name:</label>
            <input type="text" class="form-control" v-model="employee.fname">
          </div>
        </div>
        </div>
        <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Last Name:</label>
            <input type="text" class="form-control" v-model="employee.lname">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Phone:</label>
              <input type="text" class="form-control col-md-6" v-model="employee.phone" />
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Add Employee</button>
        </div>
    </form>
  </div>
</template>
<script>
  export default {
    data(){
        return{
          employee:{}
        }
    },
    methods: {
      addEmployee(){
        let uri = 'http://localhost:8000/employees';
        this.axios.post(uri, this.employee).then((response) => {
          this.$router.push({name: 'DisplayEmployee'})
        })
    }
  }
}
</script>