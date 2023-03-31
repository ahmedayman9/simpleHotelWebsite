<h2>simpleHotelWebsite</h2>

<p>We use NodeJS with MongoDB</p>

<p>Some APIs:</p>

<p>[1]:  /Rooms/save/:roomName/:roomId/:extras/:image/:roomCap/:view      => to add a new room
<br>
- roomName => room name to get stored in db
<br>
- roomId => room id
<br>
- extras => room features and stores boolean 
<br>
- image  => name of room image in images folder
<br>
- roomCap=> capicity of room
<br>
- view   => view of the room
<br>
- for example : /Rooms/save/Room1/5/true/image5/5/sea
<br>
</p>
![image](https://user-images.githubusercontent.com/92648033/228988804-3d7c7fa0-0d66-47bf-9319-65c5fa0c5099.png)
<br>
-------------------------------------------------------------------------

<p>[2]:  /Rooms/show                                                      => to get all rooms
<br>
</p>
![image](https://user-images.githubusercontent.com/92648033/228988691-a328aa5f-b6d5-41d4-a96a-98f3fe49f7cf.png)
-------------------------------------------------------------------------


<p>[3]:  /Dining/add/:restName/:restId/:image                             => to add new resturant
<br>
restName => restaurant name
<br>
restId   => restaurant id
<br>
image    => name of restaurant image in images folder
<br>
for example : /Dining/add/desha/3/image3
<br>
</p>
![image](https://user-images.githubusercontent.com/92648033/228988894-06e3ad56-ff8c-4524-9d1c-5f54ea1ed7ea.png)
-------------------------------------------------------------------------


<p>[4]:  /Dining/show                                                     => to get all resturant
<br>
</p>
![image](https://user-images.githubusercontent.com/92648033/228988737-8433d3ee-5e23-4607-9b42-c5830be0fb4e.png)
