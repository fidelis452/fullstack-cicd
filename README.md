# fullstack-cicd


## // Example in your Cypress configuration (cypress.json)
### {
 # "baseUrl": "http://your-service-name.your-namespace.svc.cluster.local"
### }


### To make the pod run only once as a Job, you can use a Kubernetes Job resource instead of a Deployment. A Job in Kubernetes is designed for running short-lived tasks or batch jobs, and it terminates once the task is completed.