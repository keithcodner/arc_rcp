#include <WiFi.h>;
#include "heltec.h"
#include "WiFi.h"
#include <HTTPClient.h>;
#include <ArduinoJson.h>;

#define pin_36z 36

//--------------------------- GLOBAL VARS -----------------------------

//---------- WIFI VARS ---------------
const char* ssid = "TP-Link_A36A";
const char* password = "codner1234";


//---------- PIN VARS ---------------
const int pin_36 = 36;
const int pin_37 = 37;
const int pin_38 = 38;
const int pin_39 = 39;

const int pin_13 = 13;

//--------------------------- BOARD SETUP -----------------------------
void setup() {

  //Setup Heltec display
  pinMode(LED, OUTPUT);

  pinMode(pin_36, OUTPUT);
  pinMode(pin_37, OUTPUT);
  pinMode(pin_38, OUTPUT);
  pinMode(pin_39, OUTPUT);

  pinMode(13, OUTPUT);

  digitalWrite(13, HIGH);
  delay(500);                       
  digitalWrite(13, LOW);
  
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


//--------------------------- COMMAND EXECUTIONS -----------------------------
void executeCommands(String id, String cmd){

  // Assign required variables
  const String newCmdStatus = "EXECUTED";

  //Execute Given Commands
  if(cmd == "ABC12345"){ // MOVE_UP
    blinkFlash(pin_36, 500);
  }else if(cmd == "ABC12346"){ // MOVE_DOWN
    blinkFlash(pin_37, 500); 
  }else if(cmd == "ABC12347"){ // MOVE_LEFT
    blinkFlash(pin_38, 500);
  }else if(cmd == "ABC12348"){ // MOVE_RIGHT
    blinkFlash(pin_39, 500);
  }else if(cmd == "ABC12349"){ // VIBRATE_DEFAULT
  }else if(cmd == "ABC12350"){ // BLINK_0            
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
        
        const char* cmd_an_id = elem["cmd_an_id"]; 
        const char* cmd_exec_name = elem["cmd_exec_name"]; 

        executeCommands(String(cmd_an_id), String(cmd_exec_name));
       
        Serial.println(String(cmd_an_id) + "\n");

        // -------- OTHER STATS WHEN SUCCESSFUL -------
        delay(90);   
        Serial.println("WIFI Status: " + String(WiFi.status()));
        Serial.println("HTTP CODE: " +String(httpCode) + "\n");

        digitalWrite(13, HIGH);
        delay(500);                       
        digitalWrite(13, LOW);
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

  delay(10000);

}

