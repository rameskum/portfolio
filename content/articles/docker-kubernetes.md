# Container Orchestration with Kubernetes

Kubernetes has become the industry standard for container orchestration. Understanding its concepts is essential for modern backend engineering.

## From Docker to Kubernetes

Docker containers package applications with their dependencies. Kubernetes orchestrates these containers across clusters, handling:

- **Scheduling** - Where containers run
- **Scaling** - How many replicas
- **Networking** - How containers communicate
- **Storage** - Persistent data management
- **Health** - Automatic restarts and replacements

## Core Concepts

### Pods
The smallest deployable unit - one or more containers:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: backend-api
spec:
  containers:
  - name: api
    image: myapp:v1.0
    ports:
    - containerPort: 8080
```

### Deployments
Manage desired state for pods:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: backend-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: backend
  template:
    metadata:
      labels:
        app: backend
    spec:
      containers:
      - name: api
        image: myapp:v1.0
```

### Services
Expose pods to the network:

```yaml
apiVersion: v1
kind: Service
metadata:
  name: backend-service
spec:
  selector:
    app: backend
  ports:
  - port: 80
    targetPort: 8080
  type: LoadBalancer
```

## Production Patterns

### ConfigMaps and Secrets
Externalize configuration:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database.url: "jdbc:postgresql://db:5432/mydb"
  cache.ttl: "3600"
```

### Health Checks
Liveness and readiness probes:

```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
```

### Resource Limits
Prevent resource exhaustion:

```yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "500m"
  limits:
    memory: "512Mi"
    cpu: "1000m"
```

## Observability

- **Prometheus** - Metrics collection
- **Grafana** - Visualization
- **Loki** - Log aggregation
- **Jaeger** - Distributed tracing

## Conclusion

Kubernetes is complex but powerful. Start with basic concepts, then gradually adopt advanced patterns as your needs grow.
