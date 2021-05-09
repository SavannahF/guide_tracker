 use guides;

 INSERT INTO department
    (name)
VALUES
    ("Guides"),
    ("Managers"),
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
    ('Store Manager', 40000, 2),
    (),
    (),
    ();

INSERT INTO guide
    (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Sloan', 1, NULL),
    ('Bubba', 'Sloan', 1, NULL),
    ('Caroline', 'Sloan', 2, 1),
    ('Dan', 'Heller', 2, 1), 
    (),
    ();
