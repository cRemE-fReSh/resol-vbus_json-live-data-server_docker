# Containerized Resol VBUS to Data Server
![example workflow](https://github.com/cRemE-fReSh/resol-vbus_json-live-data-server_docker/actions/workflows/docker-image.yml/badge.svg)
![example workflow](https://github.com/cRemE-fReSh/resol-vbus_json-live-data-server_docker/actions/workflows/main.yml/badge.svg)

Docker containerized version of the json-live-data-server from resol-vbus.<br>
It's a simple webserver to publish data (JSON and prometheus) of an tcp based vbus device.<br>
Relevant configuration parameters are configurable via docker environment variables. <br>
There's no need to create a customized docker file per configuration.<br>

## Docker Hub
Docker container ready to pull from Docker Hub:<br>
Remark: Will be available after actually running long term tests.<br>
https://registry.hub.docker.com/r/cftechnologies/vbustowebserver/<br>

## Docker Environment Variables
### Description of environment variables
VBUSIP: The host name / IP address of the VBus/LAN or Datalogger device.<br>
VBUSPASSWORD: The password for the VBus/LAN or Datalogger device.<br>
HTTPPORT: The port number for the HTTP server to listen to.<br>
LOGGINGINTERVAL: The inteval in milliseconds between two writes of the logging file.<br>

### Example config for environment variables
VBUSIP=192.168.0.2<br>
VBUSPASSWORD=vbus<br>
HTTPPORT=3333<br>
LOGGINGINTERVAL=10000<br>

## NodeRed Example Flow (Home Assistant)
Below an example (just import to your node red flow) to fetch data from the server via JSON and write it into HD Entities.<br>
<br>
```javascript
[{"id":"866f040.a0dc","type":"tab","label":"Solarthermie","disabled":false,"info":""},{"id":"9dfb4a61.a2689","type":"http request","z":"866f040.a0dc","name":"","method":"GET","ret":"obj","paytoqs":"ignore","url":"http://192.168.188.45:3333/api/v1/live-data","tls":"","persist":false,"proxy":"","authType":"","credentials":{},"x":370,"y":120,"wires":[["359fd186707d75b5","c893040cde3b088a","a06b7e907cedafb7","5f23bb57b752de12"]]},{"id":"3d61cadb.e05996","type":"inject","z":"866f040.a0dc","name":"1min","repeat":"60","crontab":"","once":false,"onceDelay":"","topic":"","payload":"","payloadType":"date","x":210,"y":120,"wires":[["9dfb4a61.a2689"]]},{"id":"359fd186707d75b5","type":"ha-entity","z":"866f040.a0dc","name":"SolarTempCollektor","server":"ed0e528f.b8b9f","version":1,"debugenabled":false,"outputs":1,"entityType":"sensor","config":[{"property":"name","value":"SolarTempCollektor"},{"property":"device_class","value":"temperature"},{"property":"icon","value":"mdi:solar-panel"},{"property":"unit_of_measurement","value":"°C"}],"state":"payload[1].rawValue","stateType":"msg","attributes":[],"resend":true,"outputLocation":"","outputLocationType":"none","inputOverride":"allow","outputOnStateChange":false,"outputPayload":"$entity().state ? \"on\": \"off\"","outputPayloadType":"jsonata","x":780,"y":120,"wires":[[]]},{"id":"c893040cde3b088a","type":"ha-entity","z":"866f040.a0dc","name":"Solar_Temp_WaterBufferVesselBelow","server":"ed0e528f.b8b9f","version":1,"debugenabled":false,"outputs":1,"entityType":"sensor","config":[{"property":"name","value":"SolarTempWaterBufferVesselBelow"},{"property":"device_class","value":"temperature"},{"property":"icon","value":"mdi:thermometer-low"},{"property":"unit_of_measurement","value":"°C"}],"state":"payload[2].rawValue","stateType":"msg","attributes":[],"resend":true,"outputLocation":"","outputLocationType":"none","inputOverride":"allow","outputOnStateChange":false,"outputPayload":"$entity().state ? \"on\": \"off\"","outputPayloadType":"jsonata","x":790,"y":180,"wires":[[]]},{"id":"a06b7e907cedafb7","type":"ha-entity","z":"866f040.a0dc","name":"Solar_Temp_Pipe","server":"ed0e528f.b8b9f","version":1,"debugenabled":false,"outputs":1,"entityType":"sensor","config":[{"property":"name","value":"SolarTempPipe"},{"property":"device_class","value":"temperature"},{"property":"icon","value":"mdi:pipe"},{"property":"unit_of_measurement","value":"°C"}],"state":"payload[3].rawValue","stateType":"msg","attributes":[],"resend":true,"outputLocation":"","outputLocationType":"none","inputOverride":"allow","outputOnStateChange":false,"outputPayload":"$entity().state ? \"on\": \"off\"","outputPayloadType":"jsonata","x":770,"y":240,"wires":[[]]},{"id":"5f23bb57b752de12","type":"ha-entity","z":"866f040.a0dc","name":"Solar_PumpSpeed","server":"ed0e528f.b8b9f","version":1,"debugenabled":false,"outputs":1,"entityType":"sensor","config":[{"property":"name","value":"SolarPumpSpeed"},{"property":"device_class","value":"power_factor"},{"property":"icon","value":"mdi:pump"},{"property":"unit_of_measurement","value":"%"}],"state":"payload[11].rawValue","stateType":"msg","attributes":[],"resend":true,"outputLocation":"","outputLocationType":"none","inputOverride":"allow","outputOnStateChange":false,"outputPayload":"$entity().state ? \"on\": \"off\"","outputPayloadType":"jsonata","x":770,"y":300,"wires":[[]]},{"id":"ed0e528f.b8b9f","type":"server","name":"Home Assistant","version":1,"legacy":false,"addon":true,"rejectUnauthorizedCerts":true,"ha_boolean":"y|yes|true|on|home|open","connectionDelay":true,"cacheJson":true}]
```

## Usage of the git repo
- download/clone repo<br>
- build image from dockerfile<br>

## Contribution
Thanks to [danielwippermann](https://github.com/danielwippermann "danielwippermann") for the [original source of the server](https://github.com/danielwippermann/resol-vbus/tree/master/examples/json-live-data-server "original source of the server") and the [resol-vbus library](https://github.com/danielwippermann/resol-vbus "resol-vbus library")!
