import http from './http/http'

let api = {
    project: http.generalApi("project", "projects"),
    story: http.generalApi("story", "stories"),
    user: http.generalApi("user", "users"),
    task: http.generalApi("task", "tasks")
}

// task 任务
api.task.distribution = function (params) {
    return http.get('/tasks/distribution', {params: params})
}
api.task.establish = function (params) {
    return http.get('/tasks/establish', {params: params})
}

api.login = function (obj) {
    return http.post("/login", obj)
}

api.register = function (obj) {
    return http.post("/register", obj)
}


import axios from 'axios'

const plain = axios.create({
    baseURL: "http://106.15.178.205:9900/",
})

api.ws = {}
api.ws.dispatch = function (id, msg) {
    return plain.put('/ws/' + id, msg)
}
api.ws.offline = function (id) {
    return plain.delete('/ws/' + id)
}


api.http = http
export default api


