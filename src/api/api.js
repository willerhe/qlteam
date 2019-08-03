import http from './http/http'

let api = {
    project: http.generalApi("project", "projects"),
    story: http.generalApi("story", "stories"),
    task: http.generalApi("task", "tasks")
}


export default api


