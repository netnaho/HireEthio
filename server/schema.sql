CREATE TABLE Client (
    Client_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    Username varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    Client_Type ENUM('Private', 'Organization') NOT NULL,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    Profile_Picture varchar(255),
);
CREATE TABLE Freelancer (
    Freelancer_ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    Username varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    Proffession varchar(255),
    Bio varchar(255),
    Profile_Picture varchar(255),
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- jobs
CREATE TABLE Jobs (
    Job_ID INT AUTO_INCREMENT PRIMARY KEY,
    Client_ID INT NOT NULL,
    Job_Title VARCHAR(255) NOT NULL,
    Job_Type ENUM('full time', 'part time', 'freelance') NOT NULL,
    Applicants_Needed ENUM('male', 'female') NOT NULL,
    Job_Description TEXT NOT NULL,
    Job_Category VARCHAR(100) NOT NULL,
    Job_Site VARCHAR(255) NOT NULL,
    Application_Deadline DATE NOT NULL,
    Experience_Level ENUM('expert', 'senior', 'intermediate', 'junior', 'entry') NOT NULL,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Client_ID) REFERENCES Client(Client_ID)
);
-- applications 
CREATE TABLE Applications (
    Application_ID INT AUTO_INCREMENT PRIMARY KEY,
    Job_ID INT NOT NULL,
    Freelancer_ID INT NOT NULL,
    Cover_Letter TEXT,
    status ENUM('applied', 'accepted', 'rejected') DEFAULT 'applied',
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Job_ID) REFERENCES Jobs(Job_ID),
    FOREIGN KEY (Freelancer_ID) REFERENCES Freelancer(Freelancer_ID)
);
-- messages
CREATE TABLE Messages (
    Message_ID INT AUTO_INCREMENT PRIMARY KEY,
    Application_ID INT NOT NULL,
    Sender_ID INT NOT NULL,
    Sender_Type ENUM('client', 'freelancer') NOT NULL,
    Receiver_ID INT NOT NULL,
    Receiver_Type ENUM('client', 'freelancer') NOT NULL,
    Content TEXT NOT NULL,
    Created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Application_ID) REFERENCES Applications(Application_ID)
);
-- hires
CREATE TABLE Hires (
    Hire_ID INT AUTO_INCREMENT PRIMARY KEY,
    Application_ID INT NOT NULL,
    Hire_Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    Completed_Date TIMESTAMP NULL,
    Rating INT CHECK (rating BETWEEN 1 AND 5),
    FOREIGN KEY (Application_ID) REFERENCES Applications(Application_ID)
);
