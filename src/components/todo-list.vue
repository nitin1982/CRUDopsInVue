<template>
  <div class="row mt-5">
    <div class="col-sm-1"></div>
    <div class="col-sm-10">
      <div class="card">
        <div class="card-header bg-dark text-white">
          <h3>{{ Header }}</h3>
        </div>
        <div class="card-body">
          <table class="table table-dark table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>User Id</th>
                <th>Title</th>
                <th>Completed</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="todo in toDos" v-bind:key="todo.id">
                <td>{{ todo.id }}</td>
                <td>{{ todo.userId }}</td>
                <td>{{ todo.title }}</td>
                <td>
                  <input type="checkbox" v-model="todo.completed" />
                </td>
                <td>
                  <div class="row">
                    <div class="col-sm-5"></div>
                    <div class="col-sm-1">
                      <router-link
                        class="fa fa-pencil"
                        style="font-size:15px;color:white"
                        :to="{ name: 'ToDo', params: { id: todo.id } }"
                      ></router-link>
                    </div>
                    <div class="col-sm-1">
                      <a
                        class="fa fa-trash-o"
                        style="font-size:15px"
                        @click.prevent="deleteToDo(todo.title)"
                      />
                    </div>
                    <div class="col-sm-5"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="col-sm-1"></div>
    <ConfirmBox
      v-if="showConfirmation"
      @closeConfirmBox="showConfirmation = false"
      :message="confirmBoxMessage"
      @okConfirmBox="deleteConfirmed"
    ></ConfirmBox>
  </div>
</template>

<script>
import ConfirmBox from "./confirm-box";
import axios from "axios";
export default {
  components: { ConfirmBox },
  data: function() {
    return {
      Header: "ToDo(s)  List",
      showConfirmation: false,
      confirmBoxMessage: "",
      toDos: [
        {
          userId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: true
        },
        {
          userId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteToDo: function(todo) {
      this.showConfirmation = !this.showConfirmation;
      this.confirmBoxMessage = `Are you sure you want to delete '${todo}'`;
    },

    deleteConfirmed: function() {
      this.showConfirmation = false;
    }
  },
  created: function() {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then(resp => {
        console.log(resp.data);
        this.toDos = resp.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
</script>
