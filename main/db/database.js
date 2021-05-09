const connection = require("./connection");
class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findAllGuides() {
        return this.connection.query(
            "SELECT guide.id, guide.first_name, guide.last_name, role.title, department.name AS department, role.wage, CONCAT(manager.first_name, ' ',manager.last_name) AS manager FROM guide LEFT JOIN role on guide.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN guide manager on manager.id = guide.manager_id;"
        );
    }

findAllPossibleManagers(guideId) {
    return this.connection.query(
        "SELECT id, first_name, last_name FROM guide WHERE id ≠ ?",
        guideId
    );
}

}

module.exports = DB;