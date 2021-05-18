--RUN AS ADMIN--
-- SHOW EVENTS; -- TO SEE IF ITS AVAILABLE

-- SELECT ALL (SEPARATE FROM BELOW) BELOW THE BELOW AND RUN
SET GLOBAL event_scheduler = ON;

-- SELECT ALL (SEPARATE FROM ABOVE) BELOW AND RUN
CREATE EVENT MAKE_ROBOT_OFFLINE_NOW
ON SCHEDULE 
EVERY 10 MINUTE
DO 
 UPDATE arc_r_usr_table SET r_usr_status = 'Offline';