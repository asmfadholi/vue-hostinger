
export default {
  todoList () {
    const api = this.generateApi()
    return api.get('/todos').then(res => res)
  }
}
