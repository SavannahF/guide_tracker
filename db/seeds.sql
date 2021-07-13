use guides;
INSERT INTO departments (department_name)
VALUES
    ("Guides"),
    ("Store Managers"),
    ("General Managers"),
    ("Buyers"),
    ("Warehouse"),
    ("Marketing"),
    ("eCommerce");

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Guide', 10, 001),
    ('Lead Guide', 15, 001),
    ('Assistant Store Manager', 20, 002),
    ('Store Manager', 50000, 002),
    ('General Manager', 100000, 003),
    ('Inventory Guru', 100000, 004),
    ('Special Ops', 50000, 004),
    ('Marketing Manager', 50000, 004),
    ('Web Manager', 50000, 004);

INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ('John', 'Sloan', 1),
    ('Caroline', 'Sloan', 2),
    ('Dan', 'Heller', 2), 
    ('Glenn', 'Orton', 6),
    ('David', 'Ruiz', 7),
    ('Marisa', 'Sobol', 8),
    ('Savannah', 'Fortson', 9);

