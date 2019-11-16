<template>
  <div id="app">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">todolist</a>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="panel panel-default panel-warning">
            <div class="panel-heading text-danger h3">
              亲~ 你有 {{count}} 件事要完成
              <input
                type="text"
                class="form-control"
                v-model="title"
                @keyup.enter="add"
              />
            </div>
            <div class="panel-body">
              <ul class="list-group">
                <li
                  class="list-group-item"
                  v-for="(item, index) in filterTodos"
                  :key="index"
                  @dblclick="remember(item)"
                >
                  
                  <span :class="{del: item.isSelected}" v-show="cur !== item">
                    <input type="checkbox" v-model="item.isSelected" />
                    {{ item.title }}
                  </span> 
                  <input type="text" v-model="item.title" v-show="cur === item" v-focus="cur === item">
                  <button class="pull-right btn btn-danger" @click="remote(item)">删除</button>
                </li>
              </ul>
            </div>
            <div class="panel-footer">
              <ul class="nav nav-pills">
                <li class="presentation btn"><a href="#/all" :class="{active: hash==='all'}">全部任务</a></li>
                <li class="presentation btn"><a href="#/finish" :class="{active: hash==='finish'}">已完成</a></li>
                <li class="presentation btn"><a href="#/unfinish" :class="{active: hash==='unfinish'}">未完成</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [
        {
          isSelected: false,
          title: "睡觉"
        },
        {
          isSelected: true,
          title: "吃饭"
        }
      ],
      title: "",
      cur: '',
      hash: ''
    };
  },
  created() {
      this.todos = JSON.parse(localStorage.getItem("todoList")) || this.todos;

      // 监控 hash 值的变化
      this.hash = window.location.hash.slice(2) || 'all';
      window.addEventListener('hashchange', () => {
        this.hash = window.location.hash.slice(2);
      }, false);
  },
  methods: {
    add() {
      if (this.title) {
        let item = {
          isSelected: false,
          title: this.title
        };
        this.todos.push(item);
        this.title = '';
      }
    },
    remote (item) {
      this.todos = this.todos.filter(todo => todo !== item);
    },
    remember (item) {
      this.cur = item;
    }
  },
  computed: {
    count () {
      return this.todos.filter(item => !item.isSelected).length;
    },
    filterTodos () {
      if (this.hash ==='all') { return this.todos};
      if (this.hash === 'finish'){ return  this.todos.filter(item => item.isSelected)};
      if (this.hash === 'unfinish'){ return this.todos.filter( item => !item.isSelected)};
      return this.todos;
    }
  },
  directives: {
    focus (el, bindings) {
      if (bindings.value) {
        el.focus();
      }
    }
  },
  watch: {
    todos: {  // 数据只能监测一层变化，深度检测
      handler () {    // 默认写成函数， 就相当于写成 handler
        let jsonTodo = JSON.stringify(this.todos);
        localStorage.setItem("todoList", jsonTodo);
      },
      deep: true
    }
  }
};
</script>

<style lang="css">
  .del {
    text-decoration: line-through;
    color: red;
  }
  .active {
    background-color: yellow;
  }
</style>
