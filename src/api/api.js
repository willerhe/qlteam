import http from './http/http'

let api = {
    project: http.generalApi("project", "projects"),
    story: http.generalApi("story", "stories"),
    user: http.generalApi("user", "users"),
    task: http.generalApi("task", "tasks")
}

api.login = function (obj) {
    return http.post("/login", obj)
}

api.register = function (obj) {
    return http.post("/register",obj)
}

api.http = http
export default api


