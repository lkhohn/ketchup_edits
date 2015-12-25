-- INSERT INTO ~table name~ (name) VALUES(test);


INSERT INTO locations VALUES(default, 'Starbucks');
INSERT INTO locations VALUES(default, 'Quiznos');
INSERT INTO locations VALUES(default, 'Panera Bread');
INSERT INTO locations VALUES(default, 'Subway');
INSERT INTO locations VALUES(default, 'McDonalds (for cheap business)');


INSERT INTO users VALUES(default, 'monkeybone27', 'tempPW', 2, 'mboney72@gmail.com');
INSERT INTO users VALUES(default, 'redstripelvr', 'tempPW', 2, 'rastaman@aol.com');
INSERT INTO users VALUES(default, 'babyh8r', 'tempPW', 2, 'Ih8kittens@aol.com');
INSERT INTO users VALUES(default, 'MarkSherman87', 'tempPW', 2, 'msherman87@gmail.com');
INSERT INTO users VALUES(default, 'HSmith83', 'tempPW', 2, 'thetownsmith@yahoo.com');

INSERT INTO appointments VALUES(default, 1, 2, '1600 Pennsylvania Ave NW, Washington, DC 20500, UNITED STATES', 40.5592, -105.0781, 'Monday at 4:00', '1 hour', 'We will be meeting and discussing monkey business', 1, 1, 1);
INSERT INTO appointments VALUES(default, 1, 5, '1600 Pennsylvania Ave NW, Washington, DC 20500, UNITED STATES', 40.5592, -105.0781, 'Tuesday at 4:00', '1 hour', 'We will be meeting and discussing funky business', 1, 0, 3);
INSERT INTO appointments VALUES(default, 1, 4, '1600 Pennsylvania Ave NW, Washington, DC 20500, UNITED STATES', 40.5592, -105.0781, 'Wednesday at 4:00', '1 hour', 'We will be meeting and discussing chunky business', 1, 0, 5);
INSERT INTO appointments VALUES(default, 3, 2, '1600 Pennsylvania Ave NW, Washington, DC 20500, UNITED STATES', 40.5592, -105.0781, 'Thursday at 4:00', '1 hour', 'We will be meeting and discussing wonky business', 1, 0, 2);
INSERT INTO appointments VALUES(default, 4, 2, '1600 Pennsylvania Ave NW, Washington, DC 20500, UNITED STATES', 40.5592, -105.0781, 'Friday at 4:00', '1 hour', 'We will be meeting and discussing grumpy business', 1, 1, 2);
INSERT INTO appointments VALUES(default, 4, 3, '1600 Pennsylvania Ave NW, Washington, DC 20500, UNITED STATES', 40.5592, -105.0781, 'Saturday at 4:00', '1 hour', 'We will be meeting and discussing spunky business', 1, 1, 4);
INSERT INTO appointments VALUES(default, 5, 3, '1600 Pennsylvania Ave NW, Washington, DC 20500, UNITED STATES', 40.5592, -105.0781, 'Sunday at 4:00', '1 hour', 'We will be meeting and discussing burundi business', 1, 0, 4);

INSERT INTO preferences VALUES(1, 'https://upload.wikimedia.org/wikipedia/en/5/5b/Fablebox.jpg', 'https://calendar.google.com/calendar/render?pli=1#main_7');
