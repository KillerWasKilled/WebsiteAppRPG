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

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Players')
BEGIN
	CREATE TABLE Players(
		PlayerID INT IDENTITY (1, 1) PRIMARY KEY,
		Email NVARCHAR(75) NOT NULL UNIQUE,
		PlayerName NVARCHAR(50) NOT NULL UNIQUE,
		Password NVARCHAR(100) NOT NULL,
		PositionX INT NOT NULL,
		PositionY INT NOT NULL
	);
END
GO

IF NOT EXISTS (SELECT * FROM sys.tables WHERE name = 'Maps')
BEGIN
	CREATE TABLE Maps(
		MapID INT IDENTITY (1, 1) PRIMARY KEY,
		Name NVARCHAR(MAX) NOT NULL,
		Width INT NOT NULL DEFAULT 25,
		Height INT NOT NULL DEFAULT 25,
		EntranceX INT NOT NULL,
		EntranceY INT NOT NULL,
		ExitX INT NOT NULL,
		ExitY INT NOT NULL
	);
END
GO

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