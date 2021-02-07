export default {
  by: function(array, value, direction) {
    let inverter = direction ? 1 : -1
    function compareName(a, b) {
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison * inverter;
    }

    function compareEmail(a, b) {
      const emailA = a.email.split('@')[0].toUpperCase();
      const emailB = b.email.split('@')[0].toUpperCase();

      let comparison = 0;
      if (emailA > emailB) {
        comparison = 1;
      } else if (emailA < emailB) {
        comparison = -1;
      }
      return comparison * inverter;
    }
    if (value == 'name') array.sort(compareName)
    else array.sort(compareEmail)

    return array
  }
};
