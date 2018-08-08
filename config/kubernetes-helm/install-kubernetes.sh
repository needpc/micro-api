#!/bin/bash

# VARS DOCKER REGISTRY / KUBERNETES
DOCKER_HOST=quay.io
DOCKER_USERNAME=
DOCKER_PASSWORD=
NAMESPACE_SYSTEM=kube-system
NAMESPACE_MONITORING=monitoring
NAMESPACE_APP=needpc


# AUTH DOCKER REGISTRY
kubectl create secret docker-registry regcred --docker-server=${DOCKER_HOST} --docker-username=${DOCKER_USERNAME} --docker-password=${DOCKER_PASSWORD} --docker-email=${DOCKER_USERNAME}

# NAMESPACES
kubectl apply -f namespaces.yml
kubectl apply -f secrets.yml -n ${NAMESPACE_APP} # create file if not exist
kubectl apply -f cronjobs.yml -n ${NAMESPACE_APP}

kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/master/src/deploy/recommended/kubernetes-dashboard.yaml
kubectl apply -f dashboard-config.yaml -n ${NAMESPACE_SYSTEM}

# HELM
kubectl apply -f rbac-config.yaml -n ${NAMESPACE_SYSTEM}
helm init --service-account tiller --upgrade
helm repo add incubator https://kubernetes-charts-incubator.storage.googleapis.com/
helm repo add coreos https://s3-eu-west-1.amazonaws.com/coreos-charts/stable/
helm repo add banzaicloud http://kubernetes-charts.banzaicloud.com/branch/master
helm repo update

# HELM CHART INSTALL (REMOTE)
helm install stable/metrics-server --name metrics-server --namespace ${NAMESPACE_SYSTEM} -f configs/metrics-server-values.yaml
helm install coreos/kube-prometheus --name kube-prometheus --set global.rbacEnable=true --namespace ${NAMESPACE_MONITORING} -f configs/prometheus-values.yaml
helm install coreos/prometheus-operator --name prometheus-operator --namespace ${NAMESPACE_MONITORING}
# helm install banzaicloud/hpa-operator --name hpa-operator --namespace ${NAMESPACE_SYSTEM}
helm install stable/nginx-ingress --name nginx-ingress --namespace ${NAMESPACE_SYSTEM} -f configs/nginx-ingress-values.yaml

# HELM CHART INSTALL (LOCAL)
helm install ./charts/activities  --name activities --namespace ${NAMESPACE_APP}
helm install ./charts/ask  --name ask --namespace ${NAMESPACE_APP}
helm install ./charts/brands  --name brands --namespace ${NAMESPACE_APP}
helm install ./charts/computers  --name computers --namespace ${NAMESPACE_APP}
helm install ./charts/computers-id  --name computers-id --namespace ${NAMESPACE_APP}
helm install ./charts/cpus  --name cpus --namespace ${NAMESPACE_APP}
helm install ./charts/gpus  --name gpus --namespace ${NAMESPACE_APP}
helm install ./charts/frontend  --name frontend --namespace ${NAMESPACE_APP}

