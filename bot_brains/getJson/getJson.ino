#include <WiFi.h>
#include "heltec.h"
#include "WiFi.h"
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <dht11.h>

//---------- PIN VARS ---------------
//-----DIGITAL------
#define pin_13 13
#define pin_12 12
#define pin_14 14
#define pin_27 27

//-----ANALOG AND DIGITAL------
#define pin_26 26
#define pin_25 25

//--------------------------- GLOBAL VARS -----------------------------

//---------- WIFI VARS ---------------
const char* ssid = "TP-Link_A36A";
const char* password = "codner1234";
char jsonOutput[128];
dht11 DHT;

//--------------------------- BOARD SETUP -----------------------------
void setup() {

  //Setup Heltec display
  pinMode(LED, OUTPUT);

  pinMode(pin_13, OUTPUT);
  pinMode(pin_12, OUTPUT);
  pinMode(pin_14, OUTPUT);
  pinMode(pin_27, OUTPUT);
  pinMode(pin_26, OUTPUT);
  pinMode(pin_25, OUTPUT);

  DHT.read(pin_25);

  Heltec.begin(true /*DisplayEnable Enable*/, false /*LoRa Enable*/, true /*Serial Enable*/);
  delay(300);

  //Start Serial
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wifi");
  
  Heltec.display -> drawString(1, 1*9, "Connecting to Wifi");
  Heltec.display -> display();


  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    
    Heltec.display -> drawString(2, 2*9, ".");
    Heltec.display -> display();
    delay(500);
  }

  Serial.println("\nConnected to the Wifi network");
  Heltec.display -> drawString(3, 3*9, "\nConnected to: " + String(ssid));
  
  Serial.print("IP Address: ");
  String LocalIP = String() + WiFi.localIP()[0] + "." + WiFi.localIP()[1] + "." + WiFi.localIP()[2] + "." + WiFi.localIP()[3];
  Heltec.display -> drawString(4, 4*9, "IP Address: " + LocalIP);
  
  Serial.println(WiFi.localIP());
  
  //Heltec.display -> drawString(5, 5*9, String(WiFi.localIP()));
  Heltec.display -> display();

}

//--------------------------- COMMAND FUNCTIONS -----------------------------

void blinkFlash(int pinLEDInt, int delayedTime){
  digitalWrite(pinLEDInt,HIGH);
  delay(delayedTime);                       
  digitalWrite(pinLEDInt,LOW);
}

void getAtmosph(int pinLEDInt, int delayedTime){

    Heltec.display -> drawString(6, 6*9, "Hum: " + String((float)DHT.humidity) + " / Temp: " + String((float)DHT.temperature));
    Heltec.display -> display();

    Serial.print("Current Humidity = ");
    Serial.print((float)DHT.humidity);
    Serial.print("%  ");
    Serial.print(" / Temp = ");
    Serial.print((float)DHT.temperature); 
    Serial.println("C  ");
    delay(delayedTime);
}

void updateCommandExecutions(int commandID, String newStatus){
  HTTPClient client;
  client.begin("http://localhost:3000/api/arc_db/arc_cmd_table/cmd_id/"+String(commandID));
  client.addHeader("Content-Type", "application/json");

  const size_t CAPACITY = JSON_OBJECT_SIZE(2);
  StaticJsonDocument<CAPACITY> doc;

  JsonObject obj = doc.to<JsonObject>();

  obj["cmd_status"] = newStatus;
  obj["cmd_date_executed"] = "2021-05-05T00:00:00.000Z";

  serializeJson(doc, jsonOutput);
  int httpCode = client.PATCH(String(jsonOutput));

   //Serial.println(jsonOutput + "\n Http code: " + String(httpCode));
  
}

//--------------------------- COMMAND EXECUTIONS -----------------------------
void executeCommands(String id, String cmd){

  // Assign required variables
  

  //Execute Given Commands
  if(cmd == "ABC12345"){ // MOVE_UP
    blinkFlash(pin_13, 500);
  }else if(cmd == "ABC12346"){ // MOVE_DOWN
    blinkFlash(pin_26, 500); 
  }else if(cmd == "ABC12347"){ // MOVE_LEFT
    blinkFlash(pin_14, 500);
  }else if(cmd == "ABC12348"){ // MOVE_RIGHT
    blinkFlash(pin_27, 500);
  }else if(cmd == "ABC12349"){ // VIBRATE_DEFAULT
    
  }else if(cmd == "ABC12350"){ // BLINK_0    
     getAtmosph(pin_25, 500);
  }else if(cmd == "ABC12351"){ // JUMP_0
  }else if(cmd == "ABC12352"){ // WAIT_0
  }else if(cmd == "ABC12353"){ // SCAN_0
  }else if(cmd == "ABC12354"){ // SIGNAL_0
  }else if(cmd == "fd35bd0bea"){ // GRAB_0
  }else if(cmd == "0"){ // DO NOTHING
    blinkFlash(LED, 500);
  }

  //Update Status of given commands
  //<patch commands go here>
}

//---------------------------MAIN LOOP-----------------------------
void loop() {
  
  if(WiFi.status() == WL_CONNECTED){

    const String newCmdStatus = "EXECUTED";
    const char* robot_id = "a4b28d8e1c";
    HTTPClient client;

    client.begin("http://lonaris.ca:3000/api/arc_db/arc_cmd_table/cmd_status/UNEXECUTED/r_usr_an_id/"+String(robot_id));
    int httpCode = client.GET();

    if(httpCode > 0){
      String payload = client.getString();
      Serial.println("\n Statuscode: " + String(httpCode));
      Serial.println(payload);

      //deserialize json
      char json[1000];
      payload.toCharArray(json, 1000);

      DynamicJsonDocument doc(24576);
      deserializeJson(doc, payload);

      for (JsonObject elem : doc.as<JsonArray>()) {

        const char* cmd_id = elem["cmd_id"]; 
        const char* cmd_an_id = elem["cmd_an_id"]; 
        const char* cmd_exec_name = elem["cmd_exec_name"]; 

        executeCommands(String(cmd_an_id), String(cmd_exec_name));
       
        Serial.println(String(cmd_an_id) + "\n");

        // -------- UPDATE COMMAND STATUS -------

        updateCommandExecutions(int(cmd_id), newCmdStatus);

        // -------- OTHER STATS WHEN SUCCESSFUL -------
        delay(90);   
        Serial.println("WIFI Status: " + String(WiFi.status()));
        Serial.println("HTTP CODE: " +String(httpCode) + "\n");
      }
      
      client.end();
      
      
    }else{
       // -------- OTHER STATS WHEN FAILURES -------
       Serial.println("Error on HTTP request.");

       Serial.println("WIFI Status: " + String(WiFi.status()));
       Serial.println("HTTP CODE: " + String(httpCode) + "\n");
       
    }
    
  }else{
    Serial.println("Connection Lost...");  
    Heltec.display -> clear();
    
    Heltec.display -> drawString(0, 0, "Connection Lost...");
    Heltec.display -> display();
  }

  delay(5000);

}
