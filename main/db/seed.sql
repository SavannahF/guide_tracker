 use guides;

 INSERT INTO department
    (name)
VALUES
    ("Guides"),
    ("Store Managers"),
    ("General Managers")
    ("Buyers"),
    ("Warehouse"),
    ("Marketing"),
    ("eCommerce");

INSERT INTO role
    (title, wage, department_id)
VALUES
    ('Guide', 10, 1),
    ('Lead Guide', 15, 1),
    ('Assistant Store Manager', 20, 2),
    ('Store Manager', 50000, 2),
    ('General Manager', 100000, 3),
    ('Inventory Guru', 100000, 4),
    ('Special Ops', 50000, 5),
    ('Marketing Manager', 50000, 6),
    ('Web Manager', 50000, 7);

INSERT INTO guide
    (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Sloan', 1, NULL),
    ('Caroline', 'Sloan', 2, 1),
    ('Dan', 'Heller', 2, 1), 
    ('Glenn', 'Orton', 6, 1),
    ('David', 'Ruiz', 7, 4),
    ('Marisa', 'Sobol', 8, 1),
    ('Savannah', 'Fortson', 9, 1);

