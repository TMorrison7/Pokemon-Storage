drop database if exists Hotel;

create database Hotel;

use Hotel;

-- tables
create table Room_Type (
	Type_id int NOT NULL,
    Type_desc char(20) NOT NULL,
    primary key (Type_id)
);

create table Amenities (
	Amenity_id int NOT NULL,
    Amenity Char(50),
    primary key (Amenity_id)
);

create table Room (
	room_number int NOT NULL,
    Type_id int NOT NULL,
    ADA_Access int1 NOT NULL,
    Std_Occ int NOT NULL,
    Max_Occ int NOT NULL,
    Price double NOT NULL,
    Extra_Person double,
    primary key (room_number),
    foreign key (Type_id) references Room_Type(Type_id) on delete cascade
);

create table RoomAmenities (
	room_number int NOT NULL,
    Amenity_id int NOT NULL,
    foreign key (room_number) references Room(room_number) on delete cascade,
    foreign key (Amenity_id) references Amenities(Amenity_id) on delete cascade
);

create table Guests (
	Guest_Name char(50) NOT NULL,
    Address char(50) NOT NULL,
    City char(30) NOT NULL,
    State char(2) NOT NULL,
    Zip int NOT NULL,
    Phone char(15) NOT NULL,
    primary key (Guest_Name)
);

create table Reservations (
	Reservation_id int auto_increment,
	room_number int NOT NULL,
    Guest_Name char(50) NOT NULL,
    Adults int NOT NULL,
    Children int NOT NULL,
    Start_Date date NOT NULL,
    End_Date date NOT NULL,
    Total_Cost double NOT NULL,
    primary key (Reservation_id),
    foreign key (room_number) references Room(room_number) on delete cascade,
    foreign key (Guest_Name) references Guests(Guest_Name) on delete cascade
);