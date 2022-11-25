# zomato-proj-master-shapeai

## Installing and setting up docker on EC2

> Note this is just one time step please dont repeat more than once for the same EC2 instance.

### SSH to your EC2 instance

```shell
ssh -i <your key> ubuntu@<public ip>
```

### create new app directory

```shell
mkdir app
cd app
```

### clone repository

```shell
git clone <your repo url>
```

### Go inside project directory

```shell
cd <your directory name>
```

### Now install docker

_Please run the below commands one by one._

```shell
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
```

```shell
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```shell
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu  $(lsb_release -cs)  stable"
```

```shell
sudo apt-get install docker-ce
```

Now verify docker installation

```shell
docker --version
```

Now enable to docker to run when systen starts up

```shell
sudo systemctl start docker
```

```shell
sudo systemctl status docker
```

Now to exit from the command press :Q

### Now Install Docker Compose

_Please run the below commands one by one._

```shell
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

```shell
sudo chmod +x /usr/local/bin/docker-compose
```

Now verify docker installation

```shell
docker–compose --version
```

## Run the application

```shell
docker-compose up -d --build
```
