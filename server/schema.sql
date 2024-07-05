CREATE TABLE Users (
    UserID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    FirstName varchar(255) NOT NULL,
    LastName varchar(255) NOT NULL,
    Username varchar(255) NOT NULL,
    Email varchar(255) NOT NULL,
    Password varchar(255) NOT NULL,
    Proffession varchar(255),
    Bio varchar(255),
    Profile_Picture varchar(255),
    User_Type ENUM('freelancer', 'client') NOT NULL,
    Client_Type varchar(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- jobs
CREATE TABLE Jobs (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    job_title VARCHAR(255) NOT NULL,
    job_type ENUM('full time', 'part time', 'freelance') NOT NULL,
    applicants_needed ENUM('male', 'female') NOT NULL,
    job_description TEXT NOT NULL,
    job_category VARCHAR(100) NOT NULL,
    job_site VARCHAR(255) NOT NULL,
    application_deadline DATE NOT NULL,
    experience_level ENUM('expert', 'senior', 'intermediate', 'junior', 'entry') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (client_id) REFERENCES Users(UserID)
);
-- applications 
CREATE TABLE Applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT NOT NULL,
    freelancer_id INT NOT NULL,
    cover_letter TEXT,
    status ENUM('applied', 'accepted', 'rejected') DEFAULT 'applied',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id),
    FOREIGN KEY (freelancer_id) REFERENCES Users(UserID)
);
-- messages
CREATE TABLE Messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (application_id) REFERENCES Applications(id),
    FOREIGN KEY (sender_id) REFERENCES Users(UserID),
    FOREIGN KEY (receiver_id) REFERENCES Users(UserID)
);
-- hires
CREATE TABLE Hires (
    id INT AUTO_INCREMENT PRIMARY KEY,
    application_id INT NOT NULL,
    hire_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_date TIMESTAMP NULL,
    rating INT CHECK (rating BETWEEN 1 AND 5),
    FOREIGN KEY (application_id) REFERENCES Applications(id)
);
