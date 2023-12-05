async function fetchUsers() {
    try {
      const response = await fetch('../js/data/employees.json');
      const data = await response.json();
      const users = data.employees;
      return users;
    } catch (error) {
      console.error(error);
    }
  }

export {fetchUsers}