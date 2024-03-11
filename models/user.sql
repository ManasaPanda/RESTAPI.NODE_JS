-- Create User Table
CREATE TABLE Users (
    user_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    last_name VARCHAR(255) NOT NULL,
    dob DATE NOT NULL,
    blood_group VARCHAR(10) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL
);

-- Create Employee Type Table
CREATE TABLE EmployeeType (
    emp_type_id SERIAL PRIMARY KEY NOT NULL,
    employee_type VARCHAR(10) NOT NULL
);

-- Create Company Table
CREATE TABLE Company (
    company_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    company_id SERIAL NOT NULL,
    company_name VARCHAR(250) NOT NULL,
    company_admin UUID,
    description TEXT,
    contact_no VARCHAR(15) NOT NULL,
    email_id VARCHAR(250) NOT NULL,
    address_lane VARCHAR(255) NOT NULL,
    city VARCHAR(250) NOT NULL,
    state VARCHAR(205) NOT NULL,
    country VARCHAR(205) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    created_at TIMESTAMP
);

-- Create Department Table
CREATE TABLE Department (
    dept_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    dept_id VARCHAR(8) NOT NULL,
    dept_name VARCHAR(255) NOT NULL,
    description TEXT,
    company_uuid UUID NOT NULL,
    dept_headS UUID,
    created_at TIMESTAMP,
    FOREIGN KEY (company_uuid) REFERENCES Company(company_uuid)
);

-- Create Employee Table
CREATE TABLE Employees (
    employee_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    employee_id VARCHAR(8) NOT NULL,
    user_uuid UUID NOT NULL,
    company_uuid UUID NOT NULL,
    department_uuid UUID NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    date_of_joining DATE NOT NULL,
    employee_type_id SERIAL NOT NULL,
    created_at TIMESTAMP,
    FOREIGN KEY (user_uuid) REFERENCES Users(user_uuid),
    FOREIGN KEY (company_uuid) REFERENCES Company(company_uuid),
    FOREIGN KEY (department_uuid) REFERENCES Department(dept_uuid),
    FOREIGN KEY (employee_type_id) REFERENCES EmployeeType(emp_type_id)
);
