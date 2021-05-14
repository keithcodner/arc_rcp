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
  digitalWrite(LED,HIGH);
  Heltec.begin(true /*DisplayEnable Enable*/, false /*LoRa Enable*/, true /*Serial Enable*/);
  delay(300);

  //Start Serial
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wifi");
  
  Heltec.display -> drawString(0, 0, "Connecting to Wifi");
  Heltec.display -> display();


  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
    
    Heltec.display -> drawString(1, 1*9, ".");
    Heltec.display -> display();
    delay(500);
  }

  Serial.println("\nConnected to the Wifi network");
  Heltec.display -> drawString(2, 2*9, "\nConnected to the Wifi network");
  
  Serial.print("IP Address: ");
  Heltec.display -> drawString(3, 3*9, "IP Address: ");
  
  Serial.println(WiFi.localIP());
  
  //Heltec.display -> drawString(4, 4*9, String(WiFi.localIP()));
  Heltec.display -> display();

}

void loop() {
  if(WiFi.status() == WL_CONNECTED){
    long rnd = random(1, 10);
    const char* robot_id = "ASDF124";
    HTTPClient client;

    client.begin("http://lonaris.ca:3000/api/arc_db/arc_cmd_table/cmd_status/UNEXECUTED/r_usr_an_id/"+String(robot_id));
    int httpCode = client.GET();

    if(httpCode > 0){
      String payload = client.getString();
      Serial.println("\n Statuscode: " + String(httpCode));
      Serial.println(payload);

      //deserialize json
      char json[500];
      payload.replace(" ", "");
      payload.replace("\n", "");
      payload.trim();
      payload.remove(0,1);
      payload.toCharArray(json, 500);

      StaticJsonDocument<200> doc;
      deserializeJson(doc, json);

      int id = doc["id"];
      const char* email = doc["email"];

      Serial.println(String(id) + " - " + String(email) + "\n");
      client.end();
      
      
    }else{
       Serial.println("Error on HTTP request.");
    }
    
    /*Heltec.display -> clear();
    Serial.println("You can try and ping me.");
    
    Heltec.display -> drawString(0, 1*9, "You can try and ping me.");
    Heltec.display -> drawString(0, 2*9, "IP Address: ");
    Heltec.display -> drawString(60, 2*9, WiFi.localIP().toString());

    
    Heltec.display -> display();
    delay(5000);*/
  }else{
    Serial.println("Connection Lost...");  
    Heltec.display -> clear();
    
    Heltec.display -> drawString(0, 0, "Connection Lost...");
    Heltec.display -> display();
  }

  delay(10000);

}