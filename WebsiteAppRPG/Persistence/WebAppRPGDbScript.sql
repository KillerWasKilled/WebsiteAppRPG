USE master;
GO

IF EXISTS (SELECT * FROM sys.databases WHERE name = 'WebAppRPGDb')
BEGIN
	ALTER DATABASE WebAppRPGDb SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
	DROP DATABASE WebAppRPGDb;
END
GO

CREATE DATABASE WebAppRPGDb;
GO

USE WebAppRPGDb;
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Characters')
BEGIN
	CREATE TABLE Characters (
		CharacterID INT IDENTITY (1, 1) PRIMARY KEY,
		Name NVARCHAR(50)
	);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Players')
BEGIN
	CREATE TABLE Players(
		PlayerID INT IDENTITY (1, 1) PRIMARY KEY,
		Email NVARCHAR(75) NOT NULL UNIQUE,
		Name NVARCHAR(50) NOT NULL UNIQUE,
		Password NVARCHAR(100) NOT NULL,
		CharacterID INT NOT NULL,
		CONSTRAINT FK_PlayerCharacter FOREIGN KEY (CharacterID) REFERENCES Characters (CharacterID)
	);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Maps')
BEGIN
	CREATE TABLE Maps(
		MapID INT IDENTITY (1, 1) PRIMARY KEY,
		Name NVARCHAR(75) NOT NULL,
		Width INT NOT NULL,
		Height INT NOT NULL
	);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'MapsBarriers')
BEGIN
	CREATE TABLE MapsBarriers(
	MapBarrierID INT IDENTITY (1, 1) PRIMARY KEY,
	MapID INT NOT NULL,
	PositionX INT NOT NULL,
	PositionY INT NOT NULL,
	CONSTRAINT FK_MapsBarriers FOREIGN KEY (MapID) REFERENCES Maps (MapID)
	);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'PlayerPositions')
BEGIN
	CREATE TABLE PlayerPositions(
		PlayerPositionID INT IDENTITY (1, 1) PRIMARY KEY,
		PlayerID INT NOT NULL UNIQUE,
		MapID INT NOT NULL,
		PositionX INT NOT NULL,
		PositionY INT NOT NULL,
		CONSTRAINT FK_PlayerPosition FOREIGN KEY (PlayerID) REFERENCES Players (PlayerID),
		CONSTRAINT FK_PlayerMap FOREIGN KEY (MapID) REFERENCES Maps (MapID)
	);
END
GO

-- NOVINKY
IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'MapRouters')
BEGIN
	CREATE TABLE MapRouters(
		MapRouterID INT IDENTITY (1, 1) PRIMARY KEY,
		MapID INT NOT NULL,
		EnterPositionX INT NOT NULL,
		EnterPositionY INT NOT NULL,
		ExitPositionX INT NOT NULL,
		ExitPositionY INT NOT NULL,
		DestinationMapID INT NOT NULL,
		CONSTRAINT FK_MapEntrance FOREIGN KEY (MapID) REFERENCES Maps (MapID),
		CONSTRAINT FK_MapDestination FOREIGN KEY (MapID) REFERENCES Maps (MapID)
	);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Obstacles')
BEGIN
	CREATE TABLE Obstacles(
		ObstacleID INT IDENTITY (1, 1) PRIMARY KEY,
		ObstacleName NVARCHAR(150) NOT NULL UNIQUE,
		IsBreakable BIT NOT NULL
	);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'MapsObstacles')
BEGIN
	CREATE TABLE MapsObstacles(
		MapObstacleID INT IDENTITY (1, 1) PRIMARY KEY,
		MapID INT NOT NULL,
		ObstacleID INT NOT NULL,
		PositionX INT NOT NULL,
		PositionY INT NOT NULL,
		CONSTRAINT FK_MapsInstances FOREIGN KEY (MapID) REFERENCES Maps (MapID),
		CONSTRAINT FK_MapsObstacles FOREIGN KEY (ObstacleID) REFERENCES Obstacles (ObstacleID)
	);
END
GO


INSERT INTO Characters (Name)
VALUES
('Spongebob Squarepants'),
('Patrick Star'),
('Squidward Tentacles'),
('Sandy Cheeks'),
('Sandy Cheeks (Suited)'),
('Eugene Krabs'),
('Sheldon Plankton'),
('Homer Simpson'),
('Marge Simpson'),
('Bart Simpson'),
('Lisa Simpson'),
('Maggie Simpson');
GO

INSERT INTO Maps (Name, Width, Height)
VALUES
('Hub', 50, 50),
('House', 25, 30);

INSERT INTO MapsBarriers(MapID, PositionX, PositionY)
VALUES
(1, 10, 10),
(1, 12, 20),
(2, 10, 19);
GO

INSERT INTO Players (Email, Name, Password, CharacterID)
VALUES
('fabrysamuel@sssvt.cz', 'KillerPlaying', '123456Ab', 10),
('humbertoalan@sssvt.cz', 'Henryto', '123456Ab', 5),
('susenka@sssvt.cz', 'susenka_lul', '123456Ab', 4);
GO

INSERT INTO PlayerPositions (PlayerID, MapID, PositionX, PositionY)
VALUES
(1, 1, 0, 0),
(2, 1, 10, 7),
(3, 2, 5, 5);
GO

INSERT INTO MapRouters (MapID, EnterPositionX, EnterPositionY, ExitPositionX, ExitPositionY, DestinationMapID)
VALUES
(1, 49, 49, 11, 11, 2),
(2, 10, 10, 48, 48, 1);
GO

INSERT INTO Obstacles (ObstacleName, IsBreakable)
VALUES
('Tree', 1);
GO

INSERT INTO MapsObstacles (MapID, ObstacleID, PositionX, PositionY)
VALUES
(1, 1, 11, 11),
(1, 1, 13, 13);
GO