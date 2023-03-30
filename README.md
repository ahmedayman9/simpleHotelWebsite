# simpleHotelWebsite

#We use NodeJS with MongoDB

#Some APIs:

[1]:  /Rooms/save/:roomName/:roomId/:extras/:image/:roomCap/:view      => to add a new room
roomName => room name to get stored in db
roomId => room id
extras => room features and stores boolean 
image  => name of room image in images folder
roomCap=> capicity of room
view   => view of the room
for example : /Rooms/save/Room1/5/true/image5/5/sea
![image](https://user-images.githubusercontent.com/92648033/228988804-3d7c7fa0-0d66-47bf-9319-65c5fa0c5099.png)
-------------------------------------------------------------------------

[2]:  /Rooms/show                                                      => to get all rooms
![image](https://user-images.githubusercontent.com/92648033/228988691-a328aa5f-b6d5-41d4-a96a-98f3fe49f7cf.png)
-------------------------------------------------------------------------


[3]:  /Dining/add/:restName/:restId/:image                             => to add new resturant
restName => restaurant name
restId   => restaurant id
image    => name of restaurant image in images folder
for example : /Dining/add/desha/3/image3
![image](https://user-images.githubusercontent.com/92648033/228988894-06e3ad56-ff8c-4524-9d1c-5f54ea1ed7ea.png)
-------------------------------------------------------------------------


[4]:  /Dining/show                                                     => to get all resturant
![image](https://user-images.githubusercontent.com/92648033/228988737-8433d3ee-5e23-4607-9b42-c5830be0fb4e.png)
