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
		PlayerID INT NOT NULL UNIQUE,
		MapID INT NOT NULL,
		PositionX INT NOT NULL,
		PositionY INT NOT NULL,
		CONSTRAINT FK_PlayerPosition FOREIGN KEY (PlayerID) REFERENCES Players (PlayerID),
		CONSTRAINT FK_PlayerMap FOREIGN KEY (MapID) REFERENCES Maps (MapID)
	);
END
GO

/*
CREATE OR ALTER TRIGGER trg_set_default_player_position
ON Players
AFTER INSERT
AS
BEGIN
	DECLARE @new_player_id INT;

	SELECT @new_player_id = PlayerID
	FROM inserted;

	SELECT @new_player_id;
END
GO
*/


INSERT INTO Characters (Name)
VALUES
('Spongebob Squarepants'),
('Patrick Star'),
('Squidward Tentacles'),
('Sandy Cheeks'),
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
('Hub', 75, 75);

INSERT INTO MapsBarriers(MapID, PositionX, PositionY)
VALUES
(1, 0, 0);
GO

INSERT INTO Players (Email, Name, Password, CharacterID)
VALUES
('fabrysamuel@sssvt.cz', 'KillerPlaying', '123456Ab', 1);
GO

INSERT INTO PlayerPositions (PlayerID, MapID, PositionX, PositionY)
VALUES
(1, 1, 0, 0);



-- Maps
-- MapsBarriers
/*
INSERT INTO Players(Email, PlayerName, Password, PositionX, PositionY)
VALUES
('DoeJohn@sssvt.cz', 'JohnDoe666', '123456Ab', 0, 0),
('DoeJane@sssvt.cz', 'JaneDoe666', '123456Ab', 2, 2),
('SquarepantsSpongebob@sssvt.cz', 'XxX_Spongey_XxX', '123456Ab', 4, 4),
('SimpsonHomer@hotmail.com', 'FatsoSumo', '123456Ab', 4, 5);
GO

INSERT INTO Maps (Name, Width, Height, EntranceX, EntranceY, ExitX, ExitY)
VALUES ('Start', 30, 30, 0, 0, 29, 29);
GO
*/