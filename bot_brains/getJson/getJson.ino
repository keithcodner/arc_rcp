#include <WiFi.h>;
#include "heltec.h"
#include "WiFi.h"
#include <HTTPClient.h>;
#include <ArduinoJson.h>;


const char* ssid = "TP-Link_A36A";
const char* password = "codner1234";


void setup() {

  //Setup Heltec display
  pinMode(LED,OUTPUT);
  
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

void blinkFlash(int delayedTime){
  digitalWrite(LED,HIGH);
  delay(delayedTime);                       
  digitalWrite(LED,LOW);
  delay(delayedTime);
}

void executeCommands(String id, String cmd){

  // Assign required variables
  const String newCmdStatus = "EXECUTED";

  //Execute Given Commands
  if(cmd == "ABC12345"){
    
  }else if(cmd == "ABC12346"){
    blinkFlash(500);  
  }else if(cmd == "ABC12347"){
  }else if(cmd == "ABC12348"){
    blinkFlash(1000);  
  }else if(cmd == "ABC12349"){
  }else if(cmd == "ABC12350"){
    blinkFlash(500);                      
  }else if(cmd == "ABC12351"){
  }else if(cmd == "ABC12352"){
  }else if(cmd == "ABC12353"){
  }else if(cmd == "ABC12354"){
  }else if(cmd == "fd35bd0bea"){
  }else if(cmd == "0"){
    
  }

  //Update Status of given commands
  //<patch commands go here>
}

void loop() {
  if(WiFi.status() == WL_CONNECTED){
    long rnd = random(1, 10);
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

        executeCommands("Test_ID", String(cmd_exec_name));
       
        Serial.println(String(cmd_an_id) + "\n");
        delay(90);   
      }
      
      client.end();
      
      
    }else{
       Serial.println("Error on HTTP request.");
    }
    
  }else{
    Serial.println("Connection Lost...");  
    Heltec.display -> clear();
    
    Heltec.display -> drawString(0, 0, "Connection Lost...");
    Heltec.display -> display();
  }

  delay(10000);

}

