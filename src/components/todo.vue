<template>
  <div class="row mt-5">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <h3>{{ Header }}</h3>
        </div>
        <div class="card-body">
          <form @submit.prevent="saveTodo">
            <div class="row">
              <div class="col-sm-1"></div>
              <div class="col-sm-2">Title</div>
              <div class="col-sm-3">
                <input
                  type="text"
                  v-model="todo.title"
                  style="width: 450px;"
                  required
                />
                <div class="invalid-feedback">Please fill out this field.</div>
              </div>
              <div class="col-sm-7"></div>
            </div>
            <div class="row mt-1">
              <div class="col-sm-1"></div>
              <div class="col-sm-2">Completed</div>
              <div class="col-sm-3">
                <input
                  type="checkbox"
                  class="float-left"
                  v-model="todo.completed"
                />
              </div>
              <div class="col-sm-7"></div>
            </div>
            <div class="row">
              <div class="col-sm-3"></div>
              <div class="col-sm-3 mt-1">
                <input
                  type="submit"
                  class="btn btn-dark float-left"
                  value="Save"
                />
              </div>
              <div class="col-sm-7"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="col-sm-1"></div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      Header: "",
      todo: null
    };
  },
  methods: {
    saveTodo: function() {
      //   console.log(this.todo.title);
      //   console.log(this.todo.completed);
      axios
        .put(
          `https://jsonplaceholder.typicode.com/todos/${this.todo.id}`,
          this.todo
        )
        .then(resp => {
          console.log("Data updated successfuly");
          console.log(
            `updated todo - ${resp.data.title}, ${resp.data.completed}`
          );
          this.todo = resp.data;
          this.Header = `Edit ToDo - ${this.todo.title}`;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created: function() {
    this.todo = { title: "Edit" };
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(resp => {
        console.log(resp.data);
        this.todo = resp.data;
        this.Header = `Edit ToDo - ${this.todo.title}`;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
