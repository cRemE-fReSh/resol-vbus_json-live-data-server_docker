# resol-vbus_json-live-data-server_docker

Docker containerized version of the json-live-data-server from resol-vbus.
It's a simple webserver to publish data (JSON and prometheus) of an tcp based vbus device.
Relevant configuration parameters are configurable via docker environment variables. 
There's no need to create a customized docker file per configuration.

Docker container ready to pull from Docker Hub:
https://registry.hub.docker.com/r/cftechnologies/vbustowebserver/

Description of environment variables:
VBUSIP: The host name / IP address of the VBus/LAN or Datalogger device.
VBUSPASSWORD: The password for the VBus/LAN or Datalogger device.
HTTPPORT: The port number for the HTTP server to listen to.
LOGGINGINTERVAL: The inteval in milliseconds between two writes of the logging file.

Example config for environment variables:
VBUSIP=192.168.0.2
VBUSPASSWORD=vbus
HTTPPORT=3333
LOGGINGINTERVAL=10000

Usage of the git repo:
- download/clone repo
- build image from dockerfile

NodeRed Example Flow:
Example export file - please refer to folter nodered.

Contribution
Thanks to @danielwippermann for the original source of the server and the resol-vbus library!
https://github.com/danielwippermann/resol-vbus/tree/master/examples/json-live-data-server
