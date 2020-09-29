---
layout: post
title: Apollo Dreamview
excerpt:
tags: tools
categories: IT

---

```json
dreamview: {
    server_
        websocket_: "/websocket"
        map_ws_: "/map"
        point_cloud_ws_: "/pointcloud"
        camera_ws_: "/camera"
        image_: ImageHandler, "/image"
            node_("image_handler")
                >> FLAGS_image_front_topic --- Image --> OnImageFront()
                >> FLAGS_image_short_topic --- CompressedImage --> OnImageShort()
        teleop_ws_: WebSocketHandler, "/teleop"
            RegisterConnectionReadyHandler()
            RegisterMessageHandler()
                "ToggleAudio"
                "ToggleMic"
                "ToggleVideo"
                "PullOver"
                "EStop"
                "ResumeCruise"
                "RequestTeleopStatus"
        teleop_: TeleopService
        map_service_: MapService
    sim_world_updater_
        websocket_
            RegisterConnectionReadyHandler
            RegisterMessageHandler
                "Binary"
                "RetrieveMapElementIdsByRadius"
                "CheckRoutingPoint"
                "SendRoutingRequest"
                "RequestSimulationWorld"
                "RequestRoutePath"
                "GetDefaultEndPoint"
                "Reset"
                "Dump"
                "ToggleSimControl"
                "RequestDataCollectionProgress"
        node_: cyber::CreateNode("simulation_world")
            >> FLAGS_routing_request_topic --- RoutingRequest --> DumpMessageFromReader()
            >> FLAGS_routing_response_topic --- RoutingResponse --> UpdateWithLatestObserved(), DumpMessageFromReader()
            >> FLAGS_chassis_topic --- Chassis --> UpdateWithLatestObserved(), UpdateLatency(), DumpMessageFromReader()
            >> FLAGS_gps_topic --- Gps --> UpdateWithLatestObserved()
            >> FLAGS_localization_topic --- LocalizationEstimate --> UpdateWithLatestObserved(), UpdateLatency(), DumpMessageFromReader()
            >> FLAGS_perception_obstacle_topic --- PerceptionObstacles --> UpdateWithLatestObserved(), UpdateLatency(), DumpMessageFromReader()
            >> FLAGS_traffic_light_detection_topic --- TrafficLightDetection --> UpdateWithLatestObserved(), DumpMessageFromReader()
            >> FLAGS_prediction_topic --- PredictionObstacles --> UpdateWithLatestObserved(), UpdateLatency(), DumpMessageFromReader()
            >> FLAGS_planning_trajectory_topic --- ADCTrajectory --> UpdateWithLatestObserved(), UpdateLatency(), DumpMessageFromReader()
            >> FLAGS_control_command_topic --- ControlCommand --> UpdateWithLatestObserved(), UpdateLatency(), DumpMessageFromReader()
            >> FLAGS_navigation_topic --- NavigationInfo --> UpdateWithLatestObserved(), DumpMessageFromReader()
            >> FLAGS_relative_map_topic --- MapMsg --> UpdateWithLatestObserved(), DumpMessageFromReader()
            >> FLAGS_storytelling_topic --- Stories --> UpdateWithLatestObserved()
            >> FLAGS_audio_detection_topic --- AudioDetection --> UpdateWithLatestObserved()
            >> FLAGS_audio_event_topic --- AudioEvent -->
            >> FLAGS_drive_event_topic --- DriveEvent --> 
            >> FLAGS_monitor_topic --- MonitorMessage -->
        map_ws_
            RegisterMessageHandler
                "RetrieveMapData"
                "RetrieveRelativeMapData"
        camera_ws_
            "RequestCameraData"
        sim_control_: SimControl
            node_: cyber::CreateNode("sim_control")
                >> FLAGS_localization_topic --- LocalizationEstimate -->
                >> FLAGS_planning_trajectory_topic --- ADCTrajectory --> OnPlanning()
                >> FLAGS_routing_response_topic --- RoutingResponse --> OnRoutingResponse()
                >> FLAGS_navigation_topic --- NavigationInfo --> OnReceiveNavigationInfo()
                >> FLAGS_prediction_topic --- PredictionObstacles --> OnPredictionObstacles()
                << FLAGS_localization_topic --- LocalizationEstimate --> 
                << FLAGS_chassis_topic --- Chassis --> 
                << FLAGS_prediction_topic --- PredictionObstacles --> 
        map_service_
        data_collection_monitor_: DataCollectionMonitor
            node_: cyber::Node ("data_collection_monitor")
                >> FLAGS_chassis_topic --- Chassis --> OnChassis()
        perception_camera_updater_
        
    point_cloud_updater_: (PointCloudUpdater)
        point_cloud_ws_
            RegisterConnectionReadyHandler()
            RegisterMessageHandler()
                "RequestPointCloud"
                "TogglePointCloud"
                
        sim_world_updater_
        
        node_: cyber::CreateNode("point_cloud")
            >> FLAGS_localization_topic --- LocalizationEstimate --> UpdateLocalizationTime()
            >> FLAGS_pointcloud_topic --- drivers::PointCloud --> UpdatePointCloud()
        
        
    hmi_:
        hmi_worker_:
            node_: cyber::CreateNode("HMI")
                << FLAGS_hmi_status_topic --- HMIStatus --> 
                << FLAGS_pad_topic --- control::PadMessage -->
                << FLAGS_audio_event_topic --- AudioEvent --> 
                << FLAGS_drive_event_topic --- DriveEvent -->
                >> FLAGS_system_status_topic --- SystemStatus --> 
                >> FLAGS_localization_topic --- LocalizationEstimate -->
                >> FLAGS_chassis_topic --- Chassis
        websocket_
            RegisterConnectionReadyHandler
            RegisterMessageHandler
                "HMIAction"
                    hmi_worker_->Trigger
                "SubmitAudioEvent"
                    hmi_worker_->SubmitAudioEvent
                "SubmitDriveEvent"
                    hmi_worker_->SubmitDriveEvent
                "HMIStatus"
        map_service_
        data_collection_monitor_
        
            
        
    perception_camera_updater_
        camera_ws_
        node_("perception_camera_updater")
            >> FLAGS_image_short_topic --- CompressedImage --> OnImage()
            >> FLAGS_localization_topic --- LocalizationEstimate --> OnLocalization()
}
```

# Node - Channel (topic) - Message

## node_("image_handler") @ image_: ImageHandler
- -> FLAGS_image_front_topic --- Image
- -> FLAGS_image_short_topic --- CompressedImage

## node_("simulation_world") @ sim_world_updater_
- -> FLAGS_routing_request_topic --- RoutingRequest
- -> FLAGS_routing_response_topic --- RoutingResponse
- -> FLAGS_chassis_topic --- Chassis
- -> FLAGS_gps_topic --- Gps
- -> FLAGS_localization_topic --- LocalizationEstimate
- -> FLAGS_perception_obstacle_topic --- PerceptionObstacles
- -> FLAGS_traffic_light_detection_topic --- TrafficLightDetection
​- -> FLAGS_prediction_topic --- PredictionObstacles
- -> FLAGS_planning_trajectory_topic --- ADCTrajectory
- -> FLAGS_control_command_topic --- ControlCommand
- -> FLAGS_navigation_topic --- NavigationInfo
- -> FLAGS_relative_map_topic --- MapMsg
- -> FLAGS_storytelling_topic --- Stories
- -> FLAGS_audio_detection_topic --- AudioDetection
- -> FLAGS_audio_event_topic --- AudioEvent
- -> FLAGS_drive_event_topic --- DriveEvent
- -> FLAGS_monitor_topic --- MonitorMessage

## node_("sim_control") @ sim_control_: SimControl
- -> FLAGS_localization_topic --- LocalizationEstimate
- -> FLAGS_planning_trajectory_topic --- ADCTrajectory
- -> FLAGS_routing_response_topic --- RoutingResponse
- -> FLAGS_navigation_topic --- NavigationInfo
- -> FLAGS_prediction_topic --- PredictionObstacles
- <- FLAGS_localization_topic --- LocalizationEstimate
- <- FLAGS_chassis_topic --- Chassis
- <- FLAGS_prediction_topic --- PredictionObstacles

## node_("data_collection_monitor") @ data_collection_monitor_: DataCollectionMonitor
​- -> FLAGS_chassis_topic --- Chassis

## node_("point_cloud") @ point_cloud_updater_: PointCloudUpdater
- -> FLAGS_localization_topic --- LocalizationEstimate
- -> FLAGS_pointcloud_topic --- drivers::PointCloud

## node_("HMI") @ hmi_worker_:
- <- FLAGS_hmi_status_topic --- HMIStatus
- <- FLAGS_pad_topic --- control::PadMessage
- <- FLAGS_audio_event_topic --- AudioEvent
- <- FLAGS_drive_event_topic --- DriveEvent
- -> FLAGS_system_status_topic --- SystemStatus
- -> FLAGS_localization_topic --- LocalizationEstimate
- -> FLAGS_chassis_topic --- Chassis

## node_("perception_camera_updater") @ perception_camera_updater_
- -> FLAGS_image_short_topic --- CompressedImage
- -> FLAGS_localization_topic --- LocalizationEstimate
